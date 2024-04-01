import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthContextProvider";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Token } from "graphql";
import { getJwtToken } from "../utils/jwt";

function ProtectedRoutes() {
    
    const token = getJwtToken();
    const location = useLocation();

    return (
        token ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default ProtectedRoutes;