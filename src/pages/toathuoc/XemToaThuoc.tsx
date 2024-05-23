import { useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import Taothuoc from "../pdf/taothuoc";

function XemToaThuoc({ show, onHide, toathuoc }: any) {

    const ketQua = (toathuoc?.thuocs || []).reduce((acc: any, curr: any, index: number) => {
        acc.push({ thuoc: curr?.tenthuoc, soLuong: (toathuoc?.soluongs || [])[index] });
        return acc;
    }, []);

    useEffect(() => {
        console.log('kết quả', ketQua)
    }, [ketQua])

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
                {toathuoc && (
                    <Taothuoc data={toathuoc} />
                )}
                {/* {toathuoc && ( < ToaThuocPDF data={toathuoc}/>)} */}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
     );
}

export default XemToaThuoc;