import { authModalState } from "@/atoms/authModalAtom";
import axios from 'axios';
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
// import {signInWithEmail} from "@/Services/AuthServices";
import { useSetRecoilState } from "recoil";
import { toast } from "react-toastify";
type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
	const setAuthModalState = useSetRecoilState(authModalState);
	const handleClick = (type: "login" | "register" | "forgotPassword") => {
		setAuthModalState((prev) => ({ ...prev, type }));
	};
	const [inputs, setInputs] = useState({ email: "", password: "" });
	const [error, seterror] = useState();
	const [loading, setLoading] = useState<boolean>(false);
	const router = useRouter();
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		if (!inputs.email || !inputs.password) return alert("Please fill all fields");

		try {
			// console.log(inputs.email+inputs.password);
			const response = await axios.post('http://localhost:8082/user/login', { userkey:inputs.email, password:inputs.password });
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
		if (error) toast.error(error, { position: "top-center", autoClose: 3000, theme: "dark" });
	}, [error]);
	return (
		<form className='space-y-6 px-6 pb-4' onSubmit={handleLogin}>
			<h3 className='text-xl font-medium text-white'>Sign in to LeetClone</h3>
			<div>
				<label htmlFor='email' className='text-sm font-medium block mb-2 text-gray-300'>
					Your Email
				</label>
				<input
					onChange={handleInputChange}
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
				<label htmlFor='password' className='text-sm font-medium block mb-2 text-gray-300'>
					Your Password
				</label>
				<input
					onChange={handleInputChange}
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
				{loading ? "Loading..." : "Log In"}
			</button>
			<button className='flex w-full justify-end' onClick={() => handleClick("forgotPassword")}>
				<a href='#' className='text-sm block text-brand-orange hover:underline w-full text-right'>
					Forgot Password?
				</a>
			</button>
			<div className='text-sm font-medium text-gray-300'>
				Not Registered?{" "}
				<a href='#' className='text-blue-700 hover:underline' onClick={() => handleClick("register")}>
					Create account
				</a>
			</div>
		</form>
	);
};
export default Login;