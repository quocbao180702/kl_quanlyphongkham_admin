import { Button, Tab, Tabs } from "react-bootstrap";
import ChoKham from "./tab-chokham";
import XetNghiem from "./xetnghiem";
import KhamBenhForm from "./form-khambenh";
import SinhHieu from "./sinhhieu-tab";
import { ChangeEvent, createContext, useContext, useEffect, useMemo, useState } from "react";
import { BenhNhan } from "../../graphql-definition/graphql";
import YeuCauCanLamSang from "./f_YeuCauCLS";
import { AuthContext } from "../../provider/AuthContextProvider";
import dayjs from 'dayjs'
import moment from "moment";

export const EditContext = createContext({});

function KhamBenh() {

    const { profile } = useContext(AuthContext)
    const [dataSelected, setDataSelected] = useState<BenhNhan | undefined>(undefined);
    const [phong, setPhong] = useState(profile?.phongs && profile.phongs.length > 0 ? profile.phongs[0]._id : "");
    const [dataAgrsChoKham, setDataAgrsChoKham] = useState({
        ngaykham: dayjs().format('YYYY-MM-DD'),
        phongIds: (profile && profile.phongs && profile.phongs.length > 0) ? profile.phongs[0]._id : "",
    })

    const [isEditing, setIsEditing] = useState(true);
    const [modalShow, setModalShow] = useState(false);

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
        if (dataSelected?.sinhhieu == null) {
            console.log('tạo sinh hiệu trong đây')
        }
    };

    const handleYeuCauXetNghiem = () => {
        setModalShow(true);
    }

    const rowBenhNhanSelected = (select: BenhNhan) => {
        setDataSelected(select);
    }

    useEffect(() => {
        if (dataSelected?.sinhhieu == null) {
            console.log('Chưa Tạo Sinh Hiệu')
        }
    }, [dataSelected])

    const editContextValue = useMemo(() => ({ isEditing, setIsEditing }), [isEditing, setIsEditing]);

    const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedPhongId = event.target.value;
        setPhong(selectedPhongId);
    };

    useEffect(() => {
        // Kiểm tra nếu profile và phongIds đều có dữ liệu
        if (profile && profile.phongs && profile.phongs[0]?._id) {
            // Cập nhật phongIds với giá trị từ profile
            setPhong(profile.phongs[0]._id);
            setDataAgrsChoKham({
                ngaykham: dayjs().format('YYYY-MM-DD'),
                phongIds: profile.phongs[0]._id,
            });
        }
    }, [profile]);

    useEffect(() => {
        console.log(dataAgrsChoKham?.ngaykham, dataAgrsChoKham?.phongIds)
    }, [phong])

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
                        <div className="row mt-1">
                            {profile?.hoten && <p>Họ Tên: {profile.hoten}</p>}
                            <p>{profile?.phongs && profile?.phongs.length > 0 ? `Phòng: ${profile.phongs[0].tenphong}` : ''}</p>
                            {profile?.chuyenkhoa && <p>Chuyên Khoa: {profile.chuyenkhoa.tenkhoa}</p>}
                            {profile?.gioitinh !== undefined && (
                                <p>Giới Tính: {profile.gioitinh ? 'Nam' : 'Nữ'}</p>
                            )}
                            <br />
                            <select onChange={handleSelect} value={phong}>
                                <option value="">Phòng</option>
                                {profile?.phongs && profile.phongs.map((phong: any) => (
                                    <option key={phong?._id} value={phong?._id}>{phong?.tenphong}</option>
                                ))}
                            </select>
                        </div>
                        <div className="row mt-1">
                            <h6>Bệnh Nhân Đang Khám Là: </h6>
                            {dataSelected ? (
                                <>
                                    <p>Họ Tên: {dataSelected.hoten}</p>
                                    - <p>Giới Tính {dataSelected?.gioitinh ? 'Nam' : 'Nữ'}</p>
                                    - <p>Ngày Sinh: {moment(dataSelected?.ngaysinh).format('YYYY-MM-DD')}</p>
                                    - <p>BHYT: {dataSelected.bhyt}</p>
                                </>
                            ) : (
                                <p>Không có bệnh nhân đang khám.</p>
                            )}
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
                    bacsi={profile}
                />
            </div>
        </EditContext.Provider>
    </>);
}

export default KhamBenh;