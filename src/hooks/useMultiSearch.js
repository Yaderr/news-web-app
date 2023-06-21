import { useEffect, useState } from "react"
import { useLazyGetEverythingQuery } from "../store"
import sources from '../assets/sample-data/sources.json'

export const useMultiSearch = (searchType, query, search) => { // news, source, category

    //TODO: refactor

    const [triggerNews] = useLazyGetEverythingQuery()
    const [isLoading, setIsLoading] = useState(true)
    const [results, setResults] = useState([])

    const dataSource = {
        "news": {
            getData: triggerNews
        },
        "source": {
            getData: ({ q }) => {
                const filtered = sources.filter(source => source.name.toLowerCase().includes(q.toLowerCase()))
                return {
                    data: filtered
                }
            }
        },
        "category": {
            getData: () => ({ data: [] })
        }

    }
    
    const getResults = async () => {
        
        const res = await dataSource[searchType].getData({ q: query, ...search })
        const { data } = res
        setResults(data)
        setIsLoading(false)
    }

    useEffect(() => {
        setIsLoading(true)
        getResults()
    }, [searchType, query, search])
    
    return {
        results,
        isLoading,
        setIsLoading
    }
}