import axios from "axios";
const axiosInstance = axios.create({
    // base url sane for evry api so save here 
    baseURL: "https://shopx-backend-1b1q.onrender.com/api",
    withCredentials: true, // to set cookies
})
export default axiosInstance