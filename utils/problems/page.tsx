import { Problem } from "../types/problem";
import { jumpGame } from "./jump-game";
import { reverseLinkedList } from "./reverse-linked-list";

// interface ProblemMap {
// 	[key: string]: Problem;
// }

export const problems: Problem[] = [
	{
		id: "jump-game",
		title: "jump game",
		dificulty:"Easy",
		category: "dp",
		order: 1,
		videoId: "",
	},
	{
		id: "reversed-linked-list",
		title: "Reversed Linked List",
		dificulty:"Medium",
		category: "list",
		order: 2,
		videoId: "",
	},
	// "reverse-linked-list": reverseLinkedList,
	// "jump-game": jumpGame,
];