import { createAsyncThunk } from "@reduxjs/toolkit"
// import { registerValidationSchema } from "./validation"
// import { encrypt } from "./encryption"
// import api from "../../utils/api.instance"
import Axios from "axios";
import Toast from "react-hot-toast"
// import 'react-toastify/dist/ReactToastify.css';

// @import schema validation
import { LoginValidationSchema, RegisterValidationSchema, UpdateValidationSchema} from "./validation";

// @create async thunk

//done
export const login = createAsyncThunk(
    "auth/login",
    async (payload, { rejectWithValue }) => {
        try {

            await LoginValidationSchema.validate(payload)
            
            //ubah
            // console.log( payload)
            const PARAMETER = "/login"
            // console.log(process.env.REACT_APP_API_URL)
            const response = await Axios.post(process.env.REACT_APP_API_AUTH_URL+ PARAMETER , payload)
            if(!response.data){
                return rejectWithValue({message : "Account not verify"})
            }
            // @save token to local storage
            localStorage.setItem("token", response?.headers?.authorization.split(" ")[1])
            // console.log("berhasil!")
            //toaster:
            //welcome!
            Toast.success("Welcome!")

            return response.data?.user
        } catch (error) {
            console.error(error)
            Toast.error("Login : something went wrong.")
            return rejectWithValue(error.response.data)
        }
    }
)

//done
export const keepLogin = createAsyncThunk(
    "auth/keepLogin",
    async (payload, { rejectWithValue }) => {
        try {
            // get token from local storage
            const token = localStorage.getItem("token")

            // @if token empty
            if (!token) {
                return rejectWithValue({ message : "token not found." })
            }
            // @get data user
            // const PARAMETER = "/auth"
            const response = await Axios.get(process.env.REACT_APP_API_AUTH_URL,{headers :{"Authorization" : `Bearer ${token}`}})
            // console.log("#data dalam keeplogin : "+response)
            console.log("BERHAsil")
            return response.data?.userResult
        } catch (error) {
            Toast.error("KeepLogin : something went wrong.")
            return rejectWithValue(error.response.data)
        }
    }
)
export const register = createAsyncThunk(
    "auth/register",
    async (payload, { rejectWithValue }) => {
        try {
            // get token from local storage
            await RegisterValidationSchema.validate(payload)
            const token = localStorage.getItem("token")
            // @if token empty
            if (!token) {
                return rejectWithValue({ message : "token not found." })
            }
            // @get data user
            const PARAMETER = "/register"
            const response = await Axios.post(process.env.REACT_APP_API_AUTH_URL+PARAMETER,payload,{headers :{"Authorization" : `Bearer ${token}`}})
            // console.log("#data dalam keeplogin : "+response)
            // console.log("BERHAsil")
            Toast.success(`${response?.data?.message}`)

            return {}
        } catch (error) {
            Toast.error("KeepLogin : something went wrong.")
            return rejectWithValue(error.response.data)
        }
    }
)
export const update = createAsyncThunk(
    "auth/update",
    async (payload, { rejectWithValue }) => {
        try {
            // get token from local storage
            await UpdateValidationSchema.validate(payload)
            const token = localStorage.getItem("token")
            console.log(`token: ${token}`)
            // console.log("#token dalam keeplogin : "+token)
            // @if token empty
            if (!token) {
                return rejectWithValue({ message : "token not found." })
            }
            // @get data user
            const PARAMETER = "/update"
            const response = await Axios.patch(process.env.REACT_APP_API_AUTH_URL+PARAMETER,payload,{headers :{"Authorization" : `Bearer ${token}`}})
            // console.log("#data dalam keeplogin : "+response)
            localStorage.removeItem("token")
            Toast.success(`${response?.data?.message}`)
            return {}
        } catch (error) {
            Toast.error(`${error.response.data}`)
            return rejectWithValue(error.response.data)
        }
    }
)

//done
export const logout = createAsyncThunk(
    "auth/logout",
    async (payload, { rejectWithValue }) => {
        try {
            // @delete token from local storage
            localStorage.removeItem("token")
            // localStorage.clear()
            Toast.success("Good Bye! See you soon!")
            return {}
        } catch (error) {
            Toast.error("Error : something went wrong.")
            return rejectWithValue(error.response.data)
        }
    }
) 
