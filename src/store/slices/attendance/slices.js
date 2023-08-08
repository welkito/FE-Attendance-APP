import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
// import Toast from "react-hot-toast"
// import { ReportValidationSchema } from "./validation";
import Toast from "react-hot-toast"

export const clockInAttendance = createAsyncThunk(
    "attendance/clockInAttendance",
    async (payload, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem("token")
            // @request to generate report
            const response = await Axios.get(process.env.REACT_APP_API_ATTENDANCE_URL+"/clockIn",{headers :{"Authorization" : `Bearer ${token}`}})
            console.log(response?.data)
            const{attendance,id} =response?.data
            
            // console.log(result)
            Toast.success("Clock in has succeed")
            // @return data
            return response?.data
        } catch (error) {
            console.error(error)
            Toast.error("Error : Cannot get precise report :/")
            return rejectWithValue(error.response.data)
        }
    }
)
export const clockOutAttendance = createAsyncThunk(
    "attendance/clockoutAttendance",
    async (payload, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem("token")
            // @request to generate report
            Toast.success(`${payload?.id}`)
            const response = await Axios.post(process.env.REACT_APP_API_ATTENDANCE_URL+"/clockOut",payload,{headers :{"Authorization" : `Bearer ${token}`}})
            console.log(response?.data)
            
            // console.log(result)
            Toast.success("Clock out has succeed")
            // @return data
            return response?.data
        } catch (error) {
            console.error(error)
            Toast.error("Error : Cannot get precise report :/")
            return rejectWithValue(error.response.data)
        }
    }
)
export const showLog = createAsyncThunk(
    "attendance/showLog",
    async (payload, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem("token")
            // @request to generate report
            const response = await Axios.get(process.env.REACT_APP_API_ATTENDANCE_URL,{headers :{"Authorization" : `Bearer ${token}`}})
            console.log(response?.data)
            // @return data
            return response?.data
        } catch (error) {
            console.error(error)
            Toast.error("Error : Cannot get precise report :/")
            return rejectWithValue(error.response.data)
        }
    }
)

