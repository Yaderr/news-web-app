import { Navigate, useLocation } from "react-router-dom"
import { ContainerLayoult } from "../../components/ContainerLayoult"
import queryString from "query-string"
import { SearchResults } from "../../components"
import { useMultiSearch } from "../../../hooks"
import { useEffect, useState } from "react"
import { Spinner } from "flowbite-react"

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

const Loading = () => {
    return (
        <div className="text-center flex flex-col h-[400px] justify-center">
            <div className="flex flex-col flex-center space-y-2">
                <Spinner className="fill-red-ribbon" aria-label="Center-aligned spinner example" size="lg" color="purple" />
                <span className="font-medium text-blue-vogue">Cargando...</span>
            </div>
        </div>
    )
}

export const SearchPage = () => {

    const location = useLocation()

    const [searchType, setSearchType] = useState(location.hash.split('#')[1] ?? searchTypes[0].id)
    
    const { q='' } = queryString.parse(location.search)
    const { results, isLoading } = useMultiSearch(searchType, q)

    useEffect(() => {
        if(location.hash.length > 0 && searchType !== location.hash.split('#')[1]) {
            setSearchType(location.hash.split('#')[1] ?? searchTypes[0].id)
        }
    }, [location.hash])

    if(q.trim().length <= 0) {
        return (<Navigate to="/explore" />)
    }

    return (
        <div>
            <ContainerLayoult>
                <div className="space-x-2 mt-5 flex">
                    {
                        searchTypes.map((type) => (
                            <a 
                                className={`py-2 px-5 text-sm text-blue-vogue rounded-full font-medium md:text-base cursor-pointer ${searchType === type.id ? 'bg-blue-vogue text-white': ''}`}
                                href={`#${type.id}`} key={type.id}>{type.name}
                            </a>
                        ))
                    }
                </div>
            </ContainerLayoult>
                {
                    isLoading
                    ? <Loading />
                    : <SearchResults results={results} resultType={searchType} />
                }
            <SearchResults />
        </div>
    )
}