import React from "react";
import LearningPath from "../global/learning-path-card";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { v4 } from "uuid";

const LearningPathCats = () => {
  return (
    <div className="container mt-6">
      <div className="grid gap-1 py-6">
        <h4 className="text-2xl font-bold">Learning Paths</h4>
        <p className="text-neutral-700">Step-by-step paths to mastery</p>
      </div>
      <Carousel
        className="w-full pl-1"
        opts={{
          align: "start",
        }}
      >
        <CarouselContent className="pl-1">
          {Array.from({
            length: 8,
          }).map((_) => {
            return (
              <CarouselItem key={v4()}>
                <LearningPath />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default LearningPathCats;
