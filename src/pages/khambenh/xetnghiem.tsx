import { Button, Card } from "react-bootstrap";

function XetNghiem() {
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
    </>);
}

export default XetNghiem;