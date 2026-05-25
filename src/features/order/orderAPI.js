import axiosInstance from "../../utils/axiosInstance.js";
// get userorders 
 export const getuserOrderAPI = ()=> axiosInstance.get("/order/user");
// get specific order 
export const getorderbyIdAPI = (orderId)=> axiosInstance.get(`/order/${orderId}`)

// get all address for admin 
export const getAllordersAPI = ()=> axiosInstance.get("/order/admin/all")
//update statud
export const updateorderstatusAPI = (orderId,statusupdate)=>  axiosInstance.put(`/order/admin/status/${orderId}`, {statusupdate});