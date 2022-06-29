import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import planeService from "../services/planeService";

export const getPlanes = createAsyncThunk('GET_PLANES', async (_, thunkAPI) => {
    try {
        return await planeService.getPlanes();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

const planesSlice = createSlice({
    name: 'planes',
    initialState: {
        planes: null,
        isError: false,
        isLoading: false,
        message: '',
    },
    extraReducers: (bulder) => {
        bulder.addCase(getPlanes.pending, (state) => {
            state.isLoading = true
        })
        bulder.addCase(getPlanes.fulfilled, (state, action) => {
            state.isLoading = false
            state.planes = action.payload
        })
        bulder.addCase(getPlanes.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload.message
            state.planes = null
        })
    }

})

export default planesSlice.reducer;