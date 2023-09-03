"use client";
import McqTopicCard from "@/components/Test/McqTopicCard";
import { AesDecryptUtil } from "@/utils/AesDecryptUtil";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function MCQTopic() {
  const params = useParams();
  const subject = params.subject;
  const topicparam = params.topic;
  const topic = topicparam.replace(/-/g, " ");
  const [question, setQuestion] = useState([]);
  useEffect(() => {
    const getProblems = async () => {
      try {
        const response = await axios.post(
          `http://localhost:8082/mcq/fetch-topic`,
          { subject: subject, category: topic }
        );
        let { data } = response.data;
        data = await AesDecryptUtil.aesDecrypt(data); // Decrypted data
        setQuestion(data);
      } catch (error: any) {
        // toast.error(error.message, { position: "top-center", autoClose: 3000, theme: "dark" });
        // seterror(error.messsage);
        throw error;
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
    </div>
  );
}

export default MCQTopic;
