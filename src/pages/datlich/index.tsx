import { useSubscription } from "@apollo/client";
import { Badge, Button, Card, Col, Form, InputGroup, ListGroup, Row, Table } from "react-bootstrap";
import moment from "moment";
import { useEffect, useState } from "react";
import { newDatLichSubscription } from "../../../codegen/graphql-definition/subcriptions";
import { TrangThaiDatKham, TrangThaiKham, useCreatePhieuXacNhanMutation, useDeleteDatlichMutation, useGetAllBenhNhanNoPaginationQuery, useGetAllDatLichbyTrangThaiQuery, useGetAllPhongQuery, useUpdateTrangThaiDatLichMutation } from "../../graphql-definition/graphql";
import { MdDelete } from "react-icons/md";
import { Alert, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import DatePickerValue from "../../components/DatePicker";
import dayjs, { Dayjs } from 'dayjs';
import { DataGrid, GridColDef } from '@mui/x-data-grid';


import "./style.css";
import { message } from "antd";

interface Datlich {
    _id: string;
    benhnhan: {
        _id: string;
        hoten: string;
        ngaysinh: string;
        sodienthoai: string;
        diachi: string;
    };
    motabenh: string;
    ngaydat: string;
    ngaykham: string;
    trangthai: string;
    email: string;
}

const columns: GridColDef[] = [
    { field: 'hoten', headerName: 'Họ Tên', width: 150 },
    { field: 'ngaysinh', headerName: 'Ngày Sinh', width: 90 },
    { field: 'gioitinh', headerName: 'Giới Tính', width: 90 },
    { field: 'cccd', headerName: 'CCCD', width: 90, },
    { field: 'bhyt', headerName: "BHYT", width: 90 },
    {
        field: 'diachi',
        headerName: 'Địa Chỉ',
        sortable: false,
        width: 200,
    },
];

const columnsDatLich: GridColDef[] = [
    { field: 'stt', headerName: 'STT', width: 50 },
    { field: 'benhnhan?.hoten', headerName: 'Họ Tên', width: 150 },
    { field: 'benhnhan?.ngaysinh', headerName: 'Ngày Sinh', width: 90 },
    { field: 'motabenh', headerName: 'Mô Tả Bệnh', width: 90 },
    { field: 'ngaydat', headerName: 'Ngày Đặt', width: 150 },
    { field: 'ngaykham', headerName: 'Ngày Khám', width: 90 },
    { field: 'trangthai', headerName: "Trạng Thái", width: 90 },
    { field: 'huy', headerName: "Hủy", width: 90 }
]

function DatLich() {
    const [datlich, setDatlich] = useState<Datlich[]>([]);
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    const [selected, setDataSelected] = useState<Datlich>()
    const [hoten, setHoten] = useState('');
    const [ngaysinh, setNgaySinh] = useState<Dayjs>(dayjs());
    const [ngaykham, setNgayKham] = useState<Dayjs>(dayjs());
    const [phoneNumber, setPhoneNumber] = useState('')
    const [diachi, setDiaChi] = useState('');
    const [bhyt, setBhyt] = useState<boolean>();
    const [mota, setMota] = useState('');
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [showWarning, setshowWarning] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [thongbao, setThongBao] = useState('')
    const [idBenhNhan, setIdBenhNhan] = useState('');
    const [email, setEmail] = useState('')
    const [dataBenhNhan, setDataBenhNhan] = useState<any[]>([]);
    const [searchText, setSearchText] = useState("");
    const [phien, SetPhien] = useState("");


    const handleDateChange = (date: any) => {
        setNgaySinh(date.$d);
    };

    const handleDateNgayKhamChange = (date: any) => {
        setNgayKham(date.$d)
        console.log('Ngày Khám: ', date.$d)
    }

    const { data: benhnhanData, error: benhnhanError } = useGetAllBenhNhanNoPaginationQuery();
    const { data: Phongdata, error: Phongerror } = useGetAllPhongQuery();
    const { data: newDatlichData, error: newDatlichError } = useSubscription(newDatLichSubscription);
    const { data: existingDatlich, error: existingDatlichError, refetch: existingDatLichrefetch } = useGetAllDatLichbyTrangThaiQuery({
        variables: {
            input: "DANGXET"
        }
    });
    const handleChange = (id: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;
        if (isChecked) {
            setSelectedValues(prevSelectedValues => [...prevSelectedValues, id]);
        } else {
            setSelectedValues(prevSelectedValues => prevSelectedValues.filter(value => value !== id));
        }
    };


    /*  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
         const allChecked = event.target.checked;
         if (Phongdata?.getAllPhong) {
             const allIds = Phongdata.getAllPhong.map((item: any) => item._id);
             setSelectedValues(allChecked ? allIds : []);
         }
     }; */

    useEffect(() => {
        if (benhnhanData && benhnhanData?.getAllBenhNhanNoPagination) {
            setDataBenhNhan(benhnhanData?.getAllBenhNhanNoPagination)
        }

    }, [benhnhanData])

    useEffect(() => {
        if (showSuccess || showWarning) {
            const timer = setTimeout(() => {
                setShowSuccess(false);
                setshowWarning(false);
                setThongBao('');
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [showSuccess, showWarning]);

    useEffect(() => {
        if (existingDatlich && existingDatlich.getAllDatLichbyTrangThai) {
            setDatlich(existingDatlich.getAllDatLichbyTrangThai);
        }
    }, [existingDatlich]);

    useEffect(() => {
        if (newDatlichData && newDatlichData.newDatLich) {
            setDatlich(prevDatlich => [...prevDatlich, newDatlichData.newDatLich]);
        }
    }, [newDatlichData]);

    useEffect(() => {
        if (selected) {
            setHoten(selected?.benhnhan?.hoten);
            setMota(selected?.motabenh);
            setPhoneNumber(selected?.benhnhan?.sodienthoai)
            setNgaySinh(dayjs(selected?.benhnhan?.ngaysinh))
            setNgayKham(dayjs(selected?.ngaykham));
            setDiaChi(selected?.benhnhan?.diachi);
            setEmail(selected?.email);
        }
    }, [selected])


    const handleRowClick = (params: any) => {
        setIdBenhNhan(params.id);
        setHoten(params.row.hoten);
        setPhoneNumber(params.row.sodienthoai)
        setNgaySinh(dayjs(params.row.ngaysinh));
        setDiaChi(params?.row.diachi)
        setDataSelected(undefined)
    };

    const handleCheckboxChange = () => {
        setIsChecked((prevState: boolean) => !prevState);
    };

    const [createPhieuXacNhan] = useCreatePhieuXacNhanMutation();
    const [updateTrangThaiDatLich] = useUpdateTrangThaiDatLichMutation();
    const [deleteDatLich] = useDeleteDatlichMutation()

    const handleHuyKham = async () => {
        try {
            if (selected?._id) {
                await deleteDatLich({
                    variables: {
                        id: selected?._id
                    }
                })
                setDataSelected(undefined)
                setHoten('');
                setMota('');
                setNgaySinh(dayjs())
                setNgayKham(dayjs());
                setBhyt(false)
                existingDatLichrefetch()
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleXacNhan = async () => {
        console.log('bệnh nhân id: ', selected?._id);
        console.log('danh sách phòng là: ', selectedValues)
        console.log('ngày khám: ', dayjs(ngaykham).format('YYYY-MM-DD'));
        console.log('ngày tạo', dayjs().format('YYYY-MM-DD'));

        try {
            if (!selected?._id || !selectedValues.length) {
                message.warning("Vui lòng chọn bệnh nhân và ít nhất một phòng");
                setThongBao('Vui lòng chọn bệnh nhân và ít nhất một phòng.')
                setshowWarning(true);
                return;
            }
            await Promise.all([
                createPhieuXacNhan({
                    variables: {
                        input: {
                            benhnhan: selected?.benhnhan?._id,
                            phongs: selectedValues,
                            ngaykham: dayjs(ngaykham).format('YYYY-MM-DD'),
                            ngaytao: dayjs().format('YYYY-MM-DD'),
                            email: selected?.email || '',
                            "phien": {
                                "batdau": phien.split("-")[0] || "22:00",
                                "ketthuc": phien.split("-")[1] || "23:00",
                                "soluongToiDa": 5,
                                "trangthai": true
                            }
                        }
                    }
                }),
                selected?._id !== undefined ? updateTrangThaiDatLich({
                    variables: {
                        id: selected._id,
                        trangthai: "XACNHAN"
                    },
                }) : null
            ]);
            setHoten('');
            setPhoneNumber('');
            setDiaChi('');
            setMota('');
            setNgaySinh(dayjs())
            setNgayKham(dayjs());
            existingDatLichrefetch();
            setSelectedValues([]);
            message.success("Tạo Phiếu Thành Công");
            setThongBao('Đã tạo phiếu xác nhận cho bệnh nhân ' + selected?.benhnhan?.hoten + ' lúc: ' + dayjs(ngaykham).format('YYYY-MM-DD'));
            setShowSuccess(true)
            return;
        } catch (error) {
            message.error("Lỗi khi tạo phiếu xác nhận");
            console.error("Lỗi khi tạo phiếu xác nhận:", error);
        }
    }

    const handleChangePhien = (event: SelectChangeEvent) => {
        SetPhien(event.target.value as string);
    };

    useEffect(() => {
        console.log('Bắt Đầu: ', phien.split("-")[0]);
        console.log('Kết Thúc: ', phien.split("-")[1]);
    }, [phien])

    const handleTaoXacNhan = async () => {
        try {

            if (idBenhNhan && selectedValues.length && ngaykham) {
                await createPhieuXacNhan({
                    variables: {
                        "input": {
                            "benhnhan": idBenhNhan,
                            "phongs": selectedValues,
                            "ngaykham": ngaykham,
                            "ngaytao": dayjs().format('YYYY-MM-DD'),
                            "email": email || '',
                            "phien": {
                                "batdau": phien.split("-")[0] || "22:00",
                                "ketthuc": phien.split("-")[1] || "23:00",
                                "soluongToiDa": 5,
                                "trangthai": true
                            }
                        }
                    }
                })
                /* setThongBao('Đã tạo phiếu xác nhận');
                setShowSuccess(true); */
                message.success("Đã tạo phiếu xác nhận thành công");
                setHoten('');
                setPhoneNumber('');
                setDiaChi('');
                setBhyt(false);
                setSelectedValues([]);
                setNgaySinh(dayjs());
                setNgayKham(dayjs());
            }
            else {
                message.warning("Bệnh Nhân Hoặc Phòng Không Đầy Đủ");
                /* setThongBao('Bệnh Nhân Hoặc Phòng Không Đầy Đủ');
                setshowWarning(true); */
            }
        } catch (error) {
            message.error("Lỗi đã xảy ra");
            /* console.log('lỗi đã xẩy ra'); */
        }
    }

    const filteredRows = dataBenhNhan.filter(row =>
        Object.values(row).some(
            value =>
                typeof value === "string" &&
                value.toLowerCase().includes(searchText.toLowerCase())
        )
    );

    return (
        <>
            <Row className="mt-3">
                {showWarning && (
                    <>
                        <div style={{ position: 'fixed', zIndex: 2 }}>
                            <Alert severity="warning" onClose={() => { setshowWarning(false); setThongBao(''); }}>
                                {thongbao}
                            </Alert>
                        </div>
                    </>
                )}

                {showSuccess && (
                    <>
                        <div style={{ position: 'fixed', zIndex: 2 }}>
                            <Alert severity="success" onClose={() => { setShowSuccess(false); setThongBao(''); }}>
                                {thongbao}
                            </Alert>
                        </div>
                    </>
                )}

                <Col sm={3} className="border-right">
                    <h6 className="title">Danh Sách Yêu Cầu Khám</h6>
                    <div className="table-container">
                        <Table className="table-striped bordered hover responsive">
                            <thead className="sticky-thead" style={{ backgroundColor: '#f8f9fa' }}>
                                <tr className="text-center text-dark">
                                    <th className="text-break">STT</th>
                                    <th className="text-break">Họ Tên</th>
                                    <th className="text-break">Ngày Sinh</th>
                                    <th className="text-break">Mô Tả Bệnh</th>
                                    {/*  <th className="text-break">Ngày Đặt</th>
                                    <th className="text-break">Ngày Khám</th> */}
                                    <th className="text-break">Trạng Thái</th>
                                    <th className="text-break">Hủy</th>
                                </tr>
                            </thead>
                            <tbody className="scrollable-tbody">
                                {datlich.filter(appointment => appointment).map((appointment: any, index: number) => (
                                    <tr className='text-center rowSelected' key={appointment._id} onClick={() => setDataSelected(appointment)}>
                                        <td>{index + 1}</td>
                                        <td className="text-break">{appointment?.benhnhan?.hoten || 'Unknown'}</td>
                                        <td className="text-break">{moment(appointment?.benhnhan?.ngaysinh).format('YYYY-MM-DD') || 'Unknown'}</td>
                                        <td>{appointment?.motabenh || 'Unknown'}</td>
                                        {/* <td className="text-break">{moment(appointment?.ngaydat).format('YYYY-MM-DD')}</td>
                                        <td className="text-break">{moment(appointment?.ngaykham).format('YYYY-MM-DD')}</td> */}
                                        <td style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} className="text-break">{appointment?.trangthai === TrangThaiDatKham.Dangxet ? <Badge bg="warning">Chưa Duyệt</Badge> : <Badge bg="success">Đã Duyệt</Badge>}</td>
                                        <td onClick={handleHuyKham}><MdDelete /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </Col>
                <Col sm={6}>
                    <div>
                        <div className="w-100">
                            <h3 className="title text-center">Thông Tin</h3>
                        </div>
                        <div className="w-100">
                            <Form className="text-center">
                                <Row>
                                    <Col xs={6}>
                                        <Card className="w-100" style={{ marginTop: '1rem', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}>
                                            <Card.Header className="middle-align"> <h6 className="title">Thông Tin Bệnh Nhân</h6></Card.Header>
                                            <ListGroup variant="flush">
                                                <ListGroup.Item style={{ padding: '1rem 1.25rem', borderBottom: '1px solid #f8f9fa' }}>
                                                    <strong>Họ tên:</strong> {hoten}
                                                </ListGroup.Item>
                                                <ListGroup.Item style={{ padding: '1rem 1.25rem', borderBottom: '1px solid #f8f9fa' }}>
                                                    <strong>Số điện thoại:</strong> {phoneNumber}
                                                </ListGroup.Item>
                                                <ListGroup.Item style={{ padding: '1rem 1.25rem', borderBottom: '1px solid #f8f9fa' }}>
                                                    <strong>Ngày sinh:</strong> {moment(ngaysinh.toDate()).format("YYYY-MM-DD")}
                                                </ListGroup.Item>
                                                <ListGroup.Item style={{ padding: '1rem 1.25rem' }}>
                                                    <strong>Địa chỉ:</strong> {diachi}
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </Card>
                                    </Col>
                                    <Col xs={6}>
                                        <Form.Group className="mb-3" controlId="formUserDescription">
                                            <Form.Label>Mô Tả Bệnh</Form.Label>
                                            <Form.Control
                                                as="textarea" rows={7}
                                                placeholder={mota || "Mô tả ..."}
                                                value={mota}
                                                readOnly
                                            />
                                        </Form.Group>


                                        <div className="w-100 d-flex justify-content-around">
                                            <FormControl sx={{ minWidth: "25%" }} className="mt-3">
                                                <InputLabel id="demo-simple-select-helper-label">Phiên</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-helper-label"
                                                    id="demo-simple-select-helper"
                                                    value={phien}
                                                    label="Phiên"
                                                    onChange={handleChangePhien}
                                                >
                                                    <MenuItem value={"7:00-8:00"}>7:00-8:00</MenuItem>
                                                    <MenuItem value={"7:30-8:30"}>7:30-8:30</MenuItem>
                                                    <MenuItem value={"8:00-8:30"}>8:00-8:30</MenuItem>
                                                    <MenuItem value={"8:00-9:00"}>8:00-9:00</MenuItem>
                                                    <MenuItem value={"9:00-9:30"}>9:00-9:30</MenuItem>
                                                    <MenuItem value={"9:30-10:00"}>9:30-10:00</MenuItem>
                                                    <MenuItem value={"9:00-10:00"}>9:00-10:00</MenuItem>
                                                    <MenuItem value={"10:00-11:00"}>10:00-11:00</MenuItem>
                                                    <MenuItem value={"10:30-11:00"}>10:30-11:00</MenuItem>
                                                    <MenuItem value={"13:00-14:00"}>13:00-14:00</MenuItem>
                                                    <MenuItem value={"13:30-14:00"}>13:30-14:00</MenuItem>
                                                    <MenuItem value={"14:00-14:30"}>14:00-14:30</MenuItem>
                                                    <MenuItem value={"15:00-15:30"}>15:00-15:30</MenuItem>
                                                    <MenuItem value={"15:00-16:00"}>15:00-16:00</MenuItem>
                                                    <MenuItem value={"16:00-16:30"}>15:00-16:00</MenuItem>
                                                    <MenuItem value={"16:00-17:00"}>16:00-17:00</MenuItem>
                                                </Select>
                                            </FormControl>
                                            <Form.Group controlId="formNgaykham" className="mt-2">
                                                <DatePickerValue label={'Ngày Khám'} value={ngaykham} onChange={handleDateNgayKhamChange} />
                                            </Form.Group>
                                        </div>

                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </div>
                    <Row className="mt-3">
                        <div className="mt-3 w-100 d-flex justify-content-around">
                            <Button className="me-1" onClick={handleXacNhan}>Xác Nhận</Button>
                            <Button className="me-1" onClick={handleTaoXacNhan}>Tạo Xác Nhận</Button>
                            <Button onClick={handleHuyKham}>Hủy Khám</Button>
                        </div>
                    </Row>
                    <Row className="mt-3">
                        <div className="w-100 d-flex justify-content-between">
                            <div className="d-flex justify-content-start">
                                <InputGroup>
                                    <InputGroup.Text id="basic-addon1">Tìm Kiếm</InputGroup.Text>
                                    <Form.Control
                                        placeholder="tìm kiếm"
                                        aria-label="Tìm Kiếm"
                                        aria-describedby="basic-addon1"
                                        value={searchText}
                                        onChange={(e) => setSearchText(e.target.value)}
                                    />
                                </InputGroup>
                                {/* <InputGroup>
                                    <InputGroup.Text id="basic-addon1">Ngày Sinh</InputGroup.Text>
                                    <Form.Control
                                        placeholder="Ngày Sinh"
                                        aria-label="Ngày Sinh"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                                <InputGroup>
                                    <InputGroup.Text id="basic-addon1">CCCD</InputGroup.Text>
                                    <Form.Control
                                        placeholder="CCCD"
                                        aria-label="CCCD"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup> */}
                            </div>
                        </div>
                        <div style={{ height: 400, width: '100%' }}>
                            <DataGrid
                                /*  rows={dataBenhNhan} */
                                rows={filteredRows}
                                columns={columns}
                                getRowId={(row) => row?._id}
                                onRowClick={handleRowClick}
                                autoPageSize
                            />
                        </div>
                    </Row>
                </Col>


                <Col sm={3} className="border-left">
                    <h5 className="title">Danh sách phòng</h5>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Tên Phòng</th>
                                <th>Chuyên Khoa</th>
                                <th>Chọn</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Phongdata?.getAllPhong.filter((item) => item?._id !== '6604355793235cb47fc8d56a' && item?._id !== '6603f28417572ba8295a3581').map((item: any) => (
                                <tr key={item._id} className="text-center">
                                    <td style={{ padding: '0' }} className="align-middle">{item.tenphong}</td>
                                    <td style={{ padding: '0' }} className="align-middle">{item.chuyenkhoa?.tenkhoa}</td>
                                    <td style={{ padding: '0' }} className="align-middle">
                                        <FormControlLabel
                                            label={''}
                                            control={<Checkbox checked={selectedValues.includes(item._id)} onChange={handleChange(item._id)} />}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row >
        </>
    );
}


export default DatLich;
