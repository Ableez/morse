import { BatteryCharging } from "lucide-react";
import React from "react";

const CoursePageNavbar = () => {
  return (
    <div className="container sticky top-0 flex place-items-center justify-end border-b py-4 align-middle font-semibold shadow-sm z-50 bg-white">
      <div className="flex place-items-center justify-between gap-1 align-middle">
        <h4 className="text-xl text-neutral-500">3</h4>
        <span className="text-yellow-500">
          <BatteryCharging />
        </span>
      </div>
    </div>
  );
};

export default CoursePageNavbar;
