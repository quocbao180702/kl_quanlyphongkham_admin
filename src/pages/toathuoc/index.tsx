import { useContext, useEffect, useState } from "react";
import { useGetAllToaThuocbyBacSiQuery } from "../../graphql-definition/graphql";
import { AuthContext } from "../../provider/AuthContextProvider";
import { Container, Row, Table } from "react-bootstrap";
import dayjs from 'dayjs';
import { FaEye } from "react-icons/fa6";
import XemToaThuoc from "./XemToaThuoc";
import Pagination from "../../components/pagination";

function ToaThuoc() {

    const { profile } = useContext(AuthContext);
    const [take, setTake] = useState(10);
    const [skip, setSkip] = useState(0);
    const [page, setPage] = useState(1);

    const { data: dataToathuoc, loading: loadingToathuoc, error: errorToathuoc } = useGetAllToaThuocbyBacSiQuery({
        variables: {
            id: profile?._id,
            input: {
                take: take,
                skip: skip
            }
        },
        skip: !profile?._id
    });

    const handleChangPage = (skip: number, page: number) => {
        setSkip(skip);
        setPage(page)
    }

    const [selectedToaThuoc, setSelectedToaThuoc] = useState({})
    const [show, setModalShow] = useState(false);



    const handleXem = (toathuoc: any) => {
        console.log('toa thuốc là: ', toathuoc)
        setSelectedToaThuoc(toathuoc);
        setModalShow(true)
    }
    useEffect(() => {
        console.log('toa thuốc', selectedToaThuoc);
    }, [selectedToaThuoc])


    return (
        <>
            <Container style={{ minHeight: "500px" }}>
                <Row>
                    <h3 className="text-center">Toa Thuốc</h3>
                </Row>
                <Row className="mt-3">
                    <Table bordered hover>
                        <thead>
                            <tr className="text-center">
                                <th style={{ width: "5%" }}>STT</th>
                                <td>Ngày Tạo</td>
                                <td>Ngày Tái Khám</td>
                                <td>Bệnh</td>
                                <td>Bệnh Nhân</td>
                                <td style={{ width: "7%" }}>Chi Tiết</td>
                            </tr>
                        </thead>
                        <tbody>
                            {dataToathuoc && dataToathuoc?.getAllToaThuocbyBacSi.map((toathuoc, index: number) => {
                                return (
                                    <tr className="text-center" key={toathuoc?._id}>
                                        <td>{index += 1}</td>
                                        <td>{dayjs(toathuoc?.ngaytao).format('DD-MM-YYYY')}</td>
                                        <td>{dayjs(toathuoc?.ngaytaikham).format('DD-MM-YYYY')}</td>
                                        <td>{toathuoc?.benhs?.map((benh) => (benh?.tenbenh))}</td>
                                        <td>{toathuoc?.benhnhan?.hoten}</td>
                                        <td onClick={() => handleXem(toathuoc)}><FaEye /></td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </Table>
                    <Pagination count={dataToathuoc?.CountToaThuocbyBacSi as number} take={take} skip={handleChangPage} page={page} />
                </Row>
                <XemToaThuoc
                    show={show}
                    onHide={() => setModalShow(false)}
                    toathuoc={selectedToaThuoc}
                />
            </Container>
        </>
    );
}

export default ToaThuoc;