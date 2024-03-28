import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { MdClose } from "react-icons/md";
import { useUpdateThuocMutation } from "../../graphql-definition/graphql";

function SuaThuoc({ show, onHide, thuoc, refetch }: any) {

    const [tenphobien, setTenPhoBien] = useState('');
    const [tenthuoc, setTenThuoc] = useState('');
    const [dangthuoc, setDangThuoc] = useState('');
    const [donvi, setDonVi] = useState('');
    const [hamluong, setHamLuong] = useState<number>(0.0);
    const [giaBHYT, setgiaBHYT] = useState<number>(0.0);
    const [giaKhongBHYT, setgiaKhongBHYT] = useState<number>(0.0);
    const [soluong, setSoLuong] = useState<number>(0);
    const [bhyt, setBHYT] = useState<number>(0);
    const [nhasanxuat, setNhaSanXuat] = useState('')
    const [hansudung, setHanSuDung] = useState('')


    useEffect(() => {
        if (thuoc) {
            setTenThuoc(thuoc?.tenthuoc);
            setTenPhoBien(thuoc?.tenPhoBien);
            setDangThuoc(thuoc?.dangthuoc);
            setDonVi(thuoc?.donvi);
            setHamLuong(thuoc?.hamluong);
            setgiaBHYT(thuoc?.giaBHYT);
            setgiaKhongBHYT(thuoc?.giaKhongBHYT);
            setBHYT(thuoc?.bhyt == true ? 0 : 1)
            setNhaSanXuat(thuoc?.nhasanxuat);
            setHanSuDung(thuoc?.hansudung);
            setSoLuong(thuoc?.soluong);
            console.log(tenphobien);
        }
    }, [thuoc]);


    const handleBHYTChange = (event: SelectChangeEvent<number>) => {
        const selectedValue = Number(event.target.value)
        setBHYT(selectedValue);
    }

    const [updateThuoc, _] = useUpdateThuocMutation();
    const handleAdd = async () => {
        console.log('thuốc: ', thuoc?._id)
        console.log('tên thuốc: ', tenthuoc);
        console.log('tên phổ biến: ', tenphobien);
        console.log('dạng thuốc: ', dangthuoc);
        console.log('đơn vị: ', donvi);
        console.log('hàm lượng: ', hamluong);
        console.log('giá: ', giaBHYT);
        console.log('giá Khong BHYT: ', giaKhongBHYT);
        console.log('bhyt: ', bhyt == 0 ? true : false);
        console.log('nhà sản xuất: ', nhasanxuat);
        console.log('hạn sử dụng: ', hansudung);
        console.log('số lượng: ', soluong);
        try {
            const response = await updateThuoc(
                {
                    variables: {
                        "input": {
                            "id": thuoc?._id,
                            "tenthuoc": tenthuoc,
                            "tenPhoBien": tenphobien,
                            "dangthuoc": dangthuoc,
                            "donvi": donvi,
                            "hamluong": hamluong,
                            "giaBHYT": giaBHYT,
                            "giaKhongBHYT": giaKhongBHYT,
                            "bhyt": bhyt == 0 ? true : false,
                            "nhasanxuat": nhasanxuat,
                            "hansudung": hansudung,
                            "soluong": soluong
                        }
                    }
                }
            )
            refetch()
            onHide()
        }
        catch (error) {
            console.log(error)
        }
    }

    return (

        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Thêm Thuốc
                </Modal.Title>
                <Button variant="link" onClick={onHide}>
                    <MdClose style={{ fontSize: '1.5rem' }} />
                </Button>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formThuocTenPhoBien" className="mt-2">
                        <Form.Label>Tên phổ biến</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={"Tên phổ biến..."}
                            value={tenphobien}
                            onChange={(event) => setTenPhoBien(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formThuocTenThuoc" className="mt-2">
                        <Form.Label>Tên Thuốc</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={"Tên thuốc..."}
                            value={tenthuoc}
                            onChange={(event) => setTenThuoc(event.target.value)}
                        />
                    </Form.Group>
                    <div className="d-flex justify-content-between">
                        <Form.Group controlId="formThuocDangThuoc" className="mt-2 mr-1" style={{ width: '15%' }}>
                            <Form.Label>Dạng Thuốc</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={"dạng thuốc..."}
                                value={dangthuoc}
                                onChange={(event) => setDangThuoc(event.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formThuocDonVi" className="mt-2 mr-1" style={{ width: '15%' }}>
                            <Form.Label>Đơn vị</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={"đơn vị..."}
                                value={donvi}
                                onChange={(event) => setDonVi(event.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formThuocHamLuong" className="mt-2 mr-1" style={{ width: '15%' }}>
                            <Form.Label>Hàm lượng</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder={"hàm lượng..."}
                                value={hamluong}
                                onChange={(event) => setHamLuong(parseFloat(event.target.value))}
                            />
                        </Form.Group>

                        <Form.Group controlId="formThuocSoLuong" className="mt-2 mr-1" style={{ width: '15%' }}>
                            <Form.Label>Số lượng</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder={"số lượng..."}
                                value={soluong}
                                onChange={(event) => setSoLuong(parseInt(event.target.value))}
                            />
                        </Form.Group>
                    </div>

                    <div className="d-flex justify-content-around">
                        <Form.Group controlId="formThuocGia" className="mt-2 mr-1" style={{ width: '15%' }}>
                            <Form.Label>Giá</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder={"giá..."}
                                value={giaBHYT}
                                onChange={(event) => setgiaBHYT(parseFloat(event.target.value))}
                            />
                        </Form.Group>

                        <Form.Group controlId="formThuocGiaKhongBHYT" className="mt-2 mr-1" style={{ width: '20%' }}>
                            <Form.Label>Giá Không BHYT</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder={"giá không BHYT..."}
                                value={giaKhongBHYT}
                                onChange={(event) => setgiaKhongBHYT(parseFloat(event.target.value))}
                            />
                        </Form.Group>

                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small" className="mt-2">
                            <Form.Label>BHYT</Form.Label>
                            <Select
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                value={bhyt}
                                onChange={handleBHYTChange}
                            >
                                <MenuItem value={0}>Có</MenuItem>
                                <MenuItem value={1}>Không</MenuItem>
                            </Select>
                        </FormControl>

                    </div>

                    <Form.Group controlId="formThuocNhaSanXuat" className="mt-2">
                        <Form.Label>Nhà Sản Xuất</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={"nhà sản xuất..."}
                            value={nhasanxuat}
                            onChange={(event) => setNhaSanXuat(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formThuocHanSuDung" className="mt-2">
                        <Form.Label>Hạn Sử Dụng</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={"hạn sử dụng..."}
                            value={hansudung}
                            onChange={(event) => setHanSuDung(event.target.value)}
                        />
                    </Form.Group>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                <Button variant="primary" type="submit" onClick={handleAdd}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SuaThuoc;