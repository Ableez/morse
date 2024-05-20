import RecentCourses from "@/components/home-tab/recent-courses";
import HomeNavbar from "@/components/home-tab/navbar";
import React from "react";
import Interests from "@/components/home-tab/Interests";

const Home = () => {
  return (
    <div>
      <HomeNavbar />
      <RecentCourses />
      <Interests />
    </div>
  );
};

export default Home;
