import SideBar from "@/components/Navbar/SideBar";
import Topbar from "@/components/Navbar/Topbar";
import Split from "react-split";
import Banner from "@/components/cards/Banner";
import SubjectCard from "@/components/cards/SubjectCard";
import { subject_details } from "@/utils/problems/page";
import { SubjectDetails } from "@/utils/types/problem";
import React from "react";

const HomepageMcqSubjects = () => {
  return (
    <>
      <SideBar />
      <div id="subjectListHome" className="p-4 border-2 rounded-lg ">
        <Banner />
        {subject_details.map((subjectdata:SubjectDetails, index:number) => {
          return (
            <SubjectCard subjectdata={subjectdata}/>
          );
        })}
      </div>
    </>
  );
};

export default HomepageMcqSubjects;