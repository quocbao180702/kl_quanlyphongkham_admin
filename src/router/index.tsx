import { Route, Routes, } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import { Login } from "../pages/login"
import BenhNhan from "../pages/benhnhan"
import Home from "../pages/home"
import Register from "../pages/register"
import App from "../App"
import Thuoc from "../pages/thuoc"
import NguoiDung from "../pages/nguoidung"
import KhamBenh from "../pages/khambenh"
import BacSiPage from "../pages/bacsi"
import CanLamSan from "../pages/canlamsang"
import CanLamSang from "../pages/canlamsang"
import NhanSu from "../pages/nhansu"
import NhanVienPage from "../pages/nhanvien"
import DatLich from "../pages/datlich"
import HoaDonPage from "../pages/hoadon"

export const AppRouter = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<Home />} />
                        <Route path="datlich" element={<DatLich />} />
                        <Route path="nguoidung" element={<NguoiDung />} />
                        <Route path="benhnhan" element={<BenhNhan />} />
                        <Route path="nhansu" element={<NhanSu />}>
                            <Route path="bacsi" index element={<BacSiPage />} />
                            <Route path="nhanvien" element={<NhanVienPage />} />
                        </Route>
                        <Route path="thuoc" element={<Thuoc />} />
                        <Route path="khambenh" element={<KhamBenh />} />
                        <Route path="canlamsang" element={<CanLamSang />} />
                        <Route path="hoadon" element={<HoaDonPage />} />
                    </Route>

                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}