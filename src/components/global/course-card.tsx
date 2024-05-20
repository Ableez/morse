import { PiIcon } from "lucide-react";
import React from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";
import { randomColor } from "@/lib/randomColorGenerator";
import { v4 } from "uuid";

type Props = {
  type?: "in-progress" | "simple";
  badge?: {
    active: boolean;
    content: string;
  };
};
const CourseCard = ({ badge, type }: Props) => {
  return (
    <div className="relative">
      {badge?.active && (
        <div
          key={v4()}
          className="absolute -top-2 left-2 grid aspect-video w-fit place-items-center rounded-full bg-primary px-2 py-1 align-middle text-[9px] font-medium text-white"
        >
          {badge.content}
        </div>
      )}
      <Card
        className={`my-1 grid aspect-square w-full place-items-center gap-0 rounded-3xl p-0 ring-4 ring-transparent duration-300 hover:border-neutral-400/10 hover:ring-neutral-200/60 ${type === "simple" && "md:border-neutral-200"}`}
      >
        <CardContent className="grid h-full w-full place-items-center p-4 align-middle">
          <div className="grid h-full w-full place-items-center gap-3 align-middle">
            <div
              className={`flex h-full w-full items-center justify-center rounded-xl ${randomColor() ?? "bg-primary/20"} p-6 text-center`}
            >
              <h4 className="text-4xl bg-blend-difference">
                <PiIcon width={26} />
              </h4>
            </div>

            {type === "in-progress" ?? (
              <>
                <div className="flex w-full place-items-center justify-start gap-1.5 align-middle text-xs font-medium text-primary">
                  <h4>3 Levels</h4>
                  <h4>•</h4>
                  <h4>5 Courses</h4>
                </div>

                <div className="w-full self-start">
                  <CardTitle>Foundational Math</CardTitle>
                </div>
                <Progress value={66} className="w-full" />
              </>
            )}
          </div>
        </CardContent>
      </Card>
      {type === "simple" && (
        <div className="grid place-items-center p-2 text-sm font-medium text-neutral-500">
          <h4>How LLMs Work</h4>
        </div>
      )}
    </div>
  );
};

export default CourseCard;
