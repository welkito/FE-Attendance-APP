import { configureStore } from "@reduxjs/toolkit"

// @import all reducer from slices
import authReducer from "./slices/auth"
import salaryReducer from "./slices/salary"
import attendanceReducer from "./slices/attendance"

// @create store
const store = configureStore({
    reducer : {
        salary : salaryReducer,
        attendance : attendanceReducer,
        auth : authReducer
    },
})

// @export store
export default store