import { create } from "zustand";

export interface TabInstance {
	instanceId: string;
	name: string;
	type: string;
}

interface TabState {
	activeTabId: string | null;
	openTabs: TabInstance[];

	setActiveTab: (instanceId: string) => void;
	openTab: (tabType: string, name:string) => void;
	closeTab: (instanceId: string) => void;
}

const generateId = (): string => Math.random().toString(36).substring(2, 9);

export const useTabStore = create<TabState>((set) => ({
	activeTabId: null,
	openTabs: [],

	setActiveTab: (instanceId) => set({ activeTabId: instanceId }),

	openTab: (tabType,name) => {
		const newTab: TabInstance = {
			instanceId: generateId(),
			name: name,
			type: tabType,
		};

		set((state) => ({
			openTabs: [...state.openTabs, newTab],
			activeTabId: newTab.instanceId,
		}));
	},

	closeTab: (instanceIdToClose) => {
		set((state) => {
			const remainingTabs = state.openTabs.filter(
				(tab) => tab.instanceId !== instanceIdToClose,
			);

			let nextActiveId = state.activeTabId;

			// If we just closed the active tab, fallback to the right-most tab
			if (state.activeTabId === instanceIdToClose) {
				nextActiveId =
					remainingTabs.length > 0
						? remainingTabs[remainingTabs.length - 1].instanceId
						: null;
			}

			return {
				openTabs: remainingTabs,
				activeTabId: nextActiveId,
			};
		});
	},
}));
