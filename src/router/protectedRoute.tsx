import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getJwtToken } from "../utils/jwt";

function ProtectedRoutes() {
    
    const token = getJwtToken();
    const location = useLocation();

    return (
        token ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default ProtectedRoutes;