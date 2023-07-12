import { useSelector } from "react-redux"
import { getTimeAgo } from "../../../utils/timeAgo"
import { Fragment, useEffect, useRef, useState } from "react"
import { ChevronDownIcon, EllipsisVerticalIcon, TrashIcon } from '@heroicons/react/24/outline'
import { Popover, Transition } from "@headlessui/react"
import { removeComment } from "../../../firebase"

const ActionBtn = ({ docId }) => {

    const deleteComment = async () => {
        await removeComment(docId)
    }

    return (
        <Popover className="relative">
            {
                ({ open }) => (
                    <>
                        <Popover.Button className={`${open ? '' : 'text-opacity-90'} flex`} >
                            <EllipsisVerticalIcon className="h-[20px]" />
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-0"
                        >
                            <Popover.Panel className="absolute left-[-30px] z-10 mt-3 w-max max-w-sm -translate-x-1/2 transform px-4 sm:px-0">
                                <button onClick={deleteComment} className="p-2 bg-blue-vogue text-white text-xs tracking-wide font-normal hover:opacity-90 w-full shadow-xl rounded-lg flex items-center space-x-1">
                                    <TrashIcon className="w-4" />
                                    <span>Eliminar</span>
                                </button>
                            </Popover.Panel>
                        </Transition>
                    </>
                )
            }
        </Popover>
    )
}

export const Comment = ({ userName, photoURL,  content, replies, displayName, publishedAt, loggedUser, uid, docId }) => {

    const ref = useRef({})
    const [isHidden, setIsHiden] = useState(true)
    const [showMore, setShowMore] = useState(true)
    
    useEffect(() => {
        
        if(ref.current.scrollHeight <= 80) {
            setShowMore(false)
        }

        console.log();
    }, [])

    const onShowHiddenPart = () => {
        setIsHiden(!isHidden)
    }
    
    return (
        <div className="flex space-x-3 my-5 select-none hover:bg-athens-gray/50 hover:rounded-[30px] p-2">
            <div className="max-w-[45px] min-w-[45px] md:min-w-[60px]">
                <a href={`/u/${userName}`}>
                    {
                        photoURL ? <img className="rounded-full w-full h-[45px] md:h-[60px] object-cover" src={ photoURL } alt="" />
                        :<div className="bg-blue-vogue w-full h-[45px] md:h-[60px] rounded-full uppercase flex items-center justify-center font-semibold text-white text-2xl">{displayName.split('')[0]}</div>
                    }
                </a>
            </div>
            <div className="w-full">
                <div className="flex justify-between w-full">
                    <a className="text-sm font-bold text-blue-vogue md:text-lg" href={`/u/${userName}`}>
                        {displayName}
                    </a>
                    {
                        (loggedUser === uid) && (<ActionBtn docId={docId} />)    
                    }
                </div>
                <div className="">
                    <p ref={ref} className={`text-sm text-lynch mt-2 ${isHidden && 'line-clamp-4'}`}>
                        {content}
                    </p>
                    {
                        showMore && <a className="text-sm text-blue-vogue mt-2 hover:underline hover:cursor-pointer font-medium" onClick={onShowHiddenPart}>{isHidden ? 'Ver más': 'Ver menos'}</a>
                    }
                </div>
                <div className="mt-2">
                    <span className="text-xs md:text-sm text-lynch">{ getTimeAgo(new Date(publishedAt)) } {/**&#x2022; <a className="hover:cursor-pointer hover:underline">{ replies?.length } Respuestas</a>**/}</span>
                    {
                        
                    }
                </div>
            </div>
        </div>
    )
}