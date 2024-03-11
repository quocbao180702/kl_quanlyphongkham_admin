import { Table } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";
import { FaMarker } from "react-icons/fa";


function ThuocTable({ data }: any) {

    return (<>
        <Table responsive striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tên Thuốc</th>
                    <th>Tên Phổ Biếnn</th>
                    <th>Dạng Thuốc</th>
                    <th>Đơn Vị</th>
                    <th>Giá</th>
                    <th>Hàm lượng</th>
                    <th>BHYT</th>
                    <th>Nhà Sản Xuất</th>
                    <th>Hạn Sử Dụng</th>
                    <th>Số Lượng</th>
                    <th colSpan={3}>Thao Tác</th>
                </tr>
            </thead>
            <tbody>
                {data?.getAllThuoc.map((thuoc: any, index: number) => (
                    <tr key={thuoc._id}>
                        <td>{index + 1}</td>
                        <td>{thuoc?.tenthuoc}</td>
                        <td>{thuoc?.tenPhoBien}</td>
                        <td>{thuoc?.dangthuoc}</td>
                        <td>{thuoc?.donvi}</td>
                        <td>{thuoc?.gia}</td>
                        <td>{thuoc?.hamluong}</td>
                        <td>{thuoc?.bhyt ? 'Yes' : 'No'}</td>
                        <td>{thuoc?.nhasanxuat}</td>
                        <td>{thuoc?.hansudung}</td>
                        <td>{thuoc?.soluong}</td>
                        <td ><MdDelete /></td>
                        <td><IoAddCircleOutline /></td>
                        <td><FaMarker /></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </>);
}

export default ThuocTable;