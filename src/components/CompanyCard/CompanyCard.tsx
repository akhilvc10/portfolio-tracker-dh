import { cn } from "@/lib/utils";

// Define the types for the props
interface CompanyCardProps {
	symbol: string;
	companyName: string;
	stockValue: string;
	stockChange: string;
	stockChangeDirection: "increase" | "decrease";
}

// Define the Card component with props
const CompanyCard: React.FC<CompanyCardProps> = ({
	symbol,
	companyName,
	stockValue,
	stockChange,
	stockChangeDirection
}) => {
	// Determine color based on stock change direction
	const stockChangeColor =
		stockChangeDirection === "increase" ? "text-green-500" : "text-red-500";
	const stockChangeIcon = stockChangeDirection === "increase" ? "▲" : "▼";

	return (
		<div className="m-4 max-w-sm cursor-pointer overflow-hidden  rounded-[10px] border border-solid border-[rgb(218,220,224)] bg-white p-6">
			{/* Top Bar with status and symbol */}
			<div className="mb-4 flex items-center">
				<div
					className={cn(
						`px-3 py-1 ${stockChangeDirection === "increase" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-500"} rounded text-xs font-bold uppercase`
					)}
				>
					{symbol}
				</div>
				<span className="ml-2 font-semibold text-gray-700">{companyName}</span>
			</div>

			{/* Stock value */}
			<div className="mb-2 text-xl font-bold text-gray-900">{stockValue}</div>

			{/* Stock change */}
			<div className={`${stockChangeColor} text-sm`}>
				<span>{stockChangeIcon}</span> {stockChange}
			</div>
		</div>
	);
};

export default CompanyCard;
