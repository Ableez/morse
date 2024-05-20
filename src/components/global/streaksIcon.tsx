import { BatteryCharging } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const StreaksIcon = () => {
  return (
    <Button
      className="text-3xl text-yellow-500 hover:text-yellow-500"
      variant={"ghost"}
      size={"icon"}
    >
      <BatteryCharging />
    </Button>
  );
};

export default StreaksIcon;
