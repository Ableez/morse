"use client";
import React, { useEffect, useMemo, useState } from "react";
import CourseCard from "../global/course-card";
import { Button } from "../ui/button";
import Link from "next/link";
import { v4 } from "uuid";

const CoursesCategory = () => {
  const categoryTabs = useMemo(() => {
    return [
      { title: "New Courses", link: "new-courses" },
      { title: "Math", link: "math" },
      { title: "Computer Science", link: "cs" },
      { title: "Science", link: "science" },
      { title: "Data", link: "data" },
      { title: "Puzzles", link: "puzzles" },
    ];
  }, []);

  const [pathName, setPathName] = useState<undefined | string>("");
  const [currTab, setCurrTab] = useState(() => {
    return categoryTabs.find((tab) => tab.link === pathName);
  });

  useEffect(() => {
    if (window !== undefined) {
      setPathName(window.location.href.split("#")[1]);
      setCurrTab(categoryTabs.find((tab) => tab.link === pathName));
    }
  }, [categoryTabs, pathName]);

  return (
    <div>
      <div className="sticky top-0 z-[60] mb-8 flex place-items-center gap-5 overflow-y-scroll bg-white px-4 py-2 align-middle">
        {categoryTabs.map((tab) => (
          <Link
            href={`#${tab.link}`}
            key={tab.link}
            onClick={() => setCurrTab(tab)}
          >
            <Button
              className="rounded-full"
              variant={currTab?.link === tab.link ? "default" : "outline"}
            >
              {tab.title}
            </Button>
          </Link>
        ))}
      </div>
      {categoryTabs.map((tab) => (
        <CategoryList
          key={tab.link}
          title={tab.title ?? "New Courses"}
          id={tab.link ?? "new-courses"}
        />
      ))}
    </div>
  );
};

export default CoursesCategory;

type CategoryListProps = {
  title: string;
  id: string;
};

const CategoryList = ({ title, id }: CategoryListProps) => {
  return (
    <div className="container pt-4" id={id}>
      <div className="my-6">
        <h4 className="text-xl font-bold ">{title}</h4>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {Array.from({ length: 9 }).map((_) => {
          return (
            <CourseCard
              key={v4()}
              type={"simple"}
              badge={{ active: true, content: "New" }}
            />
          );
        })}
      </div>
    </div>
  );
};
