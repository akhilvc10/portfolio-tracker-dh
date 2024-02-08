import { cn } from "@/lib/utils";
import { MouseEventHandler } from "react";
import { Badge } from "../ui/badge";

interface CompanyCardProps {
	symbol: string;
	companyName: string;
	stockValue: string | number;
	stockChange: string | number;
	stockChangeDirection: "increase" | "decrease";
	onClickCard: MouseEventHandler<HTMLDivElement> | undefined;
}

const CompanyCard: React.FC<CompanyCardProps> = ({
	symbol,
	companyName,
	stockValue,
	stockChange,
	stockChangeDirection,
	onClickCard
}) => {
	// Determine color based on stock change direction
	const stockChangeColor =
		stockChangeDirection === "increase" ? "text-green-500" : "text-red-500";
	const stockChangeIcon = stockChangeDirection === "increase" ? "▲" : "▼";

	return (
		<div
			onClick={onClickCard}
			className="my-4 max-w-sm cursor-pointer bg-card-bg overflow-hidden  rounded-[10px] border border-solid border-border-color p-6 min-h-[160px] md:min-h-[auto]"
		>
			{/* Top Bar with status and symbol */}
			<div className="mb-4 flex items-center">
				<Badge
					className={cn(
						`${stockChangeDirection === "increase" ? "bg-green-100 bg-opacity-30 text-green-600" : "bg-red-100 bg-opacity-30 text-red-500"} rounded text-xs font-bold uppercase`
					)}
					variant="outline"
				>
					{symbol}
				</Badge>

				<span className="ml-2 font-semibold text-typography-2">
					{companyName}
				</span>
			</div>

			<div className="mb-2 text-xl font-bold text-typography-2">
				{stockValue}
			</div>

			<div className={`${stockChangeColor} text-sm`}>
				<span>{stockChangeIcon}</span> {stockChange}
			</div>
		</div>
	);
};

export default CompanyCard;
