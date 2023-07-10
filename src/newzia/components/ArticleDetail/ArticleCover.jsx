import { ShareIcon, ArrowLeftIcon, HandThumbUpIcon, EyeIcon } from '@heroicons/react/24/outline'
import { useNavigate } from "react-router-dom"
import { SaveArticleButton } from "../Carousel/SaveArticleButton"

const opts = {
    isSaved: false,
    readTime: 10,
    redTa: 'Min',
    redT: 'Minutos'
}

export const ArticleCover = ({ articleOpts = opts, metrics, article }) => {

    const navigate = useNavigate()

    const back = () => {
        navigate(-1)
    }

    return (
        <div className="m-auto h-[570px] rounded-br-[30px] rounded-bl-[30px] bg-athens-gray bg-cover bg-center sm:max-w-[864px] xl:max-w-[1200px]" style={{ backgroundImage: `url('${article.urlToImage}')` }}>
            <div className="flex flex-col justify-between bg-gradient-to-t from-blue-vogue/80 backdrop px-[20px] lg:px-[40px] h-full w-full rounded-br-[30px] rounded-bl-[30px]">
                <div className="py-[30px] md:py-[40px] flex items-end justify-between">
                    <div>
                        <button onClick={ back } className="p-2 bg-white/40 hover:bg-white/70 rounded-full outline-none">
                            <ArrowLeftIcon className="w-[24px] h-[24px] text-white" />
                        </button>
                    </div>
                    <div className="space-x-5">
                        <button className="p-2 bg-white/40 hover:bg-white/70 rounded-full outline-none">
                            <ShareIcon className="w-[24px] h-[24px] text-white" />
                        </button>
                        <SaveArticleButton className='p-2 bg-white/40 hover:bg-white/70 rounded-full outline-none w-[40px] h-[40px]' article={ article } color='stroke-white' />
                    </div>
                </div>
                <div className="py-[30px] md:py-[40px] space-y-5">
                    <div className="">
                        <span className="inline-block px-3 py-2 bg-lynch rounded-full font-medium text-white text-xs">Destacado</span>
                        <span className="font-medium text-white text-xs ml-2">{articleOpts.readTime} {articleOpts.redT} de lectura &#x2022; { new Date(article.publishedAt).toDateString() }</span>
                    </div>
                    <div className="whitespace-break-spaces">
                        <h1 className="text-white text-xl font-bold md:text-3xl line-clamp-[8]">{article.title}</h1>
                    </div>
                    <div className="flex space-x-3">
                        <div className="flex items-center space-x-1">
                            <EyeIcon className="w-[16px] h-[16px] md:w-[20px] md:h-[20px] text-athens-gray" />
                            <span className="text-white text-xs md:text-sm">{ Intl.NumberFormat('es-CO').format(metrics.views)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <HandThumbUpIcon className="w-[16px] h-[16px] md:w-[20px] md:h-[20px] text-athens-gray" />
                            <span className="text-white text-xs md:text-sm">{ Intl.NumberFormat('es-CO').format(metrics.likes)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}