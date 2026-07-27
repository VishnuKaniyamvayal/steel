import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes, CSSProperties } from "react";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

const requestMethods = [
	"CONNECT",
	"DELETE",
	"GET",
	"HEAD",
	"OPTIONS",
	"PATCH",
	"POST",
	"PUT",
	"TRACE",
] as const;

type RequestMethod = (typeof requestMethods)[number];

const requestLineVariants = cva(
	"group/request flex h-8 w-full items-center gap-2 rounded-md pr-2 text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			active: {
				true: "bg-muted text-foreground",
				false: "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
			},
		},
		defaultVariants: {
			active: false,
		},
	},
);

const requestMethodStyles = {
	CONNECT: " text-sky-600 dark:text-sky-300",
	DELETE: " text-red-600 dark:text-red-400",
	GET: " text-emerald-600 dark:text-emerald-400",
	HEAD: " text-fuchcia-600 dark:text-fuchcia-300",
	OPTIONS: " text-indigo-600 dark:text-indigo-400",
	PATCH: " text-amber-600 dark:text-amber-400",
	POST: " text-blue-600 dark:text-blue-400",
	PUT: " text-violet-600 dark:text-violet-400",
	TRACE: " text-lime-600 dark:text-lime-300",
} satisfies Record<RequestMethod, string>;

type RequestProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> &
	VariantProps<typeof requestLineVariants> & {
		method: RequestMethod;
		name: string;
		path?: string;
		depth?: number;
	};

type MethodRequestProps = Omit<RequestProps, "method">;

function Request({
	active = false,
	className,
	depth = 0,
	method,
	name,
	path,
	style,
	type = "button",
	...props
}: RequestProps) {
	const lineStyle = {
		...style,
		paddingLeft: `calc(0.75rem + ${Math.max(0, depth)} * 0.75rem)`,
	} satisfies CSSProperties;

	return (
		<button
			aria-current={active ? "page" : undefined}
			className={cn(requestLineVariants({ active, className }))}
			data-method={method}
			data-slot="request-line"
			style={lineStyle}
			type={type}
			{...props}
		>
			<span
				className={cn(
					"inline-flex shrink-0 items-center justify-center rounded px-1.5 font-mono text-[10px] font-semibold leading-none",
					requestMethodStyles[method],
				)}
			>
				{method}
			</span>
			<Typography
				size={"span"}
				className="text-muted-foreground min-w-0 flex-1 truncate text-left "
			>
				{name}
			</Typography>
		</button>
	);
}

function Connect(props: MethodRequestProps) {
	return <Request method="CONNECT" {...props} />;
}

function Delete(props: MethodRequestProps) {
	return <Request method="DELETE" {...props} />;
}

function Get(props: MethodRequestProps) {
	return <Request method="GET" {...props} />;
}

function Head(props: MethodRequestProps) {
	return <Request className="text" method="HEAD" {...props} />;
}

function Options(props: MethodRequestProps) {
	return <Request method="OPTIONS" {...props} />;
}

function Patch(props: MethodRequestProps) {
	return <Request method="PATCH" {...props} />;
}

function Post(props: MethodRequestProps) {
	return <Request method="POST" {...props} />;
}

function Put(props: MethodRequestProps) {
	return <Request method="PUT" {...props} />;
}

function Trace(props: MethodRequestProps) {
	return <Request method="TRACE" {...props} />;
}

export {
	Connect,
	Delete,
	Get,
	Head,
	type MethodRequestProps,
	Options,
	Patch,
	Post,
	Put,
	Request,
	type RequestMethod,
	type RequestProps,
	requestLineVariants,
	requestMethodStyles,
	requestMethods,
	Trace,
};
