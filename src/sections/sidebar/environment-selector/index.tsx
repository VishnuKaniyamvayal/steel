import { Container, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

type EnvironementVariables = {
	id: string;
	name: string;
	value: string;
};

type Environment = {
	id: string | null;
	name: string;
	values: EnvironementVariables[];
};

function EnvironmentSelector() {
	const environments: Environment[] = [
		{
			id: null,
			name: "No Environment",
			values: [],
		},
		{
			id: "123123123123",
			name: "Environment 1",
			values: [],
		},
	];

	return (
		<div className="mx-auto p-3 w-full flex items-center justify-between border rounded-xl">
			<Container size={18} className="text-muted-foreground" />
			<Separator orientation="vertical" />
			<Select
				items={environments.map((env) => ({
					label: env.name,
					value: env.id,
				}))}
			>
				<SelectTrigger className="bg-transparent shadow-none hover:bg-transparent focus-visible:bg-transparent">
					<SelectValue />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Environments</SelectLabel>
						{environments.map((item) => (
							<SelectItem key={item.id} value={item.id}>
								{item.name}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
			<Separator orientation="vertical" />
			<Button variant={"outline"} size={"icon"}>
				<Settings size={18} className="text-muted-foreground" />
			</Button>
		</div>
	);
}

export { EnvironmentSelector };
