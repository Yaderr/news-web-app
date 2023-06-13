import { useEffect, useState } from "react"
import { useLazyGetEverythingQuery } from "../store"

export const useMultiSearch = (searchType = 'news', query) => { // news, source, category

    const [triggerNews] = useLazyGetEverythingQuery()
    const [isLoading, setIsLoading] = useState(true)
    const [results, setResults] = useState({})

    const dataSource = {
        "news": {
            getData: triggerNews
        },
        "source": {
            getData: () => ({})
        },
        "category": {
            getData: () => ({})
        }

    }

    const getResults = async () => {
        setIsLoading(true)
        const res = await dataSource[searchType].getData({ q: query })
        const { data } = res
        setResults(data)
        setIsLoading(false)
        //console.log(results)
    }

    useEffect(() => {
        getResults()
    }, [searchType, query])
    
    return {
        results,
        isLoading
    }
}