
const CommentLoader = () => {
    return (
        <div className="flex space-x-3 my-5 p-2">
           <div className="">
                <div className="rounded-full bg-gray-300 w-[45px] h-[45px] md:w-[60px] md:h-[60px]"></div>
           </div>
           <div className="w-full">
                <div className="w-[165px] h-[20px] bg-gray-200 rounded-full"></div>
                <div className="flex-col mt-4 space-y-4">
                    <div className="w-full h-[10px] rounded-full bg-gray-200"></div>
                    <div className="w-[80%] h-[10px] rounded-full bg-gray-200"></div>
                    <div className="w-[50%] h-[10px] rounded-full bg-gray-200"></div>
                    <div className="w-[90%] h-[10px] rounded-full bg-gray-200"></div>
                </div>
           </div>
        </div>
    )
}
export const CommentsLoader = () => {

    return (
        <div className="flex flex-col mt-5 py-5 border-t-2 border-athens-gray animate-pulse">
            <div className="flex py-5 items-center w-full justify-between space-x-5 md:justify-normal">
                <div className="w-[140px] h-[28px] bg-gray-200 rounded-full"></div>
                <div className="w-[80px] h-[16px] bg-gray-200 rounded-full"></div>
            </div>
            <CommentLoader />
            <CommentLoader />
            <CommentLoader />
            <CommentLoader />
        </div>
    )
}