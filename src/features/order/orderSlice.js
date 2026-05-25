import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as API from "./orderAPI.js";

//grt user orders
export const getuserorders = createAsyncThunk(
  "order/user",
  async (_, thunkAPI) => {
    try {
      const res = await API.getuserOrderAPI();
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Can not fetch orders",
      );
    }
  },
);
//get all orders admin
export const getAllorders = createAsyncThunk(
  "order/admin/all",
  async (_, thunkAPI) => {
    try {
      const res = await API.getAllordersAPI();
      console.log(res.data.orders);
      return res.data.orders;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Can not fetch Orders",
      );
    }
  },
);
// update
export const updateStatus = createAsyncThunk(
  "orders/admin/update",
  async ({ orderId, statusupdate }, thunkAPI) => {
    try {
      const res = await API.updateorderstatusAPI(orderId, statusupdate);
      console.log(res.data.order);
      return res.data.order;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Can not Update Order status ",
      );
    }
  },
);

// create slices

const orederslice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    loading: null,
    status: "idle",
    error: null,
  },
  reducers:{},
  extraReducers: (builder)=>{
      const setPending = (state) => {
      state.loading = true;
      state.status = "pending";
      state.error = null;
    };
    // for rejected sont write again same
    const setRejected = (state, action) => {
      state.loading = false;
      state.status = "failed";
      state.error = action.payload;
    };
    builder
    .addCase(getuserorders.pending, setPending)
    .addCase(getuserorders.fulfilled, (state,action)=>{
        console.log(action.payload.orders)
        state.loading = false,
        state.status = "success",
        state.orders = action.payload.orders
        console.log(state.orders)
    })
    .addCase(getuserorders.rejected, setRejected)
    // Admin can access all the orders 
    .addCase(getAllorders.pending, setPending)
    // if fulfilled
    .addCase(getAllorders.fulfilled, (state,action)=>{
      state.loading = false,
      state.status= "success",
      state.orders = action.payload
    })
    .addCase(getAllorders.rejected, setRejected)

    // admin can upadte all the orders 
    .addCase(updateStatus.pending, setPending)
    // if fulfilled
    .addCase(updateStatus.fulfilled, (state,action)=>{
      state.loading = false,
      state.status= "success"
      // state.orders = action.payload
      // console.log(action.payload.status)
    })
    .addCase(updateStatus.rejected, setRejected)
  }
});

export default orederslice.reducer