
import { Button, Row } from "react-bootstrap";
import ThuocTable from "./thuoc-table";
import { useGetAllThuocQuery } from "../../graphql-definition/graphql";

function Thuoc() {

    const { data, loading, error } = useGetAllThuocQuery();


    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error...</div>;

    
    return (<>
        <div className="fluit-container">
            <Row className="mt-3">
                <div className="d-flex justify-content-center">
                    <Button className="mr-3 btn-outline-primary">Nhập Exel</Button>
                    <Button className="mr-3 btn-outline-success">Xuất Exel</Button>
                    <Button className="mr-3 btn-outline-danger">Xuất PDF</Button>
                </div>
            </Row>
            <Row className="mt-3">
            <ThuocTable data={data}/>
            </Row>
        </div>
    </>);
}

export default Thuoc;