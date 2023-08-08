import { useEffect, useState } from "react";
import Navbar from "../../component/navbar"
import { useDispatch, useSelector } from "react-redux";
import { clockInAttendance, clockOutAttendance } from "../../store/slices/attendance/slices";
export default function Home(){
    const [time,setTime] = useState("00:00:00")
    // logic for showing attendance status
    const [statusIn,setStatusIn] = useState("Unattempted")
    const [statusOut,setStatusOut] = useState("Unattempted")
    // button logic for disabled state
    const [buttonIn, setButtonIn] = useState(false)
    const [buttonOut, setButtonOut] = useState(true)

    const dispatch = useDispatch()
    const{id,clockIn,clockOut} = useSelector(state=>{
        return{
            id : state.attendance.id,
            clockIn : state.attendance.clockIn,
            clockOut : state.attendance.clockOut
        }
    })
    function startTime() {
        const today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        setTime(h + ":" + m + ":" + s);
        setTimeout(startTime, 1000);
      }
      
      function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
      }

      const token = localStorage.getItem("token");

    //   iffclockin date = date.now()
      useEffect(()=>{
        startTime()
      })
      //useeffect logic
      useEffect(()=>{
        if(clockIn){
            setButtonIn(true)
        }
        if(clockOut){
            setButtonOut(true)
        }
      },[])
      //button logic
      const clickClockIn = () =>{
        setStatusIn(time)
        dispatch(clockInAttendance())
        setButtonIn(true)
        setButtonOut(false)
      }

      const clickClockOut = () =>{
        setStatusOut(time)
        dispatch(clockOutAttendance({id : id}))
        setButtonOut(true)
        //dispatch
        //kalau uda klik, button disabled, harus tunggu besok
      }

    return(
        <div className="h-full w-full">
            <Navbar/>
            <div className="flex flex-col items-start justify-start gap-5 h-full w-full pt-10">
            {/* title */}
            <div className="mb-2 mt-4 flex items-start  justify-between px-[26px] ">
                <h4 className="text-4xl font-bold text-black">
                    {/* Home */}
                </h4>
            </div>
            {/* ada gambar besar bisinya jam sekarang */}
            <div className="w-full flex flex-row items-center justify-center">
                <div className="w-80 h-80 rounded-3xl bg-gray-800  gap-3 flex flex-col items-center justify-center">
                    <div className="text-2xl text-white font-bold">CLOCK.</div>
                    <div className="text-xl text-gray-400 font-bold pb-14">Shift : 08.00 - 17.00</div>
                    <div className="text-5xl font-primary text-emerald-700 border bg-gray-300 rounded-xl p-2">{time}</div>
                </div>
            </div>
            <div className="w-full flex flex-row justify-evenly">
                {/* part clock in*/}
                <div className="w-full flex flex-col items-center justify-center gap-5">
                    <div className="flex flex-col items-center justify-center
                    border p-4 rounded-lg bg-gray-300 text-gray-600 font-bold">
                        Clock In Status : 
                        <p>{statusIn}</p>
                    </div>
                    <button className="border p-4 rounded-lg disabled:bg-red-500 bg-emerald-600 font-bold text-white"
                    onClick={()=>{
                        clickClockIn()
                    }}
                    disabled={buttonIn}
                    >
                        Clock In</button>
                </div>
            
                {/* part clock out*/}
                <div className="w-full flex flex-col items-center justify-center gap-5">
                    <div className="flex flex-col items-center justify-center
                        border p-4 rounded-lg bg-gray-300 text-gray-600 font-bold">
                            Clock Out Status : 
                            <p>{statusOut}</p>
                    </div>
                    <button className="border p-4 rounded-lg disabled:bg-red-500 bg-emerald-600 font-bold text-white"
                    onClick={()=>{
                        clickClockOut()
                    }}
                    disabled={buttonOut}              
                    >
                        Clock Out</button>
                </div>
    
            </div>
            </div>
        </div>
    )
}