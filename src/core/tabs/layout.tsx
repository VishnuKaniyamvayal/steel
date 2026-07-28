import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTabStore } from "./tab-manager-store";

export function TabLayout() {
	const activeTabId = useTabStore((state) => state.activeTabId);
	const openTabs = useTabStore((state) => state.openTabs);
	const openTab = useTabStore((state) => state.openTab);
	const setActiveTab = useTabStore((state) => state.setActiveTab);

	return (
		<div>
			<Button onClick={() => openTab("request")}>set</Button>
			<Tabs
				value={activeTabId}
				onValueChange={(value) => setActiveTab(value as string)}
				className="w-100"
			>
				<TabsList>
					{openTabs.map((tab) => {
						return (
							<TabsTrigger key={tab.instanceId} value={tab.instanceId}>
								{tab.type}
							</TabsTrigger>
						);
					})}
				</TabsList>
			</Tabs>
		</div>
	);
}
