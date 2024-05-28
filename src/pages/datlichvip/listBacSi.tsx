import { useEffect, useState } from "react";
import { useGetAllBacSiQuery } from "../../graphql-definition/graphql";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import moment from "moment";
import LichKham from "./lichkham";

function ListBacSi() {

    const [take, setTake] = useState(10);
    const [skip, setSkip] = useState(0);
    const [idBacSi, SetIdBacSi] = useState('');
    const [idLich, SetIdLich] = useState('');
    const [show, SetShow] = useState(false);

    const { data: dataBacSi, loading: loadingBacSi, error: errorBacSi, refetch: refetchBacSi } = useGetAllBacSiQuery({
        variables: {
            "input": {
                "take": take,
                "skip": skip
            }
        }
    });

    useEffect(() => {
        console.log('data bác sĩ: ', dataBacSi?.getAllBacSi)
    }, [dataBacSi?.getAllBacSi])

    const handleChooseBacSi = (lichkham: string, bacsi: string) => {
        SetIdBacSi(bacsi);
        SetIdLich(lichkham);
        SetShow(true);
    }

    return (
        <div>
            <h3 className="text-center">Lịch Làm Việc Của Bác Sĩ</h3>
            <div>Tìm Kiếm</div>
            <div className="row">
                {dataBacSi?.getAllBacSi.map((bacsi: any) => (
                    <Col lg={3} key={bacsi?._id}>
                        <Card className="mt-2">
                            <Card.Header>{bacsi?.chuyenkhoa?.tenkhoa}</Card.Header>
                            <Card.Body>
                                <Card.Title>{bacsi?.hoten}</Card.Title>
                                <Card.Text>
                                    <p><strong>Ngày Sinh: </strong>{moment(bacsi?.ngaysinh).format('DD-MM-YYYY')}</p>
                                    <p><strong>Số Điện Thoại: </strong>{bacsi?.sodienthoai}</p>
                                    <p><strong>Lịch: </strong>{bacsi?.lichkham ? <Badge bg="success">Đã Có Lịch</Badge> : <Badge bg="warning">Chưa Có Lịch</Badge>}</p>
                                </Card.Text>
                                <div className="w-100 d-flex justify-content-around">
                                    {/* <Button onClick={() => handleChooseBacSi(bacsi?.lichkham, bacsi?._id)} className="btn-outline-primary"> Đặt </Button> */}
                                    <Button onClick={() => handleChooseBacSi(bacsi?.lichkham, bacsi?._id)} className="btn-outline-success"> Xem Lịch </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </div>
            <LichKham show={show} onHide={() => SetShow(false)} idLich={idLich} idBacSi={idBacSi}/>
        </div>
    );
}

export default ListBacSi;