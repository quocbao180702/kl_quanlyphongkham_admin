import { ChangeEvent, useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { MdClose } from "react-icons/md";
import dayjs, { Dayjs } from 'dayjs';
import DatePickerValue from "../../components/DatePicker";
import { Autocomplete, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { ChuyenKhoa, Phong, useGetAllChuyenKhoaQuery, useGetAllPhongQuery, useUpdateBacSiMutation } from "../../graphql-definition/graphql";

function SuaBacSi({ show, onHide, bacsi, refetch }: any) {


    const { data: phongData, loading: phongLoading, error: phongError } = useGetAllPhongQuery();
    const { data: chuyenkhoaData, loading: chuyenkhoaLoading, error: chuyenkhoaError } = useGetAllChuyenKhoaQuery();

    const [user, setUser] = useState('');
    const [hoten, setHoten] = useState('');
    const [ngaysinh, setNgaySinh] = useState<Dayjs>(dayjs());
    const [ngayBD, setngayBD] = useState<Dayjs>(dayjs());
    const [gioitinh, setGioitinh] = useState(0);
    const [diachi, setDiaChi] = useState('');
    const [cccd, setCCCD] = useState('');
    /* const [indexChuyenKhoa, setIndexChuyenKhoa] = useState<number>(0) */
    const [chuyenkhoa, setChuyenKhoa] = useState('');
    const [phongs, setPhongs] = useState([]);


    useEffect(() => {
        if (bacsi) {
            setHoten(bacsi?.hoten);
            setNgaySinh(dayjs(bacsi?.ngaysinh));
            setngayBD(dayjs(bacsi?.ngayBD));
            setGioitinh(bacsi?.gioitinh == true ? 0 : 1)
            setDiaChi(bacsi?.diachi);
            setCCCD(bacsi?.cccd);
            setUser(bacsi?.user);
            setChuyenKhoa(bacsi?.chuyenkhoa)
            setPhongs(bacsi?.phongs)
            /* const index = chuyenkhoaData?.getAllChuyenKhoa.findIndex((item: ChuyenKhoa) => item._id === bacsi?.chuyenkhoa);
            setIndexChuyenKhoa(index !== undefined ? index : 0); */
        }
    }, [bacsi])


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

    const handlePhongChoose = (event: ChangeEvent<unknown>, value: any) => {
        const selectedPhongsId = value.map((phong: Phong) => phong?._id);
        setPhongs(selectedPhongsId);
    }

    const handleChuyenKhoachoose = (event: ChangeEvent<unknown>, value: any) => {
        setChuyenKhoa(value?._id);
    }

    const [updateBacSi, _] = useUpdateBacSiMutation();
    const HandleUpdate = async () => {
        try {
            console.log('id: ', bacsi?._id)
            console.log('ho ten: ', hoten)
            console.log('ngay sinh: ', ngaysinh.format('YYYY-MM-DD'));
            console.log('ngay bd: ', ngayBD.format('YYYY-MM-DD'))
            console.log('gioi tinh: ', gioitinh),
                console.log('dia chi: ', diachi)
            console.log('cccd: ', cccd)
            console.log(' user: ', bacsi?.user?._id),
                console.log('phongs: ', phongs),
                console.log(' chuyne khoa: ', chuyenkhoa)

            if (bacsi?._id) {
                const response = await updateBacSi({
                    variables: {
                        "input": {
                            "id": bacsi?._id,
                            "hoten": hoten,
                            "ngaysinh": ngaysinh.format('YYYY-MM-DD'),
                            "gioitinh": gioitinh == 0 ? true : false,
                            "diachi": diachi,
                            "cccd": cccd,
                            "ngayBD": ngayBD.format('YYYY-MM-DD'),
                            "user": bacsi?.user?._id,
                            "phongs": phongs,
                            "chuyenkhoa": chuyenkhoa
                        }
                    }
                })
                refetch()
            } else {
                console.log('không thể thêm được dữ liệu')
            }
            onHide();
        } catch (error) {
            console.error('Error update user:', error);
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
                    {bacsi ? `Edit User: ${bacsi?.hoten}` : 'Add New User'}
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
                            placeholder={bacsi?.hoten || "Enter họ tên"}
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

                    <Autocomplete
                        key={bacsi?.chuyenkhoa}
                        className="mt-2"
                        id="multiple-limit-tags"
                        options={chuyenkhoaData?.getAllChuyenKhoa || []}
                        getOptionLabel={(option) => option?.tenkhoa}
                        /* defaultValue={indexChuyenKhoa >= 0 ? chuyenkhoaData?.getAllChuyenKhoa[indexChuyenKhoa] : null} */
                        /* defaultValue={chuyenkhoaData?.getAllChuyenKhoa[0]} */
                        onChange={handleChuyenKhoachoose}
                        renderInput={(params) => (
                            <TextField {...params} label="Chuyên Khoa" placeholder="Chuyên Khoa..." />
                        )}
                        sx={{ width: '100%' }}
                    />
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
        </Modal>);
}

export default SuaBacSi;