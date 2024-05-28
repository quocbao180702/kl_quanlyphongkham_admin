import { Autocomplete, TextField } from "@mui/material";
import { Button, Form, Modal } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";
import { useCreatePhongMutation, useGetAllChuyenKhoaQuery } from "../../graphql-definition/graphql";
import { ChangeEvent, useState } from "react";
import { message } from "antd";

function ThemPhong({ show, onHide, refetch }: any) {
    const { data: chuyenkhoaData, loading: chuyenkhoaLoading, error: chuyenkhoaError } = useGetAllChuyenKhoaQuery();

    const [chuyenkhoa, setChuyenKhoa] = useState('');

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const handleChuyenKhoachoose = (event: ChangeEvent<unknown>, value: any) => {
        setChuyenKhoa(value?._id);
    }
    const [createPhong] = useCreatePhongMutation();
    const handleAdd: SubmitHandler<any> = async (data: any) => {

        try {
            const response = await createPhong({
                variables: {
                    input: {
                        tenphong: data?.tenphong,
                        mota: data?.mota,
                        chuyenkhoa: chuyenkhoa
                    }
                }
            })
            refetch();
            onHide();
        } catch (error) {
            message.error(`${error}`)
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
                    Thêm Phòng
                </Modal.Title>
                <Button variant="link" onClick={onHide}>
                    <MdClose style={{ fontSize: '1.5rem' }} />
                </Button>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formTenPhong" className="mt-2">
                        <Form.Label>Tên Phòng</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={"Tên Phòng"}
                            {...register('tenphong')}
                        />
                    </Form.Group>
                    <Form.Group controlId="formMota" className="mt-2">
                        <Form.Label>Mô Tả</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={"Mô Tả"}
                            {...register('mota')}
                        />
                    </Form.Group>
                    <Autocomplete
                        className="mt-2"
                        id="multiple-limit-tags"
                        options={chuyenkhoaData?.getAllChuyenKhoa || []}
                        getOptionLabel={(option) => option?.tenkhoa}
                        onChange={handleChuyenKhoachoose}
                        renderInput={(params) => (
                            <TextField {...params} label="Chuyên Khoa" placeholder="Chuyên Khoa..." />
                        )}
                        sx={{ width: '100%' }}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                <Button variant="primary" type="submit" onClick={() => handleSubmit(handleAdd)()}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ThemPhong;