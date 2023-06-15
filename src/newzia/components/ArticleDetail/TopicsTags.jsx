
const Topic = ({ topic }) => {
    return (
        <a href={`../explore/search?q=${topic.name}`} className="inline-block mr-2 py-2 px-5 text-sm bg-athens-gray text-blue-vogue hover:text-red-ribbon rounded-full font-medium md:text-base cursor-pointer">
            #
            <span className="capitalize">
                { topic.name }
            </span>
        </a>
    )
}

export const TopicsTags = ({ tags }) => {
    
    return (
        <div className="mt-5 space-y-3 py-4 select-none">
            {

                tags.map((topic) => (
                    <Topic key={topic.name} topic={topic} />
                ))
            }
        </div>
    )
}