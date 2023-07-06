import { Cog6ToothIcon, LinkIcon, TrashIcon, PencilIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { ProfileData } from './ProfileData'

export const ProfileCard = ({ biography, siteLink }) => {

    return (
        <div className="flex flex-col mt-5">
            <ProfileData />
            <div className="mt-5">
                <p className="text-sm text-lynch">
                    {
                        biography 
                        ? biography 
                        : ''
                    }
                </p>
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