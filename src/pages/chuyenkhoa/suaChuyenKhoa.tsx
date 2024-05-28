import { message } from "antd";
import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { MdClose } from "react-icons/md";
import { useUpdateChuyenKhoaMutation } from "../../graphql-definition/graphql";

function SuaChuyenKhoa({ show, onHide, data, refetch }: any) {
    const [tenkhoa, SetTenKhoa] = useState(data?.tenkhoa || "");
    const [mota, SetMota] = useState(data?.mota || "");

    const [updateChuyenKhoa] = useUpdateChuyenKhoaMutation();
    const HandleUpdate = async () => {
        try {
            if(data?._id){
                const response = await updateChuyenKhoa({
                    variables: {
                        input: {
                            id: data?._id,
                            tenkhoa: tenkhoa,
                            mota: mota
                        }
                    }
                })
            }
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
                    Sửa Chuyên Khoa
                </Modal.Title>
                <Button variant="link" onClick={onHide}>
                    <MdClose style={{ fontSize: '1.5rem' }} />
                </Button>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-2" controlId="formTenKhoa">
                        <Form.Label>Tên Khoa</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={data?.tenkhoa || "Enter Tên Khoa"}
                            onChange={event => SetTenKhoa(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formMota">
                        <Form.Label>Mô Tả</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={data?.mota || "Enter Mô Tả"}
                            onChange={event => SetMota(event.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={HandleUpdate}>
                    Save Changes
                </Button>
            </Modal.Footer>


        </Modal>
    );
}

export default SuaChuyenKhoa;