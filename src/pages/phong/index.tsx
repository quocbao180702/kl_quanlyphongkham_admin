import Search, { SearchProps } from "antd/es/input/Search";
import { useState } from "react";
import { Button, Row, Table } from "react-bootstrap";
import { useDeletePhongMutation, useGetAllPhongQuery } from "../../graphql-definition/graphql";
import { MdDelete } from "react-icons/md";
import { FaMarker } from "react-icons/fa6";
import ThemPhong from "./themPhong";
import SuaPhong from "./suaPhong";
import { message } from "antd";

function Phong() {

    const { data, loading, error, refetch } = useGetAllPhongQuery()

    const [modalAdd, setModalAdd] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);
    const [selected, SetSelected] = useState({})
    const handlePhong = () => {
        setModalAdd(true);
    }

    const [deletePhong] = useDeletePhongMutation()
    const handleDelete  = async (id: string) => {
        try{
            await deletePhong({
                variables: {
                    id: id
                }
            })
            refetch();
        }catch(error){
            message.error(`${error}`)
        }
    }

    const handleEdit = (phong: any) => {
        SetSelected(phong);
        setModalEdit(true);
    }   

    const onSearch: SearchProps['onSearch'] = (value, _e, info) => {
    }

    return (
        <>
            <div className="container-fluid">
                <Row className="mt-3">

                    <div className="d-flex justify-content-center">
                        <Button className="mr-3 btn-outline-secondary" onClick={handlePhong}>Thêm Phòng</Button>
                        {/*  <CSVLink className="mr-3 btn btn-outline-success" filename={"bacsi.csv"} data={dataCSV || []} target="_blank"> Xuất CSV Page {page}</CSVLink> */}
                        <Search placeholder="Họ Tên" allowClear onSearch={onSearch} size={"large"} style={{ width: 300 }} />
                    </div>
                </Row>
                <Row className="mt-3">
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tên Phòng</th>
                                <th>Mô Tả</th>
                                <th>Chuyên Khoa</th>
                                <th colSpan={2}> Thao Tác </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data?.getAllPhong.map((phong, index: number) => {
                                return (

                                    <tr key={phong?._id}>
                                        <td>{index + 1}</td>
                                        <td>{phong?.tenphong}</td>
                                        <td>{phong?.mota}</td>
                                        <td>{phong?.chuyenkhoa?.tenkhoa}</td>
                                        <td onClick={() => handleDelete(phong?._id)}><MdDelete /></td>
                                        <td onClick={() => handleEdit(phong)}><FaMarker /></td>
                                    </tr>
                                )
                            })}
                        </tbody>

                    </Table>
                </Row>
                <ThemPhong 
                    show={modalAdd}
                    onHide={() => setModalAdd(false)}
                    refetch={refetch}
                />
                <SuaPhong 
                    show={modalEdit}
                    onHide={() => setModalEdit(false)}
                    data={selected}
                    refetch={refetch}
                />
            </div>
        </>
    );
}

export default Phong;