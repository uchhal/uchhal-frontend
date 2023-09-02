type AllMcqSpaceprops = {
  question: any;
  total: number;
  _setManually: React.Dispatch<React.SetStateAction<number>>;
  _term: number;
};

const allMcqSpace: React.FC<AllMcqSpaceprops> = ({
  question,
  total,
  _setManually,
  _term,
}) => {
  return (
    <>
      <div className="grid grid-cols-1 text-center justify-center mb-12">
        <div className="flex mt-5">
          <button
            className={`bg-white  w-12 h-12 rounded-full text-black p-2 border-4 border-indigo-500/75 `}
          >
            Q
          </button>
          <p className="ml-10"><strong>Not Opened</strong></p>
        </div>
        <div className="flex mt-5">
          <button
            className={`bg-violet-700  w-12 h-12 rounded-full text-black p-2 border-4 border-indigo-500/75 `}
          >
            Q
          </button>
          <p className="ml-10"><strong>Opened But Not Answered</strong></p>
        </div>
        <div className="flex mt-5">
          <button
            className={`bg-green-500  w-12 h-12 rounded-full text-black p-2 border-4 border-indigo-500/75 `}
          >
            Q
          </button>
          <p className="ml-10"><strong>Answered</strong></p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {question.map((option: any, index: number) => {
          return (
            <button
              onClick={() => _setManually(index)}
              key={index}
              className={` ${
                sessionStorage.getItem(`answer-${index + 1}`)
                  ? "bg-green-500"
                  : sessionStorage.getItem(`state-${index}`)
                  ? "bg-violet-700"
                  : "bg-white"
              }  w-12 h-12 rounded-full text-black p-2 border-4 border-indigo-500/75 `}
              //   dangerouslySetInnerHTML={{
              //     __html: answer,
              //   }}
              value={index}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default allMcqSpace;
