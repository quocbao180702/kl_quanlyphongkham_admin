import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FormEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../graphql-definition/graphql";
import { setJwtToken } from "../../utils/jwt";
import { ApolloError } from "@apollo/client";
import { Alert } from "@mui/material";
import { AuthContext } from "../../provider/AuthContextProvider";


export function Login() {
    const { setIsAuthenticated } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [showError, setError] = useState(false);
    const [thongbao, setThongBao] = useState('')

    useEffect(() => {
        if (showError) {
            const timer = setTimeout(() => {
                setError(false)
                setThongBao('');
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [showError]);
    const [login, _] = useLoginMutation();

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await login({ variables: { input: { username, password } } });
            navigate('..');

            if (response.data?.login) {
                setJwtToken(response.data.login.access_token as string);
                setIsAuthenticated(true);
                navigate('..');
            }
        } catch (error) {
            if (error instanceof ApolloError && error.graphQLErrors.length > 0) {
                if (error?.graphQLErrors[0]?.message === 'Unauthorized') {

                    setThongBao('Đăng nhập không thành công!!!');
                }
                setError(true);
            } else {
                console.log('Other Errors:', error);
            }
        }
    };

    return (
        <>
            {showError && (
                <>
                    <div style={{ position: 'fixed', zIndex: 2 }}>
                        <Alert severity="error" onClose={() => { setError(false); setThongBao(''); }}>
                            {thongbao}
                        </Alert>
                    </div>
                </>
            )}
            <Container>
                <Row>
                    <Col md={6} className="offset-md-3">
                        <h2 className="text-center text-dark mt-5">Đăng Nhập</h2>
                        <div className="text-center mb-5 text-dark">Phòng Khám Đa Khoa</div>
                        <div className="card my-5">

                            <Form onSubmit={onSubmit} className="card-body cardbody-color p-lg-5" style={{ backgroundColor: "#ebf2fa" }}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Tên Người Dùng</Form.Label>
                                    <Form.Control className="p-3 mb-2 bg-light text-dark" type="text" placeholder="Tên Người Dùng" value={username} onChange={event => setUsername(event.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Mật Khẩu</Form.Label>
                                    <Form.Control className="p-3 mb-2 bg-light text-dark" type="password" placeholder="Mật Khẩu" value={password} onChange={event => setPassword(event.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="btn-color px-5 mb-5 w-100">
                                    Submit
                                </Button>
                                <div id="emailHelp" className="form-text text-center mb-5 text-dark">Chưa Tạo? <a href="#" className="text-dark fw-bold"> Liên Hệ Người Lý Để Hỗ Trợ</a>
                                </div>
                            </Form>
                        </div>

                    </Col>
                </Row>
            </Container>
        </>
    )
}