"use client";
import { mcq } from "@/utils/problems/page";
import { useEffect, useState } from "react";
import Changingcard from "./changingcard/changingcard";
import axios from "axios";
import AllQuestionSpace from "./allQuestionSpace/allQuestionSpace";
import QuizResultPage from "./quizResultPage";
import { AesDecryptUtil } from "@/utils/AesDecryptUtil";

type quizspaceprops = {
  subject?: string;
};

const QuizSpace:React.FC<quizspaceprops> = ({subject}) => {
  const [change, setChange] = useState(0);
  const [activequestion, setActivequestion] = useState(0);
  const [mcqProblem, setMcqProblem] = useState();
  const [result, setresult] = useState(false);

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
  const handleresult = async () => {
    setresult(!result);
  };

  useEffect(() => {
    const getProblems = async () => {
      try {
        let response;
        if (subject == "arithmatic") {
          response = await axios.get("http://localhost:8082/mcq/quiz");
        } else {
          response = await axios.get(
            "http://localhost:8082/mcq/quiz/" + subject
          );
        }
        let { data } = response.data;
        data = await AesDecryptUtil.aesDecrypt(data); // Decrypted data
        console.log("response: ", data);
        setMcqProblem(data);
      } catch (error: any) {
        // toast.error(error.message, { position: "top-center", autoClose: 3000, theme: "dark" });
        // seterror(error.messsage);
      }
    };

    getProblems();
  }, [subject]);

  useEffect(() => {}, [change, activequestion]);

  console.log(mcqProblem);

  return (
    <>
    {mcqProblem && result && <QuizResultPage questions={mcqProblem}/>}
    {!result && <div className="grid grid-cols-4 gap-4">
      <div className="h-auto ml-3 mt-9">
      {mcqProblem && <AllQuestionSpace 
      question={mcqProblem}
      total={(mcqProblem as any).length}
      _setManually={setActivequestion}
      _term={activequestion+1}/>}
      </div>
      {mcqProblem && (
        <div className="col-span-3">
        <Changingcard
          question={mcqProblem[activequestion]}
          total={(mcqProblem as any).length}
          _next={handlenext}
          _prev={handleprev}
          _result={handleresult}
          _term={activequestion+1}
          _change={setChange}
        />
        </div>
      )}
      </div>};
    </>
  );
};

export default QuizSpace;
