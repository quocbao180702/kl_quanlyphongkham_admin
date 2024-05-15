import { Image } from "antd";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import "./style.css";

function Profile() {

    

    return (
        <>
            <div className="profile-page">
                <Container className="mt-5">
                    <Row>
                        <Col lg={4}>
                            <Image
                                className="mx-auto"
                                style={{ maxHeight: 300 }}
                                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                            />
                            <div className="d-flex justify-content-center mt-3">
                                <Button> Cập Nhật </Button>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Thông Tin Cá Nhân</Card.Title>

                                    <Card.Text>Bác Sĩ: Đặng Quốc Bảo</Card.Text>
                                    <Card.Text>Ngày Sinh: 20 - 02 -2002</Card.Text>

                                    <Card.Text>CCCD: 808202123456789</Card.Text>
                                    <Card.Text>Giới Tính: Nam</Card.Text>
                                    <Card.Text>Địa Chỉ: Phú Hòa - Thoại Sơn - An Giang</Card.Text>
                                    <Card.Text>Chuyển Khoa: Chuyên Khóa Hồi Phục Sức Khỏe</Card.Text>
                                    <Card.Text>Phòng: Phòng 1</Card.Text>
                                    <Card.Text>Ngày Bắt Đầu: 10 - 02 - 2023</Card.Text>
                                    <Row className="justify-content-around">
                                        <Button>Cập Nhật</Button>
                                        <Button>Đổi Mật Khẩu</Button>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Profile;