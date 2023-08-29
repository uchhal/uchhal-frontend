import SideBar from "@/components/Navbar/SideBar";
import Topbar from "@/components/Navbar/Topbar";
import Banner from "@/components/cards/Banner";
import SubjectCard from "@/components/cards/SubjectCard";
import React from "react";

const Subject = () => {
  return (
    <>
      <SideBar />
      <div id="subjectListHome" className="p-4 border-2 rounded-lg ">
        <Banner />
        <SubjectCard />
        <SubjectCard />
        <SubjectCard />
        <SubjectCard />
        <SubjectCard />
        <SubjectCard />
        <SubjectCard />
      </div>
    </>
  );
};

export default Subject;
