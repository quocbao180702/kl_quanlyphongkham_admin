import { Button, Modal } from "react-bootstrap";
import { MdClose } from "react-icons/md";
import { Form } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateChuyenKhoaMutation } from "../../graphql-definition/graphql";
import { message } from "antd";

function ThemChuyenKhoa({ show, onHide, refetch }: any) {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [createChuyenKhoa] = useCreateChuyenKhoaMutation();

    const handleAdd: SubmitHandler<any> = async (data) => {
        try {
            await createChuyenKhoa({
                variables: {
                    "input": {
                        "tenkhoa": data?.tenkhoa || '',
                        "mota": data?.mota || ''
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
                    Thêm Chuyên Khoa
                </Modal.Title>
                <Button variant="link" onClick={onHide}>
                    <MdClose style={{ fontSize: '1.5rem' }} />
                </Button>
            </Modal.Header>
            <Modal.Body>
                <Form>

                    <Form.Group controlId="formTenKhoa" className="mt-2">
                        <Form.Label>Tên Khoa</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={"Tên Khoa"}
                            {...register('tenkhoa')}
                        />
                    </Form.Group>

                    <Form.Group controlId="formmota" className="mt-2">
                        <Form.Label>Mô Tả</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={"Mô Tả"}
                            {...register('mota')}
                        />
                    </Form.Group>

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

export default ThemChuyenKhoa;