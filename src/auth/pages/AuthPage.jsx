import { ArrowLeftIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import logo from '../../assets/newzia-logo-white.svg'
import { Link, useNavigate } from 'react-router-dom'

export const AuthPage = () => {

    const navigate = useNavigate()

    const back = () => {
        navigate(-1)
    }

    return (
        <div className="md:bg-athens-gray w-full h-[100vh] flex">
            
            <div className="md:bg-white md:m-auto md:p-4 md:rounded-[30px] md:flex px-5 w-[800px] md:h-[500px] md:drop-shadow-xl">
                <div className="flex items-center justify-between md:hidden mt-5">
                    <button onClick={back} className="outline-none" title="Eliminar todo">
                        <ArrowLeftIcon className="w-[24px] h-[24px] text-blue-vogue" />
                    </button>
                    <div className="flex text-blue-vogue text-sm">
                        <Link to="/" className="p-2 hover:bg-athens-gray rounded-md text-blue-vogue" title="Restablecer todo">
                            Saltar
                        </Link>
                    </div>
                </div>
                <div style={{ backgroundImage: 'url(/icons/categories/politic.jpg)'}} className="h-[55vh] mt-5 md:mt-0 md:w-[50%] md:h-full bg-cover bg-center rounded-[30px]">
                    <div className='bg-blue-vogue/60 w-full h-full rounded-[30px] p-5 flex flex-col justify-between items-center'>
                        <div>
                            <img className="h-[24px]" src={logo} alt="newzia logo" />    
                        </div>
                        <h1 className='text-white font-bold text-4xl'>
                            Opciones de inicio de sesión.
                        </h1>
                    </div>
                </div>
                <div className="md:w-[50%] md:ml-4 md:h-full flex flex-col py-10">
                    {/* <h1 className='text-blue-vogue font-bold text-4xl'>
                        Opciones de inicio de sesión
                    </h1> */}
                    <div className='flex flex-col md:justify-center space-y-4 md:h-full'>
                        <Link to="/auth/login" className="w-full bg-red-ribbon px-5 py-4 text-white rounded-[20px] flex items-center justify-center space-x-2 font-medium text-sm">
                            <EnvelopeIcon className="h-[24px] stroke-2" />
                            <span>Continuar con Email</span>
                        </Link>
                        <Link to="/auth/google" className="w-full bg-athens-gray px-5 py-4 text-blue-vogue rounded-[20px] flex items-center justify-center space-x-2 font-medium text-sm">
                            <svg className='h-[24px]' xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" id="google"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path></svg>
                            <span>Iniciar sesión con Google</span>
                        </Link>
                        <span className='text-xs text-blue-vogue font-medium text-center'>
                            ¿Aún no tienes una cuenta? <a className='text-red-ribbon font-bold' href="/auth/signup">Registrate gratis</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}