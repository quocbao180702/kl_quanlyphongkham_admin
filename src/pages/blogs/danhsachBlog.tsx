import { Badge, Button, Container, Image, Row, Table } from "react-bootstrap";
import { FaMarker } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Blog, useDeleteBlogMutation, useGetAllBlogsQuery, useUpdateKichHoatMutation } from "../../graphql-definition/graphql";
import { getUrlImage } from "../../utils/uploadFile";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SuaBlog from "./f_suablog";
import Pagination from "../../components/pagination";

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

    const [modalShow, setModalShow] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState({});
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
            console.log(error)
        }
    }

    return (
        <>
            <Container fluid>
                <Row className="mt-3">
                    <div className="d-flex justify-content-center">
                        <Button className="mr-3 btn-outline-secondary" onClick={handleAdd}>Thêm Blog</Button>
                        <Button className="mr-3 btn-outline-primary">Nhập Exel</Button>
                        <Button className="mr-3 btn-outline-success">Xuất Exel</Button>
                        <Button className="mr-3 btn-outline-danger">Xuất PDF</Button>
                    </div>
                </Row>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Hình Ảnh</th>
                            <th>Tiêu Đề</th>
                            <th>Tóm Tắt</th>
                            <th>Nội Dung</th>
                            <th>Trạng Thái</th>
                            <th colSpan={2}>Thao Tác</th>
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
                                    <td className="align-middle">{blog?.noidung}</td>
                                    <td className="align-middle" onClick={() => handleKichHoat(blog?._id)}>{blog?.kichhoat && blog?.kichhoat ? <Badge bg="success">Đã Duyệt</Badge> : <Badge bg="warning">Chưa Duyệt</Badge>}</td>
                                    <td className="align-middle" onClick={() => handleDelete(blog?._id)}><MdDelete /></td>
                                    <td className="align-middle" onClick={() => handleEdit(blog)}><FaMarker /></td>
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
            </Container>
        </>
    );
}

export default Blogs;