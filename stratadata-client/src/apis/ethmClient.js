import axios from "axios";

export const ethmClient = axios.create();

// ethmClient.interceptors.request.use(async () => {
//     return 
// })

// ethmClient.interceptors.response.use(
//     error => {
//         if (error?.response?.status == 401){
//             localStorage.removeItem('ethmToken');
//             window.location.href = '/login'
//         }
//     }
// )