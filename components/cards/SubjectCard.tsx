import React from "react";

const SubjectCard = () => {
  return (
    <div
      className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      id="subjectCardHome"
    >
      <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Aptitude Test
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
        Go to this step by step guideline process on how to certify for your
        weekly benefits:
      </p>
    </div>
  );
};

export default SubjectCard;
