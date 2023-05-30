import { ArticleList, CategoriesTab, NewsCarousel, SectionHeader, TopNabar } from "../components"
import { categories } from '../../assets/sample-data/'
import { useSelector } from "react-redux"
import { useFetchClimate, useNewsCategorySelector } from "../../hooks/"
import { SectionHeaderLoader } from "../loaders/home/SectionHeaderLoader"
import { CategoriesTabLoader } from "../loaders/home/CategoriesTabLoader"
import { NewsCarouselLoader } from "../loaders/home/NewsCarouselLoader"
import { ArticleListLoader } from "../loaders/home/ArticleListLoader"

export const HomePage = () => {

    const { selectedCategory, openwConfig } = useSelector(state => state.config)
    const { selectCategory, isLoading, articles } = useNewsCategorySelector(selectedCategory)
    const { climateState } = useFetchClimate(openwConfig)
    
    return (
        <>
            <TopNabar />
            {
                !isLoading? (<NewsCarousel articles={ articles } />) 
                : <NewsCarouselLoader />
            }
            {
                !climateState.isLoading? (
                    <SectionHeader
                        country={ climateState.data.sys.country }
                        city={ climateState.data.name }
                        temp={ climateState.data.main.temp }
                        weather={ climateState.data.weather[0].icon }
                    />
                )
                : <SectionHeaderLoader />
                
            }
            {
                !isLoading? (<CategoriesTab categories={ categories } selectedCategory={ selectedCategory } selectCategory={selectCategory} />)
                : <CategoriesTabLoader />
                
            }
            {
                !isLoading? (<ArticleList articles={ articles } />) 
                : <ArticleListLoader />
            }
        </>
    )
}