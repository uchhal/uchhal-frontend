"use client";
import { mcq } from "@/utils/problems/page";
import { useEffect, useState } from "react";
import Changingcard from "./changingcard/changingcard";
import axios from "axios";

const quizspace = () =>{
    const [change, setChange] = useState(0);
    const [activequestion, setActivequestion] = useState(0);
    const [mcqProblem, setMcqProblem] = useState([]);

    const handlenext = async () => {
        setActivequestion((prev) => (prev+1))
        if(!(sessionStorage.getItem(`state-${activequestion}`) == "2"))
            sessionStorage.setItem(`state-${activequestion}`, "1");
    }
    const handleprev = async () => {
        setActivequestion((prev) => (prev-1))
        if(!(sessionStorage.getItem(`state-${activequestion}`) == "2"))
            sessionStorage.setItem(`state-${activequestion}`, "1");
    }

    useEffect(()=>{
        const getProblems = async () => {
            try {
              const response = await axios.get("http://localhost:8082/mcq/quiz");
              setMcqProblem(response.data);
            } catch (error: any) {
              // toast.error(error.message, { position: "top-center", autoClose: 3000, theme: "dark" });
              // seterror(error.messsage);
            }
          };
      
          getProblems();
    },[]);

    useEffect(()=>{

    },[change,activequestion]);


    return (
            <Changingcard question={mcqProblem[activequestion]} total={mcq.length} _next={handlenext} _prev={handleprev} _term={activequestion} _change={setChange}/>
            // <div>ram ram</div>
    );
}

export default quizspace;