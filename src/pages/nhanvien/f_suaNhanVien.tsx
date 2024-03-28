import { ChangeEvent, useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { MdClose } from "react-icons/md";
import { Phong, useGetAllPhongQuery, useUpdateNhanVienMutation } from "../../graphql-definition/graphql";
import dayjs, { Dayjs } from 'dayjs';
import { Autocomplete, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import DatePickerValue from "../../components/DatePicker";

function SuaNhanVien({ show, onHide, nhanvien, refetch }: any) {


    const [hoten, setHoten] = useState('');
    const [phongs, setPhongs] = useState([]);
    const [ngaysinh, setNgaySinh] = useState<Dayjs>(dayjs());
    const [ngayBD, setngayBD] = useState<Dayjs>(dayjs());
    const [gioitinh, setGioitinh] = useState(0);
    const [diachi, setDiaChi] = useState('');
    const [cccd, setCCCD] = useState('');
    const [chucvu, setChucVu] = useState(nhanvien?.chucvu || '');
    const [sodienthoai, setSodienthoai] = useState('');

    const { data: phongData, loading: phongLoading, error: phongError } = useGetAllPhongQuery();

    useEffect(() => {
        if (nhanvien) {
            setHoten(nhanvien?.hoten);
            setNgaySinh(dayjs(nhanvien?.ngaysinh));
            setngayBD(dayjs(nhanvien?.ngayBD));
            setGioitinh(nhanvien?.gioitinh == true ? 0 : 1)
            setDiaChi(nhanvien?.diachi);
            setCCCD(nhanvien?.cccd);
            setSodienthoai(nhanvien?.sodienthoai);
            setChucVu(nhanvien?.chucvu);
            setPhongs(nhanvien?.phongs)
        }
    }, [nhanvien])

    const handlePhongChoose = (event: ChangeEvent<unknown>, value: any) => {
        const selectedPhongsId = value.map((phong: Phong) => phong?._id);
        setPhongs(selectedPhongsId);
    }

    const handleGenderChange = (event: SelectChangeEvent<number>) => {
        const selectedValue = Number(event.target.value);
        setGioitinh(selectedValue);
    };

    const handleDateChange = (date: any) => {
        setNgaySinh(date.$d);
    };

    const handleChangeNgayBD = (date: any) => {
        setngayBD(date.$d);
    };

    const handleChucVuChange = (event: SelectChangeEvent<string>) => {
        setChucVu(event.target.value);
    }

    const [updateNhanVien, _] = useUpdateNhanVienMutation();
    const HandleUpdate = async () => {
        try {
            if (nhanvien?._id) {
                const response = await updateNhanVien({
                    variables: {
                        "input": {
                            "id": nhanvien?._id,
                            "hoten": hoten,
                            "ngaysinh": ngaysinh,
                            "gioitinh": gioitinh ? true : false,
                            "diachi": diachi,
                            "sodienthoai": sodienthoai,
                            "cccd": cccd,
                            "phongs": phongs,
                            "ngayBD": ngayBD,
                            "chucvu": chucvu
                        }
                    }
                })
                refetch();
                onHide();
            }
            else {
                console.log('Error update nhân viên');
            }
        }
        catch (error) {
            console.log(error);
        }
    }


    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    {nhanvien ? `Edit User: ${nhanvien?.hoten}` : 'Add New User'}
                </Modal.Title>
                <Button variant="link" onClick={onHide}>
                    <MdClose style={{ fontSize: '1.5rem' }} />
                </Button>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group className="mb-2" controlId="formBacSiHoten">
                        <Form.Label>Họ tên</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={nhanvien?.hoten || "Enter họ tên"}
                            value={hoten}
                            onChange={event => setHoten(event.target.value)}
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
                            value={gioitinh}
                            onChange={handleGenderChange}
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
                            value={diachi}
                            onChange={event => setDiaChi(event?.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBacSiCCCD" className="mt-2">
                        <Form.Label>CCCD</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={"CCCD"}
                            value={cccd}
                            onChange={event => setCCCD(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBacSiCCCD" className="mt-2">
                        <Form.Label>SĐT</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={"SĐT"}
                            value={sodienthoai}
                            onChange={event => setSodienthoai(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formUserNgayBD" className="mt-2">
                        <DatePickerValue label={'Ngày Bắt Đầu'} value={ngayBD} onChange={handleChangeNgayBD} />
                    </Form.Group>

                    <Autocomplete
                        multiple
                        className="mt-2"
                        id="multiple-limit-tags"
                        options={phongData?.getAllPhong || []}
                        getOptionLabel={(option) => option.tenphong}
                        /* defaultValue={phongData?.getAllPhong.length ? [phongData?.getAllPhong[0]] : []} */
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

                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small" className="mt-2">
                        <InputLabel id="demo-select-small-label">Chức vụ</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            label="Chức Vụ"
                            value={chucvu}
                            onChange={handleChucVuChange}
                        >
                            <MenuItem value={"Tiếp Tân"}>Tiếp Tân</MenuItem>
                            <MenuItem value={"Điều Dưỡng"}>Điều Dưỡng</MenuItem>
                            <MenuItem value={"Dược Sĩ"}>Dược Sĩ</MenuItem>
                        </Select>
                    </FormControl>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={HandleUpdate}>
                    Save Changes
                </Button>
            </Modal.Footer>

        </Modal>
    );
}

export default SuaNhanVien;