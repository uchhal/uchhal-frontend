import { useState, useEffect } from "react";
import PreferenceNav from "./PreferenceNav/PreferenceNav";
import Split from "react-split";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import EditorFooter from "./EditorFooter";
import { Problem } from "@/utils/types/problem";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth, firestore } from "@/firebase/firebase";
import { toast } from "react-toastify";
import { problems } from "@/utils/problems/page";
import { useRouter } from "next/router";
// import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import useLocalStorage from "@/hooks/useLocalStorage";
import axios from "axios";

type PlaygroundProps = {
	problem: any;
	setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
	setSolved: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface ISettings {
	fontSize: string;
	settingsModalIsOpen: boolean;
	dropdownIsOpen: boolean;
}

const Playground: React.FC<PlaygroundProps> = ({ problem, setSuccess, setSolved }) => {
	const [activeTestCaseId, setActiveTestCaseId] = useState<number>(0);
	// console.log(problem);
	
	let [userCode, setUserCode] = useState<string>(problem.starterCode);
	const[runned, setrunned] = useState(false);
	const[runOutput, setRunOutput] = useState([]);
	const[submitted, setSubmitted] = useState(false)

	const [fontSize, setFontSize] = useLocalStorage("lcc-fontSize", "16px");

	const [settings, setSettings] = useState<ISettings>({
		fontSize: fontSize,
		settingsModalIsOpen: false,
		dropdownIsOpen: false,
	});

	const user = localStorage.getItem('user-info');
	// const {
	// 	query: { pid },
	// } = useRouter();

	const handleSubmit = async () => {
		if (!user) {
			toast.error("Please login to submit your code", {
				position: "top-center",
				autoClose: 3000,
				theme: "dark",
			});
			return;
		}
		try {
			const response = await axios.post('http://localhost:8082/compiler', {codeCpp:userCode, problemId: problem.title.replace(/ /g, "-")});
			console.log(response);
			// changeInnerContent();
			setSubmitted(true);
			
		} catch (error: any) {
			console.log(error.message);
			if (
				error.message.startsWith("AssertionError [ERR_ASSERTION]: Expected values to be strictly deep-equal:")
			) {
				toast.error("Oops! One or more test cases failed", {
					position: "top-center",
					autoClose: 3000,
					theme: "dark",
				});
			} else {
				toast.error(error.message, {
					position: "top-center",
					autoClose: 3000,
					theme: "dark",
				});
			}
		}
	};

	const handleRun = async () => {
		if (!user) {
			toast.error("Please login to submit your code", {
				position: "top-center",
				autoClose: 3000,
				theme: "dark",
			});
			return;
		}
		try { 
			let examples = []
			for (const exa of problem.example){
				examples.push({input:exa.inputText, expectedOutput:exa.outputText});
			}
			const response = await axios.post('http://localhost:8082/compiler', {codeCpp:userCode, problemId: problem.title.replace(/ /g, "-"), examples:examples});
			console.log(response);
			// changeInnerContent();
			setRunOutput(response.data);
			setrunned(true);
			
		} catch (error: any) {
			console.log(error.message);
			if (
				error.message.startsWith("AssertionError [ERR_ASSERTION]: Expected values to be strictly deep-equal:")
			) {
				toast.error("Oops! One or more test cases failed", {
					position: "top-center",
					autoClose: 3000,
					theme: "dark",
				});
			} else {
				toast.error(error.message, {
					position: "top-center",
					autoClose: 3000,
					theme: "dark",
				});
			}
		}
	};

	useEffect(() => {
		// if (user) {
		// 	setUserCode(code ? JSON.parse(code) : problem.starterCode);
		// } else {
			setUserCode(problem.starterCode);
		// }
	}, [runned, submitted]);

	const onChange = (value: string) => {
		setUserCode(value);
		localStorage.setItem(`code-${problem._id}`, JSON.stringify(value));
	};

	return (
		<div className='flex flex-col bg-zinc-400 relative overflow-x-hidden'>
			<PreferenceNav settings={settings} setSettings={setSettings} />

			<Split className='h-[calc(100vh-94px)]' direction='vertical' sizes={[60, 40]} minSize={60}>
				<div className='w-full overflow-auto'>
					<CodeMirror
						value="kapil the hero"
						theme={vscodeDark}
						onChange={onChange}
						extensions={[javascript()]}
						style={{ fontSize: settings.fontSize }}
					/>
				</div>
				<div className='w-full px-5 overflow-auto' id="examplePreview">
					{/* testcase heading */}
					<div className='flex h-10 items-center space-x-6'>
						<div className='relative flex h-full flex-col justify-center cursor-pointer'>
							<div className='text-sm font-medium leading-5 text-white'>Testcases</div>
							<hr className='absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white' />
						</div>
					</div>

					<div className='flex'>
						{problem.example.map((example1:any, index:any) => (
							<div
								className='mr-2 items-start mt-2 '
								key={example1.id}
								onClick={() => setActiveTestCaseId(index)}
							>
								<div className='flex flex-wrap items-center gap-y-4'>
									<div
										className={`font-medium items-center transition-all focus:outline-none inline-flex relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap
										${activeTestCaseId === index ? "text-white" : "text-gray-500"}
										${runned ? (runOutput[index].isAccept ? "bg-green-600":"bg-red-600"):"bg-gray-100"}
									`}
									>
										Case {index + 1}
									</div>
								</div>
							</div>
						))}
					</div>

					<div className='font-semibold my-4'>
						<p className='text-sm font-medium mt-4 text-white'>Input:</p>
						<div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2'>
							{problem.example[activeTestCaseId].inputText}
						</div>
						<p className='text-sm font-medium mt-4 text-white'>Output:</p>
						<div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2'>
							{problem.example[activeTestCaseId].outputText}
						</div>
						{runned && <p className='text-sm font-medium mt-4 text-white'>Your Output:</p>}
						{runned && <div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2'>
							{runOutput[activeTestCaseId].data.actualOutput}
						</div>}
					</div>
				</div>
			</Split>
			<EditorFooter handleSubmit={handleSubmit} handleRun={handleRun} />
			{/* <EditorFooter/> */}
		</div>
	);
};
export default Playground;