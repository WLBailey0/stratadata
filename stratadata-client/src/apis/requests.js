import axios from "axios";
import { ethmClient } from "./ethmClient";


export const axiosPost = ({ url, data, callback, err}) => {
    ethmClient
    .post(url, data)
    .then(callback)
    .catch(err)
}

