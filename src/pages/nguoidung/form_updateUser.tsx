import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MdClose } from 'react-icons/md';
import { LinkImage, useUpdateUserMutation } from '../../graphql-definition/graphql';
import UploadImage from '../../components/UploadImage';


function MyVerticallyCenteredModal({ show, onHide, user }: any) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [imageUrl, setImageUrl] = useState<LinkImage>()

    useEffect(() => {
        if (user) {
            setUsername(user?.username);
            setPassword(user?.password);
            setEmail(user?.email);
            setPhoneNumber(user?.phoneNumber)
        }
    }, [user]);

    const [updateUser] = useUpdateUserMutation();

    const HandleUpdate = async () => {
        try {
            await updateUser({
                variables: {
                    "update": {
                        "id": user._id,
                        "username": username,
                        "email": email,
                        "password": password,
                        "role": user?.role,
                        "avatar": {
                            "url": user?.avatar?.url,
                            "fileName": user?.avatar?.fileName,
                            "type": user?.avatar?.type
                        }
                    }
                }
            });
            onHide();
        } catch (error) {
            console.error('Error update user:', error);
        }
    }

    const handleUpload = (imageData: LinkImage) => {
        // Xử lý dữ liệu hình ảnh tải lên ở đây
        console.log('Uploaded image:', imageData);
        setImageUrl(imageData);
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
                    {user ? `Edit User: ${user.username}` : 'Add New User'}
                </Modal.Title>
                <Button variant="link" onClick={onHide}>
                    <MdClose style={{ fontSize: '1.5rem' }} />
                </Button>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <UploadImage
                        linkImage={imageUrl}
                        handleUploadCallback={handleUpload}
                    />
                    <Form.Group className="mb-3" controlId="formUserEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder={user?.email || "Enter email"}
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formUserPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder={user?.password || "Enter password"}
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formUserUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={user?.username || "Enter username"}
                            value={username}
                            onChange={event => setUsername(event.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={HandleUpdate}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyVerticallyCenteredModal;
