'use client';
import Topbar from "@/components/Navbar/Topbar";

import { useState } from "react";
import HomepageMcqSubjects from "@/components/HomepageContent/HomepageMcqSubjects";

export default function Home() {

	return (
		<>
			<main className='bg-zinc-300 min-h-screen'>
				<Topbar />
				<HomepageMcqSubjects/>
			</main>
		</>
	);
}