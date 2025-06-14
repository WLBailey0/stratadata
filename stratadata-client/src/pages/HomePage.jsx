import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { UserContext } from "../contexts/userContext";
import UserPages from "./UserPages";
import LoginPage from "./LoginPage";

export default function HomePage () {
    const { isAuth } =useContext(UserContext)
    return(
        <>
        <div className="grid grid-col-3">
            <h1>East Texas Hydro Monitoring</h1>           
        </div>
        </>
    )
}