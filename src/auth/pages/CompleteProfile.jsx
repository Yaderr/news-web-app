import { Link, useNavigate } from "react-router-dom"
import { ArrowLeftIcon, UserCircleIcon } from "@heroicons/react/24/outline"
import { useDispatch, useSelector } from "react-redux"
import { startUpdateProfile } from "../../store/auth"
import { useEffect } from "react"

export const CompleteProfile = () => {

    const { status, uid, displayName, photoURL, userName, email } = useSelector(state => state.auth)
    const navigate = useNavigate()
    const dispath = useDispatch()

    
    useEffect(() => {
        if(status != "authenticated") navigate('/')
        if(!!userName) navigate('/')
    },[userName])

    const back = () => {
        navigate(-1)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        dispath(startUpdateProfile(event.target.userName.value))
    }

    return (
        <div className="">
            <div className="flex items-center justify-between md:hidden mt-5 px-5">
                <button onClick={back} className="outline-none" title="Eliminar todo">
                    <ArrowLeftIcon className="w-[24px] h-[24px] text-blue-vogue" />
                </button>
            </div>
            <div className="flex">
                <form onSubmit={onSubmit} className=" w-full">
                    <div className="px-5 mt-5 md:flex md:flex-col items-center justify-center">
                        <h1 className="mt-5 text-4xl font-bold text-blue-vogue">Completa la información de tu perfil</h1>
                        <div className="flex flex-col items-center mt-10">
                            <div className="w-[100px] h-[100px] rounded-full bg-athens-gray">
                                <img className="w-full h-full rounded-full" src={photoURL} alt={displayName} />
                            </div>
                        </div>
                        <div className="bg-athens-gray px-5 py-4 rounded-[20px] flex items-center mt-10">
                            <input 
                                required
                                placeholder="@userName"
                                className="w-full h-[30px] focus:border-none placeholder:text-lynch/50 placeholder:font-medium text-blue-vogue focus:ring-0 border-none bg-transparent p-0"
                                name="userName"
                                type="text" 
                            />
                            <UserCircleIcon className="text-lynch h-[30px]" />
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full bottom-0 fixed p-5 md:px-[40%] md:py-[200px]">
                        <button  className="bg-red-ribbon w-full px-5 py-4 text-white rounded-[20px] flex items-center justify-center">Continuar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}