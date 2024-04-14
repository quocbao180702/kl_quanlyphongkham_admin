import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { DichVuInput, Thuoc, Vattuyte, useCreateHoaDonMutation, useCreateToaThuocMutation, useGetAllBenhQuery, useGetAllThuocQuery, useGetAllVattuyteQuery, useUpdateHoaDonMutation, useUpdateTrangThaiKhamMutation } from "../../graphql-definition/graphql";
import { ChangeEvent, FormEvent, useContext, useEffect, useMemo, useState } from "react";
import { Autocomplete, Checkbox, FormControlLabel, Grid, TextField } from "@mui/material";
import { IoAddOutline } from "react-icons/io5";
import DatePickerValue from "../../components/DatePicker";
import dayjs, { Dayjs } from 'dayjs';
import { EditContext } from ".";
import { GrAddCircle, GrSubtractCircle } from "react-icons/gr";



function KhamBenhForm({ selected, dataSelected, bacsiId, idPhieuXacNhan, refetchDAXETNGHIEM, refetchHOANTAT }: any) {
    const { data: benhData, loading: benhLoading, error: benhError } = useGetAllBenhQuery();
    const { data: thuocData, loading: thuocLoading, error: thuocError } = useGetAllThuocQuery();
    const [selectedBenh, setSelectedBenh] = useState([]);
    const [benhnhanId, setBenhNhanId] = useState('');
    const [bhyt, setBHYT] = useState('');
    const [label] = useState('ngày tái khám');
    const [ngaytaikham, setNgayTaiKham] = useState<Dayjs>(dayjs());;
    const [selectedBenhPhu, setSelectedBenhPhu] = useState([]);
    const [hangs, setHangs] = useState([{ id: 0, idThuoc: '', tenthuoc: '', giaBHYT: '', giaKhongBHYT: '', soLuong: '' }]);
    const [selectedItems, setSelectedItems] = useState<DichVuInput[]>([]);

    const { isEditing, setIsEditing }: any = useContext(EditContext);
    const [editKham, setEditKham] = useState(false);

    useEffect(() => {
        setEditKham(isEditing);
    }, [isEditing])


    const handleThuocChange = (event: React.ChangeEvent<{}>, value: any, index: number) => {
        const newHangs = [...hangs];
        newHangs[index].idThuoc = value ? value._id : '';
        newHangs[index].tenthuoc = value ? value.tenPhoBien : '';
        newHangs[index].giaBHYT = value ? value.giaBHYT.toString() : '';
        newHangs[index].giaKhongBHYT = value ? value.giaKhongBHYT.toString() : '';
        setHangs(newHangs);
    };

    const handleSoLuongChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
        const value = event.target.value;
        const newHangs = [...hangs];
        newHangs[index].soLuong = value;
        setHangs(newHangs);
    };

    const handleRowSelect = () => {
        selected(undefined);
    };

    const themHang = () => {
        const newId = hangs.length;
        const newHang = { id: newId, idThuoc: '', tenthuoc: '', giaBHYT: '', giaKhongBHYT: '', soLuong: '' };
        setHangs([...hangs, newHang]);
    };

    const xoaHang = (index: number) => {
        const newHangs = [...hangs];
        newHangs.splice(index, 1);
        setHangs(newHangs);
    };

    const handleBenhChange = (event: ChangeEvent<unknown>, value: any) => {
        const selectedBenhIds = value.map((benh: any) => benh?._id);
        setSelectedBenh(selectedBenhIds)
    };

    const memoizedDataSelected = useMemo(() => dataSelected, [dataSelected]);

    useEffect(() => {
        if (memoizedDataSelected) {
            setBenhNhanId(memoizedDataSelected._id);
            setBHYT(memoizedDataSelected?.bhyt)
        }
    }, [memoizedDataSelected])

    const handleBenhPhuChange = (event: ChangeEvent<unknown>, value: any) => {
        const selectedBenhPhuIds = value.map((benh: any) => benh?._id);
        setSelectedBenhPhu(selectedBenhPhuIds)
    };

    const handleDateChange = (date: any) => {
        setNgayTaiKham(date.$d);
    };

    const { data: dateVattu, loading: loadingVattu, error: errorVattu } = useGetAllVattuyteQuery();

    const [createToaThuoc, _] = useCreateToaThuocMutation();
    const [updateTrangThaiKham] = useUpdateTrangThaiKhamMutation();
    const [createHoaDon] = useCreateHoaDonMutation();
    const [updateHoaDon] = useUpdateHoaDonMutation();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        let thongtinthuoc: DichVuInput[] = [];

        if (hangs.length > 0) {
            thongtinthuoc = hangs.map(thongtin => ({
                ten: thongtin?.tenthuoc || "",
                gia: bhyt ? (parseFloat(thongtin?.giaBHYT) || 0) : (parseFloat(thongtin?.giaKhongBHYT) || 0),
                soluong: thongtin?.soLuong ? parseInt(thongtin?.soLuong) : 1,
                thanhtien: bhyt ? (parseFloat(thongtin?.giaBHYT) || 0) : (parseFloat(thongtin?.giaKhongBHYT) || 0) * (thongtin?.soLuong ? parseInt(thongtin.soLuong) : 1)
            }));
        }

        const thuocs = hangs.map(thuoc => thuoc.idThuoc)
        const soluong = hangs.map(thuoc => Number(thuoc.soLuong))

        console.log('data bệnh là: ', selectedBenh);
        console.log('data bệnh phụ là: ', selectedBenhPhu);
        console.log('data thuốc: ', thuocs);
        console.log('data số lượng', soluong);
        console.log('bệnh nhân id:', benhnhanId);
        console.log('bhyt: ', bhyt ? true : false);
        console.log('ngày tạo: ', dayjs().format('YYYY/MM/DD'));
        const dayjsNgayTaiKham = dayjs(ngaytaikham);
        console.log('ngày tái khám:', dayjsNgayTaiKham.format('YYYY/MM/DD'));

        try {
            if (benhnhanId && bacsiId) {
                const [response, update] = await Promise.all([
                    createToaThuoc({
                        variables: {
                            "input": {
                                "benhnhan": benhnhanId,
                                "bacsi": bacsiId,
                                "thuocs": thuocs,
                                "benhs": selectedBenh,
                                "soluongs": soluong,
                                "bhyt": bhyt ? true : false,
                                "ngaytaikham": dayjsNgayTaiKham,
                                "ngaytao": dayjs().format('YYYY/MM/DD')
                            }
                        }
                    }),
                    updateTrangThaiKham({
                        variables: {
                            "id": idPhieuXacNhan,
                            "trangthai": "HOANTAT"
                        }
                    })
                ]);
                try {
                    const response = await createHoaDon({
                        variables: {
                            "input": {
                                "benhnhan": benhnhanId,
                                "bhyt": bhyt ? true : false,
                                "ngaytao": dayjs().format('YYYY/MM/DD')
                            }
                        }
                    })
                    if (response?.data?.createHoadon?._id) {
                        const update = await updateHoaDon({
                            variables: {
                                "input": {
                                    "benhnhan": benhnhanId,
                                    "bhyt": bhyt ? true : false,
                                    "ngaytao": dayjs().format('YYYY/MM/DD'),
                                    "id": response?.data?.createHoadon?._id,
                                    "thuocs": thongtinthuoc,
                                    "vattuyte": selectedItems
                                }
                            }
                        })
                    }
                    else {
                        console.log('không tìm thấy id để update')
                    }
                } catch (error) {
                    console.log(error)
                }
                refetchDAXETNGHIEM();
                refetchHOANTAT();
                setEditKham(true);
            }
            else {
                console.log('Không thể tạo toa thuốc')
            }
            handleRowSelect();
            setNgayTaiKham(dayjs())
        } catch (error) {
            console.log('lỗi thêm toa thuốc: ', error)
        }
    }

    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>, item: Vattuyte) => {
        const isChecked = event.target.checked;
        if (isChecked) {
            setSelectedItems([...selectedItems, {
                ten: item.tenvattu,
                gia: item.chiphi[0]?.gia,
                soluong: item.soluong,
                thanhtien: item.chiphi[0]?.gia * item.soluong
            }]);
        } else {
            // Nếu checkbox bị bỏ chọn, loại bỏ thông tin của hàng khỏi mảng selectedItems
            setSelectedItems(selectedItems.filter(selectedItem => selectedItem.ten !== item.tenvattu));
        }
    };



    if (benhLoading) {
        return (<>
            <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div></>)
    }
    if (thuocLoading) {
        return (<>
            <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div></>)
    }
    if (benhError) return <div>{benhError?.message}</div>;
    if (thuocError) return <div>{thuocError?.message}</div>;

    return (
        <>
            <Form
                onSubmit={handleSubmit}
                className={`w-100`}
            >
                <fieldset disabled={editKham}>
                    <hr />
                    <h5>Bệnh</h5>
                    <hr />
                    <div className="d-flex justify-content-center">
                        <Autocomplete
                            multiple
                            id="multiple-limit-tags"
                            options={benhData?.getAllBenh || []}
                            getOptionLabel={(option) => option.tenbenh}
                            onChange={handleBenhChange}
                            renderInput={(params) => (
                                <TextField {...params} label="Bệnh Chính" placeholder="Tên bệnh" />
                            )}
                            sx={{ width: '75%' }}
                        />

                        <Autocomplete
                            multiple
                            id="multiple-limit-tags"
                            options={benhData?.getAllBenh || []}
                            getOptionLabel={(option) => option.tenbenh}
                            onChange={handleBenhPhuChange}
                            renderInput={(params) => (
                                <TextField {...params} label="Bệnh Phụ" placeholder="Tên bệnh" />
                            )}
                            sx={{ width: '75%' }}
                        />
                    </div>
                    {/* <Row> */}
                    {/* </Row> */}
                    <hr />
                    <h5>Thuốc</h5>
                    <hr />
                    {/* <Row> */}
                    <div>
                        {hangs.map((hang, index) => (
                            <Grid container spacing={3} key={hang.id}>
                                <Grid item md={7}>
                                    <Autocomplete
                                        id={`multiple-limit-tags-${hang.id}`}
                                        options={thuocData?.getAllThuoc || []}
                                        getOptionLabel={(option) => option?.tenthuoc}
                                        onChange={(event, value) => handleThuocChange(event, value, index)}
                                        renderInput={(params) => (
                                            <TextField {...params} label="Thuốc" placeholder="Tên thuốc..." />
                                        )}
                                        sx={{ width: '100%' }}
                                    />
                                </Grid>
                                <Grid item md={3}>
                                    <TextField
                                        id={`soLuong-${hang.id}`}
                                        label="Số lượng..."
                                        type="number"
                                        onChange={(event: ChangeEvent<HTMLInputElement>) => handleSoLuongChange(event, index)}
                                        style={{ width: '100%' }}
                                    />
                                </Grid>
                                <Grid item md={2}>
                                    <Button onClick={() => xoaHang(index)} variant="contained" color="secondary">
                                        <GrSubtractCircle color="red" />
                                    </Button>
                                </Grid>
                            </Grid>
                        ))}
                        <Button onClick={themHang} variant="contained" color="primary">
                            <GrAddCircle color="red" />
                        </Button>

                    </div>
                    {/* </Row> */}


                    <Row>
                        <Col md={5}>
                            <DatePickerValue label={label} value={ngaytaikham} onChange={handleDateChange} />
                        </Col>
                    </Row>
                    <hr />
                    <h5>Vật tư y tế</h5>
                    <hr />
                    <div>
                        <Table responsive bordered hover>
                            <thead>
                                <tr className="text-center table-primary">
                                    <th>Tên Vật Tư</th>
                                    <th>Giá</th>
                                    <th>Số Lượng</th>
                                    <th>Đơn Vị Tính</th>
                                    <th>Thao Tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dateVattu?.getAllVatTuYTe?.map((item: Vattuyte) => (
                                    <tr key={item?._id} className="text-center">
                                        <td style={{ padding: '0' }} className="align-middle">{item?.tenvattu}</td>
                                        <td style={{ padding: '0' }} className="align-middle">{item?.chiphi[0]?.gia}</td>
                                        <td style={{ padding: '0' }} className="align-middle">{item?.soluong}</td>
                                        <td style={{ padding: '0' }} className="align-middle">{item?.dvt}</td>
                                        <td style={{ padding: '0' }} className="align-middle">
                                            <FormControlLabel
                                                label={''}
                                                control={<Checkbox checked={selectedItems.some(selectedItem => selectedItem.ten === item.tenvattu)} onChange={(event) => handleCheckboxChange(event, item)} />}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                    <Button variant="primary" type="submit" className="mt-3 mx-auto w-100">
                        Hoàn tất khám
                    </Button>
                </fieldset>
            </Form>
        </>
    );
}


export default KhamBenhForm;
