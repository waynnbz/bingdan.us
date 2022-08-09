import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import bingService from './bingService'

const initialState = {
  bings: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

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

export const bingSlice = createSlice({
  name: 'bing',
  initialState,
  reducer: {
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
        state.bings.push(action.payload)
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
  },
})

export const { reset } = bingSlice.actions
export default bingSlice.reducer
