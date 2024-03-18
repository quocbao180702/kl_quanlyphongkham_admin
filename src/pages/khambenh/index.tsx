import { Button, Tab, Tabs } from "react-bootstrap";
import ChoKham from "./tab-chokham";
import XetNghiem from "./xetnghiem";
import KhamBenhForm from "./form-khambenh";
import SinhHieu from "./sinhhieu-tab";
import { createContext, useEffect, useMemo, useState } from "react";
import { BenhNhan } from "../../graphql-definition/graphql";
import YeuCauCanLamSang from "./f_YeuCauCLS";


export const EditContext = createContext({});

function KhamBenh() {

    const [dataSelected, setDataSelected] = useState({});

    const [isEditing, setIsEditing] = useState(true);
    const [modalShow, setModalShow] = useState(false);

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleYeuCauXetNghiem = () => {
        setModalShow(true);
    }

    const rowBenhNhanSelected = (select: BenhNhan) => {
        setDataSelected(select);
    }

    const editContextValue = useMemo(() => ({ isEditing, setIsEditing }), [isEditing, setIsEditing]);

    const dataAgrsChoKham = {
        ngaykham: "2024-04-02T00:00:00.000Z",
        phongIds: "65e47226d48a2f39f7140278",
    }

    const handleToaThuoc = () => {
        return true
    }

    return (<>
        <EditContext.Provider value={editContextValue}>
            <div className="fluit-container" style={{ height: "100px" }}>
                <div className="row">
                    <div className="col-3">
                        <Tabs
                            defaultActiveKey="profile"
                            id="fill-tab-example"
                        >
                            <Tab eventKey="chokham" title="Chờ Khám">
                                <ChoKham dataAgrsChoKham={dataAgrsChoKham} selected={rowBenhNhanSelected} />
                            </Tab>
                            <Tab eventKey="dangkham" title="Đã Khám">
                                {/* <ChoKham data={data} error={error} loading={loading} selected={rowBenhNhanSelected} /> */}
                            </Tab>
                            <Tab eventKey="choxetnghiem" title="Xét Nghiệm">
                                {/* <ChoKham data={data} error={error} loading={loading} selected={rowBenhNhanSelected} /> */}
                            </Tab>
                        </Tabs>
                    </div>
                    <div className="col-7">
                        <div className="row">
                            <div className="d-flex justify-content-around align-items-center">
                                <Button className="mr-1" onClick={handleEditToggle}>Khám</Button>
                                <Button className="mr-1" onClick={handleToaThuoc}>Tạo Toa Thuốc</Button>
                                <Button className="mr-1">Xuất Toa Thuốc</Button>
                                <Button className="mr-1" onClick={handleYeuCauXetNghiem}>Yêu Cầu Xét Nghiệm</Button>
                                <Button className="mr-1">Hủy Khám</Button>
                            </div>
                        </div>
                        <SinhHieu dataSelected={dataSelected} />
                        <KhamBenhForm dataSelected={dataSelected} />
                    </div>
                    <div className="col-2" >
                        <XetNghiem />
                    </div>
                </div>
                <YeuCauCanLamSang
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    benhnhan={dataSelected}
                />
            </div>
        </EditContext.Provider>
    </>);
}

export default KhamBenh;