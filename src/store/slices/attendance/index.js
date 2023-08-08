import { createSlice } from "@reduxjs/toolkit";

// @import async thunk
import {clockInAttendance, clockOutAttendance, getReport, showLog} from "./slices"

const INITIAL_STATE = {
    isLoading : false,
    id : null,
    clockIn : null,
    clockOut : null,
    log : []
}

const AttendanceSlice = createSlice({
    name : "attendance",
    initialState : INITIAL_STATE,
    extraReducers : builder => {
        builder.addCase(clockInAttendance.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(clockInAttendance.fulfilled, (state, action) => {
            state.isLoading = false
            state.clockIn = action?.payload?.attendance?.clockIn
            state.id= action?.payload?.id
        })
        builder.addCase(clockInAttendance.rejected, (state, action) => {
            state.isLoading = false
        })
        builder.addCase(clockOutAttendance.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(clockOutAttendance.fulfilled, (state, action) => {
            state.isLoading = false
            state.clockOut = action?.payload?.attendance?.clockOut
            // state.id= action?.payload?.id
        })
        builder.addCase(clockOutAttendance.rejected, (state, action) => {
            state.isLoading = false
        })
        builder.addCase(showLog.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(showLog.fulfilled, (state, action) => {
            state.isLoading = false
            state.log = action?.payload?.result
        })
        builder.addCase(showLog.rejected, (state, action) => {
            state.isLoading = false
        })
       

    }
})

export default AttendanceSlice.reducer