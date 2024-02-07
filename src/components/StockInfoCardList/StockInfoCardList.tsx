import React from "react";

interface StockInfoCardListProps {
	title: string;
	value: string | number;
}

const StockInfoCardList: React.FC<StockInfoCardListProps> = ({
	title,
	value
}) => {
	return (
		<div className="flex justify-between border-b py-3 last-of-type:border-none">
			<div className="text-gray-500">{title}</div>
			<div>{value}</div>
		</div>
	);
};

export default StockInfoCardList;
