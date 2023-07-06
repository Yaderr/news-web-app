import { Route, Routes } from "react-router-dom"
import { MyProfilePage } from "../pages"

export const MyProfileRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={ <MyProfilePage /> } />
        </Routes>
    )
}