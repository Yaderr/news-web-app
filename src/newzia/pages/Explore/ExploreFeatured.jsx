    import { categories } from "../../../assets/sample-data"
    import { ContainerLayoult } from "../../components/ContainerLayoult"
    import { XMarkIcon } from '@heroicons/react/24/outline'

    const recents = [
        { id: 1, query: 'Indonesia travel', time: '10/06/2023' },
        { id: 2, query: 'academy award', time: '10/06/2023' },
        { id: 3, query: 'entertainment uk', time: '10/06/2023' },
        { id: 4, query: 'pandemic situation', time: '10/06/2023' }
    ]

    export const ExploreFeatured = () => {
        
        return (
            <ContainerLayoult>
                <div className="mt-5">
                    {/* Recents */}
                    <h2 className="font-semibold text-blue-vogue">Búsquedas recientes</h2>
                    <div className="space-y-2 mt-5">
                        {
                            recents.map((recent) => (
                                <div key={recent.id} className="text-lynch flex justify-between hover:underline">
                                    <a className="w-full" href="./">{recent.query}</a>
                                    <button className="hover:bg-athens-gray transition duration-300 rounded-full p-1 right-0">
                                        <XMarkIcon className=" w-[15px] h-[15px]" />
                                    </button>
                                </div>
                            ))
                        }
                    </div>

                    {/* Categories */}
                    <h2 className="font-semibold text-blue-vogue mt-5">Caregorías</h2>
                    <div className="space-y-4">
                        {
                            categories.map((category) => (
                                
                                <a href={`../?category=${category.id}`} key={category.id} className="bg-gray-200 w-[150px] h-[200px] md:w-[200px] md:h-[300px] inline-block mr-4 md:mr-5 rounded-[30px] ring ring-transparent hover:ring-red-ribbon bg-cover transition-all duration-300 ease-in-out" style={{backgroundImage: `url('./icons/categories/${category.id}.jpg')`}}>
                                    <div className="flex flex-col justify-between h-full">
                                        <div className="p-5 flex flex-right">
                                            <button className="w-7 h-7 bg-white rounded-lg"></button>
                                        </div>
                                        <div className="p-5 text-white font-semibold bg-gradient-to-t from-blue-vogue rounded-b-[30px]">
                                            <span className="">{category.name}</span>
                                        </div>
                                    </div> 
                                </a>
                               
                            ))
                        }
                    </div>
                </div>
            </ContainerLayoult>
        )
    }