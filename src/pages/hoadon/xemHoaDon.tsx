import moment from "moment";
import { Button, Modal } from "react-bootstrap";
import HoadonPDF from "../pdf/hoadon";

function XemHoaDon({ show, onHide, hoadon }: any) {

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Hóa Đơn</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {hoadon && (
                    <HoadonPDF data={hoadon} />
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default XemHoaDon;
