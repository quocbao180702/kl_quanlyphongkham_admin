import { Button, Form, Modal, Row } from "react-bootstrap";
import { LinkImage, LoaiCanLamSang, useCreatePhieuchidinhcanlamsangMutation, useGetAllLoaiClsQuery, useUpdateTrangThaiKhamMutation } from "../../graphql-definition/graphql";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import UploadImage from "../../components/UploadImage";
import { Box, Checkbox, FormControlLabel } from "@mui/material";
import { message } from "antd";
import dayjs, { Dayjs } from 'dayjs';

function YeuCauCanLamSang({ show, onHide, benhnhan, bacsi, idPhieuXacNhan, refetchChoKham, refetchCHOXETNGHIEM }: any) {

    const { data, loading, error } = useGetAllLoaiClsQuery();
    const [checked, setChecked] = useState([false, false, false, false, false]);
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    const [benhnhanId, setBenhNhanId] = useState();
    const [bhyt, setBHYT] = useState(Boolean);

    const [createphieuchidinhCLS] = useCreatePhieuchidinhcanlamsangMutation();
    const [updateTrangThaiKham] = useUpdateTrangThaiKhamMutation()

    useEffect(() => {
        if (benhnhan?._id !== undefined) {
            setBenhNhanId(benhnhan?._id);
        }
        benhnhan?.bhyt ? setBHYT(true) : setBHYT(false)
        console.log('bệnh nhân là yêu cầu là', benhnhan)
        console.log('bác sĩ là: ', bacsi)
    }, [benhnhan])


    const HandleUpdate = async () => {
        console.log('code: ', selectedValues)
        console.log('bac si: ', bacsi?._id);
        console.log('benh nhan: ', benhnhanId)
        console.log('bhyt so: ', bhyt)
        console.log('ngaytao: ', dayjs().format('YYYY-MM-DD'))
        try {
            if (bacsi?._id && benhnhanId && bhyt && idPhieuXacNhan) {
                const ketqua = selectedValues.map(value => ({ loaicanlamsang: value }));

                const [response, update] = await Promise.all([
                    createphieuchidinhCLS({
                        variables: {
                            "phieuchidinh": {
                                "benhnhan": benhnhanId,
                                "bacsi": bacsi?._id,
                                "phieuxacnhan": idPhieuXacNhan,
                                "bhyt": true,
                                "ngaytao": dayjs().format('YYYY-MM-DD')
                            },
                            "ketqua": ketqua
                        }
                    }),
                    updateTrangThaiKham({
                        variables: {
                            "id": idPhieuXacNhan,
                            "trangthai": "CHOXETNGHIEM"
                        }
                    })
                ]);
                refetchCHOXETNGHIEM();
                refetchChoKham();
            }
            else {
                console.log('trường dữ liệu có thể bị thiếu:  ', bacsi?._id, benhnhanId, bhyt)
            }
        }
        catch (error) {
            console.log(error);
        }
        onHide();
    }


    const handleChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const newChecked = [...checked];
        newChecked[index] = event.target.checked;
        setChecked(newChecked);

        const newSelectedValues = newChecked.reduce((values: string[], isChecked, idx) => {
            if (isChecked && data?.getAllLoaiCLS[idx]._id) {
                values.push(data.getAllLoaiCLS[idx]._id);
            }
            return values;
        }, []);

        setSelectedValues(newSelectedValues);
    };

    const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
        const allChecked = event.target.checked;
        setChecked(new Array(5).fill(allChecked));

        if (data?.getAllLoaiCLS) {
            const newSelectedValues = allChecked ? data?.getAllLoaiCLS?.map((item: any) => item._id) : [];
            setSelectedValues(newSelectedValues);
        }
    };


    const renderCheckboxes = () => {
        if (loading) {
            return (
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            );
        }
        if (error) {
            return (
                <div>{error.message}</div>
            );
        } else {
            return (
                <>
                    <FormControlLabel
                        className="mt-3"
                        label="Chọn tất cả"
                        control={
                            <Checkbox
                                checked={checked.every((value) => value)}
                                indeterminate={checked.some((value) => value) && !checked.every((value) => value)}
                                onChange={handleSelectAll}
                            />
                        }
                    />
                    {data?.getAllLoaiCLS?.map((item: LoaiCanLamSang, index: number) => (
                        <FormControlLabel
                            key={item?._id}
                            label={item?.tenxetnghiem}
                            value={item._id}
                            control={<Checkbox checked={checked[index]} onChange={handleChange(index)} />}
                        />
                    ))}
                </>
            );
        }
    };


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
                    Yêu cầu xét nghiệm
                </Modal.Title>
                <Button variant="link" onClick={onHide}>
                    <MdClose style={{ fontSize: '1.5rem' }} />
                </Button>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <h6>Bệnh Nhân</h6>
                    Bệnh nhân: {benhnhan?.hoten} - {benhnhan?.gioitinh ? 'Nam' : 'Nữ'} - {benhnhan?.diachi}- {benhnhan?.user?.phoneNumber}
                    <hr />
                    <div style={{ border: "1px solid black" }}></div>
                </Row>
                <Row>
                    <h6>Bác Sĩ</h6>
                    Bác sĩ: {bacsi?.hoten} - {bacsi?.phongs?.tenphong} - {bacsi?.chuyenkhoa?.tenkhoa} - {bacsi?.user?.phoneNumber}
                    <hr />
                    <div style={{ border: "1px solid black" }}></div>
                </Row>
                <Row>
                    <h6>Loại Xét Nghiệm</h6>
                    {renderCheckboxes()}
                </Row>
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

export default YeuCauCanLamSang;