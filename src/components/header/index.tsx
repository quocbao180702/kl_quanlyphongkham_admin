import { Link } from "react-router-dom";
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
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";


import "./style.css"
import { FaSignOutAlt } from "react-icons/fa";



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
            <Navbar className="navbar-custom justify-content-between" data-bs-theme="light">
                <Navbar.Brand href="/" className="text-uppercase text-light fw-bold">CLINIC</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to={"/"} className={`nav-link-custom text-uppercase ${profile?.role === UserRole.Admin ? 'nav-link-admin' : ''}`}><IoHomeOutline size={14} /> Home</Nav.Link>

                    {(profile?.user?.role === UserRole.Doctor || profile?.role === UserRole.Admin) && (
                        <>

                            <Nav.Link as={Link} to={"/khambenh"} className={`nav-link-custom text-uppercase border-left ${profile?.role === UserRole.Admin ? 'nav-link-admin' : ''}`}><PiStethoscopeLight size={14} /> Khám Bệnh</Nav.Link>
                            <Nav.Link as={Link} to={"/canlamsang"} className={`nav-link-custom text-uppercase border-left ${profile?.role === UserRole.Admin ? 'nav-link-admin' : ''}`}><ImLab size={14} /> Cận Lâm Sàng</Nav.Link>
                        </>
                    )}
                    <Nav.Link as={Link} to={"/benhnhan"} className={` nav-link-custom text-uppercase border-left ${profile?.role === UserRole.Admin ? 'nav-link-admin' : ''}`}><MdOutlinePeopleAlt size={14} /> Bệnh Nhân</Nav.Link>
                    <Nav.Link as={Link} to={"/thuoc"} className={`nav-link-custom  text-uppercase border-left ${profile?.role === UserRole.Admin ? 'nav-link-admin' : ''}` }><GiMedicines /> Thuốc</Nav.Link>


                    {
                        (profile?.user?.role === UserRole.Staff || profile?.role === UserRole.Admin) && (
                            <>
                                <Nav.Link as={Link} to={"/hoadon"} className={`nav-link-custom text-uppercase border-left ${profile?.role === UserRole.Admin ? 'nav-link-admin' : ''}`}><LiaFileInvoiceDollarSolid size={14} /> Hóa Đơn</Nav.Link>
                                <Dropdown>
                                    <Dropdown.Toggle variant="" className={`nav-link-custom dropdown-custom no-focus-outline text-uppercase border-left ${profile?.role === UserRole.Admin ? 'nav-link-admin' : ''}`}>
                                        <PiCalendarCheckThin /> Đặt Lịch
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item as={Link} to={"/datlich"}> Đặt Lịch Thường</Dropdown.Item>
                                        <Dropdown.Item as={Link} to={"/datlichvip"}> Đặt Lịch Theo Bác Sĩ</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </>
                        )
                    }
                    <Nav.Link as={Link} to={"/baocao"} className={` nav-link-custom text-upercase text-uppercase border-left ${profile?.role === UserRole.Admin ? 'nav-link-admin' : ''}`}><TfiWrite size={14} /> Báo Cáo</Nav.Link>
                    <Nav.Link as={Link} to={"/blogs"} className={` nav-link-custom text-uppercase border-left ${profile?.role === UserRole.Admin ? 'nav-link-admin' : ''}`}><TfiWrite size={14} /> Blogs</Nav.Link>


                    {
                        (profile?.role === UserRole.Admin) && (
                            <>
                                <Nav.Link as={Link} to={"/bacsi"} className={`nav-link-custom text-uppercase border-left ${profile?.role === UserRole.Admin ? 'nav-link-admin' : ''}`}><FaPeopleGroup size={14} /> Nhân Sự</Nav.Link>
                                <Nav.Link as={Link} to={"/nguoidung"} className={` nav-link-custom  text-uppercase border-left ${profile?.role === UserRole.Admin ? 'nav-link-admin' : ''}`}><FaRegUser size={14} /> Người Dùng</Nav.Link>
                            </>
                        )
                    }
                </Nav>
                {isAuthenticated && (
                    <Nav>
                        <Nav.Link as={Link} to={"/profile"} className={`nav-link-custom text-uppercase border-right ${profile?.role === UserRole.Admin ? 'nav-link-admin' : ''}`}> Thông Tin</Nav.Link>
                        <Nav.Link href="/login" className={`nav-link-custom text-uppercase ${profile?.role === UserRole.Admin ? 'nav-link-admin' : ''}`} onClick={logout}>
                            <FaSignOutAlt size={20}/>
                        </Nav.Link>
                    </Nav>
                )}
            </Navbar>
            {/* <nav className="navbar navbar-expand-lg navbar-custom">
                <a className="navbar-brand text-uppercase text-light fw-bold" href="/">Clinic</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto w-100 justify-content-center">
                        <li className="nav-item active">
                            <Link className={`nav-link text-uppercase middle-align ${profile?.role === UserRole.Admin ? 'nav-link__admin' : ''}`} to="/test"><IoHomeOutline /> Test</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className={`nav-link text-uppercase middle-align ${profile?.role === UserRole.Admin ? 'nav-link__admin' : ''}`} to="/"><IoHomeOutline /> Home</Link>
                        </li>
                        {
                            (profile?.user?.role === UserRole.Staff || profile?.role === UserRole.Admin) && (
                                <>
                                    <li className="nav-item">
                                        <Link className={`nav-link text-uppercase middle-align ${profile?.role === UserRole.Admin ? 'nav-link__admin' : ''}`} to="/datlich"><PiCalendarCheckThin /> Đặt Lịch</Link>
                                    </li>
                                </>
                            )
                        }
                        {
                            (profile?.user?.role === UserRole.Doctor || profile?.role === UserRole.Admin) && (
                                <>
                                    <li className="nav-item">
                                        <Link className={`nav-link text-uppercase ${profile?.role === UserRole.Admin ? 'nav-link__admin' : ''}`} to="/khambenh"><PiStethoscopeLight /> Khám Bệnh</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`nav-link text-uppercase ${profile?.role === UserRole.Admin ? 'nav-link__admin' : ''}`} to="/canlamsang"><ImLab /> Cận Lâm Sàng</Link>
                                    </li>
                                </>
                            )
                        }
                        {
                            profile?.role === UserRole.Admin && (
                                <>
                                    <li className="nav-item">
                                        <Link className={`nav-link text-uppercase ${profile?.role === UserRole.Admin ? 'nav-link__admin' : ''}`} to="/bacsi"><FaPeopleGroup />Nhân Sự</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`nav-link text-uppercase ${profile?.role === UserRole.Admin ? 'nav-link__admin' : ''}`} to="/nguoidung"><FaRegUser size={14} /> Người Dùng</Link>
                                    </li>
                                </>
                            )
                        }
                        <li className="nav-item">
                            <Link className={`nav-link text-uppercase ${profile?.role === UserRole.Admin ? 'nav-link__admin' : ''}`} to="/benhnhan"><MdOutlinePeopleAlt size={19} /> Bệnh Nhân</Link>
                        </li>

                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" className="nav-item">
                                Đặt Lịch
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Đặt Lịch Thường</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Đặt Lịch Theo Bác Sĩ</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <li className="nav-item">
                            <Link className={`nav-link text-uppercase ${profile?.role === UserRole.Admin ? 'nav-link__admin' : ''}`} to="/datlichvip"><GiMedicines /> Đặt Lịch Vip </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link text-uppercase ${profile?.role === UserRole.Admin ? 'nav-link__admin' : ''}`} to="/thuoc"><GiMedicines /> Thuốc</Link>
                        </li>
                        {
                            (profile?.user?.role === UserRole.Staff || profile?.role === UserRole.Admin) && (
                                <li className="nav-item">
                                    <Link className={`nav-link text-uppercase ${profile?.role === UserRole.Admin ? 'nav-link__admin' : ''}`} to="/hoadon"><LiaFileInvoiceDollarSolid /> Hóa Đơn</Link>
                                </li>
                            )
                        }
                        <li className="nav-item">
                            <Link className={`nav-link text-uppercase middle-align ${profile?.role === UserRole.Admin ? 'nav-link__admin' : ''}`} to="/baocao"><TfiWrite /> Báo Cáo</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link text-uppercase middle-align ${profile?.role === UserRole.Admin ? 'nav-link__admin' : ''}`} to="/blogs"><TfiWrite /> Blogs</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-5">
                        {isAuthenticated ? (
                            <>
                                <li className="nav-item">
                                    <Link className={`nav-link text-uppercase ${profile?.role === UserRole.Admin ? 'nav-link__admin' : ''}`} to="/profile">Profile</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link text-uppercase ${profile?.role === UserRole.Admin ? 'nav-link__admin' : ''}`} to="#" onClick={logout}>Logout</Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link className={`nav-link text-uppercase ${profile?.role === UserRole.Admin ? 'nav-link__admin' : ''}`} to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link text-uppercase ${profile?.role === UserRole.Admin ? 'nav-link__admin' : ''}`} to="/register">Register</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </nav> */}
        </>
    );
}

export default Header;