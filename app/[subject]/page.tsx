"use client";
import SideBar from "@/components/Navbar/SideBar";
import Topbar from "@/components/Navbar/Topbar";
import TopicCard from "@/components/cards/TopicCard";
import { AesDecryptUtil } from "@/utils/AesDecryptUtil";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Subject = () => {
  const params = useParams();
  const subject = String(params.subject);
  console.log(subject);

  const subjecttopics = useGetSubjectTopics(subject);
  console.log(subjecttopics);
  // sessionStorage.clear();

  return (
    <>
      <Topbar />
      <SideBar/>
      {subjecttopics && (<div id="subjectListHome" className="p-4 border-2 rounded-lg ">
        {(subjecttopics as any).map((topicname:string, index:number) => {
          return (
             <TopicCard key={index} topicname={topicname} subject={String(subject)}/>
          );
        })}
      </div>)}
	  <div id="subjectListHome" className="p-4 border-2 rounded-lg ">
	  <Link
                href={`/quiz/${subject}`}
              >
	  	<div>{`take a ${subject} test`}</div>
		</Link>
	  </div>
    </>
  );
};

export default Subject;

function useGetSubjectTopics(subjectname: string) {
  const [topics, setTopics] = useState();
  console.log(subjectname);
  

  useEffect(() => {
    const getProblems = async () => {
      try {
        // const data = { subject:subjectname };
        const response = await axios.post("http://localhost:8082/mcq/topics", {
          subject: subjectname,
        });
        let { data } = response.data;
        data = await AesDecryptUtil.aesDecrypt(data); // Decrypted data
        console.log("response: ", data);
        setTopics(data);
      } catch (error: any) {
        // toast.error(error.message, { position: "top-center", autoClose: 3000, theme: "dark" });
        // seterror(error.messsage);
      }
    };

    getProblems();
  }, [subjectname]);
  return topics;
}
