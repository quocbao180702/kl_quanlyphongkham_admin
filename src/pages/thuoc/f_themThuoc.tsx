import { Button, Form, Modal, Row } from "react-bootstrap";
import { MdClose } from "react-icons/md";
import DatePickerValue from "../../components/DatePicker";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import dayjs, { Dayjs } from 'dayjs';
import { Thuoc, useCreateThuocMutation } from "../../graphql-definition/graphql";

function ThemThuoc({ show, onHide, refetch }: any) {


    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [createThuoc, _] = useCreateThuocMutation();
    const handleAdd: SubmitHandler<any> = async (data: any) => {
        console.log(data)
        try {
            const response = await createThuoc({
                variables: {
                    "input": {
                        "tenthuoc": data?.tenthuoc,
                        "tenPhoBien": data?.tenphobien,
                        "dangthuoc": data?.dangthuoc,
                        "donvi": data?.donvi,
                        "hamluong": parseFloat(data?.hamluong),
                        "giaBHYT": parseFloat(data?.giaBHYT),
                        "giaKhongBHYT": parseFloat(data?.giaKhongBHYT),
                        "bhyt": data?.bhyt == 0 ? true : false,
                        "nhasanxuat": data?.nhasanxuat,
                        "hansudung": data?.hansudung,
                        "soluong": parseInt(data?.soluong)
                    }
                }
            })
            refetch()
            onHide()
        } catch (error) {
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
                            {...register('tenphobien')}
                        />
                    </Form.Group>

                    <Form.Group controlId="formThuocTenThuoc" className="mt-2">
                        <Form.Label>Tên phổ biến</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={"Tên thuốc..."}
                            {...register('tenthuoc')}
                        />
                    </Form.Group>
                    <div className="d-flex justify-content-between">
                        <Form.Group controlId="formThuocDangThuoc" className="mt-2 mr-1" style={{ width: '15%' }}>
                            <Form.Label>Dạng Thuốc</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={"dạng thuốc..."}
                                {...register('dangthuoc')}
                            />
                        </Form.Group>

                        <Form.Group controlId="formThuocDonVi" className="mt-2 mr-1" style={{ width: '15%' }}>
                            <Form.Label>Đơn vị</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={"đơn vị..."}
                                {...register('donvi')}
                            />
                        </Form.Group>

                        <Form.Group controlId="formThuocHamLuong" className="mt-2 mr-1" style={{ width: '15%' }}>
                            <Form.Label>Hàm lượng</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder={"hàm lượng..."}
                                {...register('hamluong')}
                            />
                        </Form.Group>

                        <Form.Group controlId="formThuocSoLuong" className="mt-2 mr-1" style={{ width: '15%' }}>
                            <Form.Label>Số lượng</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder={"số lượng..."}
                                {...register('soluong')}
                            />
                        </Form.Group>
                    </div>

                    <div className="d-flex justify-content-around">
                        <Form.Group controlId="formThuocGia" className="mt-2 mr-1" style={{ width: '15%' }}>
                            <Form.Label>Giá BHYT</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder={"giá..."}
                                {...register('giaBHYT')}
                            />
                        </Form.Group>

                        <Form.Group controlId="formThuocGia" className="mt-2 mr-1" style={{ width: '20%' }}>
                            <Form.Label>Giá Không BHYT</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder={"giá..."}
                                {...register('giaKhongBHYT')}
                            />
                        </Form.Group>

                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small" className="mt-2">
                            <Form.Label>BHYT</Form.Label>
                            <Select
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                {...register('bhyt')}
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
                            {...register('nhasanxuat')}
                        />
                    </Form.Group>

                    <Form.Group controlId="formThuocHanSuDung" className="mt-2">
                        <Form.Label>Hạn Sử Dụng</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={"hạn sử dụng..."}
                            {...register('hansudung')}
                        />
                    </Form.Group>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                <Button variant="primary" type="submit" onClick={() => handleSubmit(handleAdd)()}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ThemThuoc;