import { useState } from "react";
import HoaDonCanLamSang from "./hoadoncanlamsang";
import Hoadon from "./hoadon";
import { Button, Row } from "react-bootstrap";


function HoaDonPage() {
    const [currentComponent, setCurrentComponent] = useState(false);

    const handleChuyenComponent = () => {
        setCurrentComponent(!currentComponent)
    }


    return (
        <div className="container-fluid">
            <Row>
                <Button onClick={handleChuyenComponent}>Chuyển</Button>
            </Row>
            <Row>
                {currentComponent ? <Hoadon /> : <HoaDonCanLamSang />}
            </Row>
        </div>
    );
}

export default HoaDonPage;