import { Button, Modal } from "react-bootstrap";
import { MdClose } from "react-icons/md";

function LichKham({ show, onHide }: any) {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Lịch Khám Của Bác Sĩ
                    </Modal.Title>
                    <Button variant="link" onClick={onHide}>
                        <MdClose style={{ fontSize: '1.5rem' }} />
                    </Button>
                </Modal.Header>
            </Modal.Header>
            <Modal.Body>
                
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default LichKham;