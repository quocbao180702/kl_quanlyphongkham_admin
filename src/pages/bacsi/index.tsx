import { Table, Row, Button } from "react-bootstrap";
import { BacSi, useDeleteBacSiMutation, useGetAllBacSiQuery } from "../../graphql-definition/graphql"; // Rename BacSi import alias
import { MdDelete } from "react-icons/md";
import { FaMarker } from "react-icons/fa";
import { useState } from "react";
import ThemBacSi from "./f_themBacSi";
import SuaBacSi from "./f_suaBacSi";
import dayjs from 'dayjs';
import Pagination from "../../components/pagination";
import { CSVLink } from "react-csv";
import Search, { SearchProps } from "antd/es/input/Search";



function BacSiPage() { // Rename the function here


    const [take, setTake] = useState(4);
    const [skip, setSkip] = useState(0);
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

    const handleChangPage = (skip: number, page: number) => {
        setSkip(skip);
        setPage(page)
    }


    const handleEdit = (bacsi: BacSi) => {
        setSelectedBacSi(bacsi);
        setModalSua(true);
    };

    const handleAdd = () => {
        setModalAdd(true)
    }

    const [deleteBacSi] = useDeleteBacSiMutation()

    const handleDelete = async (id: string) => {
        try {
            await deleteBacSi({ variables: { id } });
            refetch();
        } catch (error) {
            console.log('Error deleting user: ', error)
        }
    }

    const dataCSV = data?.getAllBacSi.map(item => {
        return [item?.hoten, dayjs(item?.ngaysinh).format('DD-MM-YYYY'), item?.gioitinh ? 'Nam' : 'Nữ', item?.cccd,
        item?.sodienthoai, dayjs(item?.ngayBD).format('DD-MM-YYYY'), item?.diachi, item?.chuyenkhoa?.tenkhoa, item?.phongs[0]?.tenphong
        ]
    })


    /* const customRequest = async (options: any) => {
        const result = await handleUpload("documentbacsi", options);

        if (result === 0) {
            message.success(`uploaded successfully`);
        }
        else {
            message.success('upload failed');
        }
        refetch();
    }; */

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

    return (
        <>
            <div className="container-fluit">

                <Row className="mt-3">

                    <div className="d-flex justify-content-center">
                        <Button className="mr-3 btn-outline-secondary" onClick={handleAdd}>Thêm Bác Sĩ</Button>
                        {/*  <Upload
                            customRequest={customRequest}
                            maxCount={1}
                            showUploadList={false}
                        >
                            <Button className="mr-3 btn-outline-primary">Upload File</Button>
                        </Upload> */}
                        <CSVLink className="mr-3 btn btn-outline-success" filename={"bacsi.csv"} data={dataCSV || []} target="_blank"> Xuất CSV Page {page}</CSVLink>
                        <Search placeholder="Họ Tên" allowClear onSearch={onSearch} size={"large"} style={{ width: 300 }} />
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
                                        <td>{bs?.sodienthoai}</td>
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
                    <Pagination count={data?.CountBacSi as number} take={take} skip={handleChangPage} page={page} />
                </Row>
                <ThemBacSi
                    show={modalAdd}
                    onHide={() => setModalAdd(false)}
                    refetch={refetch}
                />
                <SuaBacSi
                    show={modalSua}
                    onHide={() => setModalSua(false)}
                    bacsi={selectedBacSi}
                    refetch={refetch}
                />
            </div>
        </>
    );
}

export default BacSiPage;
