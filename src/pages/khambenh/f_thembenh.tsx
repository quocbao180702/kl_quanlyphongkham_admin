import { Button, Form, Modal } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";
import { useCreateBenhMutation } from "../../graphql-definition/graphql";

function ThemBenh({ onHide, show, refetch }: any) {

    const { register, handleSubmit, formState: { errors } } = useForm();


    const [createBenh] = useCreateBenhMutation();
    const handleAdd: SubmitHandler<any> = async (data) => {
        try {
            const result = await createBenh({
                variables: {
                    input: {
                        "maICD": data?.maicd,
                        "tenbenh": data?.tenbenh,
                        "chuongbenh": data?.chuongbenh,
                        "motabenh": data?.motabenh
                    }
                }
            })
            onHide()
            refetch();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Thêm Thuốc
                </Modal.Title>
                <Button variant="link" onClick={onHide}>
                    <MdClose style={{ fontSize: '1.5rem' }} />
                </Button>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formMaICD" className="mt-2">
                        <Form.Label>Mã ICD</Form.Label>
                        <Form.Control type="text" placeholder={"Mã ICD"} {...register('maicd')} />
                    </Form.Group>
                    <Form.Group controlId="formTenBenh" className="mt-2">
                        <Form.Label>Tên Bệnh</Form.Label>
                        <Form.Control type="text" placeholder={"Tên Bệnh"} {...register('tenbenh')} />
                    </Form.Group>
                    <Form.Group controlId="formChuongBenh" className="mt-2">
                        <Form.Label>Tên Bệnh</Form.Label>
                        <Form.Control type="text" placeholder={"Chương Bệnh"} {...register('chuongbenh')} />
                    </Form.Group>
                    <Form.Group controlId="formMotaBenh" className="mt-2">
                        <Form.Label>Mô Tả Bệnh</Form.Label>
                        <Form.Control type="text" placeholder={"Mô Tả Bệnh"} {...register('motabenh')} />
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

export default ThemBenh;