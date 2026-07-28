import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Sidebar } from "@/sections";
import { TabLayout } from "./core/tabs/layout";
import { Header } from "./sections/header";

function App() {
	return (
		<main className="flex min-h-screen items-center justify-center">
			<ResizablePanelGroup orientation="horizontal">
				<ResizablePanel defaultSize="20%" className="">
					<Sidebar />
				</ResizablePanel>
				<ResizableHandle withHandle />
				<ResizablePanel defaultSize="75%">
					<Header />
					<TabLayout />
				</ResizablePanel>
			</ResizablePanelGroup>
		</main>
	);
}

export default App;
