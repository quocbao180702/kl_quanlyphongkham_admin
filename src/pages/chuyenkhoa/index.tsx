import Search, { SearchProps } from "antd/es/input/Search";
import { Button, Row, Table } from "react-bootstrap";
import { CSVLink } from "react-csv";
import { FaMarker } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useDeleteChuyenKhoaMutation, useGetAllChuyenKhoaQuery } from "../../graphql-definition/graphql";
import { useState } from "react";
import ThemChuyenKhoa from "./themChuyenKhoa";
import SuaChuyenKhoa from "./suaChuyenKhoa";
import { message } from "antd";

function ChuyenKhoa() {

    const { data, loading, error, refetch } = useGetAllChuyenKhoaQuery();
    const [selected, SetSelected] = useState({}) 


    const [modalAdd, setModalAdd] = useState(false);
    const [modalSua, setModalSua] = useState(false);

    const handleChuyenKhoa = () => {
        setModalAdd(true);
    }

    const [deleteChuyenKhoa] = useDeleteChuyenKhoaMutation();
    const handleDelete = async (id: string) => {
        try{
            await deleteChuyenKhoa({
                variables: {
                    id: id
                }
            })
            refetch();
        }catch(error){
            message.error(`${error}`)
        }
    }

    const handleEdit = (chuyenkhoa: any) => {
        SetSelected(chuyenkhoa);
        setModalSua(true);
    }

    const onSearch: SearchProps['onSearch'] = (value, _e, info) => {
    }
    return (
        <>
            <div className="container-fluit">
                <Row className="mt-3">

                    <div className="d-flex justify-content-center">
                        <Button className="mr-3 btn-outline-secondary" onClick={handleChuyenKhoa}>Thêm Khoa</Button>
                        {/*  <CSVLink className="mr-3 btn btn-outline-success" filename={"bacsi.csv"} data={dataCSV || []} target="_blank"> Xuất CSV Page {page}</CSVLink> */}
                        <Search placeholder="Tên Khoa" allowClear onSearch={onSearch} size={"large"} style={{ width: 300 }} />
                    </div>
                </Row>
                <Row className="mt-3">
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tên Chuyên Khoa</th>
                                <th>Mô Tả</th>
                                <th colSpan={2}>Thao Tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data?.getAllChuyenKhoa.map((chuyenkhoa, index: number) => {
                                return (
                                    <tr key={chuyenkhoa?._id}>
                                        <td>{index + 1}</td>
                                        <td>{chuyenkhoa?.tenkhoa}</td>
                                        <td>{chuyenkhoa?.mota}</td>
                                        <td onClick={() => handleDelete(chuyenkhoa?._id)}><MdDelete /></td>
                                        <td onClick={() => handleEdit(chuyenkhoa)}><FaMarker /></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Row>
                <ThemChuyenKhoa 
                    show={modalAdd}
                    onHide={() => setModalAdd(false)}
                    refetch={refetch}
                />
                <SuaChuyenKhoa 
                    show={modalSua}
                    onHide={() => setModalSua(false)}
                    data={selected}
                    refetch={refetch}
                />
            </div>
        </>
    );
}

export default ChuyenKhoa;