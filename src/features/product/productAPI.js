// productAPI.js
//import axios from "../../utils/axiosInstance";
import axios from '../../utils/axiosInstance.js'
export const getProductsAPI = (params) =>
  axios.get("/product/get", { params });

export const getProductByIdAPI = (id) =>
  axios.get(`/product/get/${id}`);

export const addProductAPI = (data) =>
  axios.post("/product/add", data);

export const deleteProductAPI = (id) =>
  axios.delete(`/product/delete/${id}`);