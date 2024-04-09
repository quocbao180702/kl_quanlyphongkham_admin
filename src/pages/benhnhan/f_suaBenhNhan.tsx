import { Button, Form, Modal } from "react-bootstrap";
import { MdClose } from "react-icons/md";
import DatePickerValue from "../../components/DatePicker";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import dayjs, { Dayjs } from 'dayjs';
import { useForm } from "react-hook-form";
import { message } from "antd";
import { useUpdateBenhNhanMutation } from "../../graphql-definition/graphql";

function SuaBenhNhan({ show, onHide, benhnhan, refetch }: any) {

    const [hoten, setHoten] = useState('');
    const [ngaysinh, setNgaySinh] = useState<Dayjs>(dayjs());
    const [gioitinh, setGioitinh] = useState(0);
    const [diachi, setDiaChi] = useState('');
    const [cccd, setCCCD] = useState('');
    const [bhyt, setBHYT] = useState('');
    const [user, setUser] = useState('');

    useEffect(() => {
        if (benhnhan) {
            setHoten(benhnhan?.hoten);
            setNgaySinh(dayjs(benhnhan?.ngaysinh));
            setGioitinh(benhnhan?.gioitinh == true ? 0 : 1);
            setDiaChi(benhnhan?.diachi);
            setCCCD(benhnhan?.cccd);
            setBHYT(benhnhan?.bhyt);
            setUser(benhnhan?.user);
        }
    }, [benhnhan])

    const handleDateChange = (date: any) => {
        setNgaySinh(date.$d);
    };

    const handleGenderChange = (event: SelectChangeEvent<number>) => {
        const selectedValue = Number(event.target.value);
        setGioitinh(selectedValue);
    };


    const [updateBenhNhan, _] = useUpdateBenhNhanMutation()

    const handleAdd = async () => {
        console.log('Họ tên: ', hoten)
        console.log('ngay sinh: ', dayjs(ngaysinh).format('YYYY-MM-DD'));
        console.log('Giới tính: ', gioitinh == 0 ? true : false)
        console.log('Dịa chỉ: ', diachi)
        console.log('CCCD: ', cccd)
        console.log('BHYT: ', bhyt)
        console.log('user: ', benhnhan?.user?._id);
        console.log('id: ', benhnhan?._id);

        try {
            if(benhnhan?._id){
                const response = await updateBenhNhan({
                    variables: {
                        "input": {
                            "_id": benhnhan?._id,
                            "hoten": hoten,
                            "ngaysinh": dayjs(ngaysinh).format('YYYY-MM-DD'),
                            "gioitinh": gioitinh == 0 ? true : false,
                            "diachi": diachi,
                            "cccd": cccd,
                            "bhyt": bhyt,
                            "username": benhnhan?.username
                        }
                    }
                })
                refetch()
                onHide()
            }
            else{
                console.log('Không tìm thấy bệnh nhân: ', benhnhan?._id)
            }

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
                    <Form.Group controlId="formBenhNhanHoten" className="mt-2">
                        <Form.Label>Họ Tên</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={"Họ tên"}
                            value={hoten}
                            onChange={(event) => setHoten(event.target.value)}
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

                    <Form.Group controlId="formBenhNhanDiaChi" className="mt-2">
                        <Form.Label>Địa chỉ</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={"Địa chỉ"}
                            value={diachi}
                            onChange={(event) => setDiaChi(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBenhNhanCCCD" className="mt-2">
                        <Form.Label>CCCD</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={"CCCD"}
                            value={cccd}
                            onChange={(event) => setCCCD(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBenhNhanBHYT" className="mt-2">
                        <Form.Label>BHYT</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={"BHYT"}
                            value={bhyt}
                            onChange={(event) => setBHYT(event.target.value)}
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

export default SuaBenhNhan;