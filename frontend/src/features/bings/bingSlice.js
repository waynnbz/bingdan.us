import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import bingService from './bingService'

const initialState = {
  bings: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new bing
export const createBing = createAsyncThunk(
  'bings/create',
  async (bingData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await bingService.createBing(bingData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get user bings
export const getBings = createAsyncThunk(
  'bings/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await bingService.getBings(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Delete user bing
export const deleteBing = createAsyncThunk(
  'bings/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await bingService.deleteBing(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const bingSlice = createSlice({
  name: 'bing',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBing.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createBing.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.bings.unshift(action.payload)
      })
      .addCase(createBing.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getBings.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getBings.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.bings = action.payload
      })
      .addCase(getBings.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteBing.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteBing.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.bings = state.bings.filter(
          (bing) => bing._id !== action.payload.id
        )
      })
      .addCase(deleteBing.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = bingSlice.actions
export default bingSlice.reducer
