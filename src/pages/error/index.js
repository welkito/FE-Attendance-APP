import { useNavigate } from "react-router-dom"

export default function Error404(){
    const navigate = useNavigate()
    return(
        <div className="h-full w-full items-center flex">
            <div className="flex flex-col items-start justify-start gap-5 h-full w-full py-20 ">
   
                <h1 className="font-bold text-2xl">You entered the void. <br/>
                Please click <a className="text-red-500" onClick={()=>{navigate("/login")}}>here</a>
                <br/> to go back  to login page.</h1>
                <div className="h-80"></div>
            </div>
        </div>
   
    )
}