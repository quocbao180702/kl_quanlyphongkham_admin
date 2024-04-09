import { Button, Tab, Tabs } from "react-bootstrap";
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

export const EditContext = createContext({});

function KhamBenh() {

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


    const { loading: loadingChoKham, error: errorChoKham, data: dataChoKham, refetch: refetchChoKham } = useGetAllNgayVaPhongQuery({
        variables: {
            ngaykham: dataAgrsChoKham?.ngaykham,
            phongIds: dataAgrsChoKham?.phongIds,
            trangthai: "CHOKHAM"
        },
        skip: !dataAgrsChoKham || !dataAgrsChoKham.phongIds
    });

    const { loading: loadingCHOXETNGHIEM, error: errorCHOXETNGHIEM, data: dataCHOXETNGHIEM, refetch: refetchCHOXETNGHIEM } = useGetAllNgayVaPhongQuery({
        variables: {
            ngaykham: dataAgrsChoKham?.ngaykham,
            phongIds: dataAgrsChoKham?.phongIds,
            trangthai: "CHOXETNGHIEM"
        },
        skip: !dataAgrsChoKham || !dataAgrsChoKham.phongIds
    });

    const { loading: loadingDAXETNGHIEM, error: errorDAXETNGHIEM, data: dataDAXETNGHIEM, refetch: refetchDAXETNGHIEM } = useGetAllPhieuXacNhanDaXetNghiemQuery({
        variables: {
            ngaykham: dataAgrsChoKham?.ngaykham,
            phongIds: dataAgrsChoKham?.phongIds
        },
        skip: !dataAgrsChoKham || !dataAgrsChoKham.phongIds
    })

    const { loading: loadingHOANTAT, error: errorHOANTAT, data: dataHOANTAT, refetch: refetchHOANTAT } = useGetAllNgayVaPhongQuery({
        variables: {
            ngaykham: dataAgrsChoKham?.ngaykham,
            phongIds: dataAgrsChoKham?.phongIds,
            trangthai: "HOANTAT"
        },
        skip: !dataAgrsChoKham || !dataAgrsChoKham.phongIds
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
    /* const infoCLS = (info: any) => {
        setCanLamSang(info);
    } */

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


    /*  const [createHoadon] = useCreateHoaDonMutation(); */
    const handleToaThuoc = () => {
        /*  if (dataSelected?._id) {
 
             createHoadon({
                 variables: {
                     "input": {
                         "benhnhan": dataSelected?._id,
                         "bhyt": dataSelected?.bhyt ? true : false,
                         "ngaytao": dayjs().format('YYYY-MM-DD')
                     }
                 }
             });
         } */
        return true
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
            <div className="fluit-container" style={{ height: "100px" }}>
                <div className="row">
                    <div className="col-3">
                        <Tabs
                            defaultActiveKey="profile"
                            id="fill-tab-example"
                        >
                            <Tab eventKey="chokham" title="Chờ Khám">
                                <ChoKham data={dataChoKham} loading={loadingChoKham} error={errorChoKham} selected={rowBenhNhanSelected} />
                            </Tab>
                            <Tab eventKey="taikham" title="Tái Khám">
                                <ChoKham data={dataHOANTAT} loading={loadingHOANTAT} error={errorHOANTAT} selected={rowBenhNhanSelected} />
                            </Tab>
                            <Tab eventKey="hoantat" title="Hoàn Tất">
                                <ChoKham data={dataHOANTAT} loading={loadingHOANTAT} error={errorHOANTAT} selected={rowBenhNhanSelected} />
                            </Tab>
                            <Tab eventKey="choxetnghiem" title="Chờ Xét Nghiệm">
                                <ChoKham data={dataCHOXETNGHIEM} loading={loadingCHOXETNGHIEM} error={errorCHOXETNGHIEM} selected={rowBenhNhanSelected} />
                            </Tab>
                            <Tab eventKey="daxetnghiem" title="Đã Xét Nghiệm">
                                <ChoKham data={dataDAXETNGHIEM} loading={loadingDAXETNGHIEM} error={errorDAXETNGHIEM} selected={rowBenhNhanSelected} />
                            </Tab>
                        </Tabs>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="d-flex justify-content-around align-items-center">
                                <Button className="mr-1" onClick={handleEditToggle}>Khám</Button>
                                <Button className="mr-1" onClick={handleToaThuoc}>Tạo Toa Thuốc</Button>
                                <Button className="mr-1">Xuất Toa Thuốc</Button>
                                <Button className="mr-1" onClick={handleHoanTatKham}>Hoàn Tất Khám</Button>
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
                        <KhamBenhForm
                            selected={rowBenhNhanSelected}
                            dataSelected={dataSelected}
                            bacsiId={profile?._id}
                            idPhieuXacNhan={idPhieuXacNhan}
                            refetchDAXETNGHIEM={refetchDAXETNGHIEM}
                            refetchHOANTAT={refetchHOANTAT}
                        />
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
        </EditContext.Provider>
    </>);
}

export default KhamBenh;