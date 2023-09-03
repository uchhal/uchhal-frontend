import React, { useState } from "react";
import AccordionItem from "./ToggleAccordion";

type mcqtopiccardprops = {
  problem:any;
  onAnswerChange:any;
}

const McqTopicCard:React.FC<mcqtopiccardprops> = ({ problem, onAnswerChange }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [explanTab, setExplainTab] = useState(false);
  const [choose, setChoose] = useState(4);
  const handleCodingAnswer = (event:any) => {
    const answer = event.target.value;
    const flagAns = answer == problem.correct ? true : false;
    setIsChecked(true);
    setChoose(answer);
    console.log("lfdf", flagAns);
    onAnswerChange(problem._id, answer);
  };

  return (
    <div className="mb-10 font-semibold text-gray-900 ">
      <h4 className="mb-2">{problem.description}</h4>
      <ul className="w-[80%] text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {problem &&
          problem.options.map((opt:string, index:number) => (
            <li
              className={`w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600 ${
                isChecked && explanTab &&
                (index == problem.correct
                  ? "bg-green-600"
                  : choose == index
                  ? "bg-red-600"
                  : "")
              }`}
              key={index}
            >
              <div className="flex items-center pl-3">
                <input
                  id={problem.description}
                  type="radio"
                  value={index}
                  onChange={handleCodingAnswer}
                  name={problem.description}
                  className={`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 `}
                  disabled= {explanTab}
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
      <div
        id="accordion-open"
        data-accordion="open"
        className="w-[80%]"
        onClick={() => setExplainTab(true)}
      >
        <AccordionItem
          title={"veiw explanation"}
          content={problem.explanation}
          isChecked={isChecked}
          answer={problem.options[problem.correct]}
        />
      </div>
    </div>
  );
}

export default McqTopicCard;
