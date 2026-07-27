import { ChevronDown, FolderClosed, FolderOpen } from "lucide-react";
import { type ReactNode, useState } from "react";

import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { Request, type RequestMethod } from "./explorer/request";

type ExplorerRequest = {
	id: string;
	name: string;
	method: RequestMethod;
	url: string;
	description?: string;
};

type ExplorerFolder = {
	id: string;
	name: string;
	requests: ExplorerRequest[];
};

type ExplorerCollection = {
	id: string;
	name: string;
	folders: ExplorerFolder[];
};

type ExplorerNodeKind = "collection" | "folder";

type ExpandableContentProps = {
	children: ReactNode;
	className?: string;
	id: string;
	isOpen: boolean;
};

const sampleExplorerData: ExplorerCollection[] = [
	{
		id: "commerce-api",
		name: "Commerce API",
		folders: [
			{
				id: "customers",
				name: "Customers",
				requests: [
					{
						id: "list-customers",
						name: "List customers",
						method: "GET",
						url: "https://api.example.com/customers",
						description: "Fetch paginated customer records.",
					},
					{
						id: "create-customer",
						name: "Create customer",
						method: "POST",
						url: "https://api.example.com/customers",
					},
					{
						id: "update-customer",
						name: "Update customer",
						method: "PATCH",
						url: "https://api.example.com/customers/:customerId",
					},
					{
						id: "delete-customer",
						name: "Delete customer",
						method: "DELETE",
						url: "https://api.example.com/customers/:customerId",
					},
				],
			},
			{
				id: "orders",
				name: "Orders",
				requests: [
					{
						id: "list-orders",
						name: "List orders",
						method: "GET",
						url: "https://api.example.com/orders",
					},
					{
						id: "replace-order",
						name: "Replace order",
						method: "PUT",
						url: "https://api.example.com/orders/:orderId",
					},
					{
						id: "order-options",
						name: "Order options",
						method: "OPTIONS",
						url: "https://api.example.com/orders",
					},
				],
			},
		],
	},
	{
		id: "platform-api",
		name: "Platform API",
		folders: [
			{
				id: "health",
				name: "Health",
				requests: [
					{
						id: "health-head",
						name: "Health headers",
						method: "HEAD",
						url: "https://status.example.com/health",
					},
					{
						id: "trace-request",
						name: "Trace request",
						method: "TRACE",
						url: "https://status.example.com/trace",
					},
					{
						id: "connect-tunnel",
						name: "Connect tunnel",
						method: "CONNECT",
						url: "https://status.example.com/tunnel",
					},
				],
			},
		],
	},
];

function getExplorerNodeId(kind: ExplorerNodeKind, id: string) {
	return `${kind}:${id}`;
}

function getDefaultExpandedNodes(collections: ExplorerCollection[]) {
	const expandedNodes = new Set<string>();

	for (const collection of collections) {
		expandedNodes.add(getExplorerNodeId("collection", collection.id));

		for (const folder of collection.folders) {
			expandedNodes.add(getExplorerNodeId("folder", folder.id));
		}
	}

	return expandedNodes;
}

function ExpandableContent({
	children,
	className,
	id,
	isOpen,
}: ExpandableContentProps) {
	return (
		<div
			aria-hidden={!isOpen}
			className={cn(
				"grid overflow-hidden transition-[grid-template-rows,opacity] duration-200 ease-out",
				isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
			)}
			id={id}
			inert={!isOpen}
		>
			<div className={cn("min-h-0 overflow-hidden", className)}>{children}</div>
		</div>
	);
}

function Explorer() {
	const [expandedNodes, setExpandedNodes] = useState(() =>
		getDefaultExpandedNodes(sampleExplorerData),
	);

	function toggleNode(kind: ExplorerNodeKind, id: string) {
		const nodeId = getExplorerNodeId(kind, id);

		setExpandedNodes((currentNodes) => {
			const nextNodes = new Set(currentNodes);

			if (nextNodes.has(nodeId)) {
				nextNodes.delete(nodeId);
			} else {
				nextNodes.add(nodeId);
			}

			return nextNodes;
		});
	}

	return (
		<div className="space-y-4">
			{sampleExplorerData.map((collection) => {
				const collectionNodeId = getExplorerNodeId("collection", collection.id);
				const isCollectionExpanded = expandedNodes.has(collectionNodeId);

				return (
					<section className="space-y-1" key={collection.id}>
						<button
							aria-controls={collectionNodeId}
							aria-expanded={isCollectionExpanded}
							className="flex h-8 w-full items-center gap-2 rounded-md px-3 text-left text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:outline-none"
							onClick={() => toggleNode("collection", collection.id)}
							type="button"
						>
							<ChevronDown
								className={cn(
									"size-4 shrink-0 transition-transform duration-200",
									isCollectionExpanded && "rotate-180",
								)}
							/>
							<Typography
								className="truncate text-xs font-semibold uppercase text-current"
								size="p"
							>
								{collection.name}
							</Typography>
						</button>

						<ExpandableContent
							className="space-y-1"
							id={collectionNodeId}
							isOpen={isCollectionExpanded}
						>
							{collection.folders.map((folder) => {
								const folderNodeId = getExplorerNodeId("folder", folder.id);
								const isFolderExpanded = expandedNodes.has(folderNodeId);

								return (
									<div key={folder.id}>
										<button
											aria-controls={folderNodeId}
											aria-expanded={isFolderExpanded}
											className="flex h-8 w-full items-center gap-2 rounded-md px-3 text-left text-sm font-medium text-foreground transition-colors hover:bg-muted/60 focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:outline-none"
											onClick={() => toggleNode("folder", folder.id)}
											type="button"
										>
											<ChevronDown
												className={cn(
													"size-4 shrink-0 text-muted-foreground transition-transform duration-200",
													isFolderExpanded && "rotate-180",
												)}
											/>
											{isFolderExpanded ? (
												<FolderOpen className="size-4 shrink-0 text-muted-foreground" />
											) : (
												<FolderClosed className="size-4 shrink-0 text-muted-foreground" />
											)}
											<span className="truncate">{folder.name}</span>
										</button>

										<ExpandableContent
											className="space-y-0.5"
											id={folderNodeId}
											isOpen={isFolderExpanded}
										>
											{folder.requests.map((request) => (
												<Request
													active={request.id === "list-customers"}
													depth={1}
													key={request.id}
													method={request.method}
													name={request.name}
													path={request.url}
													title={request.description ?? request.url}
												/>
											))}
										</ExpandableContent>
									</div>
								);
							})}
						</ExpandableContent>
					</section>
				);
			})}
		</div>
	);
}

export { Explorer, sampleExplorerData };
