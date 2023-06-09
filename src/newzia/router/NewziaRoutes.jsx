import { Route, Routes } from "react-router-dom"
import { HomePage, ArticlePage, ExplorePage, SavedPage, SettingsPage } from "../pages/"
import { NavBar } from "../components"

export const NewziaRoutes = () => {

    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={ <HomePage />} />
                <Route path="/explore/*" element={ <ExplorePage /> } />
                <Route path="/saved" element={ <SavedPage /> } />
                <Route path="/settings" element={ <SettingsPage /> } />
            </Routes>
            <div className="mt-[95px]"></div>
        </>
    )
}