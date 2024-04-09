import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { LinkImage, TypeImage, useCreateBlogMutation, useGetAllBlogsQuery } from "../../graphql-definition/graphql";
import { useContext, useState } from "react";
import UploadImage from "../../components/UploadImage";
import { AuthContext } from "../../provider/AuthContextProvider";
import { useNavigate } from "react-router-dom";
function ThemBlog() {

    const { profile } = useContext(AuthContext)
    const { register, handleSubmit, control } = useForm();
    const { refetch } = useGetAllBlogsQuery({
        variables: {
            "input": {
                "skip": 0,
                "take": 2
            }
        }
    });
    const navigate = useNavigate();

    const [imageUrl, setImageUrl] = useState<LinkImage>();


    const handleUpload = (imageData: LinkImage) => {
        console.log(imageData)
        setImageUrl(imageData);
    };

    const [createBlog, _] = useCreateBlogMutation();
    const onSubmit: SubmitHandler<any> = async (data) => {
        try {
            if (profile?._id) {
                const response = await createBlog({
                    variables: {
                        "input": {
                            "user": profile?.user?._id,
                            "hinhanh": {
                                "url": imageUrl?.url || '',
                                "fileName": imageUrl?.fileName || '',
                                "type": imageUrl?.type as TypeImage
                            },
                            "tieude": data?.tieude,
                            "tomtat": data?.tomtat,
                            "noidung": data?.noidung
                        }
                    }
                });
                refetch()
                navigate('/blogs');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container>
            <Row className="justify-content-center">
                <h2>Thêm Blogs</h2>
            </Row>
            <Row className="mt-3">
                <Form className="w-100" onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <Col xl={6} md={6} sm={12}>
                            <Row className="mt-3 border-top border-bottom w-100">
                                <h5>Tiêu Đề</h5>
                            </Row>
                            <Row className="mt-3">
                                <Form.Group className="w-50">
                                    <Form.Control
                                        type="text"
                                        placeholder="Tiêu đề"
                                        {...register('tieude')}
                                    />
                                </Form.Group>
                            </Row>

                            <Row className="mt-3 border-top border-bottom w-100">
                                <h5>Tóm Tắt</h5>
                            </Row>

                            <Row className="mt-3">
                                <Form.Group className="w-100">
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="Tóm tắt"
                                        {...register('tomtat')}
                                    />
                                </Form.Group>
                            </Row>
                        </Col>
                        <Col xl={6} md={6} sm={12}>
                            <Row className="mt-3 border-top border-bottom w-100">
                                <h5>Hình Ảnh</h5>
                            </Row>
                            <Row className="mt-3">
                                <UploadImage
                                    linkImage={imageUrl}
                                    handleUploadCallback={(file: any) => {
                                        handleUpload(file);
                                    }}
                                />
                            </Row>
                        </Col>
                    </Row>

                    <Row className="mt-3 border-top border-bottom">
                        <h5>Nội Dung</h5>
                    </Row>
                    <Row>
                        <Form.Group className="w-100">

                            <Controller
                                name="noidung"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <CKEditor
                                        editor={ClassicEditor}
                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            field.onChange(data);
                                        }}
                                    />
                                )}
                            />
                        </Form.Group>
                    </Row>

                    <Row className="mt-3 border-top border-bottom w-100">
                        <h5>Ảnh</h5>
                    </Row>
                    <Row className="mt-3 justify-content-center">
                        <Button type="submit" className="btn-primary">Tạo Blog</Button>
                    </Row>

                </Form>
            </Row>
        </Container>
    );
}

export default ThemBlog;
