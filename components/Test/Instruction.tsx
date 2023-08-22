import React from "react";

function Instruction() {
  return (
    <div className="ml-2 mr-2 mt-3">
      <h2 className="mb-2 text-lg font-bold text-gray-900 ">
        General Instructions:{" "}
      </h2>
      <ol className="max-w-full space-y-1 text-gray-900 list-decimal list-inside ">
        <li>
          <span className="font-semibold text-gray-900 ">Time Limit: </span> The
          total time allotted for this test is 1 hrs 30 minutes. Allocate your
          time wisely between the coding questions and the MCQ section.
        </li>
        <li>
          <span className="font-semibold text-gray-900 ">Plagiarism: </span>{" "}
          with Plagiarism is strictly prohibited. Ensure that the solutions and
          answers you provide are your own work.
        </li>
        <li>
          <span className="font-semibold text-gray-900 ">Contact:</span> If you
          have any questions or need clarifications regarding the test, please
          reach out to
        </li>
        <li>
          <span className="font-semibold text-gray-900 ">Good Luck:</span> We
          wish you the best of luck in completing the coding test. Focus on
          understanding the problems and demonstrating your coding skills
          effectively.
        </li>
      </ol>
    </div>
  );
}

export default Instruction;
