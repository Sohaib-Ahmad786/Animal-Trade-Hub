// import React from 'react'
"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import Bottom from "./Bottom";
function PopularCategories() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );
  const categoryImages = [
    { src: "/Cow.jpg", alt: "Cows", title: "Cows" },
    { src: "/goat.jpg", alt: "Goats", title: "Goats" },
    { src: "/hen male.jpg", alt: "Hen Male", title: "Hen" },
    { src: "/hen female.jpg", alt: "Poultry", title: "Hen" },
    { src: "/cattle.jpg", alt: "cattle", title: "cattle" },
  ];
  return (
    <div className="flex flex-col items-center mt-2">
      <Carousel
        plugins={[plugin.current]}
        className=" lg:w-[40vw] md:w-[40vw] sm:w-full "
      >
        <CarouselContent>
          {categoryImages.map((category, index) => (
            <CarouselItem key={index}>
              <div className="p-3">
                <Card className="bg-black bg-cover hover:shadow-emerald-900 rounded-xl overflow-hidden">
                  <CardContent className="p-0 w-full h-[40vh] group flex justify-end items-end">
                    <img
                      src={category.src}
                      alt={category.alt}
                      className="w-full h-full object-contain " // object-cover se image card mein fit ho jaye gi
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default PopularCategories;
