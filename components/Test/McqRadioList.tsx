import React, { useState } from "react";

function McqRadioList({ problem, onAnswerChange }) {
  const [isChecked, setIsChecked] = useState(false);
  const handleCodingAnswer = (event) => {
    const answer = event.target.value;
    localStorage.setItem(problem._id, JSON.stringify(answer))
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
                  id={opt}
                  type="radio"
                  value={index}
                  // defaultChecked ={localStorage.getItem(problem._id) === index.toString()}          
                  
                  onChange={handleCodingAnswer}
                  name={problem.description}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  // checked = {localStorage.getItem(opt._id)== (index) ? true: true}
                  // checked = {localStorage.getItem(problem._id) == index.toString()} 
                />
                <label
                  htmlFor={opt}
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {opt}
                </label>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default McqRadioList;
