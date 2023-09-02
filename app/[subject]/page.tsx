"use client";
import SideBar from "@/components/Navbar/SideBar";
import Topbar from "@/components/Navbar/Topbar";
import TopicCard from "@/components/cards/TopicCard";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";



const Subject = () => {
  const params = useParams();
	const subject = params.subject;
	console.log(subject);

  const subjecttopics = useGetSubjectTopics(subject);
	console.log(subjecttopics);


  return (
    <>
      <Topbar />
      <SideBar/>
      {subjecttopics && (<div id="subjectListHome" className="p-4 border-2 rounded-lg ">
        {subjecttopics.map((topicname:string, index:number) => {
          return (
            <TopicCard topicname={topicname}/>
          );
        })}
      </div>)}
	  <div id="subjectListHome" className="p-4 border-2 rounded-lg ">
	  <Link
                href={`/quiz/${subject}`}
              >
	  	<TopicCard topicname={`take a ${subject} test`}/>
		</Link>
	  </div>
    </>
  );
};

export default Subject;

function useGetSubjectTopics(subjectname: string) {
	const [topics, setTopics] = useState();

	useEffect(() => {
		const getProblems = async () => {

		try {
      // const data = { subject:subjectname };
			const response = await axios.post('http://localhost:8082/mcq/topics', { subject:subjectname });
			console.log("response: ", response);
      console.log(subjectname);
      
			console.log(response.data);
			setTopics(response.data.data);
			
		} catch (error: any) {
			// toast.error(error.message, { position: "top-center", autoClose: 3000, theme: "dark" });
			// seterror(error.messsage);
		}
		};

		getProblems();
	}, []);
	return topics;
}
