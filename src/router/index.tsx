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
import Logout from "../pages/logout"
import BacSiPage from "../pages/bacsi"
import CanLamSan from "../pages/canlamsang"
import CanLamSang from "../pages/canlamsang"

export const AppRouter = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<Home />} />
                        <Route path="nguoidung" element={<NguoiDung />} />
                        <Route path="benhnhan" element={<BenhNhan />} />
                        <Route path="bacsi" element={<BacSiPage />} />
                        <Route path="thuoc" element={<Thuoc />} />
                        <Route path="khambenh" element={<KhamBenh />} />
                        <Route path="canlamsang" element={<CanLamSang />} />
                    </Route>
                    
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="logout" element ={<Logout />} /> 
                </Routes>
            </BrowserRouter>
        </>
    )
}