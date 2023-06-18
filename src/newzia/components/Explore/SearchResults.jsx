import { useEffect } from "react"
import { ArticleList } from "../ArticleList"
import { ContainerLayoult } from "../ContainerLayoult"
import { SourceList } from "../source"
import emptyS from '../../../assets/empty-search.svg'

export const SearchResults = ({ results, resultType }) => {

    if(results?.length <= 0) {
        return (
            <ContainerLayoult>
                <div className="text-center flex flex-col h-[400px] justify-center">
                <div className="flex flex-col flex-center items-center space-y-10">
                    <img width="250" src={emptyS} alt="" />
                    <span className="text-blue-vogue">¡No se encontraron resultados para su búsqueda!</span>
                </div>
            </div>
            </ContainerLayoult>
        )
    }
    
    switch (resultType) {
        case 'news':
            return <div className="mt-11 md:mt-0"><ArticleList articles={ results } /></div>
        case 'source':
            return <SourceList sources={ results } />
        case 'category':
            return (<h1>cateogry</h1>)
    }
}