import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as API from "./authApi.js";
import toast from "react-hot-toast";

// REGISTER
export const registerUser = createAsyncThunk(
  "auth/register",
  async (data, thunkAPI) => {
    try {
      const res = await API.registerAPI(data);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Something went wrong",
      );
    }
  },
);

// LOGIN
export const loginUser = createAsyncThunk(
  "auth/login",
  async (data, thunkAPI) => {
    try {
      const res = await API.loginAPI(data);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Login failed",
      );
    }
  },
);

// PROFILE
export const getProfile = createAsyncThunk(
  "auth/profile",
  async (_, thunkAPI) => {
    try {
      const res = await API.getProfileAPI();
      return res.data.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Failed to fetch profile",
      );
    }
  },
);

// UPDATE PROFILE
export const updateProfile = createAsyncThunk(
  "auth/updateProfile",
  async (data, thunkAPI) => {
    try {
      const res = await API.updateProfileAPI(data);
      return res.data.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Update failed",
      );
    }
  },
);

// CHANGE PASSWORD
export const changePassword = createAsyncThunk(
  "auth/changePassword",
  async (data, thunkAPI) => {
    try {
      const res = await API.changePasswordAPI(data);
      return res.data.message;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Password change failed",
      );
    }
  },
);

// UPLOAD PHOTO
export const uploadPhoto = createAsyncThunk(
  "auth/uploadPhoto",
  async (data, thunkAPI) => {
    try {
      const res = await API.uploadPhotoAPI(data);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Upload failed",
      );
    }
  },
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const res = await API.logoutAPI(); // backend clears cookie
    return res.data; // ✅ MUST return something
  } catch (err) {
    return thunkAPI.rejectWithValue(
      err.response?.data?.message || "Logout Failed",
    );
  }
});

// Google siginin
export const GoogleSigin = createAsyncThunk(
  "auth/google",
  async (token, thunkAPI) => {
    try {
      const res = await API.googleApi(token);
      console.log(res.data)
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Google Login Failed",
      );
    }
  },
);

// ================= SLICE =================
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: true,
    error: null,
    status: "idle", // idle | pending | fulfilled | rejected
  },

  reducers: {},

  extraReducers: (builder) => {
    // for pending stste res usable function  just write the same thing again and aginn we write this in fn and use where we need
    const setPending = (state) => {
      state.loading = true;
      state.status = "pending";
      state.error = null;
    };
    // rejecred res usable function  just write the same thing again and aginn we write this in fn and use where we need
    const setRejected = (state, action) => {
      state.loading = false;
      state.status = "rejected";
      state.error = action.payload;
      //  toast.error(action.payload); // set toast value and show on screen
    };

    // REGISTER
    builder
      .addCase(registerUser.pending, setPending) // if pending
      //if fulfield
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.status = "fulfilled";
        // state.user = action.payload.data; // not needed
        // toast.success(action.payload.message || "Registered successfully!");
      })
      // if rejected
      .addCase(registerUser.rejected, setRejected);

    // LOGIN
    builder
      .addCase(loginUser.pending, setPending)
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.status = "fulfilled";
        state.user = action.payload.data; // not needed
        //  toast.success("Login successful!");
      })
      .addCase(loginUser.rejected, setRejected);

    //logout
    builder
      .addCase(logout.pending, setPending)
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.status = "idle";
        state.error = null;
        state.loading = false;
      })
      .addCase(logout.rejected, setRejected);

    // PROFILE
    builder
      .addCase(getProfile.pending, setPending)
      .addCase(getProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.status = "fulfilled";
        state.user = action.payload; // store the data in user  access user.profile
      })
      .addCase(getProfile.rejected, setRejected);

    // UPDATE PROFILE
    builder
      .addCase(updateProfile.pending, setPending)
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.status = "fulfilled";
        state.user = action.payload;
        //    toast.success("Profile updated!");
      })
      .addCase(updateProfile.rejected, setRejected);

    // CHANGE PASSWORD
    builder
      .addCase(changePassword.pending, setPending)
      .addCase(changePassword.fulfilled, (state) => {
        state.loading = false;
        state.status = "fulfilled";
        toast.success("Password changed!");
      })
      .addCase(changePassword.rejected, setRejected);

    // UPLOAD PHOTO
    builder
      .addCase(uploadPhoto.pending, setPending)
      .addCase(uploadPhoto.fulfilled, (state, action) => {
        state.loading = false;
        state.status = "fulfilled";
        state.user = action.payload?.data || state.user;
        toast.success("Photo uploaded!");
      })
      .addCase(uploadPhoto.rejected, setRejected);
    // google
    builder
      .addCase(GoogleSigin.pending, setPending)

      .addCase(GoogleSigin.fulfilled, (state, action) => {
        state.loading = false;
        state.status = "fulfilled";
        state.user = action.payload.data;

        toast.success("Google Login Successful!");
      })

      .addCase(GoogleSigin.rejected, setRejected);
  },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer; // use to set state val in store
