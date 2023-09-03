import React, { useState, useEffect } from "react";
type quizResultPageprops = {
  questions: any;
};

const quizResultPage: React.FC<quizResultPageprops> = ({ questions }) => {
  console.log(questions);
  const [questionCount, setQuestionCount] = useState(0);
  const [correctAnsCount, setCorrectAnsCount] = useState(0);
  const setCount = (val: boolean) => {
    useEffect(() => {
      const handleChange = () => {
        setQuestionCount((questionCount) => questionCount + 1);
        if (val) {
          setCorrectAnsCount((prev) => prev + 1);
        }
      };
      handleChange();
    }, [questions]);
  };

  return (
    <div className="grid grid-cols-1">
      <div className="flex">
        <div className="flex mx-2">total questions: {questionCount}</div>
        <div className="flex mx=2"> marks u get: {correctAnsCount} </div>
      </div>
      {questions.map((question: any, index: number) => {
        setCount(
          sessionStorage.getItem(`answer-${index + 1}`) == question.correct
        );
        return (
          <div
            className="min-h-screen flex items-center justify-center"
            key={index}
          >
            {/* <Modal /> */}
            <div className="p-3 py-5 md:p-8 bg-white shadow rounded-lg max-w-[800px] w-11/12 min-h-[300px]">
              <p className="text-right pb-2 text-green-600">
                Number:{" "}
                <span>
                  {sessionStorage.getItem(`answer-${index + 1}`) ==
                  question.correct
                    ? 1
                    : 0}
                  /{1}
                </span>
              </p>
              <div className="mt-3">
                <p
                  className="text-center font-medium text-2xl lg:text-3xl leading-loose"
                  // dangerouslySetInnerHTML={{ __html: question }}
                >
                  {question.description}
                </p>
                <div className="grid grid-cols-1 my-5 space-y-2 place-content-center">
                  {question.options.map((option: string, indexx: number) => {
                    return (
                      <button
                        key={indexx}
                        className={` ${
                          String(indexx) == question.correct
                            ? "bg-green-500"
                            : sessionStorage.getItem(`answer-${index + 1}`) ==
                              String(indexx)
                            ? "bg-red-500"
                            : "bg-blue-500"
                        }  w-4/5 rounded-lg mx-auto text-white p-2`}
                        //   dangerouslySetInnerHTML={{
                        //     __html: answer,
                        //   }}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
                <p>
                  {sessionStorage.getItem(`answer-${index + 1}`)
                    ? sessionStorage.getItem(`answer-${index + 1}`) == question.correct
                      ? "Correct Answer"
                      : "Wrong Answer"
                    : "Didn't Answered"}
                </p>
                <p
                  className="text-center font-medium text-1xl lg:text-2xl leading-loose"
                  // dangerouslySetInnerHTML={{ __html: question }}
                >
                  {question.explanation}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default quizResultPage;
