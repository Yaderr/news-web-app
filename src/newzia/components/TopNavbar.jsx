import { BellAlertIcon } from "@heroicons/react/24/outline"
import { Link } from "react-router-dom"
import logo from '../../assets/newzia-logo.svg'

export const TopNabar = () => {

    return (
        <div className="h-[60px] flex items-center px-[30px] justify-between sm:hidden">
            <div>
                <Link to="/" >
                    <img className="h-[24px]" src={logo} alt="newzia logo" />
                </Link>
            </div>
            <div>
            <Link to="/notifications" className="transition-colors duration-500 ease-out hover:bg-athens-gray py-2 px-2 flex rounded-[10px]" alt="Notificaciones">
                <BellAlertIcon className="h-[24px] w-[24px] text-blue-vogue" />
            </Link>
            </div>
        </div>
    )
}