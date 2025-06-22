import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorBoundary } from 'react-error-boundary';
import { userSignIn } from "../apis/userApi";
import { UserContext } from "../contexts/userContext";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { setUserAuthentication } = useContext(UserContext)

    const handleError = (err) => {
        console.error(err)
    }

    const navigate = useNavigate()

    function callLogin(param1, param2){
        console.log("call login endpoint")
        userSignIn(
            param1, 
            param2,
            (response) => {
                console.log(response)
                localStorage.setItem("ethmToken", response.data.accessToken)
                setUserAuthentication();
                if(response?.status === 200  ){
                    navigate("/")
                }
                setPassword('')
                setUsername('')
            } ,
            (err) => {
                handleError(err)
            }
        )



    }

    return(
        <div className="">
            <div class="w-full max-w-xs">
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Username
                    </label>
                    <input 
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="username" 
                        type="text" 
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input 
                        class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                        id="password" 
                        type="password" 
                        placeholder="******************"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <p class="text-red-500 text-xs italic">Please choose a password.</p>
                    </div>
                    <div class="flex items-center justify-between">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                     type="button" onClick={() => callLogin(username, password)}>
                        Sign In
                    </button>
                    <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Forgot Password?
                    </a>
                    </div>
                </form>
                <p class="text-center text-gray-500 text-xs">
                    &copy;2025 East Texas Hydro Monitoring.<br/> All rights reserved.
                </p>
                </div>
        </div>
    )
}
function LoginPage(){
    return (
    <ErrorBoundary>
        <Login/>
    </ErrorBoundary>
    )
}

export default LoginPage;