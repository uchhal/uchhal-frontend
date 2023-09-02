"use client";
import McqEnd from "@/components/Test/McqEnd";
import McqTopicCard from "@/components/Test/McqTopicCard";
import axios from "axios";
import React, { useEffect, useState } from "react";

function MCQTopic() {
  const [question, setQuestion] = useState([]);
  useEffect(() => {
    const getProblems = async () => {
      try {
        const response = await axios.get("http://localhost:8082/mcq/");
        console.log("response: ", response);
        console.log(response.data);
        setQuestion(response.data.data);
      } catch (error: any) {
        // toast.error(error.message, { position: "top-center", autoClose: 3000, theme: "dark" });
        // seterror(error.messsage);
      }
    };

    getProblems();
  }, []);
  const [codingAnswers, setCodingAnswers] = useState([]); // Store coding answers

  const handleCodingAnswerChange = (questionId: string, answer: string) => {
    // Update the codingAnswers state based on the questionId
    localStorage.setItem(`${questionId}`, JSON.stringify(answer));
    setCodingAnswers((prevAnswers) => ({
      ...prevAnswers,

      [questionId]: localStorage.getItem(questionId),
    }));
  };

  return (
    <div className="mt-5 ml-10">
      {question &&
        question.map((problem, idx) => (
          <McqTopicCard
            key={idx}
            problem={problem}
            onAnswerChange={handleCodingAnswerChange}
          />
        ))}
      <McqEnd codingAnswers={codingAnswers} />
    </div>
  );
}

export default MCQTopic;
