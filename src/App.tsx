import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Sidebar } from "@/sections";

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <ResizablePanelGroup 
      orientation="horizontal">
      <ResizablePanel defaultSize="20%" className="">
          <Sidebar />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="75%">
          <span className="font-semibold">Content</span>
      </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}

export default App;
