import moment from "moment";
import { Badge, Button, Row, Table } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { useDeleteHoaDonMutation, useGetAllHoaDonQuery, useUpdateTrangThaiHoaDonMutation } from "../../graphql-definition/graphql";
import { useState } from "react";
import XemHoaDon from "./xemHoaDon";
import { LiaEyeSolid } from "react-icons/lia";
import Pagination from "../../components/pagination";
import { Input } from "antd";
import type { SearchProps } from 'antd/es/input/Search'
import { CSVLink } from "react-csv";

function Hoadon() {

    const { Search } = Input;

    const [take, setTake] = useState(2);
    const [skip, setSkip] = useState(0);
    const [page, setPage] = useState(1);

    const { data, loading, error, refetch } = useGetAllHoaDonQuery({
        variables: {
            input: {
                take: take,
                skip: skip
            }
        }
    });

    const [show, setModalShow] = useState(false)
    const [selectedHoadon, setSelectedHoadon] = useState({})
    const handleAdd = () => {

    }

    const handleChangPage = (skip: number, page: number) => {
        setSkip(skip);
        setPage(page)
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

    const dataCSV = data?.getAllHoadon.map(item => {
        return [item?.benhnhan?.hoten, moment(item?.benhnhan?.ngaysinh).format('DD-MM-YYYY'), item?.benhnhan?.gioitinh ? "Nam" : "Nữ", moment(item?.ngaytao).format("DD-MM-YYYY"), item?.bhyt ? "Có" : "Không", item?.thanhtien]
    })


    const [updateTrangThai] = useUpdateTrangThaiHoaDonMutation()

    const handleTrangThai = async (id: string) => {
        try {
            console.log('id hóa đơn là: ', id)
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

    const onSearch: SearchProps['onSearch'] = (value, _e, info) => {
        refetch({
            input: {
                take: take,
                skip: skip,
                search: value
            }
        })
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
                    <CSVLink className="mr-3 btn btn-outline-success" filename={"hoadon.csv"} data={dataCSV || []} target="_blank"> Xuất CSV Page {page}</CSVLink>
                </div>
            </Row>
            <Row className="mt-3">
                <div className="w-100 mb-2 d-flex justify-content-end align-items-center">
                    <Search placeholder="Họ Tên" allowClear onSearch={onSearch} size={"large"} style={{ width: 300 }} />
                </div>
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
                                <td width={150} className="text-center" onClick={() => handleTrangThai(hoadon?._id)}>{hoadon?.trangthai ? <Badge bg="success">Đã Thanh Toán</Badge> : <Badge bg="warning">Chưa Thanh Toán</Badge>}</td>
                                <td width={50} className="text-center" onClick={() => handleDelete(hoadon._id)}>
                                    <MdDelete />
                                </td>
                                {/* <td onClick={() => handleEdit(hoadon)}><FaMarker /></td> */}
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Pagination count={data?.CountHoadon as number} take={take} skip={handleChangPage} page={page} />
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