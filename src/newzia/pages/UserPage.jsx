import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getUserByUserName } from "../../firebase"
import { Spinner } from "flowbite-react"
import { ProfileCard } from "../components"
import { ContainerLayoult } from "../components/ContainerLayoult"
import { ArrowLeftIcon, PlusIcon } from "@heroicons/react/24/outline"

export const UserPage = () => {

    const [isLoading, setIsLoadig] = useState(true)
    const [userData, setUserData] = useState()
    const { userName } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const getData = async () => {
            const res = await getUserByUserName(userName)
            setUserData(res.data)
            setIsLoadig(false)
        }

        getData()
    }, [userName])

    const back = () => {
        navigate(-1)
    }

    return (
        <ContainerLayoult>
            {
                !isLoading ? (
                    <>
                        <div className="mt-5 flex items-center justify-between md:hidden">
                            <button onClick={back} className="outline-none" title="Eliminar todo">
                                <ArrowLeftIcon className="w-[24px] h-[24px] text-blue-vogue" />
                            </button>
                           
                        </div>
                        <div className="flex md:flex-col md:items-center w-full space-x-4 md:space-x-0 md:space-y-4 mt-5">
                            <a onClick={() => { console.log('clik');}} className="w-[80px] h-[80px] min-w-[80px] md:w-[100px] md:h-[100px] bg-athens-gray rounded-full cursor-pointer select-none">
                                {
                                    userData.photoURL ? <img className="rounded-full w-full h-full object-cover" src={userData.photoURL} alt={userData.userName} />
                                    : <div className="bg-blue-vogue w-full h-full rounded-full uppercase flex items-center justify-center font-semibold text-white text-3xl">{userData.displayName.split('')[0]}</div>
                                }
                            </a>
                            <div className="flex flex-col justify-center md:items-center w-full">
                                <h1 className="text-lg md:text-2xl font-bold text-blue-vogue">{userData.displayName}</h1>
                                <h2 className="text-sm text-blue-vogue">@{userData.userName}</h2>
                                <button className="font-medium text-white max-w-[50%] bg-red-ribbon mt-2 py-2 px-5 flex items-center space-x text-xs space-x-2 rounded-full">
                                    <PlusIcon className='w-[15px] h-[15px]' />
                                    <span>Seguir</span>
                                </button>
                            </div>
                        </div>
                        
                        <ProfileCard biography={userData.biography} siteLink={userData.siteLink} />
                        
                        <div className="w-full py-5 px-7 mt-5 rounded-[20px] bg-athens-gray flex justify-between md:justify-around">
                            {/* <div className="flex flex-col text-blue-vogue items-center">
                                <span className="text-normal font-bold">{}</span>
                                <span className="text-sm">Articulos</span>
                            </div> */}
                            <div className="flex flex-col text-blue-vogue items-center">
                                <span className="text-normal font-bold">{userData.followers}</span>
                                <span className="text-sm">Seguidores</span>
                            </div>
                            <div className="flex flex-col text-blue-vogue items-center">
                                <span className="text-normal font-bold">{userData.followed}</span>
                                <span className="text-sm">Seguidos</span>
                            </div>
                            <div className="flex flex-col text-blue-vogue items-center">
                                <span className="text-normal font-bold">0</span>
                                <span className="text-sm">Likes</span>
                            </div>
                            
                        </div>
                        
                    </>
                )
                : (
                    <div className="text-center flex flex-col h-screen justify-center">
                        <div className="flex flex-col flex-center space-y-2">
                            <Spinner className="fill-red-ribbon" aria-label="Center-aligned spinner example" size="lg" color="purple" />
                            <span className="font-medium text-blue-vogue">Cargando...</span>
                        </div>
                    </div>
                )
            }
        </ContainerLayoult>
    )
}