import { useLocation, Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const auth = localStorage.getItem('admin_token') ? true : false;
    
    const location = useLocation()
    return (
        auth
            ? <Outlet />
            : <Navigate to='/login' state={{ from : location }} replace />
    );
}
 
export default ProtectedRoute; 