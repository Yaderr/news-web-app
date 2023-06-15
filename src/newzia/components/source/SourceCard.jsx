
export const SourceCard = ({ source }) => {

    const userName = String(source.name).toLocaleLowerCase().replaceAll(' ', '_')

    return (
        <div className="bg-athens-gray w-[150px] h-[200px] inline-block mr-4 rounded-[20px]">
            <div className="flex flex-col h-full justify-center">
                <div className="flex flex-col items-center justify-center space-y-2">
                    <div className="bg-white w-[100px] h-[100px] rounded-full">
                        <img className="w-[100px] h-[100px] rounded-full" src={`/icons/sources/${source?.id ?? userName}.png`} alt={source.name} />
                    </div>
                    <div className="w-full h-[50px] text-center px-2">
                        <span className="text-blue-vogue font-bold">{ source.name }</span>
                    </div>
                </div>
            </div>
        </div>
    )
}