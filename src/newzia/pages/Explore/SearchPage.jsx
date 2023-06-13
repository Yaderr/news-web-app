import { Navigate, useLocation } from "react-router-dom"
import { ContainerLayoult } from "../../components/ContainerLayoult"
import queryString from "query-string"
import { SearchResults } from "../../components"
import { useMultiSearch } from "../../../hooks"
import { useEffect, useState } from "react"

const searchTypes = [
    {
        id: 'news',
        name: 'Noticias'
    }, 
    {
        id: 'source',
        name: 'Fuentes'
    },
    {
        id: 'category',
        name: 'Categorías'
    }
]

export const SearchPage = () => {

    const location = useLocation()
    
    const [searchType, setSearchType] = useState('news')
    const { q='' } = queryString.parse(location.search)
    const { results, isLoading } = useMultiSearch(searchType, q)

    useEffect(() => {
        console.log(q);
    }, [q])

    //console.log(location.hash );

    if(q.trim().length <= 0) {
        return (<Navigate to="/explore" />)
    }

    return (
        <div>
            <ContainerLayoult>
                <div className="space-x-2 mt-5">
                    {
                        searchTypes.map((type) => (<a href={`#${type.id}`} key={type.id}>{type.name}</a>))
                    }
                </div>
            </ContainerLayoult>
            <div>
                {
                    isLoading
                    ? 'Cargando'
                    : <SearchResults results={results.articles} resultType={searchType} />
                }
            </div>
            <SearchResults />
        </div>
    )
}