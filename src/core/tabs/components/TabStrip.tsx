import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TabsTrigger } from "@/components/ui/tabs";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

export type TabStripProps = {
	id: string;
	name: string;
	type: string;
	active?: boolean;
	onCloseClick?: () => void;
	onTabClick?: () => void;
};

export function TabStrip({
	id,
	onCloseClick,
	name,
	type,
	active,
	onTabClick,
}: TabStripProps) {
	return (
		<TabsTrigger
        onClick={onTabClick}
        value={id}>
			<Button
				onClick={onTabClick}
				variant={"outline"}
                size={"lg"}
				className={cn(
					"flex items-center gap-2 justify-between bg-background border rounded-lg px-2 py-2",
					active ? "bg-muted border-b-primary border-b-2" : "",
				)}
			>
				<div className="flex items-center gap-2">
					<Typography className="text-green-600" size={"span"}>
						{type}
					</Typography>
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
					{" "}
					<X />{" "}
				</Button>
			</Button>
		</TabsTrigger>
	);
}
