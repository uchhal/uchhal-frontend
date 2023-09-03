import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { useParams } from "next/navigation";
import McqCard from "./McqCard";
import CodingRedirect from "./CodingRedirect"
function TestQuestions() {
  const params = useParams();
  const uid = String(params.tid);
  const [mcqProblems, setMcqProblems] = useState([]);
  const [codingProblems, setCodingProblems] = useState([]);
  useEffect(() => {
    const getProblems = async () => {
      try {
        const response = await axios.get("http://localhost:8082/test/" + uid);
        setMcqProblems(response.data.mcqs);
        setCodingProblems(response.data.codings);
      } catch (error: any) {
        // toast.error(error.message, { position: "top-center", autoClose: 3000, theme: "dark" });
        // seterror(error.messsage);
      }
    };

    getProblems();
  }, [setMcqProblems, uid]);
  return (
    <div className="relative overflow-x-auto mx-2 mt-2">
      <table className="w-full text-sm text-left text-gray-400 dark:text-gray-500">
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
          {codingProblems &&
            codingProblems.map((problem, idx) => (
              <div key={idx}>
              <CodingRedirect path={problem} id = {uid} />
              </div>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TestQuestions;
