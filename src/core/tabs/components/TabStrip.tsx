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
}: TabStripProps) {
	return (
		<TabsTrigger onClick={onTabClick} className={"w-50"} value={id}>
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
					<Typography className="cursor-default" size={"span"}>
						{name}
					</Typography>
				</div>
				<Button
					onClick={(e) => {
						e.stopPropagation();
						onCloseClick?.();
					}}
					size={"icon-xs"}
					variant={"ghost"}
				>
					{""}
					<X />{""}
				</Button>
			</Button>
		</TabsTrigger>
	);
}
