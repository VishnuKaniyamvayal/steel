import { Request } from "@/features/requests";

export const TabRegistry = {
	request: {
		id: "request",
		title: "Request",
		icon: "gear-icon",
		component: Request,
		allowMultiple: true,
	},
	settings: {
		id: "settings",
		title: "Settings",
		icon: "gear-icon",
		component: null,
		allowMultiple: false,
	},
	history: {
		id: "history",
		title: "History Logs",
		icon: "clock-icon",
		component: null,
		allowMultiple: true,
	},
};
