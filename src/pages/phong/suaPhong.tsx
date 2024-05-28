import { Autocomplete, TextField } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { MdClose } from "react-icons/md";
import { useGetAllChuyenKhoaQuery, useUpdatePhongMutation } from "../../graphql-definition/graphql";
import { message } from "antd";

function SuaPhong({ show, onHide, data, refetch }: any) {

    const { data: chuyenkhoaData, loading: chuyenkhoaLoading, error: chuyenkhoaError } = useGetAllChuyenKhoaQuery();

    const [tenphong, setTenPhong] = useState('');
    const [mota, setMota] = useState('');
    const [chuyenkhoa, setChuyenKhoa] = useState({ _id: '', tenkhoa: '', mota: '' });
    const [chuyenkhoaId, setChuyenKhoaId] = useState('');

    useEffect(() => {
        if (data) {
            setTenPhong(data?.tenphong || '');
            setMota(data?.mota || '');
            setChuyenKhoaId(data?.chuyenkhoa?._id || '');
            setChuyenKhoa(data?.chuyenkhoa || { _id: '', tenkhoa: '', mota: '' });
        }
    }, [data]);

    const handleChuyenKhoaChoose = (event: ChangeEvent<unknown>, value: any) => {
        setChuyenKhoaId(value?._id || '');
        setChuyenKhoa(value || { _id: '', tenkhoa: '', mota: '' });
    }

    const [updatePhong] = useUpdatePhongMutation();
    const handleUpdate = async () => {
        try {
            if (data?._id) {
                const response = await updatePhong({
                    variables: {
                        input: {
                            id: data?._id,
                            tenphong: tenphong,
                            mota: mota,
                            chuyenkhoa: chuyenkhoaId
                        }
                    }
                });
                if (response.data) {
                    message.success('Cập nhật phòng thành công!');
                    refetch();
                    onHide();
                }
            }
        } catch (error) {
            message.error(`Error: ${error}`);
        }
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Sửa Phòng
                </Modal.Title>
                <Button variant="link" onClick={onHide}>
                    <MdClose style={{ fontSize: '1.5rem' }} />
                </Button>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-2" controlId="formTenPhong">
                        <Form.Label>Tên Phòng</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Tên Phòng"
                            value={tenphong}
                            onChange={event => setTenPhong(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formMota">
                        <Form.Label>Mô Tả</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Mô Tả"
                            value={mota}
                            onChange={event => setMota(event.target.value)}
                        />
                    </Form.Group>
                    <Autocomplete
                        key={chuyenkhoa._id}
                        className="mt-2"
                        id="multiple-limit-tags"
                        options={chuyenkhoaData?.getAllChuyenKhoa || []}
                        getOptionLabel={(option) => option?.tenkhoa || ""}
                        value={chuyenkhoa}
                        renderInput={(params) => (
                            <TextField {...params} label="Chuyên Khoa" placeholder="Chuyên Khoa..." />
                        )}
                        sx={{ width: '100%' }}
                        onChange={handleChuyenKhoaChoose}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleUpdate}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SuaPhong;
