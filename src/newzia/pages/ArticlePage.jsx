import { ScrollRestoration, useLocation } from "react-router-dom";
import { ArticleBody, ArticleCover, Comments, InputComment, SourceFollow, TopicsTags } from "../components";
import { ContainerLayoult } from "../components/ContainerLayoult";
import { useArticlesIbu } from "../../hooks";
import { CommentsLoader } from "../loaders/article/CommentsLoader";

const getArticleId = (article) => {
    return `${article.title.replaceAll(' ', '_')}_${new Date(article.publishedAt).getTime()}_${article.source.name.replaceAll(' ', '_')}`
}

export const ArticlePage = () => {

    const { state } = useLocation()
    const { article } = state
    const { data, isLoading } = useArticlesIbu(getArticleId(article), article)
    

    return (
        <>
            <ArticleCover article={ article } isLoading={isLoading} metrics={{views: data.views, likes: data.likes}} />
            <ContainerLayoult>
                <SourceFollow source={ article.source} />
                <ArticleBody content={ article.content } url={ article.url } />
                <TopicsTags tags={[...article.title.toLowerCase().matchAll(/\b(?:\w|-)+\b/g)].map(a=> ({ name: a[0]})).slice(0,5)} />
                {
                    !isLoading ? (
                        <>
                            <Comments comments={ data.comments } />
                            <InputComment ibuDocId={data.docId} />
                        </>
                    )
                    : <CommentsLoader />
                }
                {/* TODO: <LikeButton /> */}
            </ContainerLayoult>
            <ScrollRestoration />
        </>
    )
}