import { ContainerLayoult } from "../ContainerLayoult"
import { SourceCard } from "./SourceCard"

export const SourceList = ({ sources }) => {

    return (
        <ContainerLayoult>
            <div className="mt-5 grid auto-cols-auto grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6
                     grid-flow-row gap-4">
                {
                    sources.map((source) => (
                        <SourceCard key={source.id} source={ source } />
                    ))
                }
            </div>
        </ContainerLayoult>
    )
}