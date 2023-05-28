import { Link, NavLink } from "react-router-dom"
import logo from '../../assets/newzia-logo.svg'
import { 
    HomeIcon as HomeIconOutline, 
    GlobeAltIcon as GlobeAltIconOutline,
    BookmarkIcon as BookmarkIconOutline,
    Cog6ToothIcon as Cog6ToothIconOutline,
    BellAlertIcon
} from '@heroicons/react/24/outline'

import { 
    HomeIcon as HomeIconSolid, 
    GlobeAltIcon as GlobeAltIconSolid,
    BookmarkIcon as BookmarkIconSolid,
    Cog6ToothIcon as Cog6ToothIconSolid,
} from '@heroicons/react/24/solid'


export const NavBar = () => {

    return (
        <>
            <nav className="backdrop-blur bg-white/80 supports-backdrop-blur:bg-white/100 shadow-lg w-full bottom-0 fixed sm:relative z-50">
                <div className="px-[30px] lg:px-0 flex items-center justify-center max-w-full sm:justify-between sm:max-w-[864px] xl:max-w-[1200px] h-[90px] m-auto"> 
                    <div className="hidden sm:block">
                        <Link to="/" >
                            <img className="h-[40px]" src={logo} alt="newzia logo" />
                        </Link>
                    </div>
                    <div className="">
                        <ul className="flex space-x-10 sm:space-x-5">
                            <li>
                                <NavLink to="/" className="transition-colors duration-500 ease-out hover:bg-athens-gray py-2 px-2 flex rounded-[10px]" alt="home">
                                    <HomeIconOutline className="h-[34px] w-[34px] text-blue-vogue outline-icon" />
                                    <HomeIconSolid className="h-[34px] w-[34px] text-red-ribbon solid-icon" />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/explore" className="transition-colors duration-500 ease-out hover:bg-athens-gray py-2 px-2 flex rounded-[10px]" alt="explorar">
                                    <GlobeAltIconOutline className="h-[34px] w-[34px] text-blue-vogue outline-icon" />
                                    <GlobeAltIconSolid className="h-[34px] w-[34px] text-red-ribbon solid-icon" />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/saved" className="transition-colors duration-500 ease-out hover:bg-athens-gray py-2 px-2 flex rounded-[10px]" alt="guardados">
                                    <BookmarkIconOutline className="h-[34px] w-[34px] text-blue-vogue outline-icon" />
                                    <BookmarkIconSolid className="h-[34px] w-[34px] text-red-ribbon solid-icon" />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/settings" className="transition-colors duration-500 ease-out hover:bg-athens-gray py-2 px-2 flex rounded-[10px]" alt="ajustes">
                                    <Cog6ToothIconOutline className="h-[34px] w-[34px] text-blue-vogue outline-icon" />
                                    <Cog6ToothIconSolid className="h-[34px] w-[34px] text-red-ribbon solid-icon" />
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}