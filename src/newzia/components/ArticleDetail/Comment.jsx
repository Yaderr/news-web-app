
export const Comment = ({ comment }) => {
    
    return (
        <div className="flex space-x-3 my-5 select-none hover:bg-athens-gray/50 hover:rounded-[30px] p-2">
            <div className="max-w-[45px] md:min-w-[60px]">
                <a href="/profile/123">
                    <img className="rounded-full" src={ comment.user.photo } alt="" />
                </a>
            </div>
            <div className="">
                <a href="">
                    <h1 className="text-sm font-bold text-blue-vogue md:text-lg">{ comment.user.fullName}</h1>
                </a>
                <p className="text-sm text-lynch mt-3">{comment.content}</p>
                <div className="mt-2">
                    <span className="text-xs md:text-sm text-lynch">{ new Date(comment.publishedAt).toDateString() } &#x2022; <a className="hover:cursor-pointer hover:underline">{ comment.replies.length } Respuestas</a></span>
                </div>
            </div>
        </div>
    )
}