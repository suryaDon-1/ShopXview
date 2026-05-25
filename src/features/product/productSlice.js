import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as productAPI from "./productAPI.js";

// THUNKS
export const fetchProducts = createAsyncThunk(
  "product/fetch",
  async (params) => {
    const res = await productAPI.getProductsAPI(params);
    return res.data.data;
  }
);

export const fetchProductDetails = createAsyncThunk(
  "product/details",
  async (id) => {
    const res = await productAPI.getProductByIdAPI(id);
    return res.data.data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    productDetails: null,
    loading: false,
      productLoading: false,
    status: "idle",
    error: null,

    total: 0,
    page: 1,
    pages: 1,
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

    builder

      // ================= PRODUCTS =================
      .addCase(fetchProducts.pending, setPending)

      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.status = "success";

        state.products = action.payload.products;
        state.total = action.payload.total;
        state.page = action.payload.page;
        state.pages = action.payload.pages;
      })

      .addCase(fetchProducts.rejected, setRejected)

      // ================= PRODUCT DETAILS =================
      .addCase(fetchProductDetails.pending, setPending)

      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.productLoading = false;
        state.status = "success";
        state.productDetails = action.payload;
      })

      .addCase(fetchProductDetails.rejected, setRejected);
  },
});

export default productSlice.reducer;