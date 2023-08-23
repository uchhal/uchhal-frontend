"use client";
import Topbar from "@/components/Navbar/Topbar";
import Instruction from "@/components/Test/Instruction";
import McqRadioList from "@/components/Test/McqRadioList";
import TestEnd from "@/components/Test/TestEnd";
import TestQuestions from "@/components/Test/TestQuestions";
import React from "react";

const TestPage = () => {
  return (
    <>
      <Topbar />

      <div className="ml-2">
        <Instruction />
        <TestQuestions />
        <TestEnd />
      </div>
    </>
  );
};

export default TestPage;
