import React from "react";
import Svg, { Path } from "react-native-svg";

const HomeIcon = ({
  filled,
  color,
}: {
  filled?: boolean;
  color: string;
}) => {
  if (filled) {
    return (
      <Svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color ?? "#000"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <Path d="M5 12l-2 0l9-9l9 9l-2 0" />
        <Path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
        <Path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6" />
      </Svg>
    );
  } else {
    return (
      <Svg width="28" height="28" viewBox="0 0 24 24" fill={color ?? "#000"}>
        <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <Path d="M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-1v-7a3 3 0 0 0 -2.824 -2.995l-.176 -.005h-2a3 3 0 0 0 -3 3v7h-1a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0m.293 11.707a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883 -.993l.117 -.007z" />
      </Svg>
    );
  }
};

export default HomeIcon;