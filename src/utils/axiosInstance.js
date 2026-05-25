import axios from "axios";
const axiosInstance = axios.create({
    // base url sane for evry api so save here 
    baseURL: "http://localhost:8000/api",
    withCredentials: true, // to set cookies
})
export default axiosInstance