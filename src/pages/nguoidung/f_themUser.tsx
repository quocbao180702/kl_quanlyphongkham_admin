import { Button, Form, Modal } from "react-bootstrap";
import { MdClose } from "react-icons/md";
import UploadImage from "../../components/UploadImage";
import { useState } from "react";
import { LinkImage, TypeImage, UserRole, useCreateUserMutation } from "../../graphql-definition/graphql";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function ThemNguoiDung({ show, onHide, refresh }: any) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState<UserRole>(UserRole.User);
    const [imageUrl, setImageUrl] = useState<LinkImage>();

    const handleUpload = (imageData: LinkImage) => {
        console.log(imageData)
        setImageUrl(imageData);
    };

    const handleChange = (event: SelectChangeEvent<string>) => {
        setRole(event.target.value as UserRole);
    };

    const [createUserMutation] = useCreateUserMutation();

    const handleAdd = async () => {
        try {
            console.log(username, email, password, role, imageUrl)
            if (username && email && password  && role && imageUrl) {
                const response = await createUserMutation({
                    variables: {
                        input: {
                            username: username,
                            email: email,
                            password: password,
                            avatar: {
                                url: imageUrl.url,
                                fileName: imageUrl.fileName,
                                type: imageUrl.type
                            },
                            role: role,
                            isLocked: false
                        }
                    }
                });
                console.log("User created:", response);
                refresh();
                onHide();
            } else {
                console.log('Hãy điền đầy đủ thông tin các trường');
            }
        } catch (error) {
            console.error("Error creating user:", error);
        }
    };

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Thêm Người Dùng
                </Modal.Title>
                <Button variant="link" onClick={onHide}>
                    <MdClose style={{ fontSize: '1.5rem' }} />
                </Button>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <UploadImage
                        linkImage={imageUrl}
                        handleUploadCallback={(file: any) => {
                            handleUpload(file);
                        }}
                    />

                    <Form.Group className="mb-3" controlId="formUserEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder={"Enter email"}
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formUserPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder={"Enter password"}
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formUserUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={"Enter username"}
                            value={username}
                            onChange={event => setUsername(event.target.value)}
                        />
                    </Form.Group>


                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small-label">Quyền</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={role}
                            label="Quyền"
                            onChange={handleChange}
                        >
                            <MenuItem value={UserRole.Admin}>Admin</MenuItem>
                            <MenuItem value={UserRole.Staff}>Nhân Viên</MenuItem>
                            <MenuItem value={UserRole.Doctor}>Bác Sĩ</MenuItem>
                            <MenuItem value={UserRole.User}>Người Dùng</MenuItem>
                        </Select>
                    </FormControl>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleAdd}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ThemNguoiDung;
