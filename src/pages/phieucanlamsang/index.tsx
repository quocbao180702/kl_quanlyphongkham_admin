import { Badge, Container, Row, Table } from "react-bootstrap";
import { useGetAllPhieuCanLamSangQuery } from "../../graphql-definition/graphql";
import moment from "moment";
import { BsEyeFill } from "react-icons/bs";
import { useState } from "react";
import XemPhieuCLS from "./xemPhieuCLS";

function PhieuCanLamSang() {

    const { data: dataPhieuCLS, error: errorPhieuCLS, loading: loadingPhieuCLS } = useGetAllPhieuCanLamSangQuery();

    const [selected, SetSelected] = useState({});
    const [show, SetShow] = useState(false);

    const handleXem = (phieucls: any) => {
        SetSelected(phieucls);
        SetShow(true);
    }

    return (
        <>
            <Container>
                <Row>
                    <h3 className="text-center">Phiếu Chỉ Định Cận Lâm Sàng</h3>
                </Row>
                <Row className="mt-3">
                    <Table bordered hover>
                        <thead>
                            <tr>
                                <th>SST</th>
                                <th>Bệnh Nhân</th>
                                <th>Số Điện Thoại</th>
                                <th>Bác Sĩ</th>
                                <th>BHYT</th>
                                <td>Thao Tác</td>
                            </tr>
                        </thead>
                        <tbody>
                            {dataPhieuCLS && dataPhieuCLS.getAllPhieuCLS.map((phieucls, index: number) => (
                                <tr key={phieucls?._id}>
                                    <td>{index + 1}</td>
                                    <td>{phieucls?.benhnhan?.hoten}</td>
                                    <td>{phieucls?.benhnhan?.sodienthoai}</td>
                                    <td>{phieucls?.bacsi?.hoten}</td>
                                    <td>{phieucls?.bhyt ? "CÓ" : "KHÔNG"}</td>
                                    <td onClick={() => handleXem(phieucls)}><BsEyeFill /></td>
                                </tr>
                            ))}
                        </tbody>

                    </Table>
                </Row>
                <XemPhieuCLS
                    show={show}
                    onHide={() => SetShow(false)}
                    phieucls={selected}
                />
            </Container>
        </>
    );
}

export default PhieuCanLamSang;