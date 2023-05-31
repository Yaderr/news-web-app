import { ContainerLayoult } from "../../components/ContainerLayoult"

const ArticleCardLoader = () => {
    return(
        <div className="animate-pulse -z-10 inline-block md:mr-5 w-full md:w-[500px]">
            <div className="flex px-5 py-4 w-full h-[135px] md:w-[500px] md:h-[155px] bg-gray-200 rounded-[30px] md:rounded-[40px]">
                <div className="w-[50%] md:w-[35%] bg-cover bg-center rounded-[20px] md:rounded-[30px] bg-gray-300"></div>
                <div className="w-full ml-[15px] select-none">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center text-gray-300">
                            <div className="h-[12px] w-[50px] bg-gray-300 rounded-full"></div>
                            &#x2022;
                            <div className="h-[12px] w-[100px] bg-gray-300 rounded-full"></div>
                        </div>
                        <div className="p-2">
                            <div className="w-[16px] h-[16px] bg-gray-300 md:w-[24px] md:h-[24px] rounded-full"></div>
                        </div>
                    </div>

                    <div className="h-[20px] w-full bg-gray-300 rounded-full"></div>
                    <div className="h-[20px] w-[70%] bg-gray-300 rounded-full mt-2"></div>

                    <div className="h-[12px] w-[100px] bg-gray-300 rounded-full mt-2"></div>
                </div>
            </div>
        </div>
    )
}

export const ArticleListLoader = () => {

    return (
        <ContainerLayoult>
            <div className="mt-5 space-y-5">
                <ArticleCardLoader />
                <ArticleCardLoader />
                <ArticleCardLoader />
                <ArticleCardLoader />
                <ArticleCardLoader />
                <ArticleCardLoader />
                <ArticleCardLoader />
                <ArticleCardLoader />
            </div>
        </ContainerLayoult>
    )
}