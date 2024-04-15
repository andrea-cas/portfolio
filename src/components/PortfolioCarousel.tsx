import { Image } from 'astro:assets';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import type { ProjectSlide } from '@/lib/contentful';

interface PortfolioCarouselProps {
  data: ProjectSlide[];
}

export const PortfolioCarousel: React.FC<PortfolioCarouselProps> = ({ data }) => {
	return (
  <Carousel
    className="w-full max-w-xs mx-auto mt-14"
    opts={{
      loop: true,
    }}
  >
    <CarouselContent>
      {data?.map((project, index) => (
        <CarouselItem key={index}>
          <a href={"/projects/" + project?.slug} className='flex flex-col justify-center items-center drop-shadow-sm'>
            <img src={project?.coverImage} alt={'Cover Image for ' + project?.title} width="100%" height="auto" />
            <h3 className='font-semibold text-center mt-2 md:text-lg'>{project?.title}</h3>
            <p className='text-light text-center mt-1'>{project?.shortDescription}</p>
          </a>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
	)
}
