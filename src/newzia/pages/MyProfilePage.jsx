import { useSelector } from "react-redux"
import { ContainerLayoult } from "../components/ContainerLayoult"
import { Cog6ToothIcon, TrashIcon } from '@heroicons/react/24/outline'
import { ProfileCard } from "../components"
import { Link } from "react-router-dom"

export const MyProfilePage = () => {

    const { userName, photoURL, displayName, siteLink, biography } = useSelector(state => state.auth)

    const onDeleteProfile = () => {

    }

    return (
        <ContainerLayoult>
            <div className="mt-5 flex items-center justify-end md:hidden">
                <div className="flex space-x-3">
                    <button onClick={onDeleteProfile} className="p-2 hover:bg-athens-gray rounded-md text-blue-vogue">
                        <TrashIcon className="w-6 h-6" />
                    </button>
                    <Link to="/settings/" className="p-2 hover:bg-athens-gray rounded-md text-blue-vogue">
                        <Cog6ToothIcon className="w-6 h-6" />
                    </Link>
                </div>
            </div>
                <ProfileCard biography={biography} siteLink={siteLink} />
        </ContainerLayoult>
    )
}