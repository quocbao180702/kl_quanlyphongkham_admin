import moment from "moment";
import { useEffect } from "react";
import { Button, Modal } from "react-bootstrap";

function XemHoaDon({ show, onHide, hoadon }: any) {
    useEffect(() => {
        console.log('thong tin hóa đơn, ', hoadon)
    }, [hoadon])
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
                    <>
                        <p>Xin chào {hoadon?.benhnhan?.hoten}</p>
                        <p>Thông tin hóa đơn:</p>
                        <p>- Điện thoại: <strong>0123456789</strong></p>
                        <p>- Ngày sinh: <strong>{moment(hoadon?.benhnhan?.ngaysinh).format('YYYY-MM-DD')}</strong></p>
                        <p>Thông tin dịch vụ bao gồm:</p>
                        <table style={{ border: "1" }}>
                            <thead>
                                <tr>
                                    <th style={{ width: "5%" }}>#</th>
                                    <th>Tên</th>
                                    <th style={{ width: "5%" }}>Số lượng</th>
                                    <th style={{ width: "15%" }}>Đơn giá</th>
                                    <th style={{ width: "20%" }}>Thành tiền</th>
                                </tr>
                            </thead>
                            <tbody>
                                {hoadon?.thuocs && hoadon?.thuocs.map((thuoc: any, index: number) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{thuoc?.ten}</td>
                                        <td>{thuoc?.soluong}</td>
                                        <td>{thuoc?.gia}</td>
                                        <td>{thuoc?.thanhtien}</td>
                                    </tr>
                                ))}
                                {hoadon?.vattuyte && hoadon?.vattuyte.map((vattu: any, index: number) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{vattu?.ten}</td>
                                        <td>{vattu?.soluong}</td>
                                        <td>{vattu?.gia}</td>
                                        <td>{vattu?.thanhtien}</td>
                                    </tr>
                                ))}
                                {hoadon?.chitietcanlamsang && hoadon?.chitietcanlamsang.map((canlamsang: any, index: number) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{canlamsang?.ten}</td>
                                        <td>{canlamsang?.soluong}</td>
                                        <td>{canlamsang?.gia}</td>
                                        <td>{canlamsang?.thanhtien}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td colSpan={3}>Tổng tiền sản phẩm:</td>
                                    <td className="text-center" colSpan={2}>
                                        <strong>{hoadon?.thanhtien}</strong><sup><u>đ</u></sup>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Trân trọng,</p>
                    </>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default XemHoaDon;
