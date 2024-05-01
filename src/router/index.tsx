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
import ProtectedRoutes from "./protectedRoute"
import Blogs from "../pages/blogs/danhsachBlog"
import ThemBlog from "../pages/blogs/f_themblog"
import SuaBlog from "../pages/blogs/f_suablog"
import BaoCao from "../pages/baocao/page"
import DatLichVip from "../pages/datlichvip"

export const AppRouter = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<ProtectedRoutes />}>
                        <Route path="/" element={<App />}>
                            <Route index element={<Home />} />
                            <Route path="datlich" element={<DatLich />} />
                            <Route path="nguoidung" element={<NguoiDung />} />
                            <Route path="benhnhan" element={<BenhNhan />} />
                            <Route path="bacsi" element={<NhanSu />}>
                                <Route /* path="bacsi" */ index element={<BacSiPage />} />
                                <Route path="nhanvien" element={<NhanVienPage />} />
                            </Route>
                            <Route path="datlichvip" element={<DatLichVip />} />
                            <Route path="baocao" element={<BaoCao />} />
                            <Route path="thuoc" element={<Thuoc />} />
                            <Route path="khambenh" element={<KhamBenh />} />
                            <Route path="canlamsang" element={<CanLamSang />} />
                            <Route path="hoadon" element={<HoaDonPage />} />
                            <Route path="blogs" element={<Blogs />} />
                            <Route path="blogs/them" element={<ThemBlog />} />
                        </Route>
                    </Route>

                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}