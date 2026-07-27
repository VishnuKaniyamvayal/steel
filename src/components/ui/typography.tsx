import { cva, type VariantProps } from "class-variance-authority";
import type { ElementType, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const typographyVariants = cva("text-foreground", {
	variants: {
		size: {
			h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
			h2: "scroll-m-20 text-3xl font-semibold tracking-tight",
			h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
			h4: "scroll-m-20 text-xl font-semibold tracking-tight",
			h5: "scroll-m-20 text-lg font-semibold tracking-tight",
			h6: "scroll-m-20 text-base font-semibold tracking-tight",
			p: "text-base leading-7",
			span: "text-xs",
		},
	},
	defaultVariants: {
		size: "p",
	},
});

const elementBySize = {
	h1: "h1",
	h2: "h2",
	h3: "h3",
	h4: "h4",
	h5: "h5",
	h6: "h6",
	p: "p",
	span: "span",
} as const;

type TypographySize = keyof typeof elementBySize;

type TypographyProps = HTMLAttributes<HTMLElement> &
	VariantProps<typeof typographyVariants> & {
		as?: ElementType;
	};

function Typography({ as, className, size = "p", ...props }: TypographyProps) {
	const Component = as ?? elementBySize[(size ?? "p") as TypographySize];

	return (
		<Component
			data-slot="typography"
			className={cn(typographyVariants({ size, className }))}
			{...props}
		/>
	);
}

export {
	Typography,
	type TypographyProps,
	type TypographySize,
	typographyVariants,
};
