import { Table, Row, Button } from "react-bootstrap";
import { useGetAllBacSiQuery } from "../../graphql-definition/graphql"; // Rename BacSi import alias
import { MdDelete } from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";
import { FaMarker } from "react-icons/fa";

function BacSiPage() { // Rename the function here

    const { data, loading, error } = useGetAllBacSiQuery();


    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error...</div>;

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

                    <Table striped bordered hover responsive>
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
                                <th>Ngày BD</th>
                                <th>Phòng</th>
                                <th>Chuyên Khoa</th>
                                <th colSpan={3} className="text-center">Thao Tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.getAllBacSi.map((bs: any, index: number) => {
                                return (
                                    <tr key={bs._id}>
                                        <td>{index + 1}</td>
                                        <td>{bs?.hoten}</td>
                                        <td>{bs?.ngaysinh}</td>
                                        <td>{bs?.gioitinh ? 'Nam' : 'Nữ'}</td>
                                        <td>{bs?.diachi}</td>
                                        <td>{bs?.user?.phoneNumber}</td>
                                        <td>{bs?.user?.email}</td>
                                        <td>{bs?.cccd}</td>
                                        <td>{new Intl.DateTimeFormat('vi-VN', { dateStyle: 'short' }).format(bs?.ngaybd)}</td>
                                        <td>
                                            {bs?.phongs?.map((phong: any) => (
                                                <div key={phong._id}>{phong.tenphong}</div>
                                            ))}
                                        </td>
                                        <td>{bs?.chuyenkhoa?.tenkhoa}</td>
                                        <td ><MdDelete /></td>
                                        <td><IoAddCircleOutline /></td>
                                        <td><FaMarker /></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Row>
            </div>
        </>
    );
}

export default BacSiPage;
