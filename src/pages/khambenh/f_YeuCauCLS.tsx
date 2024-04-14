import { Button, Form, Modal, Row, Table } from "react-bootstrap";
import { DichVuInput, LinkImage, LoaiCanLamSang, useCreateHoadonchidinhcanlamsangMutation, useCreatePhieuchidinhcanlamsangMutation, useGetAllLoaiClsQuery, useUpdateTrangThaiKhamMutation } from "../../graphql-definition/graphql";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { Checkbox, FormControlLabel } from "@mui/material";
import dayjs, { Dayjs } from 'dayjs';

function YeuCauCanLamSang({ show, onHide, benhnhan, bacsi, idPhieuXacNhan, refetchChoKham, refetchCHOXETNGHIEM }: any) {

    const { data, loading, error } = useGetAllLoaiClsQuery();
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    const [selectedDichVu, setSelectedDichVu] = useState<DichVuInput[]>([]);
    const [benhnhanId, setBenhNhanId] = useState();
    const [bhyt, setBHYT] = useState(Boolean);

    const [createphieuchidinhCLS] = useCreatePhieuchidinhcanlamsangMutation();
    const [updateTrangThaiKham] = useUpdateTrangThaiKhamMutation();
    const [createHoadonchidinhCLS] = useCreateHoadonchidinhcanlamsangMutation();

    useEffect(() => {
        if (benhnhan?._id !== undefined) {
            setBenhNhanId(benhnhan?._id);
        }
        benhnhan?.bhyt ? setBHYT(true) : setBHYT(false)
        console.log('bệnh nhân là yêu cầu là', benhnhan)
        console.log('bác sĩ là: ', bacsi)
    }, [benhnhan])


    const HandleUpdate = async () => {
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
                                "bhyt": bhyt,
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
                try {
                    /* let chitietcanlamsang: DichVuInput[] = [];

                    if (response?.data?.createPhieuchidinhcanlamsang?.ketquacanlamsangs) {
                        chitietcanlamsang = response.data.createPhieuchidinhcanlamsang.ketquacanlamsangs.map(thongtin => ({
                            ten: thongtin?.loaicanlamsang?.tenxetnghiem || "",
                            gia: thongtin?.loaicanlamsang?.gia || 0,
                            soluong: 1,
                            thanhtien: (thongtin?.loaicanlamsang?.gia || 0) * 1
                        }));
                    } */

                    await createHoadonchidinhCLS({
                        variables: {
                            "input": {
                                "benhnhan": benhnhanId,
                                "bhyt": bhyt,
                                "chitietcanlamsang": selectedDichVu
                            }
                        }
                    });
                } catch (error) {
                    console.log(error);
                }
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

    const handleChange = (item: LoaiCanLamSang) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;
        const chitietcanlamsang = {
            ten: item?.tenxetnghiem || "",
            gia: item?.gia || 0,
            soluong: 1,
            thanhtien: (item?.gia || 0) * 1
        }
        if (isChecked) {
            setSelectedValues(prevSelectedValues => [...prevSelectedValues, item?._id]);
            setSelectedDichVu(prevSelectedDichVu => [...prevSelectedDichVu, chitietcanlamsang]);
        } else {
            setSelectedValues(prevSelectedValues => prevSelectedValues.filter(value => value !== item?._id));
            setSelectedDichVu(prevSelectedDichVu => prevSelectedDichVu.filter(value => value.ten !== item?.tenxetnghiem));
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
                    <h6 className="mr-2">Bệnh Nhân: </h6>
                    {benhnhan?.hoten} - {benhnhan?.gioitinh ? 'Nam' : 'Nữ'} - {benhnhan?.diachi}- {benhnhan?.user?.phoneNumber}
                    <hr />
                    <div style={{ border: "1px solid black" }}></div>
                </Row>
                <Row>
                    <h6 className="mr-2">Bác Sĩ: </h6>
                    {bacsi?.hoten} - {bacsi?.phongs?.tenphong} - {bacsi?.chuyenkhoa?.tenkhoa} - {bacsi?.user?.phoneNumber}
                    <hr />
                    <div style={{ border: "1px solid black" }}></div>
                </Row>
                <Row>
                    <h6>Loại Xét Nghiệm</h6>
                    <Table responsive>
                        <thead>
                            <tr className="text-center">
                                <th>Loại Cận Sàng</th>
                                <th>Tên Xét Nghiệm</th>
                                <th>Giá</th>
                                <th>Chọn</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.getAllLoaiCLS.map((item: LoaiCanLamSang) => (
                                <tr key={item._id} className="text-center">
                                    <td style={{ padding: '0' }} className="align-middle">{item?.loaicanlamsang}</td>
                                    <td style={{ padding: '0' }} className="align-middle">{item?.tenxetnghiem}</td>
                                    <td style={{ padding: '0' }} className="align-middle">{item?.gia}</td>
                                    <td style={{ padding: '0' }} className="align-middle">
                                        <FormControlLabel
                                            label={''}
                                            control={<Checkbox checked={selectedValues.includes(item._id)} onChange={handleChange(item)} />}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
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