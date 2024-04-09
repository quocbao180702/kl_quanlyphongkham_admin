import { useEffect, useState } from "react";
import { Button, Card, Table } from "react-bootstrap";
import { KetQuaCanLamSang, LinkImage } from "../../graphql-definition/graphql";
import { getUrlImage } from "../../utils/uploadFile";

function XetNghiem({ dataSelected }: any) {
    useEffect(() => {
        console.log('xét nghiệm: ', dataSelected)
    }, [dataSelected])
    const [ketquaCLS, setKetQuaCLS] = useState<KetQuaCanLamSang>();
    const [hinhanh, setHinhAnh] = useState<LinkImage>();

    const handleSelect = (select: KetQuaCanLamSang) => {
        setKetQuaCLS(select);
        setHinhAnh(select?.hinhanh || undefined);
        console.log('xét nghiệm đã chọn: ', select)
        console.log(select?.hinhanh)
    }
    return (<>
        <Card style={{ width: '100%' }} className="d-flex justify-content-center">
            {hinhanh ?
                <>
                    <Card.Img style={{ height: "200px"}} variant="top" src={getUrlImage(hinhanh)} />
                    <Button variant="primary">Xem</Button>
                </> :
                <Card.Body>
                    <Card.Title>Hình Ảnh</Card.Title>
                    <Card.Text>
                        Hình Ảnh Cận Lâm Sàng
                    </Card.Text>

                </Card.Body>
            }
        </Card>
        <Table striped bordered hover responsive >
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tên Xét Nghiệm</th>
                    <th>Kết Quả</th>
                </tr>
            </thead>
            <tbody>
                {dataSelected && dataSelected?.ketquacanlamsangs.map((ketqua: any, index: number) => (
                    <tr key={ketqua?._id} onClick={() => handleSelect(ketqua)}>
                        <td>{index + 1}</td>
                        <td>{ketqua?.loaicanlamsang?.tenxetnghiem}</td>
                        <td>{ketqua?.ketluan}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </>);
}

export default XetNghiem;