import { Button, Modal } from "react-bootstrap";
import PhieuCanLamSang from "../pdf/phieucanlamsang";

function XemPhieuCLS({show, onHide, phieucls}: any) {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title>Toa Thuốc</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {phieucls && (
                    <PhieuCanLamSang data={phieucls} />
                )}
                {/* {toathuoc && ( < ToaThuocPDF data={toathuoc}/>)} */}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default XemPhieuCLS;