import { PiIcon } from "lucide-react";
import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { randomColor } from "@/lib/randomColorGenerator";

const LearningPath = () => {
  return (
    <Card className="grid aspect-square w-full place-items-center gap-0 rounded-3xl p-0">
      <CardContent className="grid h-full w-full place-items-center p-4 align-middle">
        <div className="grid h-full w-full place-items-center gap-4 align-middle">
          <div
            className={`flex h-full w-full items-center justify-center rounded-xl ${randomColor() ?? "bg-primary/20"} row-span-3 p-6 text-center`}
          >
            <h4 className="text-4xl bg-blend-difference">
              <PiIcon width={26} />
            </h4>
          </div>

          <div className="flex w-full place-items-center justify-start gap-2 align-middle text-sm text-neutral-500">
            <h4>3 Levels</h4>
            <h4>•</h4>
            <h4>5 Courses</h4>
          </div>

          <div className="w-full self-start">
            <CardTitle className="text-xl md:text-2xl">
              Foundational Math
            </CardTitle>
            <CardDescription className="mt-1 text-sm text-neutral-500">
              Master essential algebra skills
            </CardDescription>
          </div>

          <Progress value={24} className="w-full" />
          <Button className="w-full">Continue</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LearningPath;
