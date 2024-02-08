import { staticData } from "@/api/data";
import StockInfoCardList from "../StockInfoCardList/StockInfoCardList";

const transformStockDataToCardList = (stockSymbol, staticData) => {
	// Find the specific stock data by symbol
	const stock = staticData.find((data) => data[stockSymbol]);

	// If the stock is not found, return an empty array or some default data
	if (!stock) {
		return [];
	}

	// Extract the required fields from the stock data
	const stockData = stock[stockSymbol];
	const previousClose = stockData.lastPrice;
	const dayRange = `${stockData.lowPrice} - ${stockData.openPrice}`;
	// You'll need to get 'Year Range' and 'Market Cap' from somewhere, as they're not in your JSON structure
	const yearRange = stockData.yearRange; // Placeholder, update with actual data
	const marketCap = stockData.marketCap; // Placeholder, update with actual data
	const avgVolume = stockData.volume;
	// 'P/E Ratio' and 'Dividend Yield' are also not in your JSON, so placeholders are used
	const peRatio = "Data Not Available"; // Placeholder, update with actual data
	const dividendYield = "Data Not Available"; // Placeholder, update with actual data
	const primaryExchange = "NASDAQ"; // Assuming NASDAQ, update as necessary

	// Map the data to the structure expected by StockInfoCardList
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

const StockCard = ({ symbol }) => {
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
