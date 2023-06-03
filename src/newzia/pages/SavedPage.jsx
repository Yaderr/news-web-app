import { useDispatch, useSelector } from "react-redux"
import { ContainerLayoult } from "../components/ContainerLayoult"
import { ArticleList } from "../components"
import { ArrowLeftIcon, TrashIcon } from '@heroicons/react/24/outline'
import { useNavigate } from "react-router-dom"
import { startDeleteAllArticles } from "../../store"

const EmptyList = () => {
    return (
        <div className="flex h-[calc(100vh-255px)] md:h-[calc(100vh-285px)] justify-center items-center">
            <div className="text-blue-vogue flex flex-col items-center">
                <svg viewBox="0 0 250 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M63 134H154C154.515 134 155.017 133.944 155.5 133.839C155.983 133.944 156.485 134 157 134H209C212.866 134 216 130.866 216 127C216 123.134 212.866 120 209 120H203C199.134 120 196 116.866 196 113C196 109.134 199.134 106 203 106H222C225.866 106 229 102.866 229 99C229 95.134 225.866 92 222 92H200C203.866 92 207 88.866 207 85C207 81.134 203.866 78 200 78H136C139.866 78 143 74.866 143 71C143 67.134 139.866 64 136 64H79C75.134 64 72 67.134 72 71C72 74.866 75.134 78 79 78H39C35.134 78 32 81.134 32 85C32 88.866 35.134 92 39 92H64C67.866 92 71 95.134 71 99C71 102.866 67.866 106 64 106H24C20.134 106 17 109.134 17 113C17 116.866 20.134 120 24 120H63C59.134 120 56 123.134 56 127C56 130.866 59.134 134 63 134ZM226 134C229.866 134 233 130.866 233 127C233 123.134 229.866 120 226 120C222.134 120 219 123.134 219 127C219 130.866 222.134 134 226 134Z" fill="#FF2950" fill-opacity="0.06"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M113.119 112.307C113.04 112.86 113 113.425 113 114C113 120.627 118.373 126 125 126C131.627 126 137 120.627 137 114C137 113.425 136.96 112.86 136.881 112.307H166V139C166 140.657 164.657 142 163 142H87C85.3431 142 84 140.657 84 139V112.307H113.119Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M138 112C138 119.18 132.18 125 125 125C117.82 125 112 119.18 112 112C112 111.767 112.006 111.536 112.018 111.307H84L93.5604 83.0389C93.9726 81.8202 95.1159 81 96.4023 81H153.598C154.884 81 156.027 81.8202 156.44 83.0389L166 111.307H137.982C137.994 111.536 138 111.767 138 112Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M136.098 112.955C136.098 118.502 131.129 124 125 124C118.871 124 113.902 118.502 113.902 112.955C113.902 112.775 113.908 111.596 113.918 111.419H93L101.161 91.5755C101.513 90.6338 102.489 90 103.587 90H146.413C147.511 90 148.487 90.6338 148.839 91.5755L157 111.419H136.082C136.092 111.596 136.098 112.775 136.098 112.955Z" fill="#FF2950" fill-opacity="0.18"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M85.25 111.512V138C85.25 138.966 86.0335 139.75 87 139.75H163C163.966 139.75 164.75 138.966 164.75 138V111.512L155.255 83.4393C155.015 82.7285 154.348 82.25 153.598 82.25H96.4023C95.6519 82.25 94.985 82.7285 94.7446 83.4393L85.25 111.512Z" stroke="#FF2950" stroke-width="2.5"/>
                    <path d="M98 111C101.937 111 106.185 111 110.745 111C112.621 111 112.621 112.319 112.621 113C112.621 119.627 118.117 125 124.897 125C131.677 125 137.173 119.627 137.173 113C137.173 112.319 137.173 111 139.05 111H164M90.5737 111H93H90.5737Z" stroke="#FF2950" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M150.1 58.3027L139 70.7559M124.1 54V70.7559V54ZM98 58.3027L109.1 70.7559L98 58.3027Z" stroke="#FF2950" stroke-opacity="0.69" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h1>¡No hay artículos guardados todavía!</h1>
                <a href="/" className="mt-2 hover:underline">Añadir nuevos artículos</a>
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
            <ArticleList articles={articlesSaved}>
            </ArticleList>
            {
                (articlesSaved.length === 0) ?(<EmptyList />):null
            }
                     
        </>
    )
}