import { authModalState } from "@/atoms/authModalAtom";
import { useEffect, useState } from "react";
import axios from 'axios';
import { useSetRecoilState } from "recoil";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

type SignupProps = {};

const Signup: React.FC<SignupProps> = () => {
	const setAuthModalState = useSetRecoilState(authModalState);
	const handleClick = () => {
		setAuthModalState((prev) => ({ ...prev, type: "login" }));
	};
	const [inputs, setInputs] = useState({ email: "", password: "", username: "", first_name:"", last_name:""});
	const [loading, setLoading] = useState<boolean>(false);
	const [error, seterror] = useState();
	const router = useRouter();
	// const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
	const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		if (!inputs.email || !inputs.password || !inputs.username || !inputs.first_name || !inputs.last_name) return alert("Please fill all fields");

		let data = { email:inputs.email, 
					password:inputs.password,
					username:inputs.username,
					first_name:inputs.first_name,
					last_name:inputs.last_name }
		try {
			// console.log(inputs.email+inputs.password);
			const response = await axios.post('http://localhost:8082/user/register', data);
			console.log("response: ", response);
			
			// if(!response.isSuccess) {
			// 	return response.error;
			// }
			// setUser(response);
			localStorage.setItem('user-info',JSON.stringify(response.data.data));
			console.log(response.data.data);
			console.log("user from storage"+localStorage.getItem('user-info'));
			
			// setuser(response.data.data);
			router.push("/");
		} catch (error: any) {
			toast.error(error.message, { position: "top-center", autoClose: 3000, theme: "dark" });
			seterror(error.messsage);
		} finally {
			setLoading(false);
		  }
	};

	useEffect(() => {
		if (error) alert(error);
	}, [error]);

	return (
		<form className='space-y-6 px-6 pb-4' onSubmit={handleRegister}>
			<h3 className='text-xl font-medium text-white'>Register to LeetClone</h3>
			<div>
				<label htmlFor='email' className='text-sm font-medium block mb-2 text-gray-300'>
					Email
				</label>
				<input
					onChange={handleChangeInput}
					type='email'
					name='email'
					id='email'
					className='
        border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
        bg-gray-600 border-gray-500 placeholder-gray-400 text-white
    '
					placeholder='name@company.com'
				/>
			</div>
			<div>
				<label htmlFor='username' className='text-sm font-medium block mb-2 text-gray-300'>
					username
				</label>
				<input
					onChange={handleChangeInput}
					type='username'
					name='username'
					id='username'
					className='
        border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
        bg-gray-600 border-gray-500 placeholder-gray-400 text-white
    '
					placeholder='John Doe'
				/>
			</div>
			<div>
				<label htmlFor='first_name' className='text-sm font-medium block mb-2 text-gray-300'>
					firstname
				</label>
				<input
					onChange={handleChangeInput}
					type='first_name'
					name='first_name'
					id='first_name'
					className='
        border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
        bg-gray-600 border-gray-500 placeholder-gray-400 text-white
    '
					placeholder='John'
				/>
			</div>
			<div>
				<label htmlFor='last_name' className='text-sm font-medium block mb-2 text-gray-300'>
					last name
				</label>
				<input
					onChange={handleChangeInput}
					type='last_name'
					name='last_name'
					id='last_name'
					className='
        border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
        bg-gray-600 border-gray-500 placeholder-gray-400 text-white
    '
					placeholder='Doe'
				/>
			</div>
			<div>
				<label htmlFor='password' className='text-sm font-medium block mb-2 text-gray-300'>
					Password
				</label>
				<input
					onChange={handleChangeInput}
					type='password'
					name='password'
					id='password'
					className='
        border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
        bg-gray-600 border-gray-500 placeholder-gray-400 text-white
    '
					placeholder='*******'
				/>
			</div>

			<button
				type='submit'
				className='w-full text-white focus:ring-blue-300 font-medium rounded-lg
            text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s
        '
			>
				{loading ? "Registering..." : "Register"}
			</button>

			<div className='text-sm font-medium text-gray-300'>
				Already have an account?{" "}
				<a href='#' className='text-blue-700 hover:underline' onClick={handleClick}>
					Log In
				</a>
			</div>
		</form>
	);
};
export default Signup;