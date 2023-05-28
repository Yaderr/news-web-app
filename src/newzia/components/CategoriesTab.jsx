import { useSelector } from "react-redux"
import { ContainerLayoult } from "./ContainerLayoult"


const Category = ({ category, isSelected, index, selectCategory }) => {

    
    return (
        <a className={
            `${isSelected && 'bg-blue-vogue text-white'} 
            py-2 px-5 text-sm text-blue-vogue hover:bg-blue-vogue/80
            hover:text-white rounded-full font-medium md:text-base cursor-pointer`
        } onClick={() => selectCategory(index)}>
            { category.name }
        </a>
    )
}

export const CategoriesTab = ({ categories, selectedCategory, selectCategory }) => {
    
    
    
    return (
        <ContainerLayoult>
            <div className="mt-5 space-x-5 overflow-y-hidden overflow-x-auto py-4 select-none">
                {
                    categories.map((category, key) => ( <Category key={ category.name } category={ category } isSelected={ key===selectedCategory } index={ key } selectCategory={selectCategory} />))
                }
            </div>
        </ContainerLayoult>
    )
}