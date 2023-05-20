import { ContainerLayoult } from "./ContainerLayoult"


const Category = ({ category }) => {
    return (
        <a className="py-2 px-5 text-sm text-blue-vogue hover:bg-blue-vogue hover:text-white rounded-full font-medium md:text-base cursor-pointer">
            { category.name }
        </a>
    )
}

export const CategoriesTab = ({ categories }) => {
    
    return (
        <ContainerLayoult>
            <div className="mt-5 space-x-5 overflow-y-hidden overflow-x-auto py-4 select-none">
                {
                    categories.map((category) => ( <Category key={ category.name } category={ category } />))
                }
            </div>
        </ContainerLayoult>
    )
}