import { useNavigate } from "react-router-dom"
import { ContainerLayoult } from "../ContainerLayoult"
import { MagnifyingGlassIcon, AdjustmentsVerticalIcon, ArrowLeftIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import { Dialog } from "@headlessui/react"
import { FilterModal } from "./FilterModal"

export const InputSerch = () => {

    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
   
    const onSubmitForm = (event) => {

        event.preventDefault()
        const query = event.target[0].value
        if(query.trim().length <= 0) return
        navigate(`./search?q=${query}`)
    }

    const back = () => {
        navigate(-1)
    }

    return (
        <ContainerLayoult>
            <div className="mt-5">
                <div className="mt-5 flex items-center md:hidden py-2">
                    <button onClick={back} className="outline-none" title="Eliminar todo">
                        <ArrowLeftIcon className="w-[24px] h-[24px] text-blue-vogue" />
                    </button>
                </div>
                <form onSubmit={onSubmitForm}>
                    <div className="flex mt-5 bg-athens-gray rounded-[20px] px-5 items-center">
                        <MagnifyingGlassIcon className="h-6 text-blue-vogue" />
                        <input className="px-3 text-base placeholder:text-xs md:placeholder:text-base text-blue-vogue font-medium py-5 focus:ring-0 border-none bg-transparent w-full" type="text" placeholder="Buscar Artículos, fuentes o categorías" />
                        <button type="button" onClick={() => setIsOpen(true)}>
                            <AdjustmentsVerticalIcon className="h-6 text-blue-vogue" />
                        </button>
                    </div>
                </form>
            </div>
            <FilterModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </ContainerLayoult>
    )
}