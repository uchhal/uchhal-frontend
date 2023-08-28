import React from "react";

const Banner = () => {
  return (
    <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h6 className="mb-2 text-xl font-bold text-gray-900 dark:text-white ">
        Learn from your mistake
      </h6>
      <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400 hidden md:block">
        Stay up to date and excel your career. Explore the website more today.
      </p>
    </div>
  );
};

export default Banner;
