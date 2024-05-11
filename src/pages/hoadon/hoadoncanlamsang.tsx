import { Badge, Button, Row, Table } from "react-bootstrap";
import XemHoaDon from "./xemHoaDon";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import moment from "moment";
import { LiaEyeSolid } from "react-icons/lia";
import { useGetAllHoaDonPhieuCanLamSangQuery, useUpdateTinhTrangHoaDonClsMutation, useUpdateTrangThaiCanLamSangMutation } from "../../graphql-definition/graphql";
import Pagination from "../../components/pagination";
import { Input } from "antd";
import type { SearchProps } from 'antd/es/input/Search'
import { CSVLink } from "react-csv";

function HoaDonCanLamSang() {

    const { Search } = Input;

    const [show, setModalShow] = useState(false)
    const [selectedHoadon, setSelectedHoadon] = useState({})

    const [take, setTake] = useState(2);
    const [skip, setSkip] = useState(0);
    const [page, setPage] = useState(1);

    const { data, loading, error, refetch } = useGetAllHoaDonPhieuCanLamSangQuery({
        variables: {
            input: {
                take: take,
                skip: skip,
            }
        }
    })

    const handleAdd = () => {

    }

    const handleChangPage = (skip: number, page: number) => {
        setSkip(skip);
        setPage(page)
    }

    const handleXem = (hoadon: any) => {
        setSelectedHoadon(hoadon);
        setModalShow(true)
    }

    const [updateTrangThaiHoaDonCLS, _] = useUpdateTinhTrangHoaDonClsMutation();
    const [updateTrangThaiCLS] = useUpdateTrangThaiCanLamSangMutation();
    const handleTrangThai = async (id: string, idPhieuCLS: string) => {
        try {
            console.log('phiếu chỉ định cận lâm sàng: ', idPhieuCLS)
            const [response, update] = await Promise.all([
                updateTrangThaiHoaDonCLS({
                    variables: {
                        id: id
                    }
                }),
                updateTrangThaiCLS({
                    variables: {
                        id: idPhieuCLS,
                        trangthai: "CHOKHAM"
                    }
                })
            ])
            refetch();
        } catch (error) {
            console.log(error);
        }
    }


    const handleDelete = (id: string) => {

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

    const dataCSV = data?.getAllHoaDonPhieuCanLamSang.map(item => {
        return [item?.benhnhan?.hoten, moment(item?.benhnhan?.ngaysinh).format('DD-MM-YYYY'), item?.benhnhan?.gioitinh ? "Nam" : "Nữ", moment(item?.ngaytao).format("DD-MM-YYYY"), item?.bhyt ? "Có" : "Không", item?.thanhtien]
    })

    if (loading) return <div> ... Loading ... </div>

    if (error) return <div> ... Error ... </div>

    return (
        <>
            <div className="container-fluid">
                <Row className="mt-3">
                    <div className="d-flex justify-content-center">
                        <Button className="mr-3 btn-outline-secondary" onClick={handleAdd}>Tạo Hóa Đơn Cân Lâm Sàng</Button>
                        <Button className="mr-3 btn-outline-primary">Nhập Exel</Button>
                        <CSVLink className="mr-3 btn btn-outline-success" filename={"hoadoncls.csv"} data={dataCSV || []} target="_blank"> Xuất CSV Page {page}</CSVLink>
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
                                    <td width={150} className="text-center" onClick={() => handleTrangThai(hoadon?._id, hoadon?.idPhieuCLS)}>{hoadon?.tinhtrang ? <Badge bg="success">Đã Thanh Toán</Badge> : <Badge bg="warning">Chưa Thanh Toán</Badge>}</td>
                                    <td width={50} className="text-center" onClick={() => handleDelete(hoadon._id)}>
                                        <MdDelete />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Pagination count={data?.CountHoadonchidinhcanlamsang as number} take={take} skip={handleChangPage} page={page} />
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