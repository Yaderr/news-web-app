import { ArticleCard } from "./ArticleCard"
import { ContainerLayoult } from "./ContainerLayoult"

export const ArticleList = ({ articles }) => {

    return (
        <ContainerLayoult>
            <div className="mt-5 space-y-5">
                {
                    articles.map((article) => (
                        <div key={article.publishedAt} className="inline-block md:mr-5">
                            <ArticleCard article={ article } />
                        </div>
                    ))
                }
            </div>
        </ContainerLayoult>
    )
}