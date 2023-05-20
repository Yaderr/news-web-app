
const Topic = ({ topic }) => {
    return (
        <a href="tags/123" className="inline-block mr-2 py-2 px-5 text-sm bg-athens-gray text-blue-vogue hover:text-red-ribbon rounded-full font-medium md:text-base cursor-pointer">
            { topic.name }
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