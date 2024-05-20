"use client";

import React from "react";
import {
  Home,
  BookTextIcon,
  Sparkle,
  LayoutGrid,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { usePathname } from "next/navigation";
import NavbarBtn from "./bottom-bar-btn";

const navBtns = [
  {
    title: "Home",
    icon: <Home className="text-neutral-400 group-hover:text-neutral-700" />,
    iconFilled: <Home className="text-black" />,
    link: "/",
  },
  {
    title: "Courses",
    icon: (
      <BookTextIcon className="text-neutral-400 group-hover:text-neutral-700" />
    ),
    iconFilled: <BookTextIcon className="text-black" />,
    link: "/courses",
  },
  {
    title: "Claude",
    icon: <Sparkle className="text-neutral-400 group-hover:text-neutral-700" />,
    link: "/claude",
    iconFilled: <Sparkles className="fill-black group-hover:block" />,
  },
  {
    title: "Messages",
    icon: (
      <MessageCircle className="text-neutral-400 group-hover:text-neutral-700" />
    ),
    link: "/messages",
    iconFilled: <MessageCircle className="fill-black group-hover:block" />,
  },
  {
    title: "More",
    icon: (
      <LayoutGrid className="text-neutral-400 group-hover:text-neutral-700" />
    ),
    link: "/settings",
    iconFilled: <LayoutGrid className="fill-black group-hover:block" />,
  },
];

const BottomBar = () => {
  const pathName = usePathname();

  return (
    <div className="fixed bottom-0 grid w-full grid-cols-5 place-items-center border-t bg-white py-2">
      {navBtns.map(({ icon, iconFilled, title, link }) => {
        return (
          <NavbarBtn
            key={title}
            icon={icon}
            iconFilled={iconFilled}
            title={title}
            link={link}
            isActive={pathName === link}
          />
        );
      })}
    </div>
  );
};

export default BottomBar;
