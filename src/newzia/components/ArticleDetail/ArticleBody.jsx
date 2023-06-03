import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

export const ArticleBody = ({ content, url }) =>{

    return (
        <>
            <p className="text-lynch font-normal leading-7 text-sm md:text-xl mt-10">{content}</p>
            <div className="mt-5 flex">
                
                <a className="flex text-red-ribbon items-center hover:underline" href={ url } target="_blank" rel="noopener noreferrer">
                    Ver artículo
                    <ArrowTopRightOnSquareIcon className='w-5 h-5 ml-1' />
                </a>
            </div>
        </>
    )
}