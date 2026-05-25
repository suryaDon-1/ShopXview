import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as API from "./addressAPI.js";

// add address API
export const adddAddress = createAsyncThunk(
  "address/addaddress",
  async (data, thunkAPI) => {
    try {
      const res = await API.createAddressAPI(data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Something went wrong",
      );
    }
  },
);
// get Address APi
export const getAddress = createAsyncThunk(
  "address/getaddress",
  async (_, thunkAPI) => {
    try {
      const res = await API.getAddressAPI();
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || "Cant get the Address",
      );
    }
  },
);
// update address
export const updateAddress = createAsyncThunk(
  "address/updateaddress",
  async ({ addressId, data }, thunkAPI) => {
    try {
      console.log(addressId); // use this id in api
      const res = await API.updateAddressAPI(addressId, data);
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || "Cant update the Address",
      );
    }
  },
);
// delete address
export const deleteAddress = createAsyncThunk(
  "address/deleteaddress",
  async (addressId, thunkAPI) => {
    try {
      await API.deleteAddressAPI(addressId);
      return addressId; //  RETURN ID so we can access it by paylaod to define stete 
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || "Cant update the Address",
      );
    }
  },
);

// create slice
const addressSlice = createSlice({
  name: "address",
  initialState: {
    address: [],
    loading: false,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    //  reusable pending handler
    const setPending = (state) => {
      state.loading = true;
      state.status = "pending";
      state.error = null;
    };

    const setRejected = (state, action) => {
      state.loading = false;
      state.status = "failed";
      state.error = action.error.message;
    };
    // add address
    builder
      //when pending
      .addCase(adddAddress.pending, setPending)
      //when fulfield
      .addCase(adddAddress.fulfilled, (state, action) => {
        console.log(action);
        state.address = state.address = action.payload.data.address; // ✅ replace full array
        ((state.loading = false), (state.status = "success"));
      })
      // when rejected
      .addCase(adddAddress.rejected, setRejected)

      // -- fetch address--//
      .addCase(getAddress.pending, setPending) // pending
      // fulfilll
      .addCase(getAddress.fulfilled, (state, action) => {
        console.log(action); // debug
        ((state.loading = false), (state.status = "success"));
        state.address = action.payload.data.address;
      })
      .addCase(getAddress.rejected, setRejected) //reject

      // for update //
      //pendinng
      .addCase(updateAddress.pending, setPending)
      //fulfilled
      .addCase(updateAddress.fulfilled, (state, action) => {
        console.log(action);
        state.loading = false;
        state.status = "success";

        const updated = action.payload[0];

        // to fin dthespecif add with help of id and update in state
        state.address = state.address.map((item) =>
          item._id === updated._id ? updated : item,
        );
      })
      .addCase(updateAddress.rejected, setRejected) // rejected

      //for delete address
      .addCase(deleteAddress.pending,setPending)
      .addCase(deleteAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.status = "success";
        state.address = state.address.filter(
          (item) => item._id !== action.payload, //  remove from state
        );
      })
      .addCase(deleteAddress.rejected,setRejected)
  },
});
export default addressSlice.reducer;
