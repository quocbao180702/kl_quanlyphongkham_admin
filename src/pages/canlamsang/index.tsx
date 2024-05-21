import { Button, Col, Form, Image, Row, Tab, Table, Tabs } from "react-bootstrap";
import ChoXetNghiem from "./tab-choxetnghiem";
import { KetQuaCanLamSang, LinkImage, LoaiCanLamSang, Phieuchidinhcanlamsang, TypeImage, useFindAllRelatedKetQuaCanLamSangLazyQuery, useGetAllPhieuClSbyNgayQuery, useUpdateKetquacanlamsangMutation, useUpdateTrangThaiCanLamSangMutation } from "../../graphql-definition/graphql";
import { FormEvent, useCallback, useEffect, useState } from "react";
import dayjs, { Dayjs } from 'dayjs';
import UploadImage from "../../components/UploadImage";
import { backendUrlFile, getUrlImage, uploadMultiFile } from "../../utils/uploadFile";
import TestUpload from "../test/uploadTest";
import { useSubscription } from "@apollo/client";
import { UpdateCLSThanhToanSubcription } from "../../../codegen/graphql-definition/subcriptions";


function CanLamSang() {

    const [dataSelected, setDataSelected] = useState<Phieuchidinhcanlamsang>();
    const [ketquaCLS, setKetQuaCLS] = useState<KetQuaCanLamSang>();
    const [ketquaData, setketquaData] = useState<any[]>([]);
    const [id, setId] = useState('');
    const [tenLoai, setTenLoai] = useState('')
    const [tenxetnghiem, setTenxetnghiem] = useState('');
    const [filename, setFileName] = useState('');
    const [ketluan, setKetLuan] = useState('');
    const [thietbi, setThietBi] = useState('');


    const [images, setImages] = useState<any[]>([]);
    const [hinhanh, setHinhAnh] = useState<LinkImage[]>([]);

    const rowBenhNhanSelected = (select: Phieuchidinhcanlamsang) => {
        setDataSelected(select);
    }

    const {data: dataUpdateCLSThanhToan, error: errorUpdateCLSThanhToanm, loading: loadingUpdateCLSThanhToan } = useSubscription(UpdateCLSThanhToanSubcription);


    const { loading, error, data, refetch } = useGetAllPhieuClSbyNgayQuery({
        variables: {
            ngaytao: dayjs().format('YYYY-MM-DD'),
            trangthai: "CHOKHAM"
        }
    })

    useEffect(() => {
        refetch()
    }, [dataUpdateCLSThanhToan])

    const { loading: loadingDaXetNghiem, error: errorDaXetNghiem, data: dataDaXetNghiem, refetch: refetchDatXetNghiem } = useGetAllPhieuClSbyNgayQuery({
        variables: {
            ngaytao: dayjs().format('YYYY-MM-DD'),
            trangthai: "DAXETNGHIEM"
        }
    })

    const ketQuaIds = dataSelected?.ketquacanlamsangs?.map(ketQua => ketQua._id) || [];
    const [getKetQua, { data: dataKetqua, loading: loadingKetqua, error: errorKetqua, refetch: refetchKetQua }] = useFindAllRelatedKetQuaCanLamSangLazyQuery(
        {
            variables: {
                input: ketQuaIds
            }
        }
    );

    useEffect(() => {
        console.log('data đã gửi lên là: ', dataSelected)
        if (dataSelected !== undefined) {
            getKetQua()
        }
    }, [dataSelected])

    useEffect(() => {
        if (dataKetqua) {
            setketquaData(dataKetqua?.findAllRelatedKetQuaCanLamSang || [])
        }
    }, [dataKetqua?.findAllRelatedKetQuaCanLamSang])


    const handleSelected = (select: KetQuaCanLamSang) => {
        setKetQuaCLS(select);
        setId(select?._id);
        setTenLoai(select?.loaicanlamsang?.loaicanlamsang || '');
        setTenxetnghiem(select?.loaicanlamsang?.tenxetnghiem || '')
        setKetLuan(select?.ketluan || '');
        setThietBi(select?.thietbi || '');
        setHinhAnh(select?.hinhanh || []);
    }

    const [updateKetquacanlamsang] = useUpdateKetquacanlamsangMutation()

    const handleHuyKham = () => {
        setDataSelected(undefined)
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {

            const res: any = await new Promise((resolve, reject) => {
                uploadMultiFile('image', images, (err: any, res: any) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
                });
            });

            const newImages = res.map((file: any) => ({
                url: `${backendUrlFile.image}/${file.filename}`,
                fileName: file.filename,
                type: TypeImage.File
            }));


            setHinhAnh([...hinhanh, ...newImages]);


            if (id && thietbi && ketluan) {
                await updateKetquacanlamsang({
                    variables: {
                        "input": {
                            "id": id,
                            "hinhanh": [...hinhanh, ...newImages],
                            "ketluan": ketluan,
                            "thietbi": thietbi
                        }
                    }
                })
                refetchKetQua()
            }
        } catch (error) {
            console.log('lỗi bạn gặp khi update xét nghiệm là: ', error)
        }
    }

    const handleImagesChange = useCallback((images: any) => {
        setImages(images);
    }, []);

    const [updateTrangThai, _] = useUpdateTrangThaiCanLamSangMutation()
    const guiMau = async () => {
        try {
            console.log('id: ', dataSelected?._id)
            if (dataSelected?._id) {
                const response = await updateTrangThai({
                    variables: {
                        "id": dataSelected?._id,
                        "trangthai": "DAXETNGHIEM"
                    }
                })
                setDataSelected(undefined)
                setId('');
                setTenLoai('');
                setKetLuan('');
                setThietBi('');
                setFileName('');
                setImages([]);
                setHinhAnh([]);
                refetch()
                refetchDatXetNghiem()
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (<>
        <div className="fluit-container" style={{ height: "100px" }}>
            <div className="row">
                <div className="col-3">
                    <Tabs
                        defaultActiveKey="profile"
                        id="fill-tab-example"
                    >
                        <Tab eventKey="chokham" title="Đang Chờ">
                            <ChoXetNghiem data={data} loading={loading} error={error} selected={rowBenhNhanSelected} refetchData={refetch} />
                        </Tab>
                        <Tab eventKey="dangkham" title="Đã Khám">
                            <ChoXetNghiem data={dataDaXetNghiem} error={errorDaXetNghiem} loading={loadingDaXetNghiem} selected={rowBenhNhanSelected} refetchData={refetchDatXetNghiem} />
                        </Tab>
                    </Tabs>
                </div>
                <div className="col-7">
                    <div className="d-flex justify-content-around align-items-center mt-2">
                        <Button className="btn btn-primary">Khám</Button>
                        <Button className="btn btn-primary" onClick={guiMau}>Gửi mẫu</Button>
                        <Button className="btn btn-primary" onClick={handleHuyKham}>Hủy Khám</Button>
                    </div>

                    <div className="mt-3">
                        <h4>Thông tin</h4>
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formBasicLoai">
                                        <Form.Label>Loại Cận Lâm Sàng</Form.Label>
                                        <Form.Control type="text" placeholder="Loại cận lâm sàng" value={tenLoai} readOnly />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formBasicTenXetNghiem">
                                        <Form.Label>Tên Xét Nghiệm</Form.Label>
                                        <Form.Control type="text" placeholder="Tên xét nghiệm" value={tenxetnghiem} readOnly />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formBasicThietBi">
                                        <Form.Label>Thiết Bị</Form.Label>
                                        <Form.Control type="text" placeholder="Thiết bị" value={thietbi} onChange={event => setThietBi(event.target.value)} />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formBasicKetLuan">
                                        <Form.Label>Kết Luận</Form.Label>
                                        <Form.Control type="text" placeholder="Kết luận" value={ketluan} onChange={event => setKetLuan(event.target.value)} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="d-flex justify-content-center">
                                <Form.Group className="mb-3" controlId="formBasicHinhAnh">
                                    <Form.Label>Hình Ảnh</Form.Label>
                                    <TestUpload listImage={hinhanh} handleUploadImage={handleImagesChange} />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center" md={12}>
                                    <Button variant="primary" type="submit" className="w-50">
                                        Hoàn tất
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                    <div className="row mt-2">
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th style={{ width: "3%" }}>#</th>
                                    <th style={{ width: "20%" }}>Loại Cận Lâm Sàng</th>
                                    <th style={{ width: "20%" }}>Tên Xét Nghiệm</th>
                                    <th style={{ width: "15%" }}>Thiết Bị</th>
                                    <th style={{ width: "22%" }}>Kết Luận</th>
                                    <th style={{ width: "20%" }}>Hình Ảnh</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ketquaData?.map((ketqua: any, index: number) => (
                                    <tr className='rowSelected' key={ketqua._id} onClick={() => handleSelected(ketqua)}>
                                        <td>{index + 1}</td>
                                        <td>{ketqua?.loaicanlamsang?.loaicanlamsang}</td>
                                        <td>{ketqua?.loaicanlamsang?.tenxetnghiem}</td>
                                        <td>{ketqua?.thietbi}</td>
                                        <td>{ketqua?.ketluan}</td>
                                        <td className="text-center">
                                            {ketqua?.hinhanh?.length > 0 && ketqua?.hinhanh?.map((image: any, index: number) => (
                                                <div key={index}>
                                                    {image.url !== "xyz" && (
                                                        <Image
                                                            src={getUrlImage(image)}
                                                            style={{
                                                                width: "60px",
                                                                height: "60px",
                                                                objectFit: "fill",
                                                            }}
                                                            rounded
                                                        />
                                                    )}
                                                </div>
                                            ))}
                                        </td>
                                        {/* <td className="text-center">
                                            {ketqua?.hinhanh?.url !== "xyz" && ketqua?.hinhanh &&
                                                <Image
                                                    src={getUrlImage(ketqua?.hinhanh)}
                                                    style={{
                                                        width: "60px",
                                                        height: "60px",
                                                        objectFit: "fill",
                                                    }}
                                                    rounded
                                                />
                                            }
                                        </td> */}
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
                <div className="col-2" >
                </div>
            </div>
        </div>
    </>);
}

export default CanLamSang;