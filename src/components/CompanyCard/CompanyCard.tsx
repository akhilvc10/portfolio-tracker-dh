import { cn } from "@/lib/utils";
import { MouseEventHandler } from "react";
import { Badge } from "../ui/badge";
import classNames from "classnames";
interface CompanyCardProps {
	symbol: string;
	companyName: string;
	stockValue: string | number;
	stockChange: string | number;
	stockChangeDirection: "increase" | "decrease";
	onClickCard: MouseEventHandler<HTMLDivElement> | undefined;
	hasClicked: boolean;
}

const CompanyCard: React.FC<CompanyCardProps> = ({
	symbol,
	companyName,
	stockValue,
	stockChange,
	stockChangeDirection,
	onClickCard,
	hasClicked
}) => {
	const stockChangeColor =
		stockChangeDirection === "increase" ? "text-green-500" : "text-red-500";
	const stockChangeIcon = stockChangeDirection === "increase" ? "▲" : "▼";

	const cardClasses = classNames("", {
		"border border-2 border-solid border-primary": hasClicked,
		"": !hasClicked
	});

	return (
		<div
			onClick={onClickCard}
			className={cn(
				`my-4 max-w-sm cursor-pointer bg-card-bg overflow-hidden rounded-[10px] border border-solid border-border-color p-6 min-h-[160px] md:min-h-[auto] hover:shadow-md ${cardClasses}`
			)}
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
