import axiosInstance from "../../utils/axiosInstance.js";

// get or crete cart
export const getorcreatecartAPI = () => axiosInstance.get("/cart/get");
//add to cart
export const addtocartAPI = (productId, data) =>
  axiosInstance.post(`/cart/add/${productId}`, data);
// update cart quantity
export const updatecartAPI = (productId, quantity) =>
  axiosInstance.put(`/cart/update/${productId}`,  {quantity});
// remove item cart
export const removeItemAPI = (productId) =>
  axiosInstance.delete(`/cart/remove/${productId}`);
//clear cart
export const clearcartAPI = () => axiosInstance.delete("/cart/clear");
