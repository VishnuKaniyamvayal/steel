import { FolderGit2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
	return (
		<header className="flex h-15.25 items-center justify-end border-b px-4">
			<Button size={"xs"} variant="outline">
					<FolderGit2 className="" />
				Initialize git
			</Button>
		</header>
	);
}
