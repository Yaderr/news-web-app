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
import { useSelector } from "react-redux"


export const NavBar = () => {

    const { status, displayName, photoURL } = useSelector(state => state.auth)

    return (
        <>
            <nav className="backdrop-blur bg-white/80 supports-backdrop-blur:bg-white/100 shadow-lg w-full bottom-0 fixed sm:relative z-[900]">
                <div className="px-[30px] lg:px-0 flex items-center justify-center max-w-full sm:justify-between sm:max-w-[864px] xl:max-w-[1200px] sm:h-[90px] h-[70px] m-auto"> 
                    <div className="hidden sm:block">
                        <Link to="/" >
                            <img className="h-[40px]" src={logo} alt="newzia logo" />
                        </Link>
                    </div>
                    <div className="">
                        <ul className="flex space-x-10 sm:space-x-5">
                            <li>
                                <NavLink to="/" className="transition-colors duration-500 ease-out hover:bg-athens-gray py-2 px-2 flex rounded-[10px]" alt="home">
                                    <HomeIconOutline className="h-[30px] w-[30px] text-blue-vogue outline-icon" />
                                    <HomeIconSolid className="h-[30px] w-[30px] text-red-ribbon solid-icon" />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/explore" className="transition-colors duration-500 ease-out hover:bg-athens-gray py-2 px-2 flex rounded-[10px]" alt="explorar">
                                    <GlobeAltIconOutline className="h-[30px] w-[30px] text-blue-vogue outline-icon" />
                                    <GlobeAltIconSolid className="h-[30px] w-[30px] text-red-ribbon solid-icon" />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/saved" className="transition-colors duration-500 ease-out hover:bg-athens-gray py-2 px-2 flex rounded-[10px]" alt="guardados">
                                    <BookmarkIconOutline className="h-[30px] w-[30px] text-blue-vogue outline-icon" />
                                    <BookmarkIconSolid className="h-[30px] w-[30px] text-red-ribbon solid-icon" />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={status === 'authenticated'?'/profile':'/settings/general'} className="transition-colors duration-500 ease-out hover:bg-athens-gray py-2 px-2 flex rounded-[10px]" alt="ajustes">
                                    {
                                        status === 'authenticated' 
                                        ? (
                                            <>
                                                <div className="w-[30px] h-[30px] outline-icon">
                                                    {
                                                        photoURL ? <img className="w-full h-full rounded-full ring-2 ring-transparent" src={photoURL} alt={displayName} />
                                                        : <div className="bg-blue-vogue w-full h-full rounded-full uppercase flex items-center justify-center font-semibold text-white text-md">{displayName.split('')[0]}</div>
                                                        
                                                    }
                                                </div>
                                                <div className="w-[30px] h-[30px] solid-icon">
                                                    {
                                                        photoURL ? <img className="w-full h-full rounded-full ring-2 ring-red-ribbon" src={photoURL} alt={displayName} />
                                                        : <div className="bg-blue-vogue w-full h-full rounded-full uppercase flex items-center justify-center font-semibold text-white text-md ring-2 ring-red-ribbon">{displayName.split('')[0]}</div>
                                                    }
                                                </div>
                                            </>
                                        )
                                        : (
                                            <>
                                                <Cog6ToothIconOutline className="h-[30px] w-[30px] text-blue-vogue outline-icon" />
                                                <Cog6ToothIconSolid className="h-[30px] w-[30px] text-red-ribbon solid-icon" />
                                            </>
                                        )
                                    }
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}