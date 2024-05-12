
import { Button, Row, Table } from "react-bootstrap";
import { BenhNhan, useDeleteBenhNhanMutation, useGetAllBenhNhanQuery } from "../../graphql-definition/graphql";
import { MdDelete } from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";
import { FaMarker } from "react-icons/fa";
import moment from "moment";
import ThemBenhNhan from "./f_themBenhNhan";
import { useState } from "react";
import SuaBenhNhan from "./f_suaBenhNhan";
import Pagination from "../../components/pagination";
import { CSVLink } from "react-csv";
import { Upload, message } from "antd";
import { handleUpload } from "../../utils/uploadFile";
import Search, { SearchProps } from "antd/es/input/Search";


export default function BenhNhanPage() {

    const [take, setTake] = useState(10);
    const [skip, setSkip] = useState(0);
    const { data, loading, error, refetch } = useGetAllBenhNhanQuery({
        variables: {
            "input": {
                "take": take,
                "skip": skip
            }
        }
    });


    const [modalAdd, setModalAdd] = useState(false);
    const [modalSua, setModalSua] = useState(false);
    const [selectedBenhNhan, setSelectedBenhNhan] = useState({});
    const [page, setPage] = useState(1);

    const handleChangPage = (skip: number, page: number) => {
        setSkip(skip);
        setPage(page)
    }



    const handleAdd = () => {
        setModalAdd(true)
    }

    const handleEdit = (benhnhan: BenhNhan) => {
        setSelectedBenhNhan(benhnhan);
        setModalSua(true);
    };

    const [deleteBenhNhan] = useDeleteBenhNhanMutation()

    const handleDelete = async (id: string) => {
        try {
            await deleteBenhNhan({ variables: { id } });
            refetch();
        } catch (error) {
            console.log('Error deleting user: ', error)
        }
    }


    const dataCSV = data?.getAllBenhNhan.map(item => {
        return [item?.hoten, moment(item?.ngaysinh).format('DD-MM-YYYY'), item?.gioitinh ? "Nam" : "Nữ",
        item?.diachi, item?.bhyt ? 'Có' : 'Không', item?.cccd, item?.sodienthoai
        ]
    })

    const customRequest = async (options: any) => {
        const result = await handleUpload("documentbenhnhan", options);

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

    /* console.log(data); */

    return (
        <>
            <div className="container-fluit">

                <Row className="mt-3 ml-2">
                    <div className="d-flex justify-content-center">
                        <Button className="mr-3 btn-outline-secondary" onClick={handleAdd}>Thêm Bệnh Nhân</Button>
                        <Upload
                            customRequest={customRequest}
                            maxCount={1}
                            showUploadList={false}
                        >
                            <Button className="mr-3 btn-outline-primary">Upload File</Button>
                        </Upload>
                        <CSVLink className="mr-3 btn btn-outline-success" filename={"benhnhan.csv"} data={dataCSV || []} target="_blank"> Xuất CSV Page {page}</CSVLink>
                        <Search placeholder="Họ Tên" allowClear onSearch={onSearch} size={"large"} style={{ width: 300 }} />
                    </div>
                </Row>
                <div className="mt-3">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Họ tên</th>
                                <th>Ngày sinh</th>
                                <th>Giới tính</th>
                                <th>Địa chỉ</th>
                                <th>SĐT</th>
                                <th>CCCD</th>
                                <th>BHYT</th>
                                <th colSpan={3} className="text-center">Thao Tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.getAllBenhNhan.map((bn: any, index: number) => (
                                <tr key={bn._id}>
                                    <td>{index + 1}</td>
                                    <td>{bn?.hoten}</td>
                                    <td>{moment(bn?.ngaysinh).format('YYYY-MM-DD')}</td>
                                    <td>{bn?.gioitinh ? 'Nam' : 'Nữ'}</td>
                                    <td>{bn?.diachi}</td>
                                    <td>{bn?.sodienthoai}</td>
                                    <td>{bn?.cccd}</td>
                                    <td>{bn?.bhyt}</td>
                                    <td onClick={() => handleDelete(bn?._id)}><MdDelete /></td>
                                    <td onClick={() => handleEdit(bn)}><FaMarker /></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Pagination count={data?.CountBenhNhan as number} take={take} skip={handleChangPage} page={page} />
                </div>
                <ThemBenhNhan
                    show={modalAdd}
                    onHide={() => setModalAdd(false)}
                    refetch={refetch}
                />
                <SuaBenhNhan
                    show={modalSua}
                    onHide={() => setModalSua(false)}
                    refetch={refetch}
                    benhnhan={selectedBenhNhan}
                />
            </div>
        </>
    );
}