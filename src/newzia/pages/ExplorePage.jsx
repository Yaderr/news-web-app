import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import { ExploreFeatured, SearchPage } from "./Explore"
import { InputSerch } from "../components"

export const ExplorePage = () => {

    
    return (
        <>
            <InputSerch />
            <Routes>
                <Route path="/search" element={<SearchPage />} />
                <Route path="/*" element={<ExploreFeatured />} />
            </Routes>
        </>
    )
}