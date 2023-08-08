import { useDispatch, useSelector } from "react-redux"
import Navbar from "../../component/navbar"
import RenderTableRows from "./component.table.row"
import { useEffect } from "react"
import { showLog } from "../../store/slices/attendance/slices"
export default function Log(){
    const dispatch = useDispatch()
    const {log} = useSelector(state =>{
        return{
            log : state.attendance.log
        }
    })

    useEffect(()=>{
        dispatch(showLog())
    },[])
    return(
        <div className="h-full w-full">
            <Navbar/>
            <div className="flex flex-col items-center justify-start gap-5 h-full w-full py-10">
                <div className="mb-2 mt-10 flex items-start  justify-between px-[26px] ">
                    <h4 className="text-4xl font-bold text-black">
                        Recents
                    </h4>
                </div>
                <table className="w-3/5 border-collapse border rounded text-gray-700 border-slate-400 shadow-sm">
                    <thead className="bg-slate-200 shadow-sm">
                        <tr>
                            <th className="border border-slate-300 text-center px-2">ID</th>
                            <th className="border border-slate-300 text-center px-4 py-2">Clock In</th>
                            {/* <th className="border border-slate-300 px-4 py-2">Parent ID</th> */}
                            <th className="border border-slate-300 text-center">Clock Out</th>
                        </tr>
                    </thead>
                    <tbody className="h-10 overflow-hidden">
                        <RenderTableRows
                            categories={log}
                        />
                    </tbody>
                </table>
            {/* langsung tabel ajah generate */}

            </div>
        </div>
    )
}