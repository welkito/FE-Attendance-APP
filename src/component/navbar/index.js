import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logout } from "../../store/slices/auth/slices"

export default function Navbar(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [home,setHome] = useState(false)
    return(
        <div className="w-full shadow-2xl p-6 fixed top-5 z-10 flex flex-row items-center justify-evenly rounded-full bg-white">
            <div className="flex flex-row gap-12 flex-grow items-center justify-start">
                <button className = {`pl-5 font-bold text-xl
                 ${window.location.href === "http://localhost:3000/" ? 
                 "text-emerald-700" : "text-gray-800"  }`}
                onClick={()=>{
                    navigate("/")}
                }>Home</button>

                
                <button className = {`font-bold text-xl
                 ${window.location.href === "http://localhost:3000/attendance" ? 
                 "text-emerald-700" : "text-gray-800"  }`}
                onClick={()=>{
                    navigate("/attendance")}
                }>Attendance Log</button>

                <button className = {`font-bold text-xl
                 ${window.location.href === "http://localhost:3000/report" ? 
                 "text-emerald-700" : "text-gray-800"  }`}
                onClick={()=>{
                    navigate("/report")}
                }>Payroll Report</button>
            </div>

            <div className="flex flex-row item-center justify-center flex-grow">
                <button className="flex flex-row text-xl font-bold flex-grow pr-20 justify-end hover:text-red-600"
                    onClick={()=>{
                        dispatch(logout())
                        navigate("/login")}}>Logout</button>
            </div>
        </div>
    )
}