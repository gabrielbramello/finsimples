// TODO fazer chamadas via axios ao invés de ajax
import axios from 'axios';

const config = {
    baseURL:'http://localhost:8080/',
    /*
    mode: 'cors',
    withCredentials: false,
    headers:{
        'Authorization':`Bearer ${localStorage.getItem('auth-token')}`,
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Headers": "Authorization",

    }
    */
}
const api = axios.create(config);

console.log(config);
export default api;