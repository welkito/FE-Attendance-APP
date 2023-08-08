import { useDispatch, useSelector } from "react-redux"
import Navbar from "../../component/navbar"
import RenderTableRows from "./component.table.row"
import { useEffect } from "react"
import { getReport } from "../../store/slices/salary/slices"
export default function Report(){
    const dispatch = useDispatch()
    const {report,fullname } = useSelector(state =>{
        return{
            report : state.salary.report,
            fullname : state.auth.fullname
        }
    })

useEffect(()=>{
    dispatch(getReport())
},[])

    return(
        <div>
            <Navbar/>
            <div className="flex flex-col items-start justify-start gap-5 h-full w-full py-10">
                <div className="mb-2 mt-4 flex items-start  justify-between px-[26px] ">
                    <h4 className="text-4xl font-bold text-black">
                        {/* Payroll Report */}
                    </h4>
                </div>
                {/* bentuk report */}
                <div className="w-4/5 h-full flex flex-col items-center ml-32 px-10
                rounded-3xl
                justify-center py-10 bg-white">
                    {/* bagian : nama, salary type : monthly */}
                    <div className="grid grid-cols-2 w-full">
                        <div className=" text-3xl font-bold flex flex-grow p-5">
                            REPORT
                        </div>
                        <div className="text-gray-700 text-xl font-semibold flex flex-grow items-end justify-end p-5">
                            Name : {fullname? fullname : ""}
                        </div>
                        <div className="text-white text-xl font-semibold flex flex-grow  p-5">
                            .
                        </div>
                        <div className="text-gray-700 text-xl font-semibold flex flex-grow items-start justify-end px-5 pb-5">
                            Salary type : Monthly
                        </div>
                    </div>
                    {/* langsung tampilin report */}
                    <table className="border-collapse border rounded-2xl text-gray-700 w-full shadow-sm mx-10">
                    <thead className="bg-slate-200 shadow-sm">
                        <tr>
                            <th className="border border-slate-300 text-center px-2">Period</th>
                            <th className="border border-slate-300 px-4 py-2">Base Salary</th>
                            <th className="border border-slate-300 px-4 py-2">Deduction </th>
                            <th className="border border-slate-300 text-center">Amount Received</th>
                        </tr>
                    </thead>
                    <tbody className="h-10 overflow-hidden">
                        <RenderTableRows
                            categories={report}
                        />
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}