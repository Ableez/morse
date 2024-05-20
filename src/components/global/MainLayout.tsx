import React from "react";
import BottomBar from "./bottom-bar";

type Props = { children: React.ReactNode };

const MainLayout = ({ children }: Props) => {
  return (
    <div>
      {children}
      <BottomBar />
    </div>
  );
};

export default MainLayout;
