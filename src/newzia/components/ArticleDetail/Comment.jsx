
export const Comment = ({ userName, photoURL,  content, replies, displayName, publishedAt }) => {

    
    
    return (
        <div className="flex space-x-3 my-5 select-none hover:bg-athens-gray/50 hover:rounded-[30px] p-2">
            <div className="max-w-[45px] min-w-[45px] md:min-w-[60px]">
                <a href={`/user/${userName}`}>
                    {
                        photoURL ? <img className="rounded-full w-full h-[45px] md:h-[60px] object-cover" src={ photoURL } alt="" />
                        :<div className="bg-blue-vogue w-full h-[45px] md:h-[60px] rounded-full uppercase flex items-center justify-center font-semibold text-white text-2xl">{displayName.split('')[0]}</div>
                    }
                </a>
            </div>
            <div className="">
                <a href={`/user/${userName}`}>
                    <h1 className="text-sm font-bold text-blue-vogue md:text-lg">{displayName}</h1>
                </a>
                <p className="text-sm text-lynch mt-3">{content}</p>
                <div className="mt-2">
                    <span className="text-xs md:text-sm text-lynch">{ new Date(publishedAt).toDateString() } &#x2022; <a className="hover:cursor-pointer hover:underline">{ replies?.length } Respuestas</a></span>
                </div>
            </div>
        </div>
    )
}