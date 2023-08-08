import { useRef } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logout, register } from "../../store/slices/auth/slices"

export default function Register(){
  const navigate = useNavigate()
  const dispatch = useDispatch()
    const salary= useRef(null)
    const email = useRef(null)
    const onSubmit = () => {
      dispatch(register({salary : salary?.current?.value , email : email?.current?.value}))
      salary.current.value = null;
      email.current.value = null;
    }
    return(
        <div className="h-full w-full flex flex-col items-center py-20">
            {/* <Navbar/> */}
            <h4 className="fixed right-10 top-10 text-xl font-bold text-gray-400 hover:text-red-600"
              onClick={()=>{dispatch(logout())
                navigate("/login")}}
            >
                        Log Out
                    </h4>
            <div className="flex flex-col items-center justify-center gap-5 h-full w-full py-10">
                <div className="mb-2 mt-4 flex flex-col gap-5 items-center justify-center px-[26px] w-full ">
                    <h4 className="text-4xl font-bold text-emerald-700">
                        Employee Registration
                    </h4>
                    <h4 className="text-base font-bold text-gray-400">
                        Employee will be get an email to fill further data needed.
                    </h4>

                </div>
            </div>
        <div className="w-full h-full flex flex-col items-center"> 
        <div className="mb-3 w-1/5">
            <label
            className={`text-sm text-emerald-700 ${"ml-1.5 font-medium"}`}
            >
            Employee's Email : 
            </label>
            <input
            type="email"
            ref={email}
            placeholder="Type..."
            className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white p-3 text-sm outline-none ${
            "border-gray-200 "}`}
            />
        </div>
      {/* input salary */}
        <div className="mb-3 w-1/5">
        <label
          className={`text-sm text-emerald-700 ${"ml-1.5 font-medium"}`}
        >
          Employee's Salary : 
        </label>
        <input
          type="number"
          ref={salary}
          placeholder = "Type..."
          autoSave = "false"
          className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white p-3 text-sm outline-none ${
          "border-gray-200 "}`}
        />
      </div>
 
        <button className="linear mt-2 w-1/5 rounded-xl bg-emerald-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
          onClick={onSubmit}
        >
          Register
        </button>

        </div>

    
            </div>
 
    )
}