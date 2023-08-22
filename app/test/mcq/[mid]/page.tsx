"use client";
import McqEnd from "@/components/Test/McqEnd";
import McqRadioList from "@/components/Test/McqRadioList";
import axios from "axios";
import React, { useEffect, useState } from "react";

function MCQTest() {
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

  const handleCodingAnswerChange = (questionId, answer) => {
    // Update the codingAnswers state based on the questionId
    setCodingAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const handleCodingSubmit = () => {
    console.log(codingAnswers); // This will have the coding answers for each question
    // Send codingAnswers to the server using axios or any other method
  };
  return (
    <div className="mt-5 ml-10">
      {question &&
        question.map((problem, idx) => (
          <McqRadioList
            key={idx}
            problem={problem}
            onAnswerChange={handleCodingAnswerChange}
          />
        ))}
      {/* <McqRadioList />
      <McqRadioList />
      <McqRadioList />
      <McqRadioList />
      <McqRadioList /> */}
      <McqEnd codingAnswers={codingAnswers} />
    </div>
  );
}

export default MCQTest;
