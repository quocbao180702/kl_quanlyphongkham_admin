import { useContext, useEffect } from "react";
import { AuthContext } from "../../provider/AuthContextProvider";
import { BiUserCircle } from "react-icons/bi";
import { HiOutlineUserCircle } from "react-icons/hi";


function Home() {
    const { profile } = useContext(AuthContext);

    return (<>
        {profile ?
            <div className="container">
                <div className="row justify-content-center align-items-center" style={{ height: '80vh' }}>
                    <div className="col text-center">
                        <HiOutlineUserCircle size={150} />
                        <h3>{profile?.hoten || profile?.role}</h3>
                    </div>
                </div>
            </div>
            :
            <div className="container mt-5">
                <div className="row justify-content-center align-items-center">
                    <div className="col text-center">
                        <BiUserCircle size={150} />
                        <h3>Chưa Đăng Nhập</h3>
                    </div>
                </div>
            </div>
        }
    </>);
}

export default Home;