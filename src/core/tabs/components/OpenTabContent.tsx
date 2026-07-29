import { Copy, MoreHorizontal, Plus, Save, Send, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import {
	type RequestMethod,
	requestMethodStyles,
	requestMethods,
} from "@/sections/sidebar/collections/components/explorer/request";

type TabProps = {
	id: string;
	method?: RequestMethod;
	name?: string;
};

type FieldRow = {
	enabled?: boolean;
	keyName: string;
	value: string;
};

const queryRows: FieldRow[] = [
	{ enabled: true, keyName: "limit", value: "25" },
	{ enabled: true, keyName: "sort", value: "created_at" },
	{ enabled: false, keyName: "include", value: "roles,teams" },
];

const headerRows: FieldRow[] = [
	{ enabled: true, keyName: "Accept", value: "application/json" },
	{ enabled: true, keyName: "Authorization", value: "Bearer {{token}}" },
	{ enabled: false, keyName: "X-Trace-Id", value: "{{traceId}}" },
];

const authRows: FieldRow[] = [
	{ enabled: true, keyName: "Type", value: "Bearer Token" },
	{ enabled: true, keyName: "Token", value: "{{token}}" },
];

const responseHeaders: FieldRow[] = [
	{ keyName: "content-type", value: "application/json; charset=utf-8" },
	{ keyName: "cache-control", value: "no-store" },
	{ keyName: "x-request-id", value: "req_2Gv9f8cB" },
];

const responseTimeline = [
	{ label: "DNS", value: "8 ms" },
	{ label: "TLS", value: "42 ms" },
	{ label: "Request", value: "18 ms" },
	{ label: "Response", value: "166 ms" },
];

const responsePreview = `{
  "data": [
    {
      "id": "usr_1034",
      "name": "Anika Rao",
      "role": "admin",
      "active": true
    }
  ],
  "meta": {
    "limit": 25,
    "next": "cursor_8dh2"
  }
}`;

function FieldRows({ rows }: { rows: FieldRow[] }) {
	return (
		<div className="overflow-hidden rounded-lg border bg-background">
			<div className="grid grid-cols-[2.5rem_minmax(0,0.9fr)_minmax(0,1.2fr)_2.5rem] items-center border-b bg-muted/40 px-2 py-2 text-xs font-medium text-muted-foreground">
				<span />
				<span>Key</span>
				<span>Value</span>
				<span />
			</div>
			{rows.map((row) => (
				<div
					className="grid grid-cols-[2.5rem_minmax(0,0.9fr)_minmax(0,1.2fr)_2.5rem] items-center gap-2 border-b px-2 py-2 last:border-b-0"
					key={row.keyName}
				>
					<div className="flex justify-center">
						<input
							aria-label={`Enable ${row.keyName}`}
							className="size-4 rounded border-border accent-primary"
							defaultChecked={row.enabled ?? true}
							type="checkbox"
						/>
					</div>
					<Input
						aria-label={`${row.keyName} key`}
						className="rounded-lg bg-muted/40 font-mono text-xs"
						defaultValue={row.keyName}
					/>
					<Input
						aria-label={`${row.keyName} value`}
						className="rounded-lg bg-muted/40 font-mono text-xs"
						defaultValue={row.value}
					/>
					<Button
						aria-label={`Remove ${row.keyName}`}
						size="icon-xs"
						variant="ghost"
					>
						<Trash2 />
					</Button>
				</div>
			))}
			<div className="flex items-center justify-between border-t bg-muted/20 px-3 py-2">
				<Button size="xs" variant="ghost">
					<Plus />
					Add Row
				</Button>
			</div>
		</div>
	);
}

export function OpenTabContent({ id, method = "GET", name }: TabProps) {
	return (
		<div
			className="flex h-[calc(100vh-9.75rem)] min-h-144 flex-col gap-3 overflow-hidden rounded-lg border bg-muted/20 p-3"
			data-request-id={id}
		>
			<div className="flex flex-col gap-2 rounded-lg border bg-background p-2 shadow-sm md:flex-row md:items-center">
				<div className="flex min-w-0 flex-1 items-center gap-2">
					<Select
						defaultValue={method}
						items={requestMethods.map((requestMethod) => ({
							label: requestMethod,
							value: requestMethod,
						}))}
					>
						<SelectTrigger
							className={cn(
								"h-10 w-30 shrink-0 rounded-lg bg-muted/50 font-mono text-xs font-semibold",
								requestMethodStyles[method],
							)}
						>
							<SelectValue />
						</SelectTrigger>
						<SelectContent align="start">
							<SelectGroup>
								{requestMethods.map((requestMethod) => (
									<SelectItem key={requestMethod} value={requestMethod}>
										<span
											className={cn(
												"font-mono text-xs font-semibold",
												requestMethodStyles[requestMethod],
											)}
										>
											{requestMethod}
										</span>
									</SelectItem>
								))}
							</SelectGroup>
						</SelectContent>
					</Select>
					<Input
						aria-label="Request URL"
						className="h-10 rounded-lg bg-muted/50 font-mono text-sm"
						defaultValue="https://api.steel.local/v1/users"
						placeholder="https://api.example.com/resource"
					/>
				</div>
				<div className="flex shrink-0 items-center gap-2">
					<Button className="h-10 rounded-lg" size="lg">
						<Send />
						Send
					</Button>
					<Button
						aria-label="Save request"
						className="rounded-lg"
						size="icon-lg"
						variant="outline"
					>
						<Save />
					</Button>
					<Button
						aria-label="More request actions"
						className="rounded-lg"
						size="icon-lg"
						variant="ghost"
					>
						<MoreHorizontal />
					</Button>
				</div>
			</div>

			<div className="grid min-h-0 flex-1 grid-cols-[minmax(0,1.25fr)_minmax(20rem,0.75fr)] gap-3 xl:grid-cols-[minmax(0,1.35fr)_minmax(22rem,0.65fr)] max-lg:grid-cols-1">
				<section className="flex min-h-0 flex-col overflow-hidden rounded-lg border bg-background shadow-sm">
					<div className="flex items-center justify-between border-b px-3 py-2">
						<div className="min-w-0">
							<h2 className="truncate text-sm font-semibold">
								{name ?? "Request"}
							</h2>
							<p className="truncate text-xs text-muted-foreground">
								workspace / production
							</p>
						</div>
						<Button size="xs" variant="outline">
							<Copy />
							Duplicate
						</Button>
					</div>

					<Tabs className="min-h-0 flex-1 gap-0" defaultValue="params">
						<TabsList
							className="h-11 w-full justify-start rounded-none border-b bg-transparent px-3"
							variant="line"
						>
							<TabsTrigger
								className="h-9 flex-none rounded-lg px-3"
								value="params"
							>
								Params
							</TabsTrigger>
							<TabsTrigger
								className="h-9 flex-none rounded-lg px-3"
								value="headers"
							>
								Headers
							</TabsTrigger>
							<TabsTrigger
								className="h-9 flex-none rounded-lg px-3"
								value="auth"
							>
								Auth
							</TabsTrigger>
							<TabsTrigger
								className="h-9 flex-none rounded-lg px-3"
								value="body"
							>
								Body
							</TabsTrigger>
						</TabsList>

						<TabsContent className="min-h-0 overflow-auto p-3" value="params">
							<FieldRows rows={queryRows} />
						</TabsContent>
						<TabsContent className="min-h-0 overflow-auto p-3" value="headers">
							<FieldRows rows={headerRows} />
						</TabsContent>
						<TabsContent className="min-h-0 overflow-auto p-3" value="auth">
							<FieldRows rows={authRows} />
						</TabsContent>
						<TabsContent className="min-h-0 overflow-auto p-3" value="body">
							<textarea
								aria-label="Request body"
								className="min-h-72 w-full resize-none rounded-lg border bg-muted/30 p-3 font-mono text-xs leading-6 outline-none transition-shadow focus-visible:ring-3 focus-visible:ring-ring/30"
								defaultValue={`{\n  "name": "Anika Rao",\n  "role": "admin",\n  "active": true\n}`}
								spellCheck={false}
							/>
						</TabsContent>
					</Tabs>
				</section>

				<section className="flex min-h-0 flex-col overflow-hidden rounded-lg border bg-background shadow-sm">
					<div className="flex items-center justify-between border-b px-3 py-2">
						<div>
							<h2 className="text-sm font-semibold">Response</h2>
							<p className="text-xs text-muted-foreground">200 OK</p>
						</div>
						<div className="flex items-center gap-2 text-xs text-muted-foreground">
							<span className="rounded-full bg-primary/15 px-2 py-1 font-medium text-primary-foreground">
								218 ms
							</span>
							<Separator orientation="vertical" />
							<span>12.4 KB</span>
						</div>
					</div>

					<Tabs className="min-h-0 flex-1 gap-0" defaultValue="preview">
						<TabsList
							className="h-11 w-full justify-start rounded-none border-b bg-transparent px-3"
							variant="line"
						>
							<TabsTrigger
								className="h-9 flex-none rounded-lg px-3"
								value="preview"
							>
								Preview
							</TabsTrigger>
							<TabsTrigger
								className="h-9 flex-none rounded-lg px-3"
								value="response-headers"
							>
								Headers
							</TabsTrigger>
							<TabsTrigger
								className="h-9 flex-none rounded-lg px-3"
								value="timeline"
							>
								Timeline
							</TabsTrigger>
						</TabsList>

						<TabsContent className="min-h-0 overflow-auto p-3" value="preview">
							<pre className="min-h-full overflow-auto rounded-lg border bg-muted/30 p-3 font-mono text-xs leading-6 text-foreground">
								{responsePreview}
							</pre>
						</TabsContent>
						<TabsContent
							className="min-h-0 overflow-auto p-3"
							value="response-headers"
						>
							<FieldRows rows={responseHeaders} />
						</TabsContent>
						<TabsContent className="min-h-0 overflow-auto p-3" value="timeline">
							<div className="space-y-2">
								{responseTimeline.map((item) => (
									<div
										className="flex items-center justify-between rounded-lg border bg-muted/20 px-3 py-2"
										key={item.label}
									>
										<span className="text-xs text-muted-foreground">
											{item.label}
										</span>
										<span className="font-mono text-xs font-semibold">
											{item.value}
										</span>
									</div>
								))}
							</div>
						</TabsContent>
					</Tabs>
				</section>
			</div>
		</div>
	);
}
