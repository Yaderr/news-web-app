import { Route, Routes } from "react-router-dom"
import { PrivateRoutes } from "./PrivateRoutes"
import { PublicRoutes } from "./PublicRoutes"
import { AuthRoutes } from "../auth/router/AuthRoutes"
import { NewziaRoutes } from "../newzia/router/NewziaRoutes"
import { ArticlePage } from "../newzia/pages"
import { useCheckAuth } from "../hooks"
import logo from '../assets/newzia-logo.svg'
import { useEffect } from "react"
import { MyProfileRoutes } from "../newzia/router/MyProfileRoutes"


export const AppRouter = () => {
    
    const { status, isSetUp } = useCheckAuth()
    
    if(status === 'checking' || !isSetUp) {
        return (
            <>
                <center className="flex justify-center items-center h-[100vh]">
                    <img className="h-[50px]" src={logo} alt="newzia logo" />
                </center>
            </>
        )
    }

    return (
        <Routes>
            <Route path="auth/*" element={
                <PublicRoutes>
                    <AuthRoutes />
                </PublicRoutes>
            } />
            <Route path="/article" element={ <ArticlePage /> } />
            <Route path="/*" element={
                <PublicRoutes>
                    <NewziaRoutes />
                </PublicRoutes>
            } />
        </Routes>
    )
}