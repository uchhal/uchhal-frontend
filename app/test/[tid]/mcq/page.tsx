"use client";
import McqEnd from "@/components/Test/McqEnd";
import McqRadioList from "@/components/Test/McqRadioList";
import { AesDecryptUtil } from "@/utils/AesDecryptUtil";
import axios from "axios";
import React, { useEffect, useState } from "react";

function MCQTest() {
  const [question, setQuestion] = useState([]);
  useEffect(() => {
    const getProblems = async () => {
      try {
        const response = await axios.get("http://localhost:8082/mcq/");
        let { data } = response.data;
        data = await AesDecryptUtil.aesDecrypt(data); // Decrypted data
        console.log("response: ", data);
        setQuestion(data);
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
