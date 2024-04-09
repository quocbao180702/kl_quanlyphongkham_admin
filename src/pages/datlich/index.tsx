import { useSubscription } from "@apollo/client";
import { Button, Col, Form, InputGroup, Row, Table } from "react-bootstrap";
import moment from "moment";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { newDatLichSubscription } from "../../../codegen/graphql-definition/subcriptions";
import { Phong, useCreatePhieuXacNhanMutation, useDeleteDatlichMutation, useGetAllBenhNhanNoPaginationQuery, useGetAllBenhNhanQuery, useGetAllDatLichbyTrangThaiQuery, useGetAllPhongQuery, useUpdateTrangThaiDatLichMutation } from "../../graphql-definition/graphql";
import { MdDelete } from "react-icons/md";
import { Alert, Autocomplete, Checkbox, FormControlLabel, Paper, TableCell, TableRow, TextField } from "@mui/material";
import DatePickerValue from "../../components/DatePicker";
import dayjs, { Dayjs } from 'dayjs';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface Datlich {
    _id: string;
    benhnhan: {
        _id: string;
        hoten: string;
        ngaysinh: string;
    };
    motabenh: string;
    ngaydat: string;
    ngaykham: string;
    trangthai: string;
}
interface BenhNhan {
    _id: string
    hoten: string
    ngaysinh: any
    gioitinh: boolean
    diachi: string
    cccd: string
    bhyt: string
    user: {
        _id: string
        phoneNumber: string
        email: string
    }
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

function DatLich() {
    const [datlich, setDatlich] = useState<Datlich[]>([]);
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    const [selected, setDataSelected] = useState<Datlich>()
    const [hoten, setHoten] = useState('');
    const [ngaysinh, setNgaySinh] = useState<Dayjs>(dayjs());
    const [ngaykham, setNgayKham] = useState<Dayjs>(dayjs());
    const [phongs, setPhongs] = useState([]);
    const [bhyt, setBhyt] = useState<boolean>();
    const [mota, setMota] = useState('');
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [checkedItems, setCheckedItems] = useState<string[]>([]);
    const [showWarning, setshowWarning] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [thongbao, setThongBao] = useState('')
    const [value, setValue] = useState<string | null>();
    const [idBenhNhan, setIdBenhNhan] = useState('');
    const [dataBenhNhan, setDataBenhNhan] = useState<any[]>([]);


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
            setNgaySinh(dayjs(selected?.benhnhan?.ngaysinh))
            setNgayKham(dayjs(selected?.ngaykham));
        }
    }, [selected])


    const handleRowClick = (params: any) => {
        setIdBenhNhan(params.id);
        setHoten(params.row.hoten);
        setNgaySinh(dayjs(params.row.ngaysinh));
        setBhyt(params.row.bhyt ? true : false)
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
                            ngaytao: dayjs().format('YYYY-MM-DD')
                        }
                    }
                }),
                updateTrangThaiDatLich({
                    variables: {
                        id: selected?._id,
                        trangthai: "XACNHAN"
                    }
                })
            ]);
            existingDatLichrefetch();
            setThongBao('Đã tạo phiếu xác nhận cho bệnh nhân ' + selected?.benhnhan?.hoten + ' lúc: ' + dayjs(ngaykham).format('YYYY-MM-DD'));
            setShowSuccess(true)
            return;
        } catch (error) {
            console.error("Lỗi khi tạo phiếu xác nhận:", error);
        }
    }



    const handleTaoXacNhan = async () => {
        try {

            if (idBenhNhan && selectedValues.length && ngaykham) {
                await createPhieuXacNhan({
                    variables: {
                        "input": {
                            "benhnhan": idBenhNhan,
                            "phongs": selectedValues,
                            "ngaykham": ngaykham,
                            "ngaytao": dayjs().format('YYYY-MM-DD')
                        }
                    }
                })
                setThongBao('Đã tạo phiếu xác nhận');
                setShowSuccess(true);
                setHoten('');
                setBhyt(false);
                setNgaySinh(dayjs());
                setNgayKham(dayjs());
            }
            else {
                setThongBao('Bệnh Nhân Hoặc Phòng Không Đầy Đủ');
                setshowWarning(true);
            }
        } catch (error) {
            console.log('lỗi đã xẩy ra');
        }
    }

    return (
        <>
            <Row>
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

                <Col sm={3}>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Họ Tên</th>
                                <th>Ngày Sinh</th>
                                <th>Mô Tả Bệnh</th>
                                <th>Ngày Đặt</th>
                                <th>Ngày Khám</th>
                                <th>Hủy</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datlich.filter(appointment => appointment).map((appointment: any, index: number) => (
                                <tr className='rowSelected' key={appointment._id} onClick={() => setDataSelected(appointment)}>
                                    <td>{index + 1}</td>
                                    <td>{appointment?.benhnhan?.hoten || 'Unknown'}</td>
                                    <td>{moment(appointment?.benhnhan?.ngaysinh).format('YYYY-MM-DD') || 'Unknown'}</td>
                                    <td>{appointment?.motabenh || 'Unknown'}</td>
                                    <td>{moment(appointment?.ngaydat).format('YYYY-MM-DD')}</td>
                                    <td>{moment(appointment?.ngaykham).format('YYYY-MM-DD')}</td>
                                    <td width={50} onClick={handleHuyKham}><MdDelete /></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
                <Col sm={6}>
                    <Row>
                        <div className="w-100">
                            <h3>Thông Tin</h3>
                        </div>
                        <div className="w-100">
                            <Form className="text-center">
                                <Row>
                                    <Col xs={6}>
                                        <Form.Group className="mb-3" controlId="formUserEmail">
                                            <Form.Label>Bệnh Nhân</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder={hoten || "Họ tên ..."}
                                                value={hoten}
                                                readOnly
                                            />
                                        </Form.Group>

                                    </Col>
                                    <Col xs={6}>
                                        <Form.Group className="mb-3" controlId="formUserDescription">
                                            <Form.Label>Mô Tả</Form.Label>
                                            <Form.Control
                                                as="textarea" rows={3}
                                                placeholder={mota || "Mô tả ..."}
                                                value={mota}
                                                readOnly
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={5}>
                                        <Form.Group controlId="formNgaysinh" className="mt-2">
                                            <DatePickerValue label={'Ngày Sinh'} value={ngaysinh} onChange={handleDateChange} />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={5}>
                                        <Form.Group controlId="formNgaykham" className="mt-2">
                                            <DatePickerValue label={'Ngày Khám'} value={ngaykham} onChange={handleDateNgayKhamChange} />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={2}>
                                        <div className="align-middle">
                                            <Form.Check
                                                type="checkbox"
                                                id="autoSizingCheck"
                                                className="mb-2"
                                                label="BHYT"
                                                checked={bhyt}
                                                onChange={handleCheckboxChange}
                                            />
                                        </div>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Row>
                    <Row>
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
                                    <InputGroup.Text id="basic-addon1">Họ Tên</InputGroup.Text>
                                    <Form.Control
                                        placeholder="Họ Tên"
                                        aria-label="Họ Tên"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                                <InputGroup>
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
                                </InputGroup>
                            </div>
                        </div>
                        <div style={{ height: 400, width: '100%' }}>
                            <DataGrid
                                rows={dataBenhNhan}
                                columns={columns}
                                getRowId={(row) => row?._id}
                                onRowClick={handleRowClick}
                            />
                        </div>
                    </Row>
                </Col>


                <Col sm={3}>
                    <h5>Danh sách phòng</h5>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Tên Phòng</th>
                                <th>Chuyên Khoa</th>
                                <th>Chọn</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Phongdata?.getAllPhong?.map((item: any) => (
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
