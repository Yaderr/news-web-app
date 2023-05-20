
export const CarouselItem = ({ article }) => {

    return (
        <div className="h-full w-full bg-cover bg-center rounded-[30px] border-2 border-gray-200" style={{backgroundImage: `url(${article.urlToImage})`}}>
            <div className="flex w-full h-full bg-gradient-to-t from-blue-vogue backdrop rounded-[30px]">
                <div className="absolute bottom-0 mx-[30px] sm:mx-[70px] mb-[44px] ">
                    <span className="inline-block px-3 py-2 bg-lynch rounded-full font-medium text-white text-xs mb-[10px]">Destacado</span>
                    <a href="/news/article" title={article.title} className="max-h-[200px] line-clamp-6 text-white text-sm font-bold md:text-2xl sm:w-[60%] hover:underline">
                        {article.title}
                    </a>
                    <div className="flex items-center mt-[10px] justify-between w-full">
                        <a href="/news/source/123" className="flex items-center space-x-2">
                            <img className="w-[30px] h-[30px] rounded-full" src="https://d3hjzzsa8cr26l.cloudfront.net/ca73e0f7-c574-11e8-8d12-4b6fc186e574.jpg" alt="" />
                            <strong className="text-white font-semibold	text-sm">{article.source.name}</strong>
                        </a>
                        <div>
                            <span className="text-athens-gray text-xs">{new Date(article.publishedAt).toDateString()}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}