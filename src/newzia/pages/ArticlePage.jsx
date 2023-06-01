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
                <ArticleBody content={ article.content } />
                <TopicsTags tags={[ {name: '#travel'}, {name: '#unesco'}, {name: '#bath'}, {name: '#abbey'}, {name: '#unitedKingdom'}, {name: '#tourism'} ]} />
                <Comments comments={ comments } />
                <InputComment />
                {/* TODO: <LikeButton /> */}
            </ContainerLayoult>
            <ScrollRestoration />
        </>
    )
}