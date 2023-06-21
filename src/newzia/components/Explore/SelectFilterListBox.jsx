import { Listbox } from "@headlessui/react"
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline"

export const SelectFilterListBox = ({ options, selectedOption, setSelectedOption, icon: Icon }) => {

    return (
        <div className="bg-athens-gray rounded-[20px] mt-2">
            <Listbox value={ selectedOption } onChange={ setSelectedOption }>
                <Listbox.Button className="p-4 w-full flex p-2 items-center space-x-2">
                    <Listbox.Label className="">
                        <Icon className="h-6 text-blue-vogue" />
                    </Listbox.Label>
                    <span className="text-blue-vogue">{selectedOption.name}</span>
                    <span className="w-full flex justify-end">
                        <ChevronUpDownIcon className="h-6 text-gray-400" />
                    </span>
                </Listbox.Button>
                <Listbox.Options className="p-2 space-y-2">
                    {
                        options.map((option) => (
                            <Listbox.Option key={option.id} value={option} >
                                {({ active, selected }) => (
                                    <div
                                        className={`flex relative space-x-2 text-sm items-center pl-7 p-2 hover:bg-blue-vogue/20 rounded-xl hover:cursor-pointer ${
                                        selected ? 'bg-blue-vogue text-white' : 'bg-transparent text-blue-vogue'
                                        }`}
                                    >
                                        <div className="inset-y-0 left-0 absolute flex items-center pl-2 text-red-ribbon">
                                            {selected && <CheckIcon className="h-5" />}
                                        </div>
                                        <span>{option.name}</span>
                                    </div>
                                    )}
                            </Listbox.Option>
                        ))
                    }
                </Listbox.Options>
            </Listbox>
        </div>
    )
}