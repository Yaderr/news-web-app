import { NavLink, Route, Routes, useNavigate } from "react-router-dom"
import { LoginPage, SignupPage } from "../pages"
import { ArrowLeftIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline"
import { useDispatch, useSelector } from "react-redux"
import { Toast } from "flowbite-react"
import { resetError } from "../../store/auth"
import { useEffect } from "react"

export const SignRoutes = () => {

    const { errorMessage, status } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const back = () => {
        navigate(-1)
    }

    const onToggleClose = () => {
        dispatch(resetError())
    }

    useEffect(() => {
        if(status === 'authenticated') {
            navigate('/')
        }
    }, [status])

    return (
        <>
            <div className="md:bg-athens-gray w-full h-[100vh] flex">
            
                <div className="md:bg-white md:m-auto md:p-4 md:rounded-[30px] md:flex md:flex-col px-5 w-[800px] md:w-[500px] md:h-[600px] md:drop-shadow-xl">

                    <div className="flex items-center justify-between md:hidden mt-5">
                        <button onClick={back} className="outline-none" title="Eliminar todo">
                            <ArrowLeftIcon className="w-[24px] h-[24px] text-blue-vogue" />
                        </button>
                        
                    </div>
                    <div className="mt-10 md:mt-0 flex space-x-2">
                        <NavLink to="./login" className={
                            ({isActive, isPending}) => 
                            `py-2 px-5 text-sm text-blue-vogue rounded-full font-medium md:text-base cursor-pointer ${isActive ? 'bg-blue-vogue text-white':''}` 
                            }>Login</NavLink>
                        <NavLink to="./signup" className={
                            ({isActive, isPending}) => 
                            `py-2 px-5 text-sm text-blue-vogue rounded-full font-medium md:text-base cursor-pointer ${isActive ? 'bg-blue-vogue text-white':''}` 
                            }>Signup</NavLink>
                        
                    </div>
                    <Routes>
                        <Route path="/*" element={ <LoginPage status={status} /> } />
                        <Route path="/login" element={ <LoginPage /> } />
                        <Route path="/signup" element={ <SignupPage /> } />
                    </Routes>
                </div>
            </div>

            <div className="">
                {
                    errorMessage && <Toast className="fixed bottom-0 mx-5 my-5 md:mx-10 md:my-[100px] ring-2 ring-red-ribbon/20">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-red-ribbon dark:bg-cyan-800 dark:text-cyan-200">
                      <ExclamationTriangleIcon className="h-5 w-5" />
                    </div>
                    <div className="ml-3 text-blue-vogue text-sm font-normal">
                        {errorMessage}
                    </div>
                    <Toast.Toggle onClick={onToggleClose} />
                  </Toast>
                    // errorMessage && <div className="inline-flex text-sm text-lynch ring-2 ring-red-ribbon md:fixed md:bottom-0 z-[900] rounded-[10px] space-x-2 p-4 items-center">
                    //     <ExclamationTriangleIcon className="h-[50px] text-red-ribbon" />
                    //     <span>{errorMessage}</span>
                    // </div>
                }
            </div>
        </>
    )
}