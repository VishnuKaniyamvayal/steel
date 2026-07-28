import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabStrip } from "./components/TabStrip";
import { useTabStore } from "./tab-manager-store";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export function TabLayout() {
    const activeTabId = useTabStore((state) => state.activeTabId);
    const openTabs = useTabStore((state) => state.openTabs);
    const setActiveTab = useTabStore((state) => state.setActiveTab);
    const closeTab = useTabStore((state) => state.closeTab);
    const test = useTabStore((state) => state.openTab);


    return (
        <div className="p-3">
            <Button onClick={() => { test("req", "req") }}>aasd</Button>
            <Tabs
                value={activeTabId}
                onValueChange={(value) => setActiveTab(value as string)}
            >
                <ScrollArea className="">
                    <TabsList className={"bg-transparent gap-2 my-2"}>

                        {openTabs.map((tab) => {
                            return (
                                <TabsTrigger render={<TabStrip id={tab.instanceId} name={tab.name} type={tab.type} key={tab.instanceId} onCloseClick={() => { closeTab(tab.instanceId) }} />} key={tab.instanceId} value={tab.instanceId} />
                            );
                        })}
                    </TabsList>
                </ScrollArea>
            </Tabs>
        </div>
    );
}
