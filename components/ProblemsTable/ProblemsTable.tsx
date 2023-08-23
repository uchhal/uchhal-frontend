import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { problems } from "@/utils/problems/page";
import YouTube from "react-youtube";
import { DBProblem } from "@/utils/types/problem";
import axios from "axios";

type ProblemsTableProps = {
	setLoadingProblems: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProblemsTable: React.FC<ProblemsTableProps> = ({ setLoadingProblems }) => {
	const [youtubePlayer, setYoutubePlayer] = useState({
		isOpen: false,
		videoId: "",
	});
	const problems1 = useGetProblems(setLoadingProblems);
	console.log(problems1);
	
	const solvedProblems = useGetSolvedProblems();
	console.log("solvedProblems", solvedProblems);
	const closeModal = () => {
		setYoutubePlayer({ isOpen: false, videoId: "" });
	};

	useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === "Escape") closeModal();
		};
		window.addEventListener("keydown", handleEsc);

		return () => window.removeEventListener("keydown", handleEsc);
	}, []);

	return (
		<>
			<tbody className='text-black'>
				{problems1 ? (problems1.map((problem:any, idx:any) => {
					const difficulyColor =
						problem.difficulty === "easy"
							? "text-green-800"
							: problem.difficulty === "medium"
							? "text-yellow-800"
							: "text-red-800";
					return (
						<tr className={`${idx % 2 == 1 ? "bg-zinc-500" : ""}`} key={problem.id}>
							<th className='px-2 py-4 font-medium whitespace-nowrap text-dark-green-s'>
								{solvedProblems.includes(problem.id) && <BsCheckCircle fontSize={"18"} width='18' />}
							</th>
							<td className='px-6 py-4'>
									<Link
										className='hover:text-blue-600 cursor-pointer'
										href={`/problem/${problem.title.replace(/ /g, "-")}`}
									>
										{problem.title}
									</Link>
							</td>
							<td className={`px-6 py-4 ${difficulyColor}`}>{problem.difficulty}</td>
							<td className={"px-6 py-4"}>{problem.category}</td>
							<td className={"px-6 py-4"}>
								{problem.videoId ? (
									<AiFillYoutube
										fontSize={"28"}
										className='cursor-pointer hover:text-red-600'
										onClick={() =>
											setYoutubePlayer({ isOpen: true, videoId: problem.videoId as string })
										}
									/>
								) : (
									<p className='text-gray-400'>Coming soon</p>
								)}
							</td>
						</tr>
					);
				})
			):(
				problems.map((problem, idx) => {
					const difficulyColor =
						problem.dificulty === "Easy"
							? "text-green-800"
							: problem.dificulty === "Medium"
							? "text-yellow-800"
							: "text-red-800";
					return (
						<tr className={`${idx % 2 == 1 ? "bg-zinc-500" : ""}`} key={problem.id}>
							<th className='px-2 py-4 font-medium whitespace-nowrap text-dark-green-s'>
								{solvedProblems.includes(problem.id) && <BsCheckCircle fontSize={"18"} width='18' />}
							</th>
							<td className='px-6 py-4'>
								{/* {problem.link ? (
									<Link
										href={problem.link}
										className='hover:text-blue-600 cursor-pointer'
										target='_blank'
									>
										{problem.title}
									</Link>
								) : ( */}
									<Link
										className='hover:text-blue-600 cursor-pointer'
										href={`/problem/${problem.title}`}
									>
										{problem.title}
									</Link>
								{/* )} */}
							</td>
							<td className={`px-6 py-4 ${difficulyColor}`}>{problem.dificulty}</td>
							<td className={"px-6 py-4"}>{problem.category}</td>
							<td className={"px-6 py-4"}>
								{problem.videoId ? (
									<AiFillYoutube
										fontSize={"28"}
										className='cursor-pointer hover:text-red-600'
										onClick={() =>
											setYoutubePlayer({ isOpen: true, videoId: problem.videoId as string })
										}
									/>
								) : (
									<p className='text-gray-400'>Coming soon</p>
								)}
							</td>
						</tr>
					);
				})
			)}
			</tbody>
			{/* {youtubePlayer.isOpen && (
				<tfoot className='fixed top-0 left-0 h-screen w-screen flex items-center justify-center'>
					<div
						className='bg-black z-10 opacity-70 top-0 left-0 w-screen h-screen absolute'
						onClick={closeModal}
					></div>
					<div className='w-full z-50 h-full px-6 relative max-w-4xl'>
						<div className='w-full h-full flex items-center justify-center relative'>
							<div className='w-full relative'>
								<IoClose
									fontSize={"35"}
									className='cursor-pointer absolute -top-16 right-0'
									onClick={closeModal}
								/>
								<YouTube
									videoId={youtubePlayer.videoId}
									loading='lazy'
									iframeClassName='w-full min-h-[500px]'
								/>
							</div>
						</div>
					</div>
				</tfoot>
			)} */}
		</>
	);
};
export default ProblemsTable;

function useGetProblems(setLoadingProblems: React.Dispatch<React.SetStateAction<boolean>>) {
	const [problems, setProblems] = useState();

	useEffect(() => {
		const getProblems = async () => {
			setLoadingProblems(true);

		try {
			const response = await axios.get('http://localhost:8082/coding-bank/');
			console.log("response: ", response);
			console.log(response.data);
			setProblems(response.data.data);
			
		} catch (error: any) {
			// toast.error(error.message, { position: "top-center", autoClose: 3000, theme: "dark" });
			// seterror(error.messsage);
		}
		setLoadingProblems(false);
		};

		getProblems();
	}, [setLoadingProblems]);
	return problems;
}

function useGetSolvedProblems() {
	const [solvedProblems, setSolvedProblems] = useState<string[]>([]);
	const [user] = [null];

	useEffect(() => {
		const getSolvedProblems = async () => {

			// if (userDoc.exists()) {
			// 	setSolvedProblems(userDoc.data().solvedProblems);
			// }
		};

		if (user) getSolvedProblems();
		if (!user) setSolvedProblems([]);
	}, [user]);

	return solvedProblems;
}