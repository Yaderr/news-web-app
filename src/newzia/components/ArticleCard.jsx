import { useState } from "react"
import { Link } from "react-router-dom"
import Logo from '../../assets/logo.png'

const opts = {
    isSaved: false,
    readTime: 10,
    redTa: 'Min'
}

export const ArticleCard = ({ article, articleOpts = opts}) => {

    const [isSaved, setIsSaved] = useState(false)

    return (
        <div className="flex px-5 py-4 w-full h-[135px] md:w-[500px] md:h-[155px] bg-athens-gray rounded-[30px] md:rounded-[40px]">
            <div className="">

            </div>
            <div className="w-[50%] md:w-[35%] bg-cover bg-center rounded-[20px] md:rounded-[30px] bg-blue-vogue/40">
                <img className="w-[100%] h-[100%] object-cover rounded-[20px] md:rounded-[30px]" src={article.urlToImage ?? '../../src/assets/logo.png'} onError={({currentTarget}) => currentTarget.src = Logo} alt="" />
            </div>
            
            <div className="w-full ml-[15px] select-none">
                <div className="flex justify-between items-center">
                    <span className="text-xs w-full">
                        <a href="/source/123" className="font-medium text-lynch ">{ article.source.name }</a>
                        <span> &#x2022; </span> 
                        <span className="font-semibold text-blue-vogue">
                            { articleOpts.readTime } { articleOpts.redTa } 
                            <span className="hidden md:inline"> de lectura</span>
                        </span>
                    </span>
                    <button className="p-2 hover:bg-blue-vogue/20 rounded-full outline-none" onClick={() => setIsSaved(!isSaved)}>
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
                    </button>
                </div>
                <div className="">
                    <Link to="/article" state={{ article }} href="/article/123" title={article.title} className="line-clamp-2 text-sm font-bold hover:underline hover:cursor-pointer text-blue-vogue md:text-base">{ article.title }</Link>
                </div>
                <span className="font-medium text-xs leading-10 text-lynch">{ new Date(article.publishedAt).toDateString() }</span>
            </div>
            
        </div>
    )
}