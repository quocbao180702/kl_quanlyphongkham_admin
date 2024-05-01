import { ChangeEvent, useEffect, useState } from "react";
import { LinkImage, Phong, TypeImage, UserRole, useCreateBacSiMutation, useGetAllChuyenKhoaQuery, useGetAllPhongQuery } from "../../graphql-definition/graphql";
import { Autocomplete, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { Accordion, Button, ButtonGroup, Collapse, Form, Modal, Row, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { MdClose } from "react-icons/md";
import { SubmitHandler, useForm } from "react-hook-form";
import DatePickerValue from "../../components/DatePicker";
import dayjs, { Dayjs } from 'dayjs';

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { DateCalendar } from "@mui/x-date-pickers";

import './style.css'

const localizer = momentLocalizer(moment)

interface Phien {
    batdau: string,
    ketthuc: string,
    soluongToiDa: number,
    trangthai: boolean
}

interface NgayKham {
    ngaytrongtuan: string,
    phiens: Phien[]
}

function ThemBacSi({ onHide, show, refetch }: any) {

    const { data: phongData, loading: phongLoading, error: phongError } = useGetAllPhongQuery();
    const { data: chuyenkhoaData, loading: chuyenkhoaLoading, error: chuyenkhoaError } = useGetAllChuyenKhoaQuery();

    const [username, setUsername] = useState('');
    const [phongs, setPhongs] = useState([]);
    const [ngaysinh, setNgaySinh] = useState<Dayjs>(dayjs());
    const [ngayBD, setngayBD] = useState<Dayjs>(dayjs());
    const [chuyenkhoa, setChuyenKhoa] = useState('');
    const [ngaynghi, setNgayNghi] = useState([dayjs("2024-04-30"), dayjs("2024-05-01"), dayjs("2024-01-01"), dayjs("2024-01-02"), dayjs("2024-01-03")]);
    const [ngaykham, setNgayKham] = useState<NgayKham[]>([])
    const [imageUrl, setImageUrl] = useState<LinkImage>()


    const daysOfWeek = ["Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu"];

    const timeSlots = [
        "7:30-8:00",
        "8:00-8:30",
        "9:00-9:30",
        "9:30-10:00",
        "10:30-11:00",
        "13:30-14:00",
        "14:00-14:30",
        "14:30-15:00",
        "15:00-15:30",
        "15:30-16:00",
        "16:00-16:30",
        "16:30-17:00"
    ];

    const [checkedStates, setCheckedStates] = useState(
        daysOfWeek.map(() => new Array(timeSlots.length).fill(false))
    );

    const handleToggle = (dayIndex: number, slotIndex: number) => {
        const newCheckedStates = [...checkedStates];
        newCheckedStates[dayIndex][slotIndex] = !newCheckedStates[dayIndex][slotIndex];
        setCheckedStates(newCheckedStates);

        console.log('day: ', daysOfWeek[dayIndex]);
        console.log('slotTime: ', timeSlots[slotIndex])
        const newNgayKham = [...ngaykham];
        const selectedDay = newNgayKham[dayIndex];
        if (!selectedDay) {
            newNgayKham[dayIndex] = {
                ngaytrongtuan: daysOfWeek[dayIndex],
                phiens: []
            };
        }

        const selectedDayAfterCheck = newNgayKham[dayIndex];

        const selectedTimeSlot = timeSlots[slotIndex];

        const existingIndex = selectedDayAfterCheck.phiens.findIndex(phien => phien.batdau === selectedTimeSlot.split('-')[0] && phien.ketthuc === selectedTimeSlot.split('-')[1]);

        if (existingIndex === -1) {
            selectedDayAfterCheck.phiens.push({
                batdau: selectedTimeSlot.split('-')[0],
                ketthuc: selectedTimeSlot.split('-')[1],
                soluongToiDa: 5,
                trangthai: true
            });
        } else {
            selectedDayAfterCheck.phiens.splice(existingIndex, 1);
        }

        // Cập nhật ngày khám với bản sao mới đã được cập nhật
        newNgayKham[dayIndex] = selectedDayAfterCheck;
        setNgayKham(newNgayKham);
    };

    useEffect(() => {
        console.log('ngày khám: ', ngaykham)
    }, [ngaykham])

    const [openStates, setOpenStates] = useState(new Array(daysOfWeek.length).fill(false));
    const handleToggleDay = (dayIndex: number) => {
        const newOpenStates = [...openStates];
        newOpenStates[dayIndex] = !newOpenStates[dayIndex];
        setOpenStates(newOpenStates);
    };

    const handleUpload = (imageData: LinkImage) => {
        // Xử lý dữ liệu hình ảnh tải lên ở đây
        console.log('Uploaded image:', imageData);
        setImageUrl(imageData);
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

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [themBacSi, _] = useCreateBacSiMutation();

    const handleAdd: SubmitHandler<any> = async (data) => {

        console.log('ho ten: ', data?.hoten)
        console.log('ngay sinh: ', dayjs(ngaysinh).format('YYYY-MM-DD'));
        console.log('gioi tính: ', data?.gioitinh === "0" ? true : false)
        console.log('dia chi: ', data?.diachi)
        console.log('cccd: ', data?.cccd);
        console.log('ngay BD: ', dayjs(ngayBD).format('YYYY-MM-DD'));
        console.log('user: ', username),
            console.log('phongs: ', phongs);
        console.log('chuyen khoa: ', chuyenkhoa)
        console.log('ngày khám: ', ngaykham);
        console.log('ngày nghĩ: ', ngaynghi.map(ngay => dayjs(ngay).format('YYYY-MM-DD')))

        try {
            if (data && ngaysinh && ngayBD && phongs && chuyenkhoa) {
                const response = await themBacSi({
                    variables: {
                        "newBacSiInput": {
                            "hoten": data?.hoten,
                            "ngaysinh": dayjs(ngaysinh).format('YYYY-MM-DD'),
                            "gioitinh": data?.gioitinh === 0 ? true : false,
                            "diachi": data?.diachi,
                            "sodienthoai": data?.sdt,
                            "cccd": data?.cccd,
                            "ngayBD": dayjs(ngayBD).format('YYYY-MM-DD'),
                            "username": username,
                            "phongs": phongs,
                            "chuyenkhoa": chuyenkhoa
                        },
                        "createLichkham":
                        {
                            "ngaykham": ngaykham.map(ngay => ({
                                "ngaytrongtuan": ngay.ngaytrongtuan,
                                "phiens": ngay.phiens.map(phien => ({
                                    "batdau": phien.batdau,
                                    "ketthuc": phien.ketthuc,
                                    "trangthai": phien.trangthai,
                                    "soluongToiDa": phien.soluongToiDa
                                }))
                            })),
                            "ngaynghi": ngaynghi.map(ngay => dayjs(ngay).format('YYYY-MM-DD'))
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
            <Modal.Body className="custom-modal">
                <Form>
                    {/* <UploadImage
                        linkImage={imageUrl}
                        handleUploadCallback={handleUpload}
                        sizeHeight={200}
                        sizeWidth={300}
                    /> */}
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

                    {/* <FormControl sx={{ m: 1, minWidth: 120 }} size="small" className="mt-2">
                        <InputLabel id="demo-select-small-label">Giới tính</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            label="Giới tính"
                            {...register('gioitinh')}
                        >
                            <MenuItem value={"0"}>Nam</MenuItem>
                            <MenuItem value={"1"}>Nữ</MenuItem>
                        </Select>
                    </FormControl> */}
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small" className="mt-2">
                        <InputLabel id="demo-select-small-label">Giới tính</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            label="Giới tính"
                            value={watch('gioitinh') || ''} // Sử dụng watch để lấy giá trị của gioitinh
                            {...register('gioitinh')} // Đăng ký gioitinh với RHF
                        >
                            <MenuItem value={"0"}>Nam</MenuItem>
                            <MenuItem value={"1"}>Nữ</MenuItem>
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
                        <Form.Label>CCCD</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={"CCCD"}
                            {...register('cccd')}
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

                    <Form.Group controlId="formUserNgayBD" className="mt-2">
                        <DatePickerValue label={'Ngày Bắt Đầu'} value={ngayBD} onChange={handleChangeNgayBD} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formUserUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={"Enter username"}
                            value={username}
                            onChange={event => setUsername(event.target.value)}
                        />
                    </Form.Group>

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

                    <Autocomplete
                        className="mt-2"
                        id="multiple-limit-tags"
                        options={chuyenkhoaData?.getAllChuyenKhoa || []}
                        getOptionLabel={(option) => option?.tenkhoa}
                        onChange={handleChuyenKhoachoose}
                        renderInput={(params) => (
                            <TextField {...params} label="Chuyên Khoa" placeholder="Chuyên Khoa..." />
                        )}
                        sx={{ width: '100%' }}
                    />

                    <h4 className="text-center">Chọn Lịch Làm Việc</h4>
                    <Row className="mt-3 w-60 justify-content-around">
                        {daysOfWeek.map((day, index) => (
                            <Button
                                key={index}
                                onClick={() => handleToggleDay(index)}
                                aria-controls={`collapse-${index}`}
                                aria-expanded={openStates[index]}
                                className="btn-outline-primary"
                            >
                                {day}
                            </Button>
                        ))}
                    </Row>
                    {daysOfWeek.map((day, index) => (
                        <Collapse in={openStates[index]} key={index}>
                            <div id={`collapse-${index}`}>
                                <Row className="justify-content-around mt-3">
                                    <h5 className="text-center" onClick={() => handleToggleDay(index)}>{day}</h5>
                                    {timeSlots.map((slot, slotIndex) => (
                                        <ToggleButton
                                            key={slotIndex}
                                            className="mb-2 custom-checkbox"
                                            id={`toggle-check-${index}-${slotIndex}`}
                                            type="checkbox"
                                            variant={checkedStates[index][slotIndex] ? "primary" : "outline-primary"}
                                            checked={checkedStates[index][slotIndex]}
                                            value={slot}
                                            onChange={() => handleToggle(index, slotIndex)}
                                        >
                                            {slot}
                                        </ToggleButton>
                                    ))}
                                </Row>
                            </div>
                        </Collapse>
                    ))}
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
        </Modal >
    );
}

export default ThemBacSi;