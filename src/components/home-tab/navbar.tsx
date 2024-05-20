import React from "react";
import StreaksIcon from "../global/streaksIcon";
import { BatteryCharging, BatteryIcon } from "lucide-react";

const HomeNavbar = () => {
  return (
    <div className="container">
      <div className="flex place-items-center justify-between py-8 align-middle">
        <h4 className="text-2xl font-bold">Hi, User</h4>
        <div className="flex place-items-center justify-between align-middle">
          <StreaksIcon />
          <StreaksIcon />
        </div>
      </div>

      <div>
        <div>
          <h4 className="font-medium text-neutral-500">3 Long streaks</h4>
        </div>
        <div className="grid grid-flow-col grid-cols-5 place-items-center justify-between gap-3 py-8 align-middle">
          <div className="grid aspect-square h-full w-full place-items-center rounded-full text-yellow-500 ring-2 ring-yellow-500">
            <BatteryCharging />
          </div>
          <div className="grid aspect-square h-full w-full place-items-center rounded-full text-yellow-500 ring-2 ring-yellow-500">
            <BatteryCharging />
          </div>
          <div className="grid aspect-square h-full w-full place-items-center rounded-full text-yellow-500 ring-2 ring-yellow-500">
            <BatteryCharging />
          </div>
          <div className="grid aspect-square h-full w-full place-items-center rounded-full text-neutral-400 ring-2 ring-neutral-300">
            <BatteryIcon />
          </div>
          <div className="grid aspect-square h-full w-full place-items-center rounded-full text-neutral-400 ring-2 ring-neutral-300">
            <BatteryIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar;
