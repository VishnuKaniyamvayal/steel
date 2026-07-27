import { Separator } from "@/components/ui/separator";
import Collections from "./collections";
import { EnvironmentSelector } from "./environment-selector";
import WorkplaceSelector from "./workplace-selector";

const Sidebar = () => {
	return (
		<div className="flex h-screen flex-col overflow-hidden">
			<WorkplaceSelector />
			<Separator />
			<div className="flex min-h-0 flex-1 flex-col justify-between px-3 py-2">
				<Collections />
				<EnvironmentSelector />
			</div>
		</div>
	);
};

export default Sidebar;
