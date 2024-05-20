import CoursesCategory from "@/components/courses-tab/courses-category";
import LearningPathCats from "@/components/courses-tab/learning-path-cats";
import CoursePageNavbar from "@/components/courses-tab/navbar";
import React from "react";

const Courses = () => {
  return (
    <div>
      <CoursePageNavbar />
      <LearningPathCats />
      <div className="mt-8 p-4">
        <h4 className="text-2xl font-bold">Browse 100+ courses</h4>
      </div>
      <CoursesCategory />
    </div>
  );
};

export default Courses;
