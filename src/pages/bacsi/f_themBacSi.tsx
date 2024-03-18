import { ChangeEvent, useState } from "react";
import { LinkImage, Phong, TypeImage, UserRole, useCreateBacSiMutation, useGetAllChuyenKhoaQuery, useGetAllPhongQuery } from "../../graphql-definition/graphql";
import { Autocomplete, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { Button, Form, Modal } from "react-bootstrap";
import { MdClose } from "react-icons/md";
import { SubmitHandler, useForm } from "react-hook-form";
import DatePickerValue from "../../components/DatePicker";
import dayjs, { Dayjs } from 'dayjs';

function ThemBacSi({ onHide, show, refetch }: any) {

    const { data: phongData, loading: phongLoading, error: phongError } = useGetAllPhongQuery();
    const { data: chuyenkhoaData, loading: chuyenkhoaLoading, error: chuyenkhoaError } = useGetAllChuyenKhoaQuery();

    const [phongs, setPhongs] = useState([]);
    const [ngaysinh, setNgaySinh] = useState<Dayjs>(dayjs());
    const [ngayBD, setngayBD] = useState<Dayjs>(dayjs());
    const [chuyenkhoa, setChuyenKhoa] = useState('');
    const [imageUrl, setImageUrl] = useState<LinkImage>()

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

        const values: LinkImage = {
            fileName: 'abc',
            url: 'xyz',
            type: TypeImage.File,
        }
        const user = "65f3c5af09507ecf15c43bf2";
        console.log('ho ten: ', data?.hoten)
        console.log('ngay sinh: ', dayjs(ngaysinh).format('YYYY-MM-DD'));
        console.log('gioi tính: ', data?.gioitinh == 0 ? true : false)
        console.log('dia chi: ', data?.diachi)
        console.log('cccd: ', data?.cccd);
        console.log('ngay BD: ', dayjs(ngayBD).format('YYYY-MM-DD'));
        console.log('user: ', user),
            console.log('phongs: ', phongs);
        console.log('chuyen khoa: ', chuyenkhoa)

        try {
            if (data && ngaysinh && ngayBD && user && phongs && chuyenkhoa) {
                const response = await themBacSi({
                    variables: {
                        "input": {
                            "hoten": data?.hoten,
                            "ngaysinh": dayjs(ngaysinh).format('YYYY-MM-DD'),
                            "gioitinh": data?.gioitinh == 0 ? true : false,
                            "diachi": data?.diachi,
                            "cccd": data?.cccd,
                            "ngayBD": dayjs(ngayBD).format('YYYY-MM-DD'),
                            "user": user,
                            "phongs": phongs,
                            "chuyenkhoa": chuyenkhoa
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
            <Modal.Body>
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

export default ThemBacSi;