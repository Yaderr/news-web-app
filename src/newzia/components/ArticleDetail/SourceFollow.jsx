import { PlusIcon } from '@heroicons/react/24/solid'
export const SourceFollow = ({ source }) => {
    // TODO: add source image

    return (
        <div className="mt-5 flex items-center justify-between md:justify-start md:space-x-10">
            <a href='/source/123' className="flex space-x-2 items-center">
                <div>
                    <img className="w-[45px] h-[45px] rounded-full md:h-[50px] md:w-[50px]" src="https://d3hjzzsa8cr26l.cloudfront.net/ca73e0f7-c574-11e8-8d12-4b6fc186e574.jpg" alt="" />
                </div>
                <div className='flex-col items-center space-y-1'>
                    <h4 className="text-base font-bold text-blue-vogue leading-none">{source.name}</h4>
                    <h4 className="text-xs font-medium text-lynch leading-none lowercase">@{source.name.replaceAll(' ', '_')}</h4>
                </div>
            </a>
            <div>
                <button className="font-medium text-white bg-red-ribbon py-3 px-5 flex items-center space-x text-xs space-x-2 rounded-full">
                    <PlusIcon className='w-[15px] h-[15px]' />
                    <span>Seguir</span>
                </button>
            </div>
        </div>
    )
}