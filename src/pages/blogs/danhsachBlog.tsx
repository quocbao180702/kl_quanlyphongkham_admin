import { Badge, Button, Container, Image, Row, Table } from "react-bootstrap";
import { FaMarker } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Blog, useDeleteBlogMutation, useGetAllBlogsQuery, useUpdateKichHoatMutation } from "../../graphql-definition/graphql";
import { getUrlImage } from "../../utils/uploadFile";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SuaBlog from "./f_suablog";
import Pagination from "../../components/pagination";
import moment from "moment";
import { CSVLink } from "react-csv";
import Search, { SearchProps } from "antd/es/input/Search";
import { FaEyeSlash } from "react-icons/fa6";
import { BsEye } from "react-icons/bs";
import XemBlog from "./xemBlogs";
import { message } from "antd";



function Blogs() {

    const [take, setTake] = useState(2);
    const [skip, setSkip] = useState(0);
    const { data, loading, error, refetch } = useGetAllBlogsQuery({
        variables: {
            "input": {
                "skip": skip,
                "take": take
            }
        }
    });

    const dataCSV = data?.getAllBlog.map(item => {
        return [item?.tieude, item?.tomtat, item?.noidung, moment(item?.ngaytao).format("DD-MM-YYYY"), item?.user?.username]
    })

    const [modalShow, setModalShow] = useState(false);
    const [show, SetShow] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState({});
    const [blogXem, setblogXem] = useState({});
    const [page, setPage] = useState(1);


    const handleChangPage = (skip: number, page: number) => {
        setSkip(skip);
        setPage(page)
    }

    const [dataBlog, setDataBlogs] = useState<any>();

    const navigate = useNavigate();

    if (error) {
        console.log('lỗi: ', error)
    }

    const handleAdd = () => {
        navigate('/blogs/them');
    };

    useEffect(() => {
        setDataBlogs(data);
    }, [data])

    const [deleteBlog] = useDeleteBlogMutation()
    const handleDelete = async (id: string) => {
        try {
            await deleteBlog({
                variables: {
                    "id": id
                }
            })
            refetch()
        } catch (error) {
            console.log(error);
        }
    }

    const handleEdit = (blog: any) => {
        setSelectedBlog(blog);
        setModalShow(true);
    }

    const handleXem = (blog: any) => {
        setblogXem(blog);
        SetShow(true);
    }

    const [updateKichHoat] = useUpdateKichHoatMutation();

    const handleKichHoat = async (id: string) => {

        try {
            await updateKichHoat({
                variables: {
                    "id": id
                }
            })
            refetch()
        } catch (error) {
           message.error("Bạn Không Có Quyền Chỉnh Sửa");
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

    return (
        <>
            <Container fluid>
                <Row className="mt-3">
                    <div className="d-flex justify-content-center">
                        <Button className="mr-3 btn-outline-secondary" onClick={handleAdd}>Thêm Blog</Button>
                        {/* <Button className="mr-3 btn-outline-primary">Nhập Exel</Button> */}
                        <CSVLink className="mr-3 btn btn-outline-success" filename={"blog.csv"} data={dataCSV || []} target="_blank"> Xuất CSV Page {page}</CSVLink>
                        <Search placeholder="Tiêu đề" allowClear onSearch={onSearch} size={"large"} style={{ width: 300 }} />
                    </div>
                </Row>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th className="text-center">STT</th>
                            <th className="text-center">Hình Ảnh</th>
                            <th className="text-center">Tiêu Đề</th>
                            <th className="text-center">Tóm Tắt</th>
                            {/* <th>Nội Dung</th> */}
                            <th className="text-center">Trạng Thái</th>
                            <th colSpan={3} className="text-center">Thao Tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataBlog?.getAllBlog?.map((blog: Blog, index: number) => {
                            return (
                                <tr key={blog._id}>
                                    <td className="align-middle">{index + 1}</td>
                                    <td className="align-middle">
                                        <Image
                                            src={getUrlImage(blog?.hinhanh)}
                                            style={{
                                                width: "171px",
                                                height: "180px",
                                                objectFit: "fill",
                                            }}
                                            rounded
                                        />
                                    </td>
                                    <td className="align-middle">{blog?.tieude}</td>
                                    <td className="align-middle">{blog?.tomtat}</td>
                                    {/* <td className="align-middle">{blog?.noidung}</td> */}
                                    <td className="align-middle" onClick={() => handleKichHoat(blog?._id)}>{blog?.kichhoat && blog?.kichhoat ? <Badge bg="success">Đã Duyệt</Badge> : <Badge bg="warning">Chưa Duyệt</Badge>}</td>
                                    <td className="align-middle" onClick={() => handleDelete(blog?._id)}><MdDelete /></td>
                                    <td className="align-middle" onClick={() => handleEdit(blog)}><FaMarker /></td>
                                    <td className="align-middle" onClick={() => handleXem(blog)}><BsEye /></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                <Pagination count={data?.countBlogs as number} take={take} skip={handleChangPage} page={page} />
                <SuaBlog
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    blog={selectedBlog}
                    refetch={refetch}
                />
                <XemBlog
                    show={show}
                    onHide={() => SetShow(false)}
                    blog={blogXem}
                />
            </Container>
        </>
    );
}

export default Blogs;