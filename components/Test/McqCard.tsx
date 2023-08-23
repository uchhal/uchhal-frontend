import Link from "next/link";
import React from "react";

const McqCard = ({ problem, path }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="px-6 py-4">{problem.title}</td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white "
      >
        {problem.difficulty}
      </th>
      <td className="px-6 py-4 capitalize">{problem.category}</td>
      <td className="px-6 py-4">
        <Link href={`mcq/` + path}>Modify</Link>
      </td>
    </tr>
  );
};

export default McqCard;
