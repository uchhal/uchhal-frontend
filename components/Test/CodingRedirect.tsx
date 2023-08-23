'use client';
import axios from "axios";
import React, { useEffect, useState } from "react";
import Workspace from "@/components/Workspace/Workspace";
import Link from "next/link";

type McqCardprops = {
    path:string
}

const McqCard:React.FC<McqCardprops> = ({path}) => {
    const title = path.replace(/ /g,"-");

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="px-6 py-4">{path}</td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white "
      >
        medium
      </th>
      <td className="px-6 py-4 capitalize">Coding</td>
      <td className="px-6 py-4">
      <Link
										className='hover:text-blue-600 cursor-pointer'
										href={`TestCoding/${title}`}
									>
										Modify
									</Link>
      </td>
    </tr>
  );
};

export default McqCard;

// function useGetoneProblem(uid: string) {
// 	const [problem, setProblem] = useState();

// 	useEffect(() => {
// 		const getProblems = async () => {

// 		try {
// 			const response = await axios.get('http://localhost:8082/coding-bank/'+uid);
// 			console.log("response: ", response);
// 			console.log(response.data);
// 			setProblem(response.data.data);
			
// 		} catch (error: any) {
// 			// toast.error(error.message, { position: "top-center", autoClose: 3000, theme: "dark" });
// 			// seterror(error.messsage);
// 		}
// 		};

// 		getProblems();
// 	}, []);
// 	return problem;
// }