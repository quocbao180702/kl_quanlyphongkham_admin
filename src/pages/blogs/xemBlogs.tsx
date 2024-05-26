import { Image, Modal } from "react-bootstrap";

function XemBlog({ show, onHide, blog }: any) {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header>
                <Modal.Title>Blogs</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="pb-3" style={{overlay: "none"}}>
                    <div className="bg-white mb-3" style={{ padding: "30px" }}>
                        <p className="text-center" style={{ fontSize: "18px" }}><strong>Tác giả: </strong>{blog.user?.username}</p>
                        <h2 className="mb-3 text-center">{blog?.tieude}</h2>
                        <div className="w-100 text-center">
                            <Image src={blog?.hinhanh?.url} style={{ width: "80%", maxHeight: "500px", objectFit: "fill" }} alt="" />
                        </div>
                        <h5 className="mt-3 mb-3">Tóm tắt</h5>
                        <p><em>{blog?.tomtat}</em></p>
                        <h5 className="mt-3 mb-3">Nội Dung</h5>
                        <div dangerouslySetInnerHTML={{ __html: blog.noidung ?? '' }} />
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default XemBlog;