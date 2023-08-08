import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { login, keepLogin, register,update, logout } from "./slices";

     const INITIAL_STATE = {
        loading : false,
        shiftId : "",
        roleId : "",
        id : "",
        name : "",
        email : "",
        dob : ""
    }

// @create slice
const authSlice = createSlice({
    name : "auth",
    initialState : INITIAL_STATE,
    extraReducers : builder =>{
        builder.addCase(login.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.loading = false
            state.shiftId = action.payload?.shiftId
            state.roleId = action.payload?.roleId
            state.id = action.payload?.id
            state.fullname = action.payload?.fullname
            state.email = action.payload?.email
            state.dob = action.payload?.dob     
        })
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false
        })
        builder.addCase(register.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(register.fulfilled, (state, action) => {
            state.loading = false    
        })
        builder.addCase(register.rejected, (state, action) => {
            state.loading = false
        })
        builder.addCase(keepLogin.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(keepLogin.fulfilled, (state, action) => {
            state.loading = false
            state.shiftId = action.payload?.shiftId
            state.roleId = action.payload?.roleId
            state.id = action.payload?.id
            state.fullname = action.payload?.fullname
            state.email = action.payload?.email
            state.dob = action.payload?.dob       
        })
        builder.addCase(keepLogin.rejected, (state, action) => {
            state.loading = false
        })
        builder.addCase(update.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(update.fulfilled, (state, action) => {
            state.loading = false   
        })
        builder.addCase(update.rejected, (state, action) => {
            state.loading = false
        })
        builder.addCase(logout.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(logout.fulfilled, (state, action) => {
            state.loading = false
            state.roleId = ""
              
        })
        builder.addCase(logout.rejected, (state, action) => {
            state.loading = false
        })
       
    }
})

// export reducer
export default authSlice.reducer

