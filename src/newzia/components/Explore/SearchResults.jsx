import { ArticleList } from "../ArticleList"
import { ContainerLayoult } from "../ContainerLayoult"

export const SearchResults = ({ results, resultType }) => {


    switch (resultType) {
        case 'news':
            return <ArticleList articles={ results } />
        case 'source':
            //TODO: source list
            break
        case 'category':
            //TODO: category list
            break
        default:
            break
    }
}