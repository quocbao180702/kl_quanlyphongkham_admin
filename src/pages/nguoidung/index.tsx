import { Button, Row, Table, Image } from 'react-bootstrap';
import { MdDelete } from 'react-icons/md';
import { FaMarker } from 'react-icons/fa';
import { CiLock, CiUnlock } from 'react-icons/ci';
import { LinkImage, Users, useDeleteUserMutation, useGetAllUserQuery, useXulyKhoaMutation } from '../../graphql-definition/graphql';
import { useEffect, useState } from 'react';
import MyVerticallyCenteredModal from './form_updateUser'; import ThemNguoiDung from './f_themUser';
import { deleteImage, getUrlImage } from '../../utils/uploadFile';
import Pagination from '../../components/pagination';
import { CSVLink } from 'react-csv';
;

function NguoiDung() {

    const [take, setTake] = useState(10);
    const [skip, setSkip] = useState(0);
    const { data, loading, error, refetch } = useGetAllUserQuery({
        variables: {
            "input": {
                "take": take,
                "skip": skip
            }
        }
    });

    const [selectedUser, setSelectedUser] = useState({});
    const [modalShow, setModalShow] = useState(false);
    const [modalAdd, setModalAdd] = useState(false);
    const [page, setPage] = useState(1);

    const handleChangPage = (skip: number, page: number) => {
        setSkip(skip);
        setPage(page)
    }


    const [deleteUser] = useDeleteUserMutation();

    const handleDelete = async (id: string, avatar: LinkImage) => {
        try {
            await deleteUser({ variables: { id } });
            await deleteImage(avatar)
            refetch();
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const dataCSV = data?.getAllUsers.map(item => {
        return[
            item?.username, item?.email, item?.role
        ]
    })

    const handleEdit = (user: Users) => {
        setSelectedUser(user);
        setModalShow(true);
    };

    const handleAdd = () => {
        setModalAdd(true)
    }

    const [xulyKhoa] = useXulyKhoaMutation();

    const handleKhoa = async (id: string) => {
        try {
            await xulyKhoa({ variables: { id } });
            refetch();
        } catch (error) {
            console.error('Error xứ lý khóa user:', error);
        }
    }

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error fetching data. Please try again later.</div>;

    return (
        <div className="container-fluid">
            <Row className="mt-3">
                <div className="d-flex justify-content-center">
                    <Button className="mr-3 btn-outline-secondary" onClick={handleAdd}>Thêm Người Dùng</Button>
                    {/* <Button className="mr-3 btn-outline-primary">Nhập Exel</Button> */}
                    <CSVLink className="mr-3 btn btn-outline-success" filename={"nguoidung.csv"} data={dataCSV || []} target="_blank"> Xuất CSV Page {page}</CSVLink>
                </div>
            </Row>
            <Row className="mt-3">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Hình ảnh</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Quyền</th>
                            <th>Khóa</th>
                            <th colSpan={3} className="text-center">Thao Tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.getAllUsers.map((user: any) => (
                            <tr key={user._id}>
                                <td>
                                    <Image
                                        src={getUrlImage(user.avatar)}
                                        style={{
                                            width: "171px",
                                            height: "180px",
                                            objectFit: "fill",
                                        }}
                                        rounded
                                    />
                                </td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td onClick={() => handleKhoa(user._id)}>{user.isLocked ? <CiLock /> : <CiUnlock />}</td>
                                <td onClick={() => handleDelete(user._id, user?.avatar)}>
                                    <MdDelete />
                                </td>
                                <td onClick={() => handleEdit(user)}><FaMarker /></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Pagination count={data?.countUser as number} take={take} skip={handleChangPage} page={page} />
            </Row>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                user={selectedUser}
            />
            <ThemNguoiDung
                show={modalAdd}
                onHide={() => setModalAdd(false)}
                refresh={refetch}
            />
        </div>
    );
}

export default NguoiDung;
