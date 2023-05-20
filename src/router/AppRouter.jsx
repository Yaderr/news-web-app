import { Route, Routes } from "react-router-dom"
import { PrivateRoutes } from "./PrivateRoutes"
import { PublicRoutes } from "./PublicRoutes"
import { AuthRoutes } from "../auth/router/AuthRoutes"
import { NewziaRoutes } from "../newzia/router/NewziaRoutes"
import { ArticlePage } from "../newzia/pages"

export const AppRouter = () => {

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