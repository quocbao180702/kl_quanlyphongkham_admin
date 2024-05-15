import { Button, Modal } from "react-bootstrap";

function XemToaThuoc({ show, onHide, toathuoc }: any) {

    console.log('toa thuốc: ', toathuoc)
    const ketQua = (toathuoc?.thuocs || []).reduce((acc: any, curr: any, index: number) => {
        acc.push({ thuoc: curr?.tenthuoc, soLuong: (toathuoc?.soluongs || [])[index] });
        return acc;
    }, []);
    console.log('kết quả là: ', ketQua)

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
                {/* {toathuoc && ( < ToaThuocPDF data={toathuoc}/>)} */}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
     );
}

export default XemToaThuoc;