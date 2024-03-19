import { Table, Row, Button } from "react-bootstrap";
import { BacSi, useDeleteBacSiMutation, useGetAllBacSiQuery } from "../../graphql-definition/graphql"; // Rename BacSi import alias
import { MdDelete } from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";
import { FaMarker } from "react-icons/fa";
import { useState } from "react";
import ThemBacSi from "./f_themBacSi";
import SuaBacSi from "./f_suaBacSi";
import dayjs, { Dayjs } from 'dayjs';
import Pagination from "../../components/pagination";

function BacSiPage() { // Rename the function here


    const [take, setTake] = useState(2);
    const [skip, setSkip] =  useState(0);
    const { data, loading, error, refetch } = useGetAllBacSiQuery({
        variables: {
            "input": {
                "take": take,
                "skip": skip
            }
        }
    });

    const [modalAdd, setModalAdd] = useState(false);
    const [selectedBacSi, setSelectedBacSi] = useState({});
    const [modalSua, setModalSua] = useState(false);
    const [page, setPage] = useState(1);

    const handleChangPage = (skip: number, page: number) =>{
        setSkip(skip);
        setPage(page)
    }


    const handleEdit = (bacsi: BacSi) => {
        setSelectedBacSi(bacsi);
        setModalSua(true);
    };

    const handleAdd = () =>{
        setModalAdd(true)
    }

    const [deleteBacSi] = useDeleteBacSiMutation()

    const handleDelete = async (id: string) =>{
        try{
            await deleteBacSi({variables: {id}});
            refetch();
        }catch(error){
            console.log('Error deleting user: ', error)
        }
    }

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error...</div>;

    return (
        <>
            <div className="container-fluit">

                <Row className="mt-3">
                    <div className="d-flex justify-content-center">
                    <Button className="mr-3 btn-outline-secondary" onClick={handleAdd}>Thêm Bác Sĩ</Button>
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
                                        <td>{dayjs(bs?.ngaysinh).format('YYYY-MM-DD')}</td>
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
                                        <td onClick={() => handleDelete(bs?._id)}><MdDelete /></td>
                                        <td onClick={() => handleEdit(bs)}><FaMarker /></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                    <Pagination count={data?.CountBacSi as number} take={take} skip={handleChangPage} page={page}/>
                </Row>
                <ThemBacSi
                    show={modalAdd}
                    onHide={() => setModalAdd(false)}
                    refetch={refetch}
                />
                <SuaBacSi
                    show={modalSua}
                    onHide = {() => setModalSua(false)}
                    bacsi={selectedBacSi}
                    refetch={refetch}
                />
            </div>
        </>
    );
}

export default BacSiPage;
