"use client";
import { mcq } from "@/utils/problems/page";
import { useEffect, useState } from "react";
import Changingcard from "./changingcard/changingcard";

const quizspace = () =>{
    const [answersOfQuestion, setanswersOfQuestion] = useState(() => Array(mcq.length).fill(5));
    const [monitorQuestions, setMonitorQuestions] = useState(() => Array(mcq.length).fill(0));
    const [activequestion, setActivequestion] = useState(0);

    const handlenext = async () => {
        setActivequestion((prev) => (prev+1))
    }
    const handleprev = async () => {
        setActivequestion((prev) => (prev-1))
    }

    useEffect(()=>{

    },[monitorQuestions,activequestion]);


    return (
            <Changingcard question={mcq[activequestion]} total={mcq.length} _next = {handlenext} _prev = {handleprev}/>
            // <div>ram ram</div>
    );
}

export default quizspace;