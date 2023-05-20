import { ContainerLayoult } from "./ContainerLayoult"

export const SectionHeader = () => {

    return (
        <ContainerLayoult>
            <div className="flex items-start justify-between mt-5">
                <div className="max-w-[50%]">
                    <h2 className="font-semibold text-xl sm:text-2xl leading-6">Noticias destacadas</h2>
                    <div className="text-xs sm:text-sm mt-[10px]">
                        <span className="">{new Date().toDateString()}</span>
                    </div>
                </div>
                <div className="flex">
                    <div>
                        <h2 className="font-semibold text-xl sm:text-3xl">30°C</h2>
                        <span className="text-[0.6rem] sm:text-xs">Cartagena, CO</span>
                    </div>
                    <div>
                        <img className="w-[50px] h-[50px] sm:h-[60px] sm:w-[60px]" src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
                    </div>
                </div>
            </div>
        </ContainerLayoult>
    )
}