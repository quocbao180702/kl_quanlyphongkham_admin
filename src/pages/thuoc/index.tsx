
import { Button, Row, Table } from "react-bootstrap";
import { Thuoc, useDeleteThuocMutation, useGetThuocPaginationQuery } from "../../graphql-definition/graphql";
import { MdDelete } from "react-icons/md";
import { FaMarker } from "react-icons/fa";
import { useState } from "react";
import ThemThuoc from "./f_themThuoc";
import SuaThuoc from "./f_suaThuoc";
import Pagination from "../../components/pagination";

function ThuocPage() {

    const [take, setTake] = useState(10);
    const [skip, setSkip] =  useState(0);
    const { data, loading, error, refetch } = useGetThuocPaginationQuery({
        variables: {
            "input": {
                "take": take,
                "skip": skip
            }
        }
    });


    const [modalAdd, setModalAdd] = useState(false);
    const [modalSua, setModalSua] = useState(false);
    const [selectedThuoc, setSelectedThuoc] = useState({});
    const [page, setPage] = useState(1);

    const handleChangPage = (skip: number, page: number) =>{
        setSkip(skip);
        setPage(page)
    }
    
    const handleAdd = () => {
        setModalAdd(true)
    }

    const handleEdit = (thuoc: Thuoc) => {
        setSelectedThuoc(thuoc);
        setModalSua(true);
    };

    const [deleteThuoc] = useDeleteThuocMutation();

    const handleDelete = async (id: string) =>{
        try{
            await deleteThuoc({variables: {id}});
            refetch();
        }catch(error){
            console.log('Error deleting user: ', error)
        }
    }
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error...</div>;
    
    
    return (<>
        <div className="fluit-container">
            <Row className="mt-3">
                <div className="d-flex justify-content-center">
                    <Button className="mr-3 btn-outline-secondary" onClick={handleAdd}>Thêm Thuốc</Button>
                    <Button className="mr-3 btn-outline-primary">Nhập Exel</Button>
                    <Button className="mr-3 btn-outline-success">Xuất Exel</Button>
                    <Button className="mr-3 btn-outline-danger">Xuất PDF</Button>
                </div>
            </Row>
            <div className="mt-3">
                <Table responsive striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tên Thuốc</th>
                            <th>Tên Phổ Biếnn</th>
                            <th>Dạng Thuốc</th>
                            <th>Đơn Vị</th>
                            <th>Giá BHYT</th>
                            <th>Giá Không BHYT</th>
                            <th>Hàm lượng</th>
                            <th>BHYT</th>
                            <th>Nhà Sản Xuất</th>
                            <th>Hạn Sử Dụng</th>
                            <th>Số Lượng</th>
                            <th colSpan={3}>Thao Tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.getThuocPagination.map((thuoc: any, index: number) => (
                            <tr key={thuoc._id}>
                                <td>{index + 1}</td>
                                <td>{thuoc?.tenthuoc}</td>
                                <td>{thuoc?.tenPhoBien}</td>
                                <td>{thuoc?.dangthuoc}</td>
                                <td>{thuoc?.donvi}</td>
                                <td>{thuoc?.giaBHYT}</td>
                                <td>{thuoc?.giaKhongBHYT}</td>
                                <td>{thuoc?.hamluong}</td>
                                <td>{thuoc?.bhyt ? 'Yes' : 'No'}</td>
                                <td>{thuoc?.nhasanxuat}</td>
                                <td>{thuoc?.hansudung}</td>
                                <td>{thuoc?.soluong}</td>
                                <td onClick={() => handleDelete(thuoc?._id)}><MdDelete /></td>
                                <td onClick={() => handleEdit(thuoc)}><FaMarker /></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Pagination count={data?.CountThuoc as number} take={take} skip={handleChangPage} page={page}/>
            </div>
            <ThemThuoc 
                show={modalAdd}
                onHide={() => setModalAdd(false)}
                refetch={refetch}
            />
            <SuaThuoc
                show={modalSua}
                onHide = {() => setModalSua(false)}
                refetch={refetch}
                thuoc={selectedThuoc} 
            />
        </div>
    </>);
}

export default ThuocPage;