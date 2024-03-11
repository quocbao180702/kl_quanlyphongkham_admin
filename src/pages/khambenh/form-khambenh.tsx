import { Button, Col, Form, Row } from "react-bootstrap";
import { useCreateToaThuocMutation, useGetAllBenhQuery, useGetAllThuocQuery } from "../../graphql-definition/graphql";
import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { IoAddOutline } from "react-icons/io5";
import DatePickerValue from "../../components/DatePicker";
import dayjs, { Dayjs } from 'dayjs';

function KhamBenhForm({ dataSelected }: any) {
    const { data: benhData, loading: benhLoading, error: benhError } = useGetAllBenhQuery();
    const { data: thuocData, loading: thuocLoading, error: thuocError } = useGetAllThuocQuery();
    const [selectedBenh, setSelectedBenh] = useState([]);
    const [benhnhanId, setBenhNhanId] = useState('');
    const [bhyt, setBHYT] = useState('');
    const [label] = useState('ngày tái khám');
    const [ngaytaikham, setNgayTaiKham] = useState<Dayjs>(dayjs());;
    const [selectedBenhPhu, setSelectedBenhPhu] = useState([]);
    const [selectedThuoc, setSelectedThuoc] = useState<{ id: string; soLuong: number }[]>([]);
    const [thuocs, setThuocs] = useState<string[]>([]);
    const [soLuong, setSoLuong] = useState<number[]>([]);
    const [nextRowKey, setNextRowKey] = useState(1);
    const [rows, setRows] = useState<JSX.Element[]>([]);

    const handleBenhChange = (value: any) => {
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

    const handleBenhPhuChange = (value: any) => {
        const selectedBenhPhuIds = value.map((benh: any) => benh?._id);
        setSelectedBenhPhu(selectedBenhPhuIds)
    };

    const handleDateChange = (date: any) => {
        setNgayTaiKham(date.$d);
    };

    const handleThuocChange = (value: any, rowKey: number) => {
        setSelectedThuoc(prevSelectedThuoc => {
            const newSelectedThuoc = [...prevSelectedThuoc];
            newSelectedThuoc[rowKey] = { id: value?._id || "", soLuong: newSelectedThuoc[rowKey]?.soLuong || 0 };
            return newSelectedThuoc;
        });
    };

    const handleSoLuongChange = (event: ChangeEvent<HTMLInputElement>, rowKey: number) => {
        setSelectedThuoc(prevSelectedThuoc => {
            const newSelectedThuoc = [...prevSelectedThuoc];
            newSelectedThuoc[rowKey] = { id: newSelectedThuoc[rowKey]?.id || "", soLuong: parseInt(event.target.value) || 0 };
            return newSelectedThuoc;
        });
    };

    useEffect(() => {
        const newThuocs = selectedThuoc.map(thuoc => thuoc.id);
        const newSoLuong = selectedThuoc.map(thuoc => thuoc.soLuong);
        setThuocs(newThuocs);
        setSoLuong(newSoLuong);
    }, [selectedThuoc]);

    const [createToaThuoc, _] = useCreateToaThuocMutation();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('data bệnh là: ', selectedBenh);
        console.log('data bệnh phụ là: ', selectedBenhPhu);
        console.log('data thuốc: ', thuocs);
        console.log('data số lượng', soLuong);
        console.log('bệnh nhân id:', benhnhanId);
        console.log('bhyt: ', bhyt ? true : false);
        console.log('ngày tạo: ', dayjs().format('YYYY/MM/DD'));
        const dayjsNgayTaiKham = dayjs(ngaytaikham);
        console.log('ngày tái khám:', dayjsNgayTaiKham.format('YYYY/MM/DD'));

        try {
            await createToaThuoc({
                variables: {
                    "input": {
                        "benhnhan": benhnhanId,
                        "bacsi": "65e4771ce1a675b267dd2e76",
                        "thuocs": thuocs,
                        "benhs": selectedBenh,
                        "soluongs": soLuong,
                        "bhyt": bhyt ? true : false,
                        "ngaytaikham": dayjsNgayTaiKham,
                        "ngaytao": dayjs().format('YYYY/MM/DD')
                    }
                }
            })
            setNgayTaiKham(dayjs())
        } catch (error) {
            console.log('lỗi thêm toa thuốc: ', error)
        }
    }

    const handleAddRow = () => {
        const newRowKey = nextRowKey;
        const newRow = (
            <Row key={newRowKey}>
                <Col md={9}>
                    <Autocomplete
                        id={`multiple-limit-tags-${newRowKey}`}
                        options={thuocData?.getAllThuoc || []}
                        getOptionLabel={(option) => option?.tenthuoc}
                        renderInput={(params) => (
                            <TextField {...params} label="Thuốc" placeholder="Tên thuốc..." />
                        )}
                        onChange={(value) => handleThuocChange(value, newRowKey)}
                        sx={{ width: '100%' }}
                    />
                </Col>
                <Col md={3}>
                    <TextField
                        id={`soLuong-${newRowKey}`}
                        label="Số lượng..."
                        type="number"
                        onChange={(event) => handleSoLuongChange(event as ChangeEvent<HTMLInputElement>, newRowKey)}
                        style={{ width: '100%' }}
                    />
                </Col>
            </Row>
        );
        setRows(prevRows => [...prevRows, newRow]);
        setNextRowKey(prevKey => prevKey + 1);
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
            <Form onSubmit={handleSubmit} className="w-100">
                <hr />
                <h5>Bệnh</h5>
                <hr />
                <Row>
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
                        className="mt-3"
                        id="multiple-limit-tags"
                        options={benhData?.getAllBenh || []}
                        getOptionLabel={(option) => option.tenbenh}
                        onChange={handleBenhPhuChange}
                        renderInput={(params) => (
                            <TextField {...params} label="Bệnh Phụ" placeholder="Tên bệnh" />
                        )}
                        sx={{ width: '75%' }}
                    />
                </Row>
                <hr />
                <h5>Thuốc</h5>
                <hr />
                <Row>
                    <Col md={7}>
                        <Autocomplete
                            id="multiple-limit-tags"
                            options={thuocData?.getAllThuoc || []}
                            getOptionLabel={(option) => option?.tenthuoc}
                            onChange={(value) => handleThuocChange(value, 0)}
                            renderInput={(params) => (
                                <TextField {...params} label="Thuốc" placeholder="Tên thuốc..." />
                            )}
                            sx={{ width: '100%' }}
                        />
                    </Col>
                    <Col md={3}>
                        <TextField
                            id={`soLuong-0`}
                            label="Số lượng..."
                            type="number"
                            onChange={(event) => handleSoLuongChange(event as ChangeEvent<HTMLInputElement>, 0)}
                            style={{ width: '100%' }}
                        />
                    </Col>
                    <Col md={2}>
                        <Button onClick={handleAddRow}><IoAddOutline /></Button>
                    </Col>
                </Row>
                {rows}

                <Row>
                    <Col md={5}>
                        <DatePickerValue label={label} value={ngaytaikham} onChange={handleDateChange} />
                        {/* <DatePicker />  */}
                    </Col>
                </Row>
                <Button variant="primary" type="submit" className="mt-3 mx-auto w-100">
                    Hoàn tất khám
                </Button>
            </Form>
        </>
    );
}


export default KhamBenhForm;
