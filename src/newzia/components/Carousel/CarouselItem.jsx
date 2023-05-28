import { useMemo, useState } from "react"
import { getTimeAgo } from "../../../utils/timeAgo"

  
export const CarouselItem = ({ article }) => {

    const [isSaved, setIsSaved] = useState(false)
    const userName = useMemo(() => String(article.source.name).toLocaleLowerCase().replaceAll(' ', '_'), [article])

    return (
        <div className="h-full w-full bg-cover bg-center rounded-[30px] border-2 border-gray-200" style={{backgroundImage: `url(${article.urlToImage})`}}>
            <div className="flex flex-col justify-between w-full h-full bg-gradient-to-t from-blue-vogue backdrop rounded-[30px]">
                <div className="mx-[30px] sm:mx-[70px] mt-[20px] flex justify-end">
                    {/* <button className="p-2 bg-athens-gray/50 hover:bg-athens-gray rounded-md outline-none" onClick={() => setIsSaved(!isSaved)}>
                        {
                            isSaved
                            ? (
                                <svg className="w-[16px] h-[16px] md:w-[24px] md:h-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.0001 2.40002C9.94048 2.40002 7.91002 2.52663 5.91616 2.77257C4.56704 2.93898 3.6001 4.09651 3.6001 5.41996V20.7C3.6001 21.0094 3.75896 21.297 4.02078 21.4618C4.2826 21.6265 4.61068 21.6453 4.88956 21.5114L12.0001 18.0983L19.1106 21.5114C19.3895 21.6453 19.7176 21.6265 19.9794 21.4618C20.2412 21.297 20.4001 21.0094 20.4001 20.7V5.41996C20.4001 4.09651 19.4332 2.93899 18.084 2.77257C16.0902 2.52663 14.0597 2.40002 12.0001 2.40002Z" fill="#FF2950"/>
                                    <path d="M8.875 11.3125L11.375 13.8125L15.125 8.1875" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            ) 
                            :(
                                <svg className="w-[16px] h-[16px] md:w-[24px] md:h-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 8.5V13.5M14.5 11L9.5 11" stroke="#192E51" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M17.5933 3.32241C18.6939 3.45014 19.5 4.399 19.5 5.50699V21L12 17.25L4.5 21V5.50699C4.5 4.399 5.30608 3.45014 6.40668 3.32241C8.24156 3.10947 10.108 3 12 3C13.892 3 15.7584 3.10947 17.5933 3.32241Z" stroke="#192E51" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            )
                        }
                    </button> */}
                </div>
                <div className="mx-[30px] sm:mx-[70px] mb-[44px] ">
                    <span className="inline-block px-3 py-2 bg-lynch rounded-full font-medium text-white text-xs mb-[10px]">Destacado</span>
                    <a href="/news/article" title={article.title} className="max-h-[200px] line-clamp-6 text-white text-sm font-bold md:text-2xl sm:w-[60%] hover:underline">
                        {article.title}
                    </a>
                    <div className="flex items-center mt-[10px] justify-between w-full">
                        <a href="/news/source/123" className="flex items-center space-x-2 min-h-[30px]">
                            <img className="w-[30px] h-[30px] rounded-full" src={`./icons/sources/${article.source?.id ?? userName}.png`} alt="" />
                            <strong className="text-white font-semibold	text-sm">{article.source.name}</strong>
                        </a>
                        <div>
                            <span className="text-athens-gray text-xs">{getTimeAgo(new Date(article.publishedAt).getTime())}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}