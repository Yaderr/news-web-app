import { useState } from "react"
import { Link } from "react-router-dom"
import Logo from '../../assets/logo.png'
import { getTimeAgo } from "../../utils/timeAgo"
import { SaveArticleButton } from "./Carousel/SaveArticleButton"
import { useDispatch } from "react-redux"
import { startRemoveNewArticle, startSaveNewArticle } from "../../store"

const opts = {
    isSaved: false,
    readTime: 10,
    redTa: 'Min'
}

export const ArticleCard = ({ article, articleOpts = opts}) => {

    const [isRemoved, setIsRemoved] = useState(false)

    const clickRemove = () => {
        article.isSaved ? setIsRemoved(true) :OnSaveClick()
    }

    const [isSaved, setIsSaved] = useState(article.isSaved)
    const dispatch = useDispatch()

    const OnSaveClick = () => {
        isSaved ? dispatch(startRemoveNewArticle(article)) : dispatch(startSaveNewArticle(article))
        setIsSaved(!isSaved)
    }

    return (
        <div onAnimationEnd={OnSaveClick} className={`flex px-5 py-4 w-full h-[135px] md:w-[500px] md:h-[155px] bg-athens-gray rounded-[30px] md:rounded-[40px] duration-[75ms] animate__animated ${isRemoved ? 'animate__fadeOut':''}`}>
            <div className="w-[50%] md:w-[35%] bg-cover bg-center rounded-[20px] md:rounded-[30px] bg-gray-300">
                <img loading="lazy" className="w-[100%] h-[100%] object-cover rounded-[20px] md:rounded-[30px]" src={article.urlToImage ?? '../../src/assets/logo.png'} onError={({currentTarget}) => currentTarget.src = Logo} alt="" />
            </div>
            
            <div className="w-full ml-[15px] select-none">
                <div className="flex justify-between items-center min-h-[32px] md:min-h-[40px]">
                    <span className="text-xs w-full">
                        <a href="/source/123" className="font-medium text-lynch ">{ article.source.name }</a>
                         
                        {/* <span className="font-semibold text-blue-vogue">
                            { articleOpts.readTime } { articleOpts.redTa } 
                            <span className="hidden md:inline"> de lectura</span>
                        </span> */}
                        <span className="font-semibold text-blue-vogue hidden md:inline">
                            {article.author ? (<span> &#x2022; {article.author} </span> ):''}
                        </span>
                    </span>
                    <div>
                        <SaveArticleButton isSaved={isSaved} clickRemove={clickRemove} article={ article } className="p-2 hover:bg-blue-vogue/20 rounded-full outline-none w-[32px] h-[32px] md:w-[40px] md:h-[40px]" />
                    </div>
                </div>
                <div className="">
                    <Link to="/article" state={{ article }} href="/article/123" title={article.title} className="line-clamp-2 text-sm font-bold hover:underline hover:cursor-pointer text-blue-vogue md:text-base">{ article.title }</Link>
                </div>
                <span className="font-medium text-xs leading-10 text-lynch">{ getTimeAgo(new Date(article.publishedAt).getTime()) }</span>
            </div>
            
        </div>
    )
}