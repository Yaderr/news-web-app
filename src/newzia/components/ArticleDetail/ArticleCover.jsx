import { useState } from "react"
import { ShareIcon, ArrowLeftIcon, HandThumbUpIcon, EyeIcon } from '@heroicons/react/24/outline'
import { useNavigate } from "react-router-dom"

const opts = {
    isSaved: false,
    readTime: 10,
    redTa: 'Min',
    redT: 'Minutos'
}

const metri = {
    views: 2500,
    likes: 100
}

export const ArticleCover = ({title, dateTime, img, articleOpts = opts, metrics = metri}) => {

    const [isSaved, setIsSaved] = useState(false)
    const navigate = useNavigate()

    const back = () => {
        navigate(-1)
    }

    return (
        <div className="m-auto h-[570px] rounded-br-[30px] rounded-bl-[30px] bg-athens-gray bg-cover bg-center sm:max-w-[864px] xl:max-w-[1200px]" style={{ backgroundImage: `url('${img}')` }}>
            <div className="flex flex-col justify-between bg-gradient-to-t from-blue-vogue/80 backdrop px-[20px] lg:px-[40px] h-full w-full rounded-br-[30px] rounded-bl-[30px]">
                <div className="py-[30px] md:py-[40px] flex items-end justify-between">
                    <div>
                        <button onClick={ back } className="p-2 bg-white/20 hover:bg-white/70 rounded-full outline-none">
                            <ArrowLeftIcon className="w-[24px] h-[24px] text-white" />
                        </button>
                    </div>
                    <div className="space-x-5">
                        <button className="p-2 bg-white/20 hover:bg-white/70 rounded-full outline-none">
                            <ShareIcon className="w-[24px] h-[24px] text-white" />
                        </button>
                        <button className="p-2 bg-white/20 hover:bg-white/70 rounded-full outline-none" onClick={() => setIsSaved(!isSaved)}>
                        {
                            isSaved
                            ? (
                                <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.0001 2.40002C9.94048 2.40002 7.91002 2.52663 5.91616 2.77257C4.56704 2.93898 3.6001 4.09651 3.6001 5.41996V20.7C3.6001 21.0094 3.75896 21.297 4.02078 21.4618C4.2826 21.6265 4.61068 21.6453 4.88956 21.5114L12.0001 18.0983L19.1106 21.5114C19.3895 21.6453 19.7176 21.6265 19.9794 21.4618C20.2412 21.297 20.4001 21.0094 20.4001 20.7V5.41996C20.4001 4.09651 19.4332 2.93899 18.084 2.77257C16.0902 2.52663 14.0597 2.40002 12.0001 2.40002Z" fill="#FF2950"/>
                                    <path d="M8.875 11.3125L11.375 13.8125L15.125 8.1875" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            ) 
                            :(
                                <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 8.5V13.5M14.5 11L9.5 11" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M17.5933 3.32241C18.6939 3.45014 19.5 4.399 19.5 5.50699V21L12 17.25L4.5 21V5.50699C4.5 4.399 5.30608 3.45014 6.40668 3.32241C8.24156 3.10947 10.108 3 12 3C13.892 3 15.7584 3.10947 17.5933 3.32241Z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            )
                        }
                        </button>
                    </div>
                </div>
                <div className="py-[30px] md:py-[40px] space-y-5">
                    <div className="">
                        <span className="inline-block px-3 py-2 bg-lynch rounded-full font-medium text-white text-xs">Destacado</span>
                        <span className="font-medium text-white text-xs ml-2">{articleOpts.readTime} {articleOpts.redT} de lectura &#x2022; { new Date(dateTime).toDateString() }</span>
                    </div>
                    <div className="whitespace-break-spaces">
                        <h1 className="text-white text-xl font-bold md:text-3xl line-clamp-[8]">{title}</h1>
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