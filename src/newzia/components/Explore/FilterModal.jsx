import { Dialog, Listbox, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"
import { ArrowsUpDownIcon, CheckIcon, ChevronUpDownIcon, FunnelIcon, LanguageIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { SelectFilterListBox } from "./SelectFilterListBox"
import { useDispatch } from "react-redux"
import { setSearch } from "../../../store"

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
        id: 'content',
        name: 'Contenido'
    }
]

const sortOptions = [
    {
        id: 'relevancy',
        name: 'Relevancia'
    },
    {
        id: 'popularity',
        name: 'Popularidad'
    },
    {
        id: 'publishedAt',
        name: 'Nuevos'
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
    const [sortBy, setSortBy] = useState(sortOptions[0])
    const [language, setLanguage] = useState(languages[1])
    
    const dispatch = useDispatch()
    
    const onFilterClick = () => {
        dispatch(
            setSearch({
                searchIn: filterBy.id,
                language: language.id,
                sortBy: sortBy.id
            })
        )
        setIsOpen(false)
    }

    return (
        <Transition
            appear
            show={isOpen}
            as={Fragment}
        >
            <Dialog as="div" className="relative z-[900]" open={isOpen} onClose={() => setIsOpen(false)} >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                >
                    <div className="fixed inset-0 backdrop-blur-[1px] bg-blue-vogue/50 supports-backdrop-blur:bg-blue-vogue/100" />
                </Transition.Child>
                <div className="fixed inset-0 overflow-y-auto md:flex md:items-center md:justify-center">
                    <Dialog.Panel className="fixed bottom-0 p-4 w-full md:relative md:max-w-[400px]">
                        <Transition.Child
                            enter="ease-out duration-500"
                            enterFrom="md:scale-50 max-[767px]:translate-y-full"
                            enterTo="md:scale-100"
                        >

                        <div className="bg-white rounded-[30px] h-full p-4">
                            <div className="flex justify-end">
                                <button onClick={() => setIsOpen(false)}>
                                    <XMarkIcon className="h-6 text-blue-vogue" />
                                </button>
                            </div>
                            <div className="py-1">
                                <SelectFilterListBox
                                    options={ filters }
                                    selectedOption={ filterBy }
                                    setSelectedOption={setFilterBy}
                                    icon={FunnelIcon}
                                />

                                <SelectFilterListBox
                                    options={ languages }
                                    selectedOption={ language }
                                    setSelectedOption={setLanguage}
                                    icon={LanguageIcon}
                                />

                                <SelectFilterListBox
                                    options={ sortOptions }
                                    selectedOption={ sortBy }
                                    setSelectedOption={setSortBy}
                                    icon={ArrowsUpDownIcon}
                                />
                            </div>  
                            <button onClick={onFilterClick} className="p-4 bg-red-ribbon w-full mt-10 rounded-[20px] text-white text-md">Filtrar</button>
                        </div>
                        </Transition.Child>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </Transition>
    )
}