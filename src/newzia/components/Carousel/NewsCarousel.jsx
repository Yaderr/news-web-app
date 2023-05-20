import { Carousel } from "flowbite-react"
import { ContainerLayoult } from "../ContainerLayoult"
import { CarouselItem } from "./CarouselItem"

const carouselTheme = {
    indicators: {
        active: {
            off: 'bg-athens-gray/70',
            on: 'bg-red-ribbon'
        }
    },
    item: {
        
    },
    root: {
        leftControl: 'absolute hidden top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none sm:flex',
        rightControl: 'absolute hidden top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none sm:flex'
    }
}

export const NewsCarousel = ({ articles }) => {

    return (
        <ContainerLayoult>
            <div className="h-[372px] mt-5">
            <Carousel slide={false} className="" theme={carouselTheme}>
                {
                    articles.map(art => (
                        <CarouselItem key={art.publishedAt} article={art} />
                    ))
                }
            </Carousel>
        </div>
        </ContainerLayoult>
    )
}