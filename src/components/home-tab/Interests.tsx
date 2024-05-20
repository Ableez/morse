import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import CourseCard from "../global/course-card";
import { v4 } from "uuid";

const Interests = () => {
  return (
    <div className="container">
      <div className="my-2 flex place-items-center justify-between p-2 align-middle">
        <h4 className="text-xl font-bold">Interest</h4>
        <Link href={"/courses"}>
          <Button
            variant={"ghost"}
            className="flex place-items-center justify-between gap-2 p-0 align-middle text-primary"
          >
            More
            <ArrowRight width={14} />
          </Button>
        </Link>
      </div>
      <Carousel
        className="w-full"
        opts={{
          align: "start",
        }}
      >
        <CarouselContent className="-0.5 p-0">
          {Array.from({
            length: 5,
          }).map((_) => {
            return (
              <CarouselItem key={v4()} className="basis-[70%]">
                <CourseCard />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Interests;
