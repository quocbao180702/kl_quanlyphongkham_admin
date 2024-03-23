import { useContext } from "react";
import { AuthContext } from "../../provider/AuthContextProvider";

function Home() {
    const { profile } = useContext(AuthContext)
    return ( <>
    {profile ? 
    <div>
        {profile?.hoten}
    </div> : <div>
        Chưa Đăng Nhập
        </div>}
    </>);
}

export default Home;