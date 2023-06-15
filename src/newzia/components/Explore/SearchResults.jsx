import { useEffect } from "react"
import { ArticleList } from "../ArticleList"
import { ContainerLayoult } from "../ContainerLayoult"
import { SourceList } from "../source"

export const SearchResults = ({ results, resultType }) => {
    
    switch (resultType) {
        case 'news':
            return <ArticleList articles={ results } />
        case 'source':
            return <SourceList sources={ results } />
        case 'category':
            return (<h1>cateogry</h1>)
        default:
            break
    }
}