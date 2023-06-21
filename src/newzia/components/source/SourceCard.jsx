import Logo from '../../../assets/ISOTIPO.png'

export const SourceCard = ({ source }) => {

    const userName = String(source.name).toLocaleLowerCase().replaceAll(' ', '_')

    return (
        <a href={`../source/${userName}`} className="bg-athens-gray w-[auto] h-[200px] md: w-[162px] rounded-[20px] hover:ring-2 hover:ring-red-ribbon transition-all duration-300 ease-in-out">
            <div className="flex flex-col h-full justify-center">
                <div className="flex flex-col items-center justify-center space-y-2">
                    <div className="bg-white w-[80px] h-[80px] rounded-full">
                    {/* <object className="w-[80px] h-[80px] rounded-full" data={`/icons/sources/${source?.id ?? userName}.png`} type="image/png">
                        <img className="w-[80px] h-[80px] rounded-full" src={Logo} alt={source.name} />
                    </object> */}
                        <img className="w-[80px] h-[80px] rounded-full" src={`/icons/sources/${source?.id ?? userName}.png`} onError={({currentTarget}) => currentTarget.src = Logo} alt={source.name} />
                    </div>
                    <div className="w-full max-h-[20px] text-center px-4">
                        <span className="text-blue-vogue font-bold line-clamp-2">{ source.name }</span>
                    </div>
                </div>
            </div>
        </a>
    )
}