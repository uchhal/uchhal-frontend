import React, { useState } from 'react';
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
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
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
          <div>
          <button
              onClick={toggleModal}
              className="py-2 px-7 text-medium flex rounded-lg text-white bg-yellow-600 hover:bg-green-700"
            >
              submit
            </button>
            {modalVisible && (
        <div
          id="popup-modal"
          className="fixed  z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full max-w-full  "
        >
          <div className="relative w-full max-w-md max-h-full right-[-30%] top-[10%]">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 ">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={closeModal}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-6 text-center">
                <svg
                  className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Are you sure you want to submit this test?
                </h3>
                <button
                  type="button"
                  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                  onClick={_result}
                >
                  Yes, I am sure
                </button>
                <button
                  type="button"
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  onClick={closeModal}
                >
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default changingcard;
