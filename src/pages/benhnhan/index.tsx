
import { Button, Row, Table } from "react-bootstrap";
import { useGetAllBenhNhanQuery } from "../../graphql-definition/graphql";
import { MdDelete } from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";
import { FaMarker } from "react-icons/fa";


export default function BenhNhan(){
    const { data, loading, error } = useGetAllBenhNhanQuery();


    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error...</div>;

    /* console.log(data); */

    return (
        <>
        <div className="container-fluit">
            
            <Row className="mt-3">
                <div className="d-flex justify-content-center">
                    <Button className="mr-3 btn-outline-primary">Nhập Exel</Button>
                    <Button className="mr-3 btn-outline-success">Xuất Exel</Button>
                    <Button className="mr-3 btn-outline-danger">Xuất PDF</Button>
                </div>
            </Row>
            <Row className="mt-3">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Họ tên</th>
                        <th>Ngày sinh</th>
                        <th>Giới tính</th>
                        <th>Địa chỉ</th>
                        <th>SĐT</th>
                        <th>Email</th>
                        <th>CCCD</th>
                        <th>BHYT</th>
                        <th colSpan={3} className="text-center">Thao Tác</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.getAllBenhNhan.map((bn: any, index: number) => (
                        <tr key={bn._id}>
                            <td>{index + 1}</td>
                            <td>{bn?.hoten}</td>
                            <td>{bn?.ngaysinh}</td>
                            <td>{bn?.gioitinh ? 'Nam' : 'Nữ'}</td>
                            <td>{bn?.diachi}</td>
                            <td>{bn?.user?.phoneNumber}</td>
                            <td>{bn?.user?.email}</td>
                            <td>{bn?.cccd}</td>
                            <td>{bn?.bhyt}</td>
                            <td ><MdDelete /></td>
                            <td><IoAddCircleOutline /></td>
                            <td><FaMarker/></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            </Row>
        </div>
        </>
    );
}