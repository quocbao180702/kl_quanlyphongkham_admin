import { Button, Form, Modal } from "react-bootstrap";
import { MdClose } from "react-icons/md";
import UploadImage from "../../components/UploadImage";
import { useEffect, useState } from "react";
import { LinkImage, TypeImage, useUpdateBlogMutation } from "../../graphql-definition/graphql";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function SuaBlog({ show, onHide, blog, refetch }: any) {

    const [tieude, setTieude] = useState('');
    const [tomtat, setTomtat] = useState('');
    const [noidung, setNoiDung] = useState('');
    const [imageUrl, setImageUrl] = useState<LinkImage>()

    useEffect(() => {
        if (blog) {
            setTieude(blog?.tieude);
            setTomtat(blog?.tomtat);
            setNoiDung(blog?.noidung);
        }
    }, [blog])

    const handleUpload = (imageData: LinkImage) => {
        console.log('Uploaded image:', imageData);
        setImageUrl(imageData);
    };

    const [updateBlog] = useUpdateBlogMutation();

    const handleAdd = async () => {
        console.log('data update: ', tieude, tomtat, noidung, imageUrl)
        try {
            await updateBlog({
                variables: {
                    "input": {
                        "id": blog?._id,
                        "user": blog?.user?._id,
                        "tieude": tieude,
                        "tomtat": tomtat,
                        "noidung": noidung,
                        "hinhanh": {
                            "url": imageUrl?.url || blog?.hinhanh?.url,
                            "fileName": imageUrl?.fileName || blog?.hinhanh?.fileName,
                            "type": imageUrl?.type as TypeImage || blog?.hinhanh?.type
                        }
                    }
                }
            })
            refetch();
            onHide();

        } catch (error) {
            console.log(error);
        }
    }

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

                    <Form.Group className="mb-3" controlId="formBlogtieude">
                        <Form.Label>Tiêu Đề</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={"Tiêu đề"}
                            value={tieude}
                            onChange={event => setTieude(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBlogtomtat">
                        <Form.Label>Tóm Tắt</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder={"Tóm tắt"}
                            value={tomtat}
                            onChange={event => setTomtat(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBlogNoiDung">
                        <Form.Label>Nội Dung</Form.Label>
                        <CKEditor
                            editor={ClassicEditor}
                            data={noidung}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                setNoiDung(data);
                            }}
                        />
                    </Form.Group>

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

export default SuaBlog;