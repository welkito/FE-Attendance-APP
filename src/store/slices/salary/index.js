import { createSlice } from "@reduxjs/toolkit";

// @import async thunk
import {getReport} from "./slices"

const INITIAL_STATE = {
    isLoading : false,
    report : [],
}

const SalarySlice = createSlice({
    name : "salary",
    initialState : INITIAL_STATE,
    extraReducers : builder => {
        builder.addCase(getReport.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(getReport.fulfilled, (state, action) => {
            state.isLoading = false
            state.report = action?.payload
        })
        builder.addCase(getReport.rejected, (state, action) => {
            state.isLoading = false
        })
       

    }
})

export default SalarySlice.reducer