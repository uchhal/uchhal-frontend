'use client';
import Quizspace from "@/components/quizSpace/Quizspace"
import { useParams } from "next/navigation";

const QuizPage = () => {
    const params = useParams();
	const uid = String(params.quizname);
	console.log(uid);

    return(
        <Quizspace subject = {uid}/>
    );
}

export default QuizPage;