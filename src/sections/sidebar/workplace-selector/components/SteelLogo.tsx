import { HandMetal } from "lucide-react";

const SteelLogo = () => {
	return (
		<div className="flex gap-2 items-center">
			<div className="bg-primary rounded-full p-1">
				<HandMetal size={17} className="rotate-45"/>
			</div >
			<p className="text-black rounded-full bg-primary px-3 font-bold tracking-widest">
				STEEL
			</p>
		</div>
	);
};

export default SteelLogo;
