import { Dialog, Listbox } from "@headlessui/react"
import { useState } from "react"
import { CheckIcon, ChevronUpDownIcon, FunnelIcon, LanguageIcon, XMarkIcon } from '@heroicons/react/24/outline'

const filters = [
    {
        id: 'title',
        name: 'Título'
    },
    {
        id: 'description',
        name: 'Descripción'
    },
    {
        id: 'title',
        name: 'Contenido'
    }
]

const languages = [
    {
        id: 'es',
        name: 'Español'
    },
    {
        id: 'en',
        name: 'Ingles'
    }
]

export const FilterModal = ({isOpen, setIsOpen}) => {

    const [filterBy, setFilterBy] = useState(filters[0])
    const [language, setLanguages] = useState(languages[0])
    const [timeFrom, setTimeFrom] = useState(null)
    const [timeTo, setTimeTo] = useState(null)
    


    return (
        <Dialog as="div" className="relative z-[900]" open={isOpen} onClose={() => setIsOpen(false)} >
            <div className="fixed inset-0 backdrop-blur-[1px] bg-blue-vogue/50 supports-backdrop-blur:bg-blue-vogue/100" />
            <div className="fixed inset-0 overflow-y-auto">
                <Dialog.Panel className="fixed bottom-0 p-4 w-full">
                    <div className="bg-white rounded-[30px] h-[350px] p-4">
                        <div className="flex justify-end">
                            <button onClick={() => setIsOpen(false)}>
                                <XMarkIcon className="h-6 text-blue-vogue" />
                            </button>
                        </div>
                        <div className="bg-athens-gray rounded-[20px] mt-2">

                            <Listbox value={filterBy} onChange={setFilterBy}>
                            
                                <Listbox.Button className="p-4 w-full flex p-2 items-center space-x-2">
                                    <Listbox.Label className="">
                                        <FunnelIcon className="h-6 text-blue-vogue" />
                                    </Listbox.Label>
                                    <span className="text-blue-vogue">{filterBy.name}</span>
                                    <span className="w-full flex justify-end">
                                        <ChevronUpDownIcon className="h-6 text-gray-400" />
                                    </span>
                                </Listbox.Button>
                                <Listbox.Options className="p-2">
                                    {
                                        filters.map((filter) => (
                                            <Listbox.Option key={filter.id} value={filter} className="" >
                                                {({ active, selected }) => (
                                                    <li
                                                        className={`bg-blue-500 ${
                                                        active ? 'bg-blue-500 text-red-500' : 'bg-white text-black'
                                                        }`}
                                                    >
                                                        {selected && <CheckIcon className="h-5" />}
                                                        {filter.name}
                                                    </li>
                                                    )}
                                            </Listbox.Option>
                                        ))
                                    }
                                </Listbox.Options>
                            </Listbox>
                        </div>



                        <div className="bg-athens-gray rounded-[20px] mt-2">

                            <Listbox value={language} onChange={setFilterBy}>
                            
                                <Listbox.Button className="p-4 w-full flex p-2 items-center space-x-2">
                                    <Listbox.Label className="">
                                        <LanguageIcon className="h-6 text-blue-vogue" />
                                    </Listbox.Label>
                                    <span className="text-blue-vogue">{language.name}</span>
                                    <span className="w-full flex justify-end">
                                        <ChevronUpDownIcon className="h-6 text-gray-400" />
                                    </span>
                                </Listbox.Button>
                                <Listbox.Options className="p-2">
                                    {
                                        languages.map((language) => (
                                            <Listbox.Option key={language.id} value={language} className="" >
                                                {({ active, selected }) => (
                                                    <li
                                                        className={`bg-blue-500 ${
                                                        active ? 'bg-blue-500 text-red-500' : 'bg-white text-black'
                                                        }`}
                                                    >
                                                        {selected && <CheckIcon className="h-5" />}
                                                        {language.name}
                                                    </li>
                                                    )}
                                            </Listbox.Option>
                                        ))
                                    }
                                </Listbox.Options>
                            </Listbox>
                        </div>

                        <div className="bg-athens-gray rounded-[20px] mt-2">
                            <input className="bg-transparent border-none w-full p-4" type="datetime-local" name="" id="" />
                        </div>
                        
                        <button className="p-4 bg-red-ribbon w-full mt-10 rounded-[20px] text-white text-md">Filtrar</button>










                        
                        
                        
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    )
}