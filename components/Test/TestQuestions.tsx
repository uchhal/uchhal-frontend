import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { useParams } from "next/navigation";
import McqCard from "./McqCard";
function TestQuestions() {
  const params = useParams();
  const uid = params.tid;
  const [mcqProblems, setMcqProblems] = useState([]);
  useEffect(() => {
    const getProblems = async () => {
      try {
        const response = await axios.get("http://localhost:8082/test/" + uid);
        setMcqProblems(response.data.mcqs);
      } catch (error: any) {
        // toast.error(error.message, { position: "top-center", autoClose: 3000, theme: "dark" });
        // seterror(error.messsage);
      }
    };

    getProblems();
  }, [setMcqProblems, uid]);
  return (
    <div className="relative overflow-x-auto mx-2 mt-2">
      <table className="w-full text-sm text-left text-gray-200 dark:text-gray-100">
        <thead className="text-xs text-white uppercase bg-gray-600  ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Question
            </th>
            <th scope="col" className="px-6 py-3">
              Points
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Modify
            </th>
          </tr>
        </thead>
        <tbody>
          {mcqProblems &&
            mcqProblems.map((problem, idx) => (
              <McqCard key={idx} problem={problem} path={uid} />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TestQuestions;
