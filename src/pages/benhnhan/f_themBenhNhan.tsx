import { Autocomplete, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Button, Form, Modal } from "react-bootstrap";
import { MdClose } from "react-icons/md";
import DatePickerValue from "../../components/DatePicker";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateBenhNhanMutation } from "../../graphql-definition/graphql";
import { useState } from "react";
import dayjs, { Dayjs } from 'dayjs';

function ThemBenhNhan({ show, onHide, refetch }: any) {

    const [ngaysinh, setNgaySinh] = useState<Dayjs>(dayjs());


    const handleDateChange = (date: any) => {
        setNgaySinh(date.$d);
    };

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const [createBenhNhan, _] = useCreateBenhNhanMutation();

    const handleAdd: SubmitHandler<any> = async (data: any) => {
        console.log('ho ten: ', data?.hoten)
        console.log('ngay sinh: ', dayjs(ngaysinh).format('YYYY-MM-DD'));
        console.log('gioi tính: ', data?.gioitinh == 0 ? true : false)
        console.log('dia chi: ', data?.diachi)
        console.log('cccd: ', data?.cccd);
        console.log('cccd: ', data?.bhyt);
        try {
            if (data?.hoten && data?.diachi && data?.cccd && data?.bhyt) {
                console.log('username', data?.username)
                const response = await createBenhNhan({
                    variables: {
                        "input": {
                            "hoten": data?.hoten,
                            "ngaysinh": dayjs(ngaysinh).format('YYYY-MM-DD'),
                            "gioitinh": data?.gioitinh == 0 ? true : false,
                            "diachi": data?.diachi,
                            "cccd": data?.cccd,
                            "bhyt": data?.bhyt,
                            "sodienthoai": data?.sdt,
                            "username": data?.username
                        }
                    }
                })
            }
            else {
                console.log('Hãy nhập đủ số trường')
            }
            setNgaySinh(dayjs());
            reset();
            refetch();
            onHide();
        } catch (error) {
            console.log(error);
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
                    Thêm Người Dùng
                </Modal.Title>
                <Button variant="link" onClick={onHide}>
                    <MdClose style={{ fontSize: '1.5rem' }} />
                </Button>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBenhNhanHoten" className="mt-2">
                        <Form.Label>Họ Tên</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={"Họ tên"}
                            {...register('hoten')}
                        />
                    </Form.Group>

                    <Form.Group controlId="formUserEmail" className="mt-2">
                        <DatePickerValue label={'Ngày Sinh'} value={ngaysinh} onChange={handleDateChange} />
                    </Form.Group>

                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small" className="mt-2">
                        <InputLabel id="demo-select-small-label">Giới tính</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            label="Giới tính"
                            {...register('gioitinh')}
                        >
                            <MenuItem value={0}>Nam</MenuItem>
                            <MenuItem value={1}>Nữ</MenuItem>
                        </Select>
                    </FormControl>

                    <Form.Group controlId="formBenhNhanDiaChi" className="mt-2">
                        <Form.Label>Địa chỉ</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={"Địa chỉ"}
                            {...register('diachi')}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBacSiCCCD" className="mt-2">
                        <Form.Label>SĐT</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={"SĐT"}
                            {...register('sdt')}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formUserUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={"Enter username"}
                            {...register('username')}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBenhNhanCCCD" className="mt-2">
                        <Form.Label>CCCD</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={"CCCD"}
                            {...register('cccd')}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBenhNhanBHYT" className="mt-2">
                        <Form.Label>BHYT</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={"BHYT"}
                            {...register('bhyt')}
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
        </Modal>);
}

export default ThemBenhNhan;