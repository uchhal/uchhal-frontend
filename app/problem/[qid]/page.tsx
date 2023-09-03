'use client';
import Topbar from "@/components/Navbar/Topbar";
import Workspace from "@/components/Workspace/Workspace";
import useHasMounted from "@/hooks/useHasMounted";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";


// const ProblemPage: React.FC<ProblemPageProps> = () => {
const ProblemPage = () => {
	const params = useParams();
	const uid = String(params.qid);
	console.log(uid);

	const problem = useGetoneProblem(uid);
	console.log(problem);
	
	
	// const hasMounted = useHasMounted();

	// if (!hasMounted) return null;

	return (
		<div>
			<Topbar />
			{problem && (<Workspace problem={problem} />)}
			{/* <Workspace /> */}
		</div>
	);
};
export default ProblemPage;

function useGetoneProblem(uid: string) {
	const [problem, setProblem] = useState();

	useEffect(() => {
		const getProblems = async () => {

		try {
			const response = await axios.get('http://localhost:8082/coding-bank/'+uid);
			console.log("response: ", response);
			console.log(response.data);
			setProblem(response.data.data);
			
		} catch (error: any) {
			// toast.error(error.message, { position: "top-center", autoClose: 3000, theme: "dark" });
			// seterror(error.messsage);
		}
		};

		getProblems();
	}, [uid]);
	return problem;
}