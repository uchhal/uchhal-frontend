"use client";
import { mcq } from "@/utils/problems/page";
import { useEffect, useState } from "react";
import Changingcard from "./changingcard/changingcard";
import axios from "axios";
import AllQuestionSpace from "./allQuestionSpace/allQuestionSpace";
import QuizResultPage from "./quizResultPage";



const quizspace = () => {
  const [change, setChange] = useState(0);
  const [activequestion, setActivequestion] = useState(0);
  const [mcqProblem, setMcqProblem] = useState();

  const handlenext = async () => {
    setActivequestion((prev) => prev + 1);
    if (!(sessionStorage.getItem(`state-${activequestion}`) == "2"))
      sessionStorage.setItem(`state-${activequestion}`, "1");
  };
  const handleprev = async () => {
    setActivequestion((prev) => prev - 1);
    if (!(sessionStorage.getItem(`state-${activequestion}`) == "2"))
      sessionStorage.setItem(`state-${activequestion}`, "1");
  };

  useEffect(() => {
    const getProblems = async () => {
      try {
        const response = await axios.get("http://localhost:8082/mcq");
        setMcqProblem(response.data.data);
        
      } catch (error: any) {
        // toast.error(error.message, { position: "top-center", autoClose: 3000, theme: "dark" });
        // seterror(error.messsage);
      }
    };

    getProblems();
  }, []);

  useEffect(() => {}, [change, activequestion]);

  console.log(mcqProblem);

  return (
    // <>
    // {mcqProblem && <QuizResultPage questions={mcqProblem}/>}
    // </>
    <div className="grid grid-cols-4 gap-4">
      <div className="h-auto ml-3 mt-9">
      {mcqProblem && <AllQuestionSpace 
      question={mcqProblem}
      total={mcqProblem.length}
      _setManually={setActivequestion}
      _term={activequestion+1}/>}
      </div>
      {mcqProblem && (
        <div className="col-span-3">
        <Changingcard
          question={mcqProblem[activequestion]}
          total={mcqProblem.length}
          _next={handlenext}
          _prev={handleprev}
          _term={activequestion+1}
          _change={setChange}
        />
        </div>
      )}
    </div>
  );
};

export default quizspace;
