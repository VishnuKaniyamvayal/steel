import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TabsTrigger } from "@/components/ui/tabs";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import type { TabBadge as TabBadgeType } from "@/types/tabBadgeTypes";
import { TabBadge } from "./TabBadge";

export type TabStripProps = {
	id: string;
	name: string;
	badge: TabBadgeType;
	active?: boolean;
	draft?: boolean;
	onCloseClick?: () => void;
	onTabClick?: () => void;
};

export function TabStrip({
	id,
	onCloseClick,
	name,
	badge,
	active,
	onTabClick,
	draft
}: TabStripProps) {
	return (
		<TabsTrigger onClick={onTabClick} className={""} value={id}>
			<Button
				onClick={onTabClick}
				variant={"outline"}
				size={"lg"}
				className={cn(
					"flex w-full items-center gap-2 justify-between bg-background border rounded-lg px-2 py-2",
					active ? "bg-muted border-b-primary border-b-2" : "",
				)}
			>
				<div className="flex items-center gap-2">
					<TabBadge {...badge} />
					<Typography
						className=" max-w-30 truncate cursor-default"
						size={"span"}
					>
						{name}
					</Typography>
				</div>
				{
					draft ?
						<Button
							onClick={(e) => {
								e.stopPropagation();
								onCloseClick?.();
							}}
							variant={"ghost"} className={"group relative"}>
							<span className="h-2 w-2 rounded-full bg-primary transition-opacity group-hover:opacity-0" />
							<X size={10} className=" absolute h-3! w-3! opacity-0 transition-opacity group-hover:opacity-100" />
						</Button>
						:
						<Button
							onClick={(e) => {
								e.stopPropagation();
								onCloseClick?.();
							}}
							size={"icon-xs"}
							variant={"ghost"}
						>
							<X />
						</Button>
				}
			</Button>
		</TabsTrigger>
	);
}
