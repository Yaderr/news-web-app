import { ContainerLayoult } from "../../components/ContainerLayoult"

export const SectionHeaderLoader = () => {

    return (
       
        <ContainerLayoult>
            <div className="animate-pulse flex items-start justify-between mt-5">
                <div className="max-w-[50%] flex flex-col">
                    <div className="h-[20px] w-[80px] bg-gray-200 rounded-full sm:h-[30px] sm:w-[246px]"></div>
                    <div className="mt-[10px] h-[20px] w-[120px] bg-gray-200 rounded-full sm:h-[32px] sm:w-[246px] sm:hidden"></div>
                    <div className="h-[15px] w-[95px] mt-[10px] bg-gray-200 rounded-full sm:h-[20px] sm:w-[107px]"></div>
                </div>
                <div className="flex space-x-2 sm:space-x-5">
                    <div className="flex flex-col">
                        <div className="h-[28px] w-[69px] bg-gray-200 rounded-full sm:h-[34px] sm:w-[80px]"></div>
                        <div className="h-[11px] w-[80px] bg-gray-200 rounded-full mt-[10px] sm:h-[15px] sm:w-[80px]"></div>
                    </div>
                    <div className="h-[52px] w-[50px] bg-gray-200 rounded-lg sm:h-[62px] sm:w-[60px]">

                    </div>
                </div>
                {/* <div className="rounded-full bg-gray-200 h-10 w-10"></div>
                <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-gray-200 rounded"></div>
                <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-gray-200 rounded col-span-2"></div>
                    <div className="h-2 bg-gray-200 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-gray-200 rounded"></div>
                </div>
                </div> */}
            </div>
        </ContainerLayoult>
    )
}