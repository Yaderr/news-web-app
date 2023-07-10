import { Comment } from "./Comment"

export const Comments = ({ comments }) => {
    
    return (
        <div className="mt-5 py-5 border-t-2 border-athens-gray">
            <div className="py-5 flex items-center justify-between md:justify-start space-x-5">
                <h3 className="font-bold text-xl text-blue-vogue md:text-2xl">Comentarios</h3>
                <a className="text-xs text-red-ribbon hover:underline md:text-sm" href="/article/commnets/custom_pub_article_id_1231223">Ver todos ({comments.length})</a>
            </div>
            {
                comments.map((comment) => (
                    <Comment 
                        key={`${comment.article_ibu_docId}_${comment.content.replaceAll(' ', '_')}`}
                        userName={comment.user.userName}
                        photoURL={comment.user.photoURL}
                        content={comment.content}
                        replies={comment.replies}
                        displayName={comment.user.displayName}
                        publishedAt={comment.publishedAt}
                    />
                ))
            }
        </div>
    )
}