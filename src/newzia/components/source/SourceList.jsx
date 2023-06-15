import { ContainerLayoult } from "../ContainerLayoult"
import { SourceCard } from "./SourceCard"

export const SourceList = ({ sources }) => {

    return (
        <ContainerLayoult>
            <div className="mt-5 space-y-4">
                {
                    sources.map((source) => (
                        <SourceCard key={source.id} source={ source } />
                    ))
                }
            </div>
        </ContainerLayoult>
    )
}