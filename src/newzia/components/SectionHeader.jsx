import { ContainerLayoult } from "./ContainerLayoult"

export const SectionHeader = ({ country, city, temp, weather }) => {

    return (
        <ContainerLayoult>
            <div className="flex items-start justify-between mt-5">
                <div className="max-w-[50%]">
                    <h2 className="font-semibold text-xl sm:text-2xl leading-6">Noticias destacadas</h2>
                    <div className="text-xs sm:text-sm mt-[10px]">
                        <span className="">{new Date().toLocaleDateString(false, { weekday: "long", month: "long", day: "numeric" })}</span>
                    </div>
                </div>
                <div className="flex">
                    <div>
                        <h2 className="font-semibold text-xl sm:text-3xl">{Math.floor(temp)}°C</h2>
                        <span className="text-[0.6rem] sm:text-xs">{city}, {country}</span>
                    </div>
                    <div>
                        <img className="w-[50px] h-[50px] sm:h-[60px] sm:w-[60px]" src={`https://openweathermap.org/img/wn/${weather}@2x.png`} alt="" />
                    </div>
                </div>
            </div>
        </ContainerLayoult>
    )
}