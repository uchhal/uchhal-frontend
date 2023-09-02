type quizResultPageprops = {
  questions: any;
};

const quizResultPage: React.FC<quizResultPageprops> = ({ questions }) => {
  console.log(questions);
  return (
    <div className="grid grid-cols-1">
      {questions.map((question: any, index: number) => {
        return (
        <div className="min-h-screen flex items-center justify-center">
          {/* <Modal /> */}
          <div className="p-3 py-5 md:p-8 bg-white shadow rounded-lg max-w-[800px] w-11/12 min-h-[300px]">
            <p className="text-right pb-2 text-green-600">
              Number:{" "}
              <span>
                {sessionStorage.getItem(`answer-${index+1}`) == question.correct ? 1 : 0}/{1}
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
                          : sessionStorage.getItem(`answer-${index+1}`) ==
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
                {sessionStorage.getItem(`answer-${index+1}`)
                  ? sessionStorage.getItem(`answer-${index+1}`) == "1"
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
        </div>);
      })}
    </div>
  );
};

export default quizResultPage;
