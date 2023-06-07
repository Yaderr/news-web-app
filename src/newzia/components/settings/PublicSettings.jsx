import { useMemo } from "react"
import { ContainerLayoult } from "../ContainerLayoult"
import { InputCountry } from "./InputCountry"
import { DarkModeButton } from "./DarkModeButton"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { ArrowLeftIcon, ArrowPathIcon } from "@heroicons/react/24/solid"
import { InputCity } from "./InputCity"
import countries from '../../../assets/sample-data/countries.json'

export const PublicSettings = () => {

    const { country, language, openwConfig } = useSelector(state => state.config)

    const countryIndex = useMemo(() => {
        const index = countries.findIndex(item => item.code2l === country)
        return index >= 0? index: 0 
    }, [country])

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const back = () => {
        navigate(-1)
    }

    const onReset = () => {
       // dispatch(startDeleteAllArticles())
    }
  
    return (
        <ContainerLayoult>
            <div className="space-y-5 md:mx-[100px] xl:mx-[200px]">
                <div className="mt-5 flex items-center justify-between md:hidden">
                    <button onClick={back} className="outline-none" title="Eliminar todo">
                        <ArrowLeftIcon className="w-[24px] h-[24px] text-blue-vogue" />
                    </button>
                    <div className="flex">
                        <button onClick={onReset} className="p-2 hover:bg-athens-gray rounded-md text-blue-vogue" title="Restablecer todo">
                            <ArrowPathIcon className="w-6 h-6" />
                        </button>
                    </div>
                </div>
                <div className="mt-5 flex items-center justify-between">
                    <div className="text-blue-vogue font-bold">
                        <h1 className="text-xl">Configuración</h1>
                    </div>
                    <div className="flex">
                        <button onClick={onReset} className="p-2 hover:bg-athens-gray rounded-md text-blue-vogue hidden md:inline" title="Restablecer todo">
                            <ArrowPathIcon className="w-6 h-6" />
                        </button>
                    </div>
                </div>
                <InputCountry index={countryIndex} countries={countries} />
                <InputCity openwConfig={openwConfig} />
                <div>
                    <label htmlFor="user-darkMode" className="text-md font-medium text-blue-vogue block mb-2">Modo oscuro</label>
                    <DarkModeButton />
                </div>
            </div>
        </ContainerLayoult>
    )
}