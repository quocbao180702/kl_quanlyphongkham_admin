
import { Button, Row, Table } from "react-bootstrap";
import { Thuoc, useDeleteThuocMutation, useGetThuocPaginationQuery } from "../../graphql-definition/graphql";
import { MdDelete } from "react-icons/md";
import { FaMarker } from "react-icons/fa";
import { useState } from "react";
import ThemThuoc from "./f_themThuoc";
import SuaThuoc from "./f_suaThuoc";
import Pagination from "../../components/pagination";
import { CSVLink } from "react-csv";
import { Upload, message } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import { handleUpload } from "../../utils/uploadFile";
import Search, { SearchProps } from "antd/es/input/Search";

function ThuocPage() {

    const [take, setTake] = useState(10);
    const [skip, setSkip] = useState(0);
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

    const handleChangPage = (skip: number, page: number) => {
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

    const handleDelete = async (id: string) => {
        try {
            await deleteThuoc({ variables: { id } });
            refetch();
        } catch (error) {
            console.log('Error deleting user: ', error)
        }
    }

    const dataCSV = data?.getThuocPagination.map(item => [item?.tenthuoc, item?.tenPhoBien, item?.soluong, item?.nhasanxuat,
    item?.hansudung, item?.hamluong, item?.giaKhongBHYT, item?.giaBHYT, item?.donvi, item?.dangthuoc, item?.bhyt]);



    const customRequest = async (options: any) => {
        const result = await handleUpload("documentthuoc", options);

        if (result === 0) {
            message.success(`uploaded successfully`);
        }
        else {
            message.success('upload failed');
        }
        refetch();
    };

    const onSearch: SearchProps['onSearch'] = (value, _e, info) => {
        refetch({
            input: {
                take: take,
                skip: skip,
                search: value
            }
        })
    }

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error...</div>;


    return (<>
        <div className="fluit-container">
            <Row className="mt-3">
                <div className="d-flex justify-content-center">
                    <Button className="mr-3 btn-outline-secondary" onClick={handleAdd}>Thêm Thuốc</Button>
                    <Upload
                        customRequest={customRequest}
                        maxCount={1}
                        showUploadList={false}
                    >
                        <Button className="mr-3 btn-outline-primary">Upload File</Button>
                    </Upload>
                    <CSVLink className="mr-3 btn btn-outline-success" filename={"thuoc.csv"} data={dataCSV || []} target="_blank"> Xuất CSV Page {page}</CSVLink>
                    <Search placeholder="Tên Thuốc" allowClear onSearch={onSearch} size={"large"} style={{ width: 300 }} />
                </div>
            </Row>
            <div className="mt-3">
                <Table responsive striped bordered hover >
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
                <Pagination count={data?.CountThuoc as number} take={take} skip={handleChangPage} page={page} />
            </div>
            <ThemThuoc
                show={modalAdd}
                onHide={() => setModalAdd(false)}
                refetch={refetch}
            />
            <SuaThuoc
                show={modalSua}
                onHide={() => setModalSua(false)}
                refetch={refetch}
                thuoc={selectedThuoc}
            />
        </div>
    </>);
}

export default ThuocPage;