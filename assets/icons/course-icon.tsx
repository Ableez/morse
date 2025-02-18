import React from "react";
import Svg, { Path } from "react-native-svg";

type Props = {};

const CourseIcon = ({ filled, color }: { filled?: boolean; color: string }) => {
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
      <Path d="M5 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
      <Path d="M9 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
      <Path d="M5 8h4" />
      <Path d="M9 16h4" />
      <Path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041z" />
      <Path d="M14 9l4 -1" />
      <Path d="M16 16l3.923 -.98" />
    </Svg>
  );
};

export default CourseIcon;
