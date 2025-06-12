
import { Outlet } from "react-router";

export const AuthLayout = ()=> {
    return(
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
            <Outlet/>
        </div>
    )
}