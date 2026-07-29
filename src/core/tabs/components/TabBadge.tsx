import { Layers } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import {
	type RequestMethod,
	requestMethodStyles,
} from "@/sections/sidebar/collections/components/explorer/request";
import type { TabBadge as TabBadgeType } from "@/types/tabBadgeTypes";

interface RequestBadgeProps {
	method: RequestMethod;
}

function RequestBadge({ method }: RequestBadgeProps) {
	return (
		<Typography
			size={"span"}
            
			className={cn(
				"inline-flex shrink-0 items-center justify-center rounded px-1.5 font-mono text-[10px] font-semibold leading-none",
				requestMethodStyles[method],
			)}
		>
			{method}
		</Typography>
	);
}

type TabBadgeProps = TabBadgeType;

export function TabBadge(props: TabBadgeProps) {
	switch (props.badgeType) {
		case "REQUEST":
			return <RequestBadge method={props.method} />;

		case "ENV":
			return (
				<div className="text-muted-foreground">
					<Layers className="size-4" />
				</div>
			);
	}
}
