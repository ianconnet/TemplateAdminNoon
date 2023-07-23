import { useEffect } from "react"
import { Route, Navigate } from "react-router-dom"

const RouteGuard = ({ children }) => {
    let FLAG = false

    useEffect(() => {
        console.log("USE EFFECT RAN!")

        if(localStorage.getItem("token")) {
            FLAG = true
        }
    }, [])

    return (
        FLAG ? children : <Navigate to="/" replace />
    )
}

export default RouteGuard