import { ScrollRestoration, useLocation } from "react-router-dom";
import { ArticleBody, ArticleCover, Comments, InputComment, SourceFollow, TopicsTags } from "../components";
import { ContainerLayoult } from "../components/ContainerLayoult";
import { comments } from '../../assets/sample-data/comments'

export const ArticlePage = () => {

    const { state } = useLocation()
    const { article } = state

    return (
        <>
            <ArticleCover article={ article } />
            <ContainerLayoult>
                <SourceFollow source={ article.source} />
                <ArticleBody content={ article.content } url={ article.url } />
                <TopicsTags tags={[...article.title.toLowerCase().matchAll(/\b(?:\w|-)+\b/g)].map(a=> ({ name: a[0]})).slice(0,5)} />
                <Comments comments={ comments } />
                <InputComment />
                {/* TODO: <LikeButton /> */}
            </ContainerLayoult>
            <ScrollRestoration />
        </>
    )
}