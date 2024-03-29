import moment from "moment";
import { Button, Row, Table } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { useDeleteHoaDonMutation, useGetAllHoaDonQuery, useUpdateTrangThaiCanLamSangMutation } from "../../graphql-definition/graphql";
import { useState } from "react";
import XemHoaDon from "./xemHoaDon";
import { LiaEyeSolid } from "react-icons/lia";

function Hoadon() {
    const { data, loading, error, refetch } = useGetAllHoaDonQuery();

    const [show, setModalShow] = useState(false)
    const [selectedHoadon, setSelectedHoadon] = useState({})
    const handleAdd = () => {

    }

    const [deleteHoadon] = useDeleteHoaDonMutation();
    const handleDelete = async (id: string) => {
        try {
            await deleteHoadon({
                variables: {
                    id
                }
            })
            refetch();
        }
        catch (error) {
            console.log('Error deleting hoa don: ', error);
        }
    }


    const [updateTrangThai] = useUpdateTrangThaiCanLamSangMutation()

    const handleTrangThai = async (id: string) => {
        try {
            await updateTrangThai({
                variables: {
                    id
                }
            });
            refetch()
        } catch (error) {
            console.log('Error trạng thái thanh toán bị lỗi: ', error)
        }
    }

    const handleXem = async (hoadon: any) => {
        setSelectedHoadon(hoadon)
        setModalShow(true)
    }


    return (
        <div className="container-fluid">
            <Row className="mt-3">
                <div className="d-flex justify-content-center">
                    <Button className="mr-3 btn-outline-secondary" onClick={handleAdd}>Tạo Hóa Đơn</Button>
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
                            <th>Số Điện Thoại</th>
                            <th>Ngày Tạo</th>
                            <th>BHYT</th>
                            <th>Thành Tiên</th>
                            <th colSpan={3} className="text-center"> Thao Tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.getAllHoadon.map((hoadon: any) => (
                            <tr key={hoadon?._id}>
                                <td>{hoadon?.benhnhan?.hoten}</td>
                                <td>{moment(hoadon?.benhnhan?.ngaysinh).format('YYYY-MM-DD')}</td>
                                <td>0123454</td>
                                <td>{moment(hoadon?.ngaytao).format('YYYY-MM-DD')}</td>
                                <td>{hoadon?.bhyt ? 'Có' : 'Không'}</td>
                                <td>{hoadon?.thanhtien}</td>
                                <td width={50} className="text-center" onClick={() => handleXem(hoadon)}><LiaEyeSolid /></td>
                                <td width={150} className="text-center" onClick={() => handleTrangThai(hoadon?._id)}>{hoadon?.trangthai ? 'Đã Thanh Toán' : 'Chưa Thanh Toán'}</td>
                                <td width={50} className="text-center" onClick={() => handleDelete(hoadon._id)}>
                                    <MdDelete />
                                </td>
                                {/* <td onClick={() => handleEdit(hoadon)}><FaMarker /></td> */}
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
    );
}

export default Hoadon;