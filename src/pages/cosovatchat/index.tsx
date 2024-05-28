import { FcButtingIn, FcDepartment } from "react-icons/fc";
import { Link, Outlet } from "react-router-dom";

function CoSoVatChat() {
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-md-3 col-xl-2 px-sm-2 px-0 bg-light">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-dark min-vh-100">
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start text-light" id="menu">
                            <li>
                                <Link to="/phong" className="nav-link px-0 align-middle text-dark">
                                    <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline"><FcButtingIn /> Phòng</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/phong/chuyenkhoa" className="nav-link px-0 align-middle text-dark">
                                    <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline"><FcDepartment /> Chuyên Khoa</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col py-3">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default CoSoVatChat;