import { ArticleList, CategoriesTab, NewsCarousel, SectionHeader, TopNabar } from "../components"
import { articles, categories } from '../../assets/sample-data/'

export const HomePage = () => {

    return (
        <>
            <TopNabar />
            <NewsCarousel articles={ articles } />
            <SectionHeader />
            <CategoriesTab categories={ categories } />
            <ArticleList articles={ articles } />
        </>
    )
}