import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";
import LearningPath from "../global/learning-path-card";
import { v4 } from "uuid";

const RecentCourses = () => {
  return (
    <div className="container">
      <div className="my-2 p-2">
        <h4 className="text-xl font-bold">Pick up where you left off</h4>
      </div>
      <Carousel
        className="w-full"
        opts={{
          align: "start",
        }}
      >
        <CarouselContent className="pl-1">
          {Array.from({
            length: 5,
          }).map((_) => {
            return (
              <CarouselItem key={v4()} className="md:basis-1/2">
                <LearningPath />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default RecentCourses;
