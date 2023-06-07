import { MapPinIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

export const InputCity = ({openwConfig}) => {

    const [selectedCity, setSelectedCity] = useState(openwConfig.city)

    return (
        <div className="bg-athens-gray px-5 py-4 rounded-[20px] flex items-center">
            <input 
                value={selectedCity}
                onChange={() => {}}
                placeholder="Ciudad"
                className="w-full h-[30px] focus:border-none placeholder:text-lynch/50 text-blue-vogue focus:ring-0 border-none bg-transparent p-0"
                name="city"
                type="text" 
            />
            <MapPinIcon className="text-lynch h-[30px]" />
        </div>
    )
}