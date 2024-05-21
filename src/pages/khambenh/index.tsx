import { Button, Col, Row } from "react-bootstrap";
import ChoKham from "./tab-chokham";
import XetNghiem from "./xetnghiem";
import KhamBenhForm from "./form-khambenh";
import SinhHieu from "./sinhhieu-tab";
import { ChangeEvent, createContext, useContext, useEffect, useMemo, useState } from "react";
import { BenhNhan, useCreateHoaDonMutation, useGetAllNgayVaPhongQuery, useGetAllPhieuXacNhanDaXetNghiemQuery, useUpdateTrangThaiKhamMutation } from "../../graphql-definition/graphql";
import YeuCauCanLamSang from "./f_YeuCauCLS";
import { AuthContext } from "../../provider/AuthContextProvider";
import dayjs from 'dayjs'
import moment from "moment";
import { useSubscription } from "@apollo/client";
import { UpdateCLSDaXetNghiemSubcription, newPhieuXacNhanSubscription } from "../../../codegen/graphql-definition/subcriptions";
import { Alert } from "@mui/material";
import { Tabs } from "antd";
import { useNavigate, useNavigation } from "react-router-dom";

export const EditContext = createContext({});

function KhamBenh() {
    const { TabPane } = Tabs;

    const { profile } = useContext(AuthContext)
    const [dataSelected, setDataSelected] = useState<BenhNhan | undefined>(undefined);
    const [dataCLS, setDataCLS] = useState<any | undefined>(undefined);
    /* const [dataCanLamSan, setCanLamSang] = useState([{ id: '', ten: '', gia: 0.0, soluong: 0, thanhtien: 0.0 }]); */
    const [idPhieuXacNhan, setIdPhieuXacNhan] = useState('');
    const [phong, setPhong] = useState(profile?.phongs && profile.phongs.length > 0 ? profile.phongs[0]._id : "");
    const [dataAgrsChoKham, setDataAgrsChoKham] = useState({
        ngaykham: dayjs().format('YYYY-MM-DD'),
        phongIds: (profile && profile.phongs && profile.phongs.length > 0) ? profile.phongs[0]._id : "",
    })

    const [isEditing, setIsEditing] = useState(true);
    const [modalShow, setModalShow] = useState(false);
    const [showWarning, setshowWarning] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [thongbao, setThongBao] = useState('')
    const navigate = useNavigate();


    const { data: newPhieuXacNhan, error: newPhieuXacNhanError } = useSubscription(newPhieuXacNhanSubscription);
    const { data: dataUpdateCLSDaXetNghiem, error: errorUpdateCLSDaXetNghiem } = useSubscription(UpdateCLSDaXetNghiemSubcription)


    const { loading: loadingChoKham, error: errorChoKham, data: dataChoKham, refetch: refetchChoKham } = useGetAllNgayVaPhongQuery({
        variables: {
            ngaykham: dataAgrsChoKham?.ngaykham,
            phongIds: dataAgrsChoKham?.phongIds,
            trangthai: "CHOKHAM"
        },
        skip: !dataAgrsChoKham || dataAgrsChoKham.phongIds === ""
    });

    useEffect(() => {
        refetchChoKham()
    }, [newPhieuXacNhan])

    const { loading: loadingCHOXETNGHIEM, error: errorCHOXETNGHIEM, data: dataCHOXETNGHIEM, refetch: refetchCHOXETNGHIEM } = useGetAllNgayVaPhongQuery({
        variables: {
            ngaykham: dataAgrsChoKham?.ngaykham,
            phongIds: dataAgrsChoKham?.phongIds,
            trangthai: "CHOXETNGHIEM"
        },
        skip: !dataAgrsChoKham || dataAgrsChoKham.phongIds === ""
    });

    const { loading: loadingDAXETNGHIEM, error: errorDAXETNGHIEM, data: dataDAXETNGHIEM, refetch: refetchDAXETNGHIEM } = useGetAllPhieuXacNhanDaXetNghiemQuery({
        variables: {
            ngaykham: dataAgrsChoKham?.ngaykham,
            phongIds: dataAgrsChoKham?.phongIds
        },
        skip: !dataAgrsChoKham || dataAgrsChoKham.phongIds === ""
    })

    useEffect(() => {
        refetchCHOXETNGHIEM();
        refetchDAXETNGHIEM();
    }, [dataUpdateCLSDaXetNghiem])

    const { loading: loadingHOANTAT, error: errorHOANTAT, data: dataHOANTAT, refetch: refetchHOANTAT } = useGetAllNgayVaPhongQuery({
        variables: {
            ngaykham: dataAgrsChoKham?.ngaykham,
            phongIds: dataAgrsChoKham?.phongIds,
            trangthai: "HOANTAT"
        },
        skip: !dataAgrsChoKham || dataAgrsChoKham.phongIds === ""
    });

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
        if (dataSelected?.sinhhieu == null) {
            console.log('tạo sinh hiệu trong đây')
        }
    };

    const handleYeuCauXetNghiem = () => {
        setModalShow(true);
    }

    const rowBenhNhanSelected = (select: BenhNhan, id: string, cls: any) => {
        setDataSelected(select);
        setIdPhieuXacNhan(id);
        setDataCLS(cls)
    }


    const resetSeleted = () => {
        setDataSelected(undefined);
        setDataCLS(undefined);
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
        if (profile && profile.phongs && profile.phongs[0]?._id) {
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
         navigate('/toathuoc');
       
    }

    const [updateTrangThaiKham] = useUpdateTrangThaiKhamMutation()

    const handleHoanTatKham = () => {
        console.log('id phiếu xác nhận là: ', idPhieuXacNhan)
        if (idPhieuXacNhan) {
            updateTrangThaiKham({
                variables: {
                    "id": idPhieuXacNhan,
                    "trangthai": "HOANTAT"
                }
            })
            refetchHOANTAT();
            refetchDAXETNGHIEM();
            refetchChoKham()
        }
    }

    return (<>
        <EditContext.Provider value={editContextValue}>
            {showWarning && (
                <>
                    <div style={{ position: 'fixed', zIndex: 2 }}>
                        <Alert severity="warning" onClose={() => { setshowWarning(false); setThongBao(''); }}>
                            {thongbao}
                        </Alert>
                    </div>
                </>
            )}

            {showSuccess && (
                <>
                    <div style={{ position: 'fixed', zIndex: 2 }}>
                        <Alert severity="success" onClose={() => { setShowSuccess(false); setThongBao(''); }}>
                            {thongbao}
                        </Alert>
                    </div>
                </>
            )}
            <div className="fluit-container">
                <div className="row">
                    <Col xs={12} md={3}>
                        <Tabs defaultActiveKey="1">
                            <TabPane tab="Chờ Khám" key="1">
                                <ChoKham data={dataChoKham} loading={loadingChoKham} error={errorChoKham} selected={rowBenhNhanSelected} />
                            </TabPane>
                            <TabPane tab="Chờ Xét Nghiệm" key="2">
                                <ChoKham data={dataCHOXETNGHIEM} loading={loadingCHOXETNGHIEM} error={errorCHOXETNGHIEM} selected={rowBenhNhanSelected} />
                            </TabPane>
                            <TabPane tab="Đã Xét Nghiệm" key="3">
                                <ChoKham data={dataDAXETNGHIEM} loading={loadingDAXETNGHIEM} error={errorDAXETNGHIEM} selected={rowBenhNhanSelected} />
                            </TabPane>
                            <TabPane tab="Hoàn Tất" key="4">
                                <ChoKham data={dataHOANTAT} loading={loadingHOANTAT} error={errorHOANTAT} selected={rowBenhNhanSelected} />
                            </TabPane>
                            <TabPane tab="Tái Khám" key="5">
                                <ChoKham data={dataHOANTAT} loading={loadingHOANTAT} error={errorHOANTAT} selected={rowBenhNhanSelected} />
                            </TabPane>
                        </Tabs>
                    </Col>
                    <div className="col-6">
                        <div className="row">
                            <div className="d-flex justify-content-around align-items-center">
                                <Button className="mr-1" onClick={handleEditToggle}>Khám</Button>
                                <Button className="mr-1" onClick={handleToaThuoc}>Xem Toa Thuốc</Button>
                                <Button className="mr-1" onClick={handleHoanTatKham}>Hoàn Tất Khám</Button>
                                <Button className="mr-1" onClick={handleYeuCauXetNghiem}>Yêu Cầu Xét Nghiệm</Button>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="card w-100">
                                <div className="card-body">
                                    <h5 className="card-title mb-2 text-center text-uppercase">Thông Tin Bác Sĩ</h5>
                                    {profile?.hoten && <p className="card-text">Họ Tên: {profile.hoten}</p>}
                                    {profile?.phongs?.length > 0 && (
                                        <p className="card-text">Phòng: {profile.phongs[0].tenphong}</p>
                                    )}
                                    {profile?.chuyenkhoa && (
                                        <p className="card-text">Chuyên Khoa: {profile.chuyenkhoa.tenkhoa}</p>
                                    )}
                                    {profile?.gioitinh !== undefined && (
                                        <p className="card-text">Giới Tính: {profile.gioitinh ? 'Nam' : 'Nữ'}</p>
                                    )}

                                    <div className="mt-3">
                                        <label htmlFor="phongSelect" className="form-label mr-2">Chọn Phòng:</label>
                                        <select className="form-select" id="phongSelect" onChange={handleSelect} value={phong}>
                                            <option value="">--- Lựa chọn ---</option>
                                            {profile?.phongs?.map((phong: any) => (
                                                <option key={phong._id} value={phong._id}>
                                                    {phong.tenphong}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="card w-100 mt-4">
                                <div className="card-body">
                                    <h5 className="card-title mb-2 text-center text-uppercase">Bệnh nhân đang khám:</h5>
                                    {dataSelected ? (
                                        <>
                                            <p className="card-text">Họ Tên: {dataSelected.hoten}</p>
                                            <p className="card-text">Giới Tính: {dataSelected.gioitinh ? 'Nam' : 'Nữ'}</p>
                                            <p className="card-text">Ngày Sinh: {moment(dataSelected.ngaysinh).format('YYYY-MM-DD')}</p>
                                            <p className="card-text">BHYT: {dataSelected.bhyt}</p>
                                        </>
                                    ) : (
                                        <p className="text-muted">Chưa có thông tin bệnh nhân.</p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <SinhHieu dataSelected={dataSelected} />
                        </div>
                        <div className="row mt-2">
                            <KhamBenhForm
                                selected={rowBenhNhanSelected}
                                dataSelected={dataSelected}
                                bacsiId={profile?._id}
                                idPhieuXacNhan={idPhieuXacNhan}
                                refetchDAXETNGHIEM={refetchDAXETNGHIEM}
                                refetchHOANTAT={refetchHOANTAT}
                                refetchChoKham={refetchChoKham}
                                setshowWarning={setshowWarning}
                                setShowSuccess={setShowSuccess}
                                setThongBao={setThongBao}
                                resetDataSelected={resetSeleted}
                            />
                        </div>
                    </div>
                    <div className="col-3" >
                        <XetNghiem dataSelected={dataCLS} />
                    </div>
                </div>
                <YeuCauCanLamSang
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    /*  info={infoCLS} */
                    benhnhan={dataSelected}
                    bacsi={profile}
                    idPhieuXacNhan={idPhieuXacNhan}
                    refetchChoKham={refetchChoKham}
                    refetchCHOXETNGHIEM={refetchCHOXETNGHIEM}
                />
            </div>
        </EditContext.Provider >
    </>);
}

export default KhamBenh;