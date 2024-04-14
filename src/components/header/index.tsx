import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserRole, useLogoutMutation } from "../../graphql-definition/graphql";
import { AuthContext } from "../../provider/AuthContextProvider";
import { GiMedicines } from "react-icons/gi";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { TfiWrite } from "react-icons/tfi";
import { PiCalendarCheckThin, PiStethoscopeLight } from "react-icons/pi";
import { IoHomeOutline } from "react-icons/io5";
import { ImLab } from "react-icons/im";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { FaPeopleGroup, FaRegUser } from "react-icons/fa6";

import "./style.css"

function Header() {
    const { isAuthenticated, logoutClient, profile } = useContext(AuthContext)
    const [logoutServer, _] = useLogoutMutation()

    const logout = async () => {
        try {
            logoutClient()
            await logoutServer()
        }
        catch (error) {
            console.log(error)
        }

    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-custom">
                <a className="navbar-brand text-uppercase text-light fw-bold" href="/">Clinic</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto w-100 justify-content-center">
                        <li className="nav-item active">
                            <Link className="nav-link text-uppercase middle-align" to="/"><IoHomeOutline /> Home{/* {<span className="sr-only">(current)</span>} */}</Link>
                        </li>
                        {
                            (profile?.user?.role === UserRole.Staff || profile?.role === UserRole.Admin) && (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link text-uppercase middle-align" to="/datlich"><PiCalendarCheckThin /> Đặt Lịch</Link>
                                    </li>
                                </>
                            )
                        }
                        {
                            (profile?.user?.role === UserRole.Doctor || profile?.role === UserRole.Admin) && (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link text-uppercase" to="/khambenh"><PiStethoscopeLight /> Khám Bệnh</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-uppercase" to="/canlamsang"><ImLab /> Cận Lâm Sàng</Link>
                                    </li>
                                </>
                            )
                        }
                        {
                            profile?.role === UserRole.Admin && (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link text-uppercase" to="/bacsi"><FaPeopleGroup />Nhân Sự</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-uppercase" to="/nguoidung"><FaRegUser size={14} /> Người Dùng</Link>
                                    </li>
                                </>
                            )
                        }
                        <li className="nav-item">
                            <Link className="nav-link text-uppercase" to="/benhnhan"><MdOutlinePeopleAlt size={19} /> Bệnh Nhân</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-uppercase" to="/thuoc"><GiMedicines /> Thuốc</Link>
                        </li>
                        {
                            (profile?.user?.role === UserRole.Staff || profile?.role === UserRole.Admin) && (
                                <li className="nav-item">
                                    <Link className="nav-link text-uppercase" to="/hoadon"><LiaFileInvoiceDollarSolid /> Hóa Đơn</Link>
                                </li>
                            )
                        }
                        <li className="nav-item">
                            <Link className="nav-link text-uppercase middle-align" to="/blogs"><TfiWrite /> Blogs</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-5">
                        {isAuthenticated ? (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link text-uppercase" to="/profile">Profile</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-uppercase" to="#" onClick={logout}>Logout</Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link text-uppercase" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-uppercase" to="/register">Register</Link>
                                </li>
                            </>
                        )}
                    </ul>

                    {/* <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                </div>
            </nav>
        </>
    );
}

export default Header;