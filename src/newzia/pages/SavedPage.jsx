import { useDispatch, useSelector } from "react-redux"
import { ContainerLayoult } from "../components/ContainerLayoult"
import { ArticleList } from "../components"
import { ArrowLeftIcon, TrashIcon } from '@heroicons/react/24/outline'
import { useNavigate } from "react-router-dom"
import { startDeleteAllArticles } from "../../store"
import empty_img from '../../assets/empty.svg'

const EmptyList = () => {
    return (
        <div className="flex h-[calc(100vh-255px)] md:h-[calc(100vh-285px)] justify-center items-center animate__animated animate__fadeIn">
            <div className="text-blue-vogue flex flex-col items-center">
                <img width="250" src={empty_img} alt="" />
                <h1 className="mt-10">¡No hay artículos guardados todavía!</h1>
                <a href="/" className="mt-2 hover:underline font-medium">Añadir nuevos artículos</a>
            </div>
        </div>
    )
}

export const SavedPage = () => {

    const { articlesSaved } = useSelector(state => state.bookmarks)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const back = () => {
        navigate(-1)
    }

    const onDeleteAll = () => {
        dispatch(startDeleteAllArticles())
    }

    return (
        <>
            <ContainerLayoult>
                <div className="mt-5 flex items-center justify-between md:hidden">
                    <button onClick={back} className="outline-none" title="Eliminar todo">
                        <ArrowLeftIcon className="w-[24px] h-[24px] text-blue-vogue" />
                    </button>
                    <div className="flex">
                        <button onClick={onDeleteAll} className="p-2 hover:bg-athens-gray rounded-md text-blue-vogue">
                            <TrashIcon className="w-6 h-6" />
                        </button>
                    </div>
                </div>
                <div className="mt-5 flex items-center justify-between">
                    <div className="text-blue-vogue font-bold">
                        <h1 className="text-xl">Guardado(s)</h1>
                        <h2 className="text-sm font-medium mt-1">{ articlesSaved.length } Artículos</h2>
                    </div>
                    <div className="flex">
                        <button onClick={onDeleteAll} className="p-2 hover:bg-athens-gray rounded-md text-blue-vogue hidden md:inline" title="Eliminar todo">
                            <TrashIcon className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </ContainerLayoult>
            <div className="">
            <ArticleList articles={articlesSaved}>

                </ArticleList>
            </div>
            {
                (articlesSaved.length === 0) ?(<EmptyList />):null
            }
                     
        </>
    )
}