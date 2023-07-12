import { Route, Routes } from "react-router-dom"
import { HomePage, ArticlePage, ExplorePage, SavedPage, SettingsPage, UserPage } from "../pages/"
import { NavBar } from "../components"
import { PrivateRoutes } from '../../router/PrivateRoutes'
import { MyProfileRoutes } from "./MyProfileRoutes"
import { GeneralSettingsPage } from "../pages/settings/GeneralSettingsPage"

export const NewziaRoutes = () => {

    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={ <HomePage />} />
                <Route path="/explore/*" element={ <ExplorePage /> } />
                <Route path="/saved" element={ <SavedPage /> } />
                <Route path="/u/:userName" element={ <UserPage /> } />
                <Route path="/settings/*" element={ 
                    <PrivateRoutes>
                        <SettingsPage />
                    </PrivateRoutes>
                 } />
                <Route path="/settings/general" element={ <GeneralSettingsPage /> } />
                <Route path="/profile/*" element={
                    <PrivateRoutes>
                        <MyProfileRoutes />
                    </PrivateRoutes>
                } />
            </Routes>
            <div className="mt-[95px]"></div>
        </>
    )
}