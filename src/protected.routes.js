import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export function ProtectedRouteEmployee ({
    children
}) {
    const { id } = useSelector(state => {
        return {
            id : state.auth.roleId
        }
    })
    return id === 2 ?
     children :
      <Navigate to="/login" replace/>
    
}

export function ProtectedRouteAdmin ({
    children
}) {
    const { id } = useSelector(state => {
        return {
            id : state.auth.roleId
        }
    })
    return id === 1 ? children : <Navigate to="/login" replace/>
    
}