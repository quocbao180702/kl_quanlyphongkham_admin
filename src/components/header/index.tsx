import { Link } from "react-router-dom";
import { getJwtToken } from "../../utils/jwt";
import { jwtDecode } from "jwt-decode";
import { useContext, useEffect, useState } from "react";
import { useLogoutMutation } from "../../graphql-definition/graphql";
import { AuthContext } from "../../provider/AuthContextProvider";


function Header() {
    const { isAuthenticated, logoutClient } = useContext(AuthContext)
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
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <a className="navbar-brand" href="/">Phòng Khám</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/datlich">Đặt Lịch</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/khambenh">Khám Bệnh</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/canlamsang">Cận Lâm Sàng</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/nhansu">Nhân Sự</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/benhnhan">Bệnh Nhân</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/nguoidung">Người Dùng</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/thuoc">Thuốc</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/hoadon">Hóa Đơn</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-5">
                        {isAuthenticated ? (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/profile">Profile</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#" onClick={logout}>Logout</Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
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