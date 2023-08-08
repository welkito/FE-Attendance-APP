import Error404 from "./pages/error";
import Home from "./pages/home";
import Log from "./pages/log";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Register from "./pages/register";
import Report from "./pages/report";
import { Toaster } from "react-hot-toast"

import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Route,Routes } from 'react-router-dom';
import { generatePath } from "react-router";

import {ProtectedRouteAdmin, ProtectedRouteEmployee} from "./protected.routes"
import { keepLogin } from "./store/slices/auth/slices"


function App() {
  const dispatch = useDispatch()
  
  const { isKeepLoginLoading } = useSelector(state => {
		return {
			isKeepLoginLoading : state.auth?.loading

		}
	})
  useEffect(() => {
    dispatch(keepLogin())
  }, [])
  
  
  if (isKeepLoginLoading) return (
    <div className="h-screen w-screen flex flex-row align-bottom justify-center">
			<span className="loading loading-dots loading-lg"></span>
		</div>
	)
  

  return (
		<div className="h-full w-full bg-slate-200 p-10">
       <Toaster
         position="top-center"
         reverseOrder={false}
         gutter={8}
         containerClassName=""
         containerStyle={{}}
         toastOptions={{
           // Define default options
           className: '',
           duration: 5000,
           style: {
             background: '#363636',
             color: '#fff',
           },
       
           // Default options for specific types
           success: {
             duration: 8000,
             theme: {
               primary: 'green',
               secondary: 'black',
             },
           },
         }}
       />
			<Routes>
				<Route path="/" element={  
        <ProtectedRouteEmployee>
          <Home />
         </ProtectedRouteEmployee>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/attendance" element={  
        <ProtectedRouteEmployee>
          <Log />
         </ProtectedRouteEmployee>
         } />
        <Route path="/register" element={ 
           <ProtectedRouteAdmin>
           <Register />
           </ProtectedRouteAdmin>
          } />
        <Route path="*" element={<Error404 />} />
        <Route path="/profile/*" element={<Profile/>} />
        <Route path="/report/*" element={
            <ProtectedRouteEmployee>
              <Report/>
              </ProtectedRouteEmployee>
            } />
			</Routes>
     
		</div>
  );
}

export default App;
