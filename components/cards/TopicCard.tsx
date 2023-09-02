import React from "react";
import { useRouter } from "next/navigation";
type TopicCardProps = {
	topicname:string,
};

const TopicCard:React.FC<TopicCardProps> = ({topicname, subject}) => {
  const router = useRouter();
  const handleCall = async() => {
    const topic = await topicname.replace(/\s/g, '-');
    router.push(`/${subject}/${topic}/`);
  }
  return (
    <div className="w-full p-4 rounded-lg shadow sm:p-8 bg-gray-800 border-gray-700" onClick={handleCall}>
      <h6 className="mb-2 text-xl font-bold text-white ">
        {topicname}
      </h6>
    </div>
  );
};

export default TopicCard;