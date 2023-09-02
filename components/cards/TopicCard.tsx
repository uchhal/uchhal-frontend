import React from "react";

type TopicCardProps = {
	topicname:string,
};

const TopicCard:React.FC<TopicCardProps> = ({topicname}) => {
  return (
    <div className="w-full p-4 rounded-lg shadow sm:p-8 bg-gray-800 border-gray-700">
      <h6 className="mb-2 text-xl font-bold text-white ">
        {topicname}
      </h6>
    </div>
  );
};

export default TopicCard;