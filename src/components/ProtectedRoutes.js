import { useAuth } from "../context/userAuthContext";
import { Navigate } from "react-router-dom";
export function ProtectedRoutes({children}) {
    const {user, loading} = useAuth();

    if(loading) return <h1>Loading</h1>

    if(!user) return <Navigate to='/'/>

    return <>{children}</>
}
