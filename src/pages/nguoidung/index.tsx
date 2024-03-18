import { Button, Row, Table, Image } from 'react-bootstrap';
import { MdDelete } from 'react-icons/md';
import { FaMarker } from 'react-icons/fa';
import { CiLock, CiUnlock } from 'react-icons/ci';
import { LinkImage, Users, useDeleteUserMutation, useGetAllUsersQuery, useXulyKhoaMutation } from '../../graphql-definition/graphql';
import { useEffect, useState } from 'react';
import MyVerticallyCenteredModal from './form_updateUser'; import ThemNguoiDung from './f_themUser';
import { getUrlImage } from '../../utils/uploadFile';
;

function NguoiDung() {
    const { data, loading, error, refetch } = useGetAllUsersQuery();

    const [selectedUser, setSelectedUser] = useState({});
    const [modalShow, setModalShow] = useState(false);
    const [modalAdd, setModalAdd] = useState(false);


    const [deleteUser] = useDeleteUserMutation();

    const handleDelete = async (id: string) => {
        try {
            await deleteUser({ variables: { id } });
            refetch();
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

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
                    <Button className="mr-3 btn-outline-primary">Nhập Exel</Button>
                    <Button className="mr-3 btn-outline-success">Xuất Exel</Button>
                    <Button className="mr-3 btn-outline-danger">Xuất PDF</Button>
                </div>
            </Row>
            <Row className="mt-3">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Hình ảnh</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                            <th>Quyền</th>
                            <th>Khóa</th>
                            <th colSpan={3} className="text-center">Thao Tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.getAllUsers.map((user: Users) => (
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
                                <td>{user.phoneNumber}</td>
                                <td>{user.role}</td>
                                <td onClick={() => handleKhoa(user._id)}>{user.isLocked ? <CiLock /> : <CiUnlock />}</td>
                                <td onClick={() => handleDelete(user._id)}>
                                    <MdDelete />
                                </td>
                                <td onClick={() => handleEdit(user)}><FaMarker /></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
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
