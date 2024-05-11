import { useEffect, useState } from "react";
import { Button, Row, Table } from "react-bootstrap";
import { useDeleteNhanVienMutation, useGetAllNhanVienQuery } from "../../graphql-definition/graphql";
import moment from "moment";
import ThemNhanVien from "./f_themNhanVien";
import { MdDelete } from "react-icons/md";
import { FaMarker } from "react-icons/fa";
import SuaNhanVien from "./f_suaNhanVien";
import Item from "antd/es/list/Item";
import { CSVLink } from "react-csv";

function NhanVienPage() {


    const [showAdd, setModalAdd] = useState(false)
    const [showSua, setShowSua] = useState(false);
    const [selectedNhanVien, setSelectedNhanVien] = useState({});

    const { data, loading, error, refetch } = useGetAllNhanVienQuery()


    useEffect(() => {
        console.log('data: ', data);
    }, [data])

    const handleAdd = () => {
        setModalAdd(true)
    }

    const [deleteNhanVien] = useDeleteNhanVienMutation()
    const handleDelete = async (id: string) => {
        try {
            await deleteNhanVien({
                variables: {
                    "id": id
                }
            })
            refetch();
        } catch (error) {
            console.log(error);
        }
    }

    const dataCSV = data?.getAllNhanVien.map(item => {
        return [item?.hoten, item?.gioitinh ? "Nam" : "Nữ", item?.cccd, item?.chucvu, item?.diachi, item?.sodienthoai,
        moment(item?.ngaysinh).format('DD-MM-YYYY'), moment(item?.ngayBD).format('DD-MM-YYYY'), item?.phongs[0].tenphong
        ]
    })

    const handleEdit = (nhanvien: any) => {
        console.log('nhân viên', nhanvien);
        setSelectedNhanVien(nhanvien);
        setShowSua(true);
    }

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error...</div>;

    return (<>
        <div className="container-fluid">
            <Row className="mt-3">
                <div className="d-flex justify-content-center">
                    <Button className="mr-3 btn-outline-secondary" onClick={handleAdd}>Thêm Nhân Viên</Button>
                    <Button className="mr-3 btn-outline-primary">Nhập Exel</Button>
                    <CSVLink className="mr-3 btn btn-outline-success" filename={"nhanvien.csv"} data={dataCSV || []} target="_blank"> Xuất CSV</CSVLink>
                </div>
            </Row>

            <Row>

                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Họ Tên</th>
                            <th>Giới tính</th>
                            <th>Ngày Sinh</th>
                            <th>CCCD</th>
                            <th>Địa Chỉ</th>
                            <th>SĐT</th>
                            <th>Tên Phòng</th>
                            <th>Ngày Bắt Đầu</th>
                            <th>Chức vụ</th>
                            <th colSpan={2}>Thao Tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.getAllNhanVien.map((nhanvien) => {
                            return (
                                <tr key={nhanvien?._id}>
                                    <td >{nhanvien?.hoten}</td>
                                    <td>{nhanvien?.gioitinh ? 'Nam' : 'Nữ'}</td>
                                    <td>{moment(nhanvien?.ngaysinh).format('YYYY-MM-DD')}</td>
                                    <td>{nhanvien?.cccd}</td>
                                    <td>{nhanvien?.diachi}</td>
                                    <td>{nhanvien?.sodienthoai}</td>
                                    <td>
                                        {nhanvien?.phongs?.map((phong: any) => (
                                            <div key={phong._id}>{phong.tenphong}</div>
                                        ))}
                                    </td>
                                    <td>{moment(nhanvien?.ngayBD).format('YYYY-MM-DD')}</td>
                                    <td>{nhanvien?.chucvu}</td>
                                    <td onClick={() => handleDelete(nhanvien?._id)}><MdDelete /></td>
                                    <td onClick={() => handleEdit(nhanvien)}><FaMarker /></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Row>
            <ThemNhanVien
                show={showAdd}
                onHide={() => setModalAdd(false)}
                refetch={refetch}
            />
            <SuaNhanVien
                show={showSua}
                onHide={() => setShowSua(false)}
                refetch={refetch}
                nhanvien={selectedNhanVien}
            />
        </div >
    </>);
}

export default NhanVienPage;