import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios";

// Action: Get Package Details
export const getUser = createAsyncThunk(
    "getUser",
    async (values, {rejectWithValue}) => {
        const axios = axiosInstance();
        try {
            const { data } = await axios.get("/getUser");
            return data.packs;
        } catch (error: any) {
            return rejectWithValue( error.response );
        }
    }
);

const initialState={
    convalidato:false
}

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: ( builder ) => {
        // Package Details
        builder.addCase(getUser.pending, (state, action: any) => {
            state.convalidato = true;
        });
        builder.addCase(getUser.rejected, (state, action: any) => {
            state.convalidato = false;
        });
        builder.addCase(getUser.fulfilled, (state, action: any) => {
            state.convalidato = true
        });
    }

});

//export const {clearError, setOwnedPlayers, setNumberOfPlayers} = packageSlice.actions;
export default userSlice.reducer;