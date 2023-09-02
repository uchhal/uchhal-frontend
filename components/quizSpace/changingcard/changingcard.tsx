type Changingcardprops = {
  question: any;
  total: number;
  _next: () => void;
  _prev: () => void;
  _result: () => void;
  _term: number;
  _change: React.Dispatch<React.SetStateAction<number>>;
};

type Question = {
  id: number;
  explaination: string;
  description: string;
  options: string[];
  correct: number;
};

const changingcard: React.FC<Changingcardprops> = ({
  question,
  total,
  _next,
  _prev,
  _result,
  _term,
  _change,
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* <Modal /> */}
      <div className="p-3 py-5 md:p-8 bg-white shadow rounded-lg max-w-[800px] w-11/12 min-h-[300px]">
        <p className="text-right pb-2 text-green-600">
          Number:{" "}
          <span>
            {_term}/{total}
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
            {question.options.map((option:string, index:number) => {
              return (
                <button
                  onClick={() => (
                    sessionStorage.setItem(`answer-${_term}`, String(index)),
                    sessionStorage.setItem(`state-${_term}`, "2"),
                    _change((prev) => prev + 1)
                  )}
                  key={index}
                  className={` ${
                    sessionStorage.getItem(`answer-${_term}`) == String(index)
                      ? "bg-green-500 ring-violet-300"
                      : "bg-blue-500"
                  }  w-4/5 rounded-lg mx-auto text-white p-2`}
                  //   dangerouslySetInnerHTML={{
                  //     __html: answer,
                  //   }}
                  value={index}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
        <div className="flex space-x-20 justify-center pt-4">
          {_term > 1 && (
            <button
              onClick={_prev}
              className="py-2 px-5 text-medium flex rounded-lg text-white bg-yellow-600 hover:bg-green-700"
            >
              Previous
            </button>
          )}
          {_term < total && (
            <button
              onClick={_next}
              className="py-2 px-7 text-medium flex rounded-lg text-white bg-yellow-600 hover:bg-green-700"
            >
              Next
            </button>
          )}
          {_term == total && (
            <button
              onClick={_result}
              className="py-2 px-7 text-medium flex rounded-lg text-white bg-yellow-600 hover:bg-green-700"
            >
              submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default changingcard;
