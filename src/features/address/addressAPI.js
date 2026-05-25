import axiosInstance from "../../utils/axiosInstance.js";
// address apis
// 1 createAddress
export const createAddressAPI = (data)=> axiosInstance.post("/address/addaddress", data );
//get address
export const getAddressAPI = ()=> axiosInstance.get("/address/getaddress");
//update address
export const updateAddressAPI= (addressId,data)=> axiosInstance.put(`/address/updateaddress/${addressId}`,data);
// delete address 
export const deleteAddressAPI = (addressId)=> axiosInstance.delete(`/address/deleteaddress/${addressId}`)