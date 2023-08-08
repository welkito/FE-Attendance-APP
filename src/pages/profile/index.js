import { useRef } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { update } from "../../store/slices/auth/slices"

export default function Profile(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const fullname = useRef(null)
    const dob = useRef(null)
    const password = useRef(null)


    const onSubmit = () => {
        if(!fullname){
            return
        }
        if(!dob){
            return
        }
        if(!password){
            return
        }
        const locationtoken = String(window.location.href)
        const token = locationtoken.split("profile/")[1]
        console.log(token)
        localStorage.setItem("token",token)
        dispatch(update({fullname : fullname?.current?.value,
        dob : dob?.current?.value,
        password : password?.current?.value
        }))
        navigate("/login")
    }
    return(
        <div className="w-full h-full flex flex-col items-center pt-16 pb-14">
            <h4 className="mb-2.5 text-4xl font-bold text-emerald-700 ">
            Update Profile
            </h4>
            <p className="mb-9 ml-1 text-base text-gray-700">
            Fill the form below before you proceed to login.
            </p>

        <div className="w-full h-full flex flex-col items-center"> 
        {/* fullname */}
            <div className="mb-3 w-1/5">
                <label
                className={`text-sm font-bold text-emerald-700 ${"ml-1.5 font-medium"}`}
                >
                Full Name :
                </label>
                <input
                type="text"
                ref={fullname}
                placeholder="Type..."
                className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white p-3 text-sm outline-none ${
                "border-gray-200 "}`}
            />
            </div>
            {/* dob */}
            <div className="mb-3 w-1/5">
                <label
                className={`text-sm font-bold text-emerald-700 ${"ml-1.5 font-medium"}`}
                >
                Date of Birth :
                </label>
                <input
                type="date"
                ref={dob}
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
          Submit
        </button>
        {/* </Link> */}

        </div>
        </div>
    )
}