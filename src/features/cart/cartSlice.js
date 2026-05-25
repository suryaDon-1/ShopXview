import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as API from "./cartAPI.js";

// get or crete cart if not exist
export const getorcretecart = createAsyncThunk(
  "/cart/get",
  async (_, thunkAPI) => {
    try {
      const res = await API.getorcreatecartAPI();
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Can not fetch products",
      );
    }
  },
);
// add item to cart
export const addtocart = createAsyncThunk(
  "/cart/add",
  async ({ productId, data }, thunkAPI) => {
    try {
      const res = await API.addtocartAPI(productId, data);
      console.log(res.data);
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "something went wrong",
      );
    }
  },
);

// update quanatity in cart
export const updatecart = createAsyncThunk(
  "cart/update",
  async ({ productId, quantity }, thunkAPI) => {
    try {
      const res = await API.updatecartAPI(productId,quantity);
      console.log(productId)
      console.log(res.data.data);
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "cant update Product",
      );
    }
  },
);
// delete item from cart 
export const deleteitem = createAsyncThunk(
  "cart/remove", async(productId, thunkAPI)=>{
    try {
      const res =await API.removeItemAPI(productId);
      console.log(res.data)
      return res.data.data
    } catch (error) {
      return thunkAPI.rejectWithValue(
      error.response?.data?.message || "cant remove item"
      ) 
    }
  }
)

// clear cart 
export const clearcart = createAsyncThunk(
  "cart/clear", async(_,thunkAPI)=>{
    try {
      const res = await API.clearcartAPI();
      return res.data.data
    } catch (error) {
       return thunkAPI.rejectWithValue(
      error.response?.data?.message || "cant remove item"
      ) 
    }
  }
)
// slices
const cartslice = createSlice({
  name: "cart",

  initialState: {
    cart: { item: [], totalprice: 0 }, 
    loading: false,
    status: "idle",
    error: null,
  },
  reducers: {
  clearCartState: (state) => {
    state.cart = {
      items: [],
    };
  },
},
  extraReducers: (builder) => {
    //  reusable pending handler
    const setPending = (state) => {
      state.loading = true;
      state.status = "pending";
      state.error = null;
    };
    // for rejected sont write again same
    const setRejected = (state, action) => {
      state.loading = false;
      state.status = "failed";
      state.error = action.error.message;
    };

    // get or create cart
    builder
      .addCase(getorcretecart.pending, setPending)
      .addCase(getorcretecart.fulfilled, (state, action) => {
        console.log(action);
        state.loading = false;
        state.status = "success";
        state.cart = action.payload;
      })
      .addCase(getorcretecart.rejected, setRejected)

      // add to cart
      .addCase(addtocart.pending, setPending)
      .addCase(addtocart.fulfilled, (state, action) => {
        console.log(action.payload);
        state.loading = false;
        state.cart = action.payload;
      })
      .addCase(addtocart.rejected, setRejected)
      // upadte qunatity in cart 
      .addCase(updatecart.pending , setPending) // pending 
      .addCase(updatecart.fulfilled, (state,action)=>{
        state.loading = false;
        state.status = "success";
        console.log(action.payload)
        state.cart = action.payload;
      })
      .addCase(updatecart.rejected,setRejected) // when rejected

      // remove from  in cart 
      .addCase(deleteitem.pending , setPending) // pending 
      .addCase(deleteitem.fulfilled, (state,action)=>{
        state.loading = false;
        state.status = "success";
        console.log(action.payload)
        state.cart = action.payload;
      })
      .addCase(deleteitem.rejected,setRejected) // when rejected
      //clear cart
       .addCase(clearcart.pending , setPending) // pending 
      .addCase(clearcart.fulfilled, (state,action)=>{
        state.loading = false;
        state.status = "success";
        console.log(action.payload)
        state.cart = action.payload;
      })
      .addCase(clearcart.rejected,setRejected) // when rejected
  },
});
export const { clearCartState } = cartslice.actions;
export default cartslice.reducer;
