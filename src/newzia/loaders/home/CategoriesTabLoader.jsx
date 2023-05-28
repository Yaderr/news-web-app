import { ContainerLayoult } from "../../components/ContainerLayoult"

export const CategoriesTabLoader = () => {

    return (
        <ContainerLayoult>
            <div className=" animate-pulse mt-5 overflow-y-hidden overflow-x-àuto py-4 select-none">
                <a className="py-2 text-gray-200 px-5 text-sm md:text-base bg-gray-200 rounded-full mr-5">General</a>
                <a className="py-2 text-gray-200 px-5 text-sm md:text-base bg-gray-200 rounded-full mr-5">Negocios</a>
                <a className="py-2 text-gray-200 px-5 text-sm md:text-base bg-gray-200 rounded-full mr-5">entretenimiento</a>
                <a className="py-2 text-gray-200 px-5 text-sm md:text-base bg-gray-200 rounded-full mr-5">Salud</a>
                <a className="py-2 text-gray-200 px-5 text-sm md:text-base bg-gray-200 rounded-full mr-5">Ciencia</a>
                <a className="py-2 text-gray-200 px-5 text-sm md:text-base bg-gray-200 rounded-full mr-5">Deportes</a>
                <a className="py-2 text-gray-200 px-5 text-sm md:text-base bg-gray-200 rounded-full mr-5">Tecnología</a>
            </div>
        </ContainerLayoult>
    )
}