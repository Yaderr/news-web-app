import { Combobox } from "@headlessui/react"
import { useEffect, useMemo, useState } from "react"
import { ChevronUpDownIcon } from '@heroicons/react/24/solid'
import { CheckIcon } from '@heroicons/react/20/solid'
import { setConfig } from "../../../store"
import { useDispatch } from "react-redux"

export const InputCountry = ({ index = 0, countries }) => {

    const [selectedCountry, setSelectedCountry] = useState(countries[index])
    const [query, setQuery] = useState('')
    const dispatch = useDispatch()
  
    useEffect(() => {
        if(selectedCountry.code2l !== countries[index].code2l) {
            const config = {
                country: selectedCountry.code2l
            }

            dispatch(setConfig(config))
        }
    }, [selectedCountry])

    const filteredCountries =
      query === ''
        ? countries.slice(0, 20)
        : countries.filter((country) => {
            return country.name.toLowerCase().includes(query.toLowerCase())
          })


    return (
        <div className="w-full rounded-[20px] border-2 bg-athens-gray">
            <Combobox value={selectedCountry} onChange={setSelectedCountry}>
                <div className="flex space-x-2 p-2">
                    <Combobox.Label>
                        <div className="w-[42px] h-[42px] bg-gray-200 rounded-xl">
                            <img className="w-[100%] h-[100%] object-cover rounded-xl" src={`./icons/flags/${selectedCountry.code2l.toLowerCase()}.svg`} alt="" />
                        </div>
                    </Combobox.Label>
                    <Combobox.Input displayValue={(country) => country.name} name="user-country" className="border-none bg-transparent text-blue-vogue font-medium w-full rounded-lg focus:ring-0 focus:border-gray-200" onChange={(event) => setQuery(event.target.value)} />
                    <Combobox.Button className="flex items-center pr-2">
                        <ChevronUpDownIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                        />
                    </Combobox.Button>
                </div>
                <div>
                <Combobox.Options className="max-h-[200px] overflow-auto my-2 space-y-2 scroll-smooth">
                    {filteredCountries.map((country) => (
                        <Combobox.Option 
                            key={country.id} 
                            value={country} 
                            className={({ active, selected }) => `transition-all text-blue-vogue font-medium text-sm hover:bg-blue-vogue/20 duration-[150ms] ease-in-out flex mx-2 hover:cursor-pointer p-2 rounded-xl items-center justify-between space-x-2 ${selected?'bg-blue-vogue text-white':''}`}
                        >
                         {
                            ({ selected, active }) => (
                                <>
                                    <div className="flex items-center">
                                        <div className="w-[42px] min-w-[42px] h-[42px] bg-gray-200 rounded-xl">
                                            <img loading="lazy" className="w-[100%] h-[100%] object-cover rounded-xl" src={`./icons/flags/${country.code2l.toLowerCase()}.svg`} alt="" />
                                        </div>
                                        <span className="ml-2">
                                            <span className="text-gray-400 mr-2 font-normal">
                                                {country.code2l}
                                            </span>
                                            {country.name}
                                        </span>
                                    </div>
                                    {
                                        selected ? (
                                            <div className="bg-red-ribbon rounded-md p-1">
                                                <CheckIcon className="hover:stroke-2 h-4 w-4 text-white" aria-hidden="true" />
                                            </div>
                                        ) : null
                                    }
                                </>
                            )
                         }   
                        </Combobox.Option>
                    ))}
                </Combobox.Options>




                </div>
            </Combobox>
        </div>
    )
}