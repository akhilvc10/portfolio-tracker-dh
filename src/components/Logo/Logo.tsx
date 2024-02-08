import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

export default function Logo({ classNames }) {
	return (
		<div
			className={cn(
				`border-border-color gap-3 text-typography-2 dark:text-typography-2 flex items-center justify-center self-stretch whitespace-nowrap rounded-xl font-bold uppercase ${classNames}`
			)}
		>
			<div className="w-[35px] h-[35px] ">
				<img src={logo} className="w-full h-full rounded-sm" alt="" />
			</div>
			<p className="text-typography-2 font-primary">GrowFolio</p>
		</div>
	);
}
