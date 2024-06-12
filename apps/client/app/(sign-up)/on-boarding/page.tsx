import * as React from 'react';
// import Image from 'next/image';

import { Carousel, CarouselContent, CarouselItem } from '@wepl/ui/Carousel.tsx';
import Header from '@wepl/ui/components/Header/index.tsx';
import { Button } from '@wepl/ui/Button.tsx';
import Link from 'next/link';

export default function OnboardingPage() {
  const imageArray = [null, null];

  const RightHeader = () => {
    return (
      <Button className="hover:bg-inherit mr-12" variant={'ghost'} asChild>
        <Link href={'/user-info'} className="text-gray-400 text-base hover:text-white">
          건너뛰기
        </Link>
      </Button>
    );
  };

  return (
    <div className="relative h-screen w-full flex flex-col bg-gray-700">
      <Header right={<RightHeader />} />
      <section className="flex flex-col items-center justify-center text-center flex-grow">
        <Carousel className="w-full">
          <CarouselContent>
            {Array.from({ length: 2 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1 flex justify-center items-center">
                  {/* <Image src={imageArray[index]} alt="wepl" /> */}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
    </div>
  );
}
