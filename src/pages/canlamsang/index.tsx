import { Button, Col, Form, Row, Tab, Table, Tabs } from "react-bootstrap";
import ChoXetNghiem from "./tab-choxetnghiem";
import { KetQuaCanLamSang, LinkImage, Phieuchidinhcanlamsang, TypeImage, useUpdateKetquacanlamsangMutation } from "../../graphql-definition/graphql";
import { FormEvent, useEffect, useState } from "react";
import dayjs, { Dayjs } from 'dayjs';
import { Autocomplete, TextField } from "@mui/material";

function CanLamSang() {

    const [dataSelected, setDataSelected] = useState<Phieuchidinhcanlamsang>();
    const [ketquaCLS, setKetQuaCLS] = useState<KetQuaCanLamSang>();
    const [id, setId] = useState('');
    const [ketluan, setKetLuan] = useState('');
    const [thietbi, setThietBi] = useState('');
    /* const [hinhanh, setHinhAnh] = useState<LinkImage>(); */

    const dataAgrsChoKham = {
        ngaytao: dayjs().format('YYYY-MM-DD')
    }

    const rowBenhNhanSelected = (select: Phieuchidinhcanlamsang) => {
        setDataSelected(select);
    }

    useEffect(() => {
        console.log('data đã gửi lên là: ', dataSelected)
    }, [dataSelected])


    const handleSelected = (select: KetQuaCanLamSang) => {
        setKetQuaCLS(select)
        setId(select?._id)
        setKetLuan(select?.ketluan || '')
        setThietBi(select?.thietbi || '')
    }

    const [updateKetquacanlamsang] = useUpdateKetquacanlamsangMutation()

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const values: LinkImage = {
            fileName: 'abc',
            url: 'xyz',
            type: TypeImage.File,
        }
        try {
            if (id && values && thietbi && ketluan) {
                await updateKetquacanlamsang({
                    variables: {
                        "input": {
                            "id": id,
                            "hinhanh": {
                                "url": values.url,
                                "fileName": values.fileName,
                                "type": values.type
                            },
                            "ketluan": ketluan,
                            "thietbi": thietbi
                        }
                    }
                })
            }
        } catch (error) {
            console.log('lỗi bạn gặp khi update xét nghiệm là: ', error)
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
                            <ChoXetNghiem dataAgrsChoKham={dataAgrsChoKham} selected={rowBenhNhanSelected} />
                        </Tab>
                        <Tab eventKey="dangkham" title="Đã Khám">
                            {/* <ChoKham data={data} error={error} loading={loading} selected={rowBenhNhanSelected} /> */}
                        </Tab>
                        <Tab eventKey="choxetnghiem" title="Xét Nghiệm">
                            {/* <ChoKham data={data} error={error} loading={loading} selected={rowBenhNhanSelected} /> */}
                        </Tab>
                    </Tabs>
                </div>
                <div className="col-7">
                    <div className="row">
                        <div className="d-flex justify-content-around align-items-center">
                            <Button className="mr-1">Khám</Button>
                            <Button className="mr-1">Gửi mẫu</Button>
                            <Button className="mr-1">Hủy Khám</Button>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <h4>Thông tin</h4>
                        <Form className="w-100" onSubmit={handleSubmit}>
                            <Row>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Loại Cận Lâm Sàng</Form.Label>
                                        <Form.Control type="text" placeholder="Loại cận lâm sàng" value={ketquaCLS?.loaicanlamsang?.tenxetnghiem || ''} />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Kết Luận</Form.Label>
                                        <Form.Control type="text" placeholder="Kết luận" value={ketluan} onChange={event => setKetLuan(event.target.value)} />
                                    </Form.Group>
                                </Col>

                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Thiết Bị</Form.Label>
                                        <Form.Control type="text" placeholder="Thiết bị" value={thietbi} onChange={event => setThietBi(event.target.value)} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="d-flex justify-content-center">
                                <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                                    <Form.Label>Hình Ảnh</Form.Label>
                                    <Form.Control type="text" placeholder="Hình ảnh" value={ketquaCLS?.hinhanh?.fileName || ''} />
                                </Form.Group>
                            </Row>
                            <Row className="d-flex justify-content-center">
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Row>
                        </Form>
                    </div>
                    <div className="row mt-2">
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th style={{ width: "3%" }}>#</th>
                                    <th style={{ width: "25%" }}>Loại Cận Lâm Sàng</th>
                                    <th style={{ width: "20%" }}>Thiết Bị</th>
                                    <th style={{ width: "25%" }}>Kết Luận</th>
                                    <th style={{ width: "27%" }}>Hình Ảnh</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataSelected?.ketquacanlamsangs?.map((ketqua: any, index: number) => (
                                    <tr className='rowSelected' key={ketqua._id} onClick={() => handleSelected(ketqua)}>
                                        <td>{index + 1}</td>
                                        <td>{ketqua?.loaicanlamsang?.tenxetnghiem}</td>
                                        <td>{ketqua?.thietbi}</td>
                                        <td>{ketqua?.ketluan}</td>
                                        <td>{ketqua?.hinhanh?.url}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
                <div className="col-2" >
                    {/* <XetNghiem /> */}
                </div>
            </div>
        </div>
    </>);
}

export default CanLamSang;