import axios from 'axios';
import { axiosPost } from './requests';


export function userSignIn(username, password, callback, err){

    const request = {
        username,
        password
    }
    axiosPost({
        url: "http://localhost:8080/api/auth/signin",
        data: request,
        callback,
        err
    })
}