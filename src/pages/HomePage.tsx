import { staticData } from "@/api/data";
import CompanyVerticalList from "@/components/CompanyVerticalList/CompanyVerticalList";
import NewsCard from "@/components/NewsCard/NewsCard";
import NewsSection from "@/components/NewsSection/NewsSection";
import StockCard from "@/components/StockCard/StockCard";
import TabsWithStockChart from "@/components/TabsWithStockChart/TabsWithStockChart";
import { Button } from "@/components/ui/button";
import { generateStockDataForTimeframe } from "@/lib/utils";
import { Series, StaticDataTypes, StockData, Timeframe } from "@/types";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const data: Series[] = [
	{
		id: "Amazon",
		color: "hsl(26, 70%, 50%)",
		data: [
			{
				x: "2024-02-06T09:30",
				y: 170.31
			},
			{
				x: "2024-02-06T10:00",
				y: 170.5
			},
			{
				x: "2024-02-06T10:30",
				y: 169.8
			},
			{
				x: "2024-02-06T11:00",
				y: 169.2
			},
			{
				x: "2024-02-06T11:30",
				y: 168.8
			},
			{
				x: "2024-02-06T12:00",
				y: 169.0
			},
			{
				x: "2024-02-06T12:30",
				y: 168.5
			},
			{
				x: "2024-02-06T13:00",
				y: 168.75
			},
			{
				x: "2024-02-06T13:30",
				y: 168.9
			},
			{
				x: "2024-02-06T14:00",
				y: 168.6
			},
			{
				x: "2024-02-06T14:30",
				y: 168.4
			},
			{
				x: "2024-02-06T15:00",
				y: 168.84
			}
		]
	}
].map((series) => ({
	...series,
	data: series.data.map((point) => ({
		...point,
		x: new Date(point.x) // Ensure this is a valid date format
	}))
}));

type Params = {
	symbol: string;
};

export default function HomePage() {
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const { symbol } = useParams<Params>();
	const windowParam: Timeframe | null | string = searchParams.get("window"); // Get the "window" parameter

	const [dataSet, setDataSet] = useState<StockData | null>(null);
	const [graphDataSet, setGraphDataSet] = useState([]);

	const transformDataForVerticalList = () => {
		const data = staticData[0]; // Assuming staticData is an array with a single object
		return Object.keys(data).map((key) => ({
			symbol: key,
			...data[key].companyInfo,
			...data[key] // Spread the rest of the stock data
		}));
	};

	const companyData = transformDataForVerticalList();

	useEffect(() => {
		const graphData = generateStockDataForTimeframe(
			dataSet?.lastPrice,
			windowParam
		);
		setGraphDataSet(graphData[0]);
	}, [windowParam, dataSet?.lastPrice]);

	console.log("graphDataSet", graphDataSet);

	useEffect(() => {
		// Find the relevant data by symbol
		const stockData = staticData.find((data) => data[symbol]);
		setDataSet(stockData ? stockData[symbol] : {});
	}, [symbol]); // This effect depends on `symbol` and runs whenever it changes

	return (
		<div className="bg-gray-100">
			<div className="mx-20">
				<CompanyVerticalList data={companyData} />
			</div>

			<div className="container rounded-[10px] bg-white p-10">
				<div className="flex flex-col items-start justify-between border-b lg:flex-row lg:items-center">
					<div className="flex w-full flex-col">
						<div className="flex items-center justify-between">
							<div className="pb-3 text-3xl font-bold">
								{dataSet?.companyInfo.name}
							</div>
							<div className="flex space-x-2">
								<Button className="rounded border border-gray-300 px-3 py-1">
									Share
								</Button>
							</div>
						</div>
						<div className="flex flex-col justify-center pb-4">
							<div className="text-2xl font-semibold text-green-500">
								{dataSet?.lastPrice} (${dataSet?.percentChange}%)
							</div>
							{/* <div className="text-sm text-gray-600">
								Pre-market: $187.85 (${}%) +$0.17
							</div> */}
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 gap-4 py-4 lg:grid-cols-3">
					<div className="lg:col-span-2">
						<div>
							<TabsWithStockChart data={data} />
						</div>
						<div className="mt-10 w-full">
							<div className="my-3 text-2xl font-bold">In the news</div>
							{dataSet?.news?.length ? (
								<NewsSection news={dataSet?.news || []} />
							) : (
								"No news"
							)}
						</div>
					</div>

					<div className="space-y-2">
						<StockCard />
						<StockCard />
					</div>
				</div>
			</div>
		</div>
	);
}
