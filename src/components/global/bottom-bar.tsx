import React from "react";

const BottomBar = () => {
  return (
    <div className="fixed bottom-0 left-1/2 grid w-full -translate-x-1/2 grid-flow-col gap-4 bg-purple-100 p-4">
      <div>Home</div>
      <div>Courses</div>
      <div>Ai</div>
      <div>Chats</div>
      <div>You</div>
    </div>
  );
};

export default BottomBar;
