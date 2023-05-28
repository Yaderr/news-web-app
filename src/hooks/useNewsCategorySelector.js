import { useDispatch, useSelector } from "react-redux"
import { useGetTopHeadlinesQuery } from "../store"
import { categories } from '../assets/sample-data'
import { useEffect, useMemo, useState } from "react"
import { switchCategory } from "../store"

export const useNewsCategorySelector = () => {

    const dispatch = useDispatch()
    const config = useSelector((state) => state.config)
    const { data, isLoading } = useGetTopHeadlinesQuery({ country: config.country, category: categories[config.selectedCategory].id })

    const [ articles, setarticles ] = useState([])
    
    
    useEffect(() => {
        
        if(!isLoading) {
            const { articles } = data
            setarticles(articles)
        }
    }, [data])

    const selectCategory = (selectCat) => {
        if(selectCat == config.selectedCategory) return null
        dispatch(switchCategory(selectCat))
    }


    return {
        isLoading,
        articles,
        selectCategory
    }
}