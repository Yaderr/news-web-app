import { Cog6ToothIcon, LinkIcon, TrashIcon, PencilIcon } from '@heroicons/react/24/outline'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export const ProfileCard = ({ biography, siteLink }) => {

    const ref = useRef()
    const [isHidden, setIsHidden] = useState(true)
    const [showMore, setShowMore] = useState(false)

    useEffect(() => {
        if(ref.current.scrollHeight > 80) {
            setShowMore(true)
        }
    }, [])

    const onShowHiddenPart = () => {
        setIsHidden(!isHidden)
    }

    return (
        <div className="flex flex-col">
            <div className="mt-5">
                <p ref={ref} className={`text-sm text-lynch ${isHidden && 'line-clamp-4'}`}>
                    {
                        biography 
                        ? biography 
                        : ''
                    }
                </p>
                {
                    showMore && <a className="text-sm text-blue-vogue mt-2 hover:underline hover:cursor-pointer font-medium" onClick={onShowHiddenPart}>{isHidden ? 'Ver más': 'Ver menos'}</a>
                }
                <div className="mt-5">
                    <a className="text-red-ribbon text-sm inline-flex" href={siteLink} target="_blank" rel="noopener noreferrer">
                        <LinkIcon className='h-[20px] mr-2' />
                        {
                            siteLink ? siteLink?.split('https://')
                            :''
                        }
                    </a>
                </div>
                <div className='md:flex hidden space-x-3'>
                    <button onClick={() => {}} className="p-2 hover:bg-athens-gray rounded-md text-blue-vogue">
                        <TrashIcon className="w-6 h-6" />
                    </button>
                    <Link to="/settings/" className="p-2 hover:bg-athens-gray rounded-md text-blue-vogue">
                        <Cog6ToothIcon className="w-6 h-6" />
                    </Link>
                </div>
            </div>
        </div>
    )
}