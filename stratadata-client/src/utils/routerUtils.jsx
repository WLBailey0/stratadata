import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function RequiresAuth({ redirectTo }) {
    const { isAuth } = useContext(UserContext);
    return isAuth ? <Outlet /> : <Navigate to="/" />;//todo, create error page
}