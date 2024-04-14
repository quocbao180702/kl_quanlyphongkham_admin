import { Badge, Button, Row, Table } from "react-bootstrap";
import XemHoaDon from "./xemHoaDon";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import moment from "moment";
import { LiaEyeSolid } from "react-icons/lia";
import { useGetAllHoaDonPhieuCanLamSangQuery, useUpdateTinhTrangHoaDonClsMutation } from "../../graphql-definition/graphql";

function HoaDonCanLamSang() {

    const [show, setModalShow] = useState(false)
    const [selectedHoadon, setSelectedHoadon] = useState({})

    const { data, loading, error, refetch } = useGetAllHoaDonPhieuCanLamSangQuery()

    const handleAdd = () => {

    }

    const handleXem = (hoadon: any) => {
        setSelectedHoadon(hoadon);
        setModalShow(true)
    }

    const [updateTrangThaiHoaDonCLS, _] = useUpdateTinhTrangHoaDonClsMutation();
    const handleTrangThai = async (id: string) => {
        try {
            const response = await updateTrangThaiHoaDonCLS({
                variables: {
                    id: id
                }
            })
            refetch();
        } catch (error) {
            console.log(error);
        }
    }

    const handleDelete = (id: string) => {

    }

    if (loading) return <div> ... Loading ... </div>

    if (error) return <div> ... Error ... </div>

    return (
        <>
            <div className="container-fluid">
                <Row className="mt-3">
                    <div className="d-flex justify-content-center">
                        <Button className="mr-3 btn-outline-secondary" onClick={handleAdd}>Tạo Hóa Đơn Cân Lâm Sàng</Button>
                        <Button className="mr-3 btn-outline-primary">Nhập Exel</Button>
                        <Button className="mr-3 btn-outline-success">Xuất Exel</Button>
                        <Button className="mr-3 btn-outline-danger">Xuất PDF</Button>
                    </div>
                </Row>
                <Row className="mt-3">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Họ Tên</th>
                                <th>Ngày Sinh</th>
                                <th>Giới Tính</th>
                                <th>Ngày Tạo</th>
                                <th>BHYT</th>
                                <th>Thành Tiên</th>
                                <th colSpan={3} className="text-center"> Thao Tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.getAllHoaDonPhieuCanLamSang.map((hoadon: any) => (
                                <tr key={hoadon?._id}>
                                    <td>{hoadon?.benhnhan?.hoten}</td>
                                    <td>{moment(hoadon?.benhnhan?.ngaysinh).format('YYYY-MM-DD')}</td>
                                    <td>{hoadon?.benhnhan?.hoten ? 'Nam' : 'Nữ'}</td>
                                    <td>{moment(hoadon?.ngaytao).format('YYYY-MM-DD')}</td>
                                    <td>{hoadon?.bhyt ? 'Có' : 'Không'}</td>
                                    <td>{hoadon?.thanhtien}</td>
                                    <td width={50} className="text-center" onClick={() => handleXem(hoadon)}><LiaEyeSolid /></td>
                                    <td width={150} className="text-center" onClick={() => handleTrangThai(hoadon?._id)}>{hoadon?.tinhtrang ? <Badge bg="success">Đã Thanh Toán</Badge> : <Badge bg="warning">Chưa Thanh Toán</Badge>}</td>
                                    <td width={50} className="text-center" onClick={() => handleDelete(hoadon._id)}>
                                        <MdDelete />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Row>
                <XemHoaDon
                    show={show}
                    onHide={() => setModalShow(false)}
                    hoadon={selectedHoadon}
                />

            </div>
        </>
    );
}

export default HoaDonCanLamSang;