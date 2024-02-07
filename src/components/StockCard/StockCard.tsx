import StockInfoCardList from "../StockInfoCardList/StockInfoCardList";

const data = [
	{
		title: "Previous Close",
		value: "$170.31"
	},
	{
		title: "Day Range",
		value: "$167.65 - $170.71"
	},
	{
		title: "Year Range",
		value: "$88.12 - $172.50"
	},
	{
		title: "Market Cap",
		value: "1.76T USD"
	},
	{
		title: "Avg Volume",
		value: "46.40M"
	},
	{
		title: "P/E Ratio",
		value: "58.33"
	},
	{
		title: "Dividend Yield",
		value: "-"
	},
	{
		title: "Primary Exchange",
		value: "NASDAQ"
	}
];

const StockCard = () => {
	return (
		<div className="rounded-[10px] border border-solid border-[rgb(218,220,224)] bg-white px-6 py-0">
			<div className="flex flex-col py-1">
				{data.map((item) => {
					return <StockInfoCardList title={item.title} value={item.value} />;
				})}
			</div>
		</div>
	);
};

export default StockCard;
