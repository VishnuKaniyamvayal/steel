import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { OpenTabContent } from "./components/OpenTabContent";
import { TabStrip } from "./components/TabStrip";
import { useTabStore } from "./tab-manager-store";

export function TabLayout() {
	const activeTabId = useTabStore((state) => state.activeTabId);
	const openTabs = useTabStore((state) => state.openTabs);
	const setActiveTab = useTabStore((state) => state.setActiveTab);
	const closeTab = useTabStore((state) => state.closeTab);
	const openRequestTab = useTabStore((state) => state.openTab);

	return (
		<div className="flex h-[calc(100vh-3.8125rem)] flex-col overflow-hidden p-3">
			<Button
				onClick={() => {
					openRequestTab(
						{ badgeType: "REQUEST", method: "GET" },
						"Create Users with the help of api keys",
					);
				}}
				className="w-fit rounded-lg"
				variant="outline"
			>
				New Request
			</Button>
			<Tabs
				className="min-h-0 flex-1"
				value={activeTabId}
				onValueChange={(value) => setActiveTab(value as string)}
			>
				<ScrollArea className="shrink-0">
					<TabsList variant="default" className={"bg-transparent my-2"}>
						{openTabs.map((tab) => {
							return (
								<TabStrip
									active={activeTabId === tab.instanceId}
									id={tab.instanceId}
									name={tab.name}
									draft={true}
									badge={tab.badge}
									key={tab.instanceId}
									onCloseClick={() => {
										closeTab(tab.instanceId);
									}}
								/>
							);
						})}
					</TabsList>
				</ScrollArea>
				{openTabs.map((tab) => (
					<TabsContent
						className="min-h-0 flex-1 overflow-hidden"
						key={tab.instanceId}
						value={tab.instanceId}
					>
						<OpenTabContent
							id={tab.instanceId}
							method={
								tab.badge.badgeType === "REQUEST" ? tab.badge.method : undefined
							}
							name={tab.name}
						/>
					</TabsContent>
				))}
			</Tabs>
		</div>
	);
}
