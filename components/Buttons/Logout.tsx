
import React from "react";

import { FiLogOut } from "react-icons/fi";
import { useRouter } from "next/navigation";

const Logout: React.FC = () => {
	// const [signOut, loading, error] = useSignOut(auth);
	const router = useRouter();

	const handleLogout = () => {
		localStorage.clear();
		router.push("/");
	};
	return (
		<button className='bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-orange-500' onClick={handleLogout}>
			<FiLogOut />
		</button>
	);
};
export default Logout;