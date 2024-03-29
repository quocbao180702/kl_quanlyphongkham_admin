import { useEffect } from "react";
import { Button, Card, Table } from "react-bootstrap";

function XetNghiem({ dataSelected }: any) {
    useEffect(() => {
        console.log('data selected', dataSelected)
    }, [dataSelected])
    return (<>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Hình Ảnh</Card.Title>
                <Card.Text>
                    Hình Ảnh Cận Lâm Sàng
                </Card.Text>
                <Button variant="primary">Xem</Button>
            </Card.Body>
        </Card>
        <Table responsive >
            <thead>
                <tr>
                    <th>Loại Xét Nghiệm</th>
                    <th>Kết Quả</th>
                </tr>
            </thead>
            <tbody>

                <tr>
                    <td>Xét nghiệm sinh hóa</td>
                    <td>Máu vượt 2%</td>
                </tr>
            </tbody>
        </Table>
    </>);
}

export default XetNghiem;