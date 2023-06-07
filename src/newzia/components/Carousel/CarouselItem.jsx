import { useMemo } from "react"
import { getTimeAgo } from "../../../utils/timeAgo"
import { SaveArticleButton } from "./SaveArticleButton"
import Logo from '../../../assets/ISOTIPO.png'
  
export const CarouselItem = ({ article }) => {

    const userName = useMemo(() => String(article.source.name).toLowerCase().replaceAll(' ', '_'), [article])

    return (
        <div className="h-full w-full bg-cover bg-center rounded-[30px] border-2 border-gray-200" style={{backgroundImage: `url('${article.urlToImage}')`}}>
            <div className="flex flex-col justify-between w-full h-full bg-gradient-to-t from-blue-vogue backdrop rounded-[30px]">
                <div className="mx-[30px] sm:mx-[70px] mt-[20px] flex justify-end">
                    <SaveArticleButton className='p-2 bg-white/40 hover:bg-white/70 rounded-md outline-none w-[40px] h-[40px]' article={article} />
                </div>
                <div className="mx-[30px] sm:mx-[70px] mb-[44px] ">
                    {/* <span className="inline-block px-3 py-2 bg-lynch rounded-full font-medium text-white text-xs mb-[10px]">Destacado</span> */}
                    <a href="/news/article" title={article.title} className="max-h-[200px] line-clamp-6 text-white text-sm font-bold md:text-2xl sm:w-[60%] hover:underline">
                        {article.title}
                    </a>
                    <div className="flex items-center mt-[10px] justify-between w-full">
                        <a href="/news/source/123" className="flex items-center space-x-2 min-h-[30px]">
                            <img className="w-[30px] h-[30px] rounded-full" src={`./icons/sources/${article.source?.id ?? userName}.png`} onError={({currentTarget}) => currentTarget.src = Logo} alt="" />
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