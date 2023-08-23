
type Changingcardprops = {
	question: Question;
    total:number;
    _next: () => void;
    _prev: () => void;
};

type Question={
    id:number,
    explaination:string,
    discription:string,
    options:string[],
    correctAnswer:number
}

const changingcard: React.FC<Changingcardprops> = ({question, total, _next, _prev}) => {
    return (
        <div className="min-h-screen flex items-center justify-center">
      {/* <Modal /> */}
      <div className="p-3 py-5 md:p-8 bg-white shadow rounded-lg max-w-[800px] w-11/12 min-h-[300px]">
        <p className="text-right pb-2 text-green-600">
          Number:{" "}
          <span>
            {question.id}/{total}
          </span>
        </p>
        <div className="mt-3">
          <p
            className="text-center font-medium text-2xl lg:text-3xl leading-loose"
            // dangerouslySetInnerHTML={{ __html: question }}
          >{question.discription}</p>
          <div className="grid grid-cols-1 my-5 space-y-2 place-content-center">
            {question.options.map((option, index) => {
              return (
                <button
                  onClick={_handleansered}
                  key={index}
                  className="bg-blue-500 w-4/5 rounded-lg mx-auto text-white p-2 hover:bg-blue-400 active:bg-green-700 focus:outline-none focus:ring focus:ring-violet-300"
                //   dangerouslySetInnerHTML={{
                //     __html: answer,
                //   }}
                    value={index}
                >{option}</button>
              );
            })}
          </div>
        </div>
        <div className="flex space-x-20 justify-center pt-4">
        {question.id > 1 && <button
            onClick={_prev}
            className="py-2 px-5 text-medium flex rounded-lg text-white bg-yellow-600 hover:bg-green-700"
          >
            Previous
          </button>}
          {question.id < total && <button
            onClick={_next}
            className="py-2 px-7 text-medium flex rounded-lg text-white bg-yellow-600 hover:bg-green-700"
          >
            Next
          </button>}
          {question.id == total && <button
            onClick={_next}
            className="py-2 px-7 text-medium flex rounded-lg text-white bg-yellow-600 hover:bg-green-700"
          >
            submit
          </button>}
        </div>
      </div>
    </div>
    );
}

export default changingcard;