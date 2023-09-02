import { SubjectDetails } from "@/utils/types/problem";
import React from "react";

type SubjectCardProps = {
	subjectdata:SubjectDetails
};

const SubjectCard:React.FC<SubjectCardProps> = ({subjectdata}) => {
  return (
    <div
      className="max-w-sm p-6 rounded-lg shadow bg-gray-800 border-gray-700"
      id="subjectCardHome"
    >
      <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white border-gray-200">
          {subjectdata.displayname}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-400">
        {subjectdata.desc}
      </p>
    </div>
  );
};

export default SubjectCard;
