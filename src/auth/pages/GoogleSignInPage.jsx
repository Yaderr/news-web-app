import { useDispatch, useSelector } from "react-redux"
import { startSignInWithGoogle } from "../../store/auth/thunks"
import { Spinner } from "flowbite-react"
import { ProfilePreview } from "../components/ProfilePreview"
import { Link } from "react-router-dom"

export const GoogleSignInPage = () => {

    const dispath = useDispatch()
    const { status, uid, displayName, photoURL, userName } = useSelector(state => state.auth)

    const onSignInGoogle = () => {
        dispath(startSignInWithGoogle())
    }

    if(status === 'loginin') {
        return (
            <div className="text-center flex flex-col h-screen justify-center">
                <div className="flex flex-col flex-center space-y-2">
                    <Spinner className="fill-red-ribbon" aria-label="Center-aligned spinner example" size="lg" color="purple" />
                    <span className="font-medium text-blue-vogue">Cargando...</span>
                </div>
            </div>
        )
    }

    if(status === 'authenticated') {
        return (
            <div className="h-screen flex justify-center items-center">
                <ProfilePreview profile={{ displayName, userName, photoURL}} />
                <div className="flex items-center justify-center w-full bottom-0 fixed p-5 md:px-[40%] md:py-[200px]">
                    <Link to={!userName ? '../complete':'/'} className="bg-red-ribbon w-full px-5 py-4 text-white rounded-[20px] flex items-center justify-center">Continuar</Link>
                </div>
            </div>
        )
    }
    
    return (
        <>
            <div className="flex w-full h-screen items-center justify-center">
                <button onClick={onSignInGoogle} className="max-w-[500px] bg-athens-gray px-5 py-4 text-blue-vogue rounded-[20px] flex items-center justify-center space-x-4 font-semibold text-sm">
                    <svg className='h-[24px]' xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" id="google"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path></svg>
                    <span>Google</span>
                </button>
            </div>
        </>
    )
}