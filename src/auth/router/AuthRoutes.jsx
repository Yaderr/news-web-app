import { Route, Routes } from "react-router-dom"
import { SignRoutes } from "./SignRoutes"
import { AuthPage, ForgetPasswordPage, GoogleSignInPage, CompleteProfile } from "../pages"

export const AuthRoutes = () => {

    return (
        <Routes>
            <Route path="/*" element={ <SignRoutes /> } />
            <Route path="/" element={ <AuthPage /> } />
            <Route path="/forget" element={ <ForgetPasswordPage /> } />
            <Route path="/google" element={ <GoogleSignInPage /> } />
            <Route path="/complete" element={ <CompleteProfile /> } />
        </Routes>
    )
}