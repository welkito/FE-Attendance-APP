import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
import Toast from "react-hot-toast"



export const getReport = createAsyncThunk(
    "salary/getReport",
    async (payload, { rejectWithValue }) => {
        try {
            // await ReportValidationSchema.validate(payload)
            const token = localStorage.getItem("token")
            // @request to generate report
            // const { message,graphic,bestSeller,summary,data } = await Axios.post(process.env.REACT_APP_API_REPORT_URL,payload)
            const response = await Axios.get(process.env.REACT_APP_API_SALARY_URL,{headers :{"Authorization" : `Bearer ${token}`}})
            console.log(response?.data)
            const{ result} = response?.data
            
            // console.log(result)
            // Toast.success("Report has been generated")
            // @return data
            return result
        } catch (error) {
            console.error(error)
            Toast.error(`Error : ${error?.response?.data}`)
            return rejectWithValue(error.response.data)
        }
    }
)

