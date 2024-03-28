import { Button, Form, Modal } from "react-bootstrap";
import { MdClose } from "react-icons/md";
import { Phong, useCreateNhanVienMutation, useGetAllChuyenKhoaQuery, useGetAllPhongQuery } from "../../graphql-definition/graphql";
import { SubmitHandler, useForm } from "react-hook-form";
import DatePickerValue from "../../components/DatePicker";
import { Autocomplete, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import dayjs, { Dayjs } from 'dayjs'

function ThemNhanVien({ onHide, show, refetch }: any) {


    const [ngaysinh, setNgaySinh] = useState<Dayjs>(dayjs());
    const [ngayBD, setngayBD] = useState<Dayjs>(dayjs());
    const [chuyenkhoa, setChuyenKhoa] = useState('');
    const [phongs, setPhongs] = useState([]);

    const { data: phongData, loading: phongLoading, error: phongError } = useGetAllPhongQuery();

    const handleDateChange = (date: any) => {
        setNgaySinh(date.$d);
    };
    const handleChangeNgayBD = (date: any) => {
        setngayBD(date.$d);
    };

    const handlePhongChoose = (event: ChangeEvent<unknown>, value: any) => {
        const selectedPhongsId = value.map((phong: Phong) => phong?._id);
        setPhongs(selectedPhongsId);
    }

    const handleChuyenKhoachoose = (event: ChangeEvent<unknown>, value: any) => {
        setChuyenKhoa(value?._id);
    }

    const [themNhanVien, _] = useCreateNhanVienMutation();

    const handleAdd: SubmitHandler<any> = async (data) => {
        try {
            if (data && ngaysinh && ngayBD && phongs) {
                console.log('điền đầy đủ thông tin rồi');
                const response = await themNhanVien({
                    variables: {
                        "input": {
                            "hoten": data?.hoten,
                            "ngaysinh": ngaysinh,
                            "gioitinh": data?.gioitinh == 0 ? true : false,
                            "diachi": data?.diachi,
                            "sodienthoai": data?.sdt,
                            "cccd": data?.cccd,
                            "username": data?.username,
                            "phongs": phongs,
                            "ngayBD": ngayBD,
                            "chucvu": data?.chucvu
                        }
                    }
                })
            } else {
                console.log('hãy điền đầy đủ thông tin các trường')
            }
            refetch();
            onHide();
        } catch (error) {
            console.log(error)
        }

    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Thêm Bệnh Nhân
                </Modal.Title>
                <Button variant="link" onClick={onHide}>
                    <MdClose style={{ fontSize: '1.5rem' }} />
                </Button>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBacSiHoten" className="mt-2">
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

                    <Form.Group controlId="formBacSiDiaChi" className="mt-2">
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
                    <Form.Group controlId="formBacSiCCCD" className="mt-2">
                        <Form.Label>CCCD</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={"CCCD"}
                            {...register('cccd')}
                        />
                    </Form.Group>

                    <Form.Group controlId="formUserNgayBD" className="mt-2">
                        <DatePickerValue label={'Ngày Bắt Đầu'} value={ngayBD} onChange={handleChangeNgayBD} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formUserUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={"Enter username"}
                            {...register('username')}
                        />
                    </Form.Group>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small" className="mt-2">
                        <InputLabel id="demo-select-small-label">Chức vụ</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            label="Chức Vụ"
                            {...register('chucvu')}
                        >
                            <MenuItem value={"Tiếp Tân"}>Tiếp Tân</MenuItem>
                            <MenuItem value={"Điều Dưỡng"}>Điều Dưỡng</MenuItem>
                            <MenuItem value={"Dược Sĩ"}>Dược Sĩ</MenuItem>
                        </Select>
                    </FormControl>

                    <Autocomplete
                        multiple
                        className="mt-2"
                        id="multiple-limit-tags"
                        options={phongData?.getAllPhong || []}
                        getOptionLabel={(option) => option.tenphong}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="standard"
                                label="Phòng"
                                placeholder="Phòng..."
                            />
                        )}
                        onChange={handlePhongChoose}
                    />
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

export default ThemNhanVien;