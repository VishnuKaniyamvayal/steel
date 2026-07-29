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
	draft,
}: TabStripProps) {
	return (
		<div
			className={cn(
				"flex h-9 w-68 shrink-0 items-center rounded-lg border bg-background transition-colors hover:bg-muted",
				active ? "border-b-2 border-b-primary bg-muted" : "",
			)}
		>
			<TabsTrigger
				onClick={onTabClick}
				className={cn(
					"h-full min-w-0 flex-1 justify-start gap-2 rounded-lg border-transparent! bg-transparent px-2 py-0 text-foreground hover:bg-transparent data-active:bg-transparent dark:data-active:bg-transparent after:hidden",
				)}
				value={id}
			>
				<div className="flex min-w-0 items-center gap-2">
					<TabBadge {...badge} />
					<Typography
						className="max-w-46 cursor-default truncate"
						size={"span"}
					>
						{name}
					</Typography>
				</div>
			</TabsTrigger>
			{draft ? (
				<Button
					className={"group relative mr-1"}
					onClick={(e) => {
						e.stopPropagation();
						onCloseClick?.();
					}}
					variant={"ghost"}
				>
					<span className="h-2 w-2 rounded-full bg-primary transition-opacity group-hover:opacity-0" />
					<X className="absolute h-3! w-3! opacity-0 transition-opacity group-hover:opacity-100" />
				</Button>
			) : (
				<Button
					className="mr-1"
					onClick={(e) => {
						e.stopPropagation();
						onCloseClick?.();
					}}
					size={"icon-xs"}
					variant={"ghost"}
				>
					<X />
				</Button>
			)}
		</div>
	);
}
