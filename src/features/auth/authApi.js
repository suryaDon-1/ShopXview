import axios from "../../utils/axiosInstance";
// this stores all the auth apis
export const registerAPI = (data) => axios.post("/auth/register", data); // axios is the instance we crete so localhost/8000/auth...
export const loginAPI = (data) => axios.post("/auth/login", data); //lgoin api
export const logoutAPI = () => axios.post("/auth/logout"); //logout api

export const getProfileAPI = () => axios.get("/auth/profile"); // use to show user profile

export const updateProfileAPI = (data) => // user can change his name or email
  axios.put("/auth/profile/update", data);

export const changePasswordAPI = (data) => // change password 
  axios.put("/auth/profile/changepassword", data);

export const uploadPhotoAPI = (formData) => // chnage photo 
  axios.put("/auth/photo", formData);
  // google login api 
  export const googleApi = (token)=>
    axios.post("/auth/google", {token})
  