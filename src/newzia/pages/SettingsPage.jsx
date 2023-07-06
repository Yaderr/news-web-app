import { Link, useNavigate } from "react-router-dom"
import { GeneralSettingsPage } from "./settings/GeneralSettingsPage"
import { AdjustmentsVerticalIcon, ArrowLeftIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline"
import { ContainerLayoult } from "../components/ContainerLayoult"
import { ProfileData } from "../components"
import { useDispatch } from "react-redux"
import { logOut } from "../../store"

export const SettingsPage = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const back = () => {
        navigate(-1)
    }

    const onLogOut =  () => {
        dispatch(logOut())
    }

    return (
        <ContainerLayoult>
            <div className="mt-5 flex items-center justify-between md:hidden">
                <button onClick={back} className="outline-none" title="Eliminar todo">
                    <ArrowLeftIcon className="w-[24px] h-[24px] text-blue-vogue" />
                </button>
            </div>
            <div className="mt-5">
                <ProfileData />
            </div>
            <div className="mt-10 space-x-10 md:flex md:justify-center">
                <Link to="/settings/general" className="">
                    <div className="bg-athens-gray rounded-[20px] inline-flex py-10 px-10 flex flex-col items-center space-y-2 text-blue-vogue w-[140px] hover:text-red-ribbon ease-in-out duration-300">
                        <AdjustmentsVerticalIcon className="h-[30px]" />
                        <span className="font-medium">General</span>
                    </div>
                </Link>
                <button onClick={onLogOut} className="bg-athens-gray rounded-[20px] inline-flex py-10 px-10 flex flex-col items-center space-y-2 text-blue-vogue w-[140px]">
                    <ArrowRightOnRectangleIcon className="h-[30px]" />
                    <span className="font-medium">Logout</span>
                </button>
            </div>
        </ContainerLayoult>
    )
}