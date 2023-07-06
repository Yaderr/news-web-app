import { EnvelopeIcon, EyeIcon } from "@heroicons/react/24/outline"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { startLogin } from "../../store/auth"
import { Spinner } from "flowbite-react"

export const LoginPage = () => {

    const dispatch = useDispatch()
    const { status } = useSelector(state => state.auth)

    const onLogin = (event) => {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value

        dispatch(startLogin(email, password))

    }

    return (
        <div className="">
            <h1 className="my-20 md:my-5 text-4xl font-bold text-blue-vogue">Inicia Sesión En Tu Cuenta</h1>
            <div className="">
                <form onSubmit={onLogin} className="space-y-4">
                    <div className="bg-athens-gray px-5 py-4 rounded-[20px] flex items-center">
                        <input 
                            required
                            placeholder="Email"
                            className="w-full h-[30px] focus:border-none placeholder:text-lynch/50 placeholder:font-medium text-blue-vogue focus:ring-0 border-none bg-transparent p-0"
                            name="email"
                            type="email" 
                        />
                        <EnvelopeIcon className="text-lynch h-[30px]" />
                    </div>
                    <div className="bg-athens-gray px-5 py-4 rounded-[20px] flex items-center">
                        <input 
                            required
                            placeholder="Password"
                            className="w-full h-[30px] focus:border-none placeholder:text-lynch/50 placeholder:font-medium text-blue-vogue focus:ring-0 border-none bg-transparent p-0"
                            name="password"
                            type="password" 
                        />
                        <EyeIcon className="text-lynch h-[30px]" />
                    </div>
                    <div>
                        <Link to="../forget" className="text-sm text-lynch font-medium">¿Has olvidado tu contraseña?</Link>
                    </div>
                    <div className="space-y-4">
                        <button disabled={status === "loginin"} className="disabled:bg-gray-300 transition duration-150 ease-in-out w-full bg-red-ribbon p-5 text-white rounded-[20px] flex items-center justify-center font-medium space-x-2 text-sm mt-[7vh] md:mt-0">
                            {
                                status === 'loginin' && <Spinner className="fill-red-ribbon" aria-label="Center-aligned spinner example" size="md" color="purple" />
                            }
                            <span>Iniciar sesión</span>
                        </button>
                        <a href="/auth/signin/google" className="w-full bg-athens-gray p-5 text-blue-vogue rounded-[20px] flex items-center justify-center space-x-2 font-medium text-sm">
                            <svg className='w-5' xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" id="google"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path></svg>
                            <span>Google</span>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    )
}