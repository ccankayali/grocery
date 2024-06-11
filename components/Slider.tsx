import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import type { Slider as SliderType } from '@/types';
import Image from 'next/image';

interface SliderProps {
  sliderList: SliderType[];
}

const Slider = ({ sliderList }: SliderProps) => {
  return (
    <Carousel>
      <CarouselContent>
        {sliderList.map((slider, index) => {
          const imageUrl = slider?.attributes?.url?.data?.[0]?.attributes?.url;

          if (!imageUrl) {
            return null;
          }

          const fullImageUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL ? `${process.env.NEXT_PUBLIC_BACKEND_API_URL.replace('/api', '')}${imageUrl}` : '';

          return (
            <CarouselItem key={index}>
              <Image
                unoptimized={true}
                src={fullImageUrl}
                width={700}
                height={300}
                alt='slider'
                className='p-7 w-full items-center md:h-[420px] object-cover rounded-xl'
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};

export default Slider;
