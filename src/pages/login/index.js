import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../../store/slices/auth/slices"
import { useNavigate } from "react-router-dom"

export default function Login(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const email = useRef(null)
    const password = useRef(null)
    const {roleId} = useSelector(state=>{
        return{
            roleId : state.auth.roleId
        }
    })
    useEffect(()=>{
        if(roleId === 1 ){
            navigate("/register")
        }
        if(roleId === 2 ){
            navigate("/")
        }
    })
    const onSubmit = () => {
        dispatch(login({email : email?.current?.value, password : password?.current?.value}))
    }
    return(
        <div className="w-full h-full flex flex-col pt-20 pb-32 pl-28">
            <h4 className="mb-2.5 text-4xl font-bold text-emerald-700 ">
            Sign In
            </h4>
            <p className="mb-9 ml-1 text-base text-gray-700">
            Enter your email and password to sign in!
            </p>
            {/* form email sama password, ada 1 button */}
        <div className="w-full h-full flex flex-col"> 
            <div className="mb-3 w-1/5">
                <label
                className={`text-sm font-bold text-emerald-700 ${"ml-1.5 font-medium"}`}
                >
                Email : 
                </label>
                <input
                type="email"
                ref={email}
                placeholder="Type..."
                className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white p-3 text-sm outline-none ${
                "border-gray-200 "}`}
            />
            </div>
      {/* password */}
            <div className="mb-3 w-1/5">
                <label
                className={`text-sm font-bold text-emerald-700 ${"ml-1.5 font-medium"}`}
                >
                Password :
                </label>
                <input
                type="password"
                ref={password}
                placeholder = "Type your password"
                autoSave = "false"
                className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white p-3 text-sm outline-none ${
                "border-gray-200 "}`}
                />
            </div>
        {/* <Link to="/admin" className="mt-0 w-max lg:pt-10"> */}
        <button className="linear mt-2 w-1/5 rounded-xl bg-emerald-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
          onClick={onSubmit}
        >
          Sign In
        </button>
        {/* </Link> */}

        </div>
        </div>
    )
}