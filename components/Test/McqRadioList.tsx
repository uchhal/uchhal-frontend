import React from "react";

function McqRadioList({ problem, onAnswerChange }) {
  const handleCodingAnswer = (event) => {
    const answer = event.target.value;
    onAnswerChange(problem._id, answer);
  };

  return (
    <div className="mb-10 font-semibold text-gray-900 ">
      <h1 className="mb-2 font-bold">{problem.title}</h1>
      <h4 className="mb-2">{problem.explanation}</h4>
      <ul className="w-[80%] text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {problem &&
          problem.options.map((opt, index) => (
            <li
              className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600"
              key={index}
            >
              <div className="flex items-center pl-3">
                <input
                  id={opt._id}
                  type="radio"
                  value={index}
                  onChange={handleCodingAnswer}
                  name={problem.title}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor={opt._id}
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {opt.option}
                </label>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default McqRadioList;
