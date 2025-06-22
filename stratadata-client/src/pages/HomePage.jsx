import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { UserContext } from "../contexts/userContext";
import {Link, useNavigate} from "react-router-dom";
import UserPages from "./UserPages";
import LoginPage from "./LoginPage";

export default function HomePage () {
    const { isAuth } =useContext(UserContext)
    const navigate = useNavigate();
    function loginButton() {
        return (
            <div>
            <div className="text-white">
                <h1>East Texas Hydro Monitoring</h1>
            </div>
            <div>
                <Button variant="primary" className="text-white" onClick={() => navigate("/login")}>Log In</Button>
            </div>
                </div>
        )
    }

    return(
        <>

            {!isAuth && (navigate("/login"))}
            <div className="text-white">
                <h1>East Texas Hydro Monitoring</h1>
                <p>select what data to enter</p>
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <Button className="text-white" onClick={() => navigate('/phEntry')}>pH Data</Button>
                    </div>
                    <div>
                    <Button className="text-white">DO data</Button>
                    </div>
                    <div>
                        <Button className="text-white">other 1</Button>
                    </div>
                    <div>
                        <Button className="text-white">other 2</Button>
                    </div>
                    <div>
                        <Button className="text-white">other 3</Button>
                    </div>
                </div>
            </div>
        </>
    )
}