import { staticData } from "@/api/data";
import StockInfoCardList from "../StockInfoCardList/StockInfoCardList";
import { StockDataTypes } from "@/types";

interface CardListItem {
	title: string;
	value: string;
}

interface StockCardProps {
	symbol: string;
}

const transformStockDataToCardList = (
	stockSymbol: string,
	staticData: StockDataTypes[]
): CardListItem[] => {
	const stock = staticData.find((data) => data[stockSymbol]);

	if (!stock) {
		return [];
	}

	const stockData = stock[stockSymbol];
	const previousClose = stockData.lastPrice;
	const dayRange = `${stockData.lowPrice} - ${stockData.openPrice}`;
	const yearRange = stockData.yearRange;
	const marketCap = stockData.marketCap;
	const avgVolume = stockData.volume;
	const peRatio = "Data Not Available";
	const dividendYield = "Data Not Available";
	const primaryExchange = "NASDAQ";

	return [
		{
			title: "Previous Close",
			value: `$${previousClose}`
		},
		{
			title: "Day Range",
			value: dayRange
		},
		{
			title: "Year Range",
			value: yearRange
		},
		{
			title: "Market Cap",
			value: marketCap
		},
		{
			title: "Avg Volume",
			value: avgVolume
		},
		{
			title: "P/E Ratio",
			value: peRatio
		},
		{
			title: "Dividend Yield",
			value: dividendYield
		},
		{
			title: "Primary Exchange",
			value: primaryExchange
		}
	];
};

const StockCard: React.FC<StockCardProps> = ({ symbol }) => {
	const stockCardData = transformStockDataToCardList(symbol, staticData);
	return (
		<div className="rounded-[10px] border border-solid border-border-color bg-card-bg px-6 py-0">
			<div className="flex flex-col py-1">
				{stockCardData.map((item) => {
					return <StockInfoCardList title={item.title} value={item.value} />;
				})}
			</div>
		</div>
	);
};

export default StockCard;
