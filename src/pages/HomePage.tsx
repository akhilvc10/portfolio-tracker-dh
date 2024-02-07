import { staticData } from "@/api/data";
import CompanyVerticalList from "@/components/CompanyVerticalList/CompanyVerticalList";
import NewsSection from "@/components/NewsSection/NewsSection";
import StockCard from "@/components/StockCard/StockCard";
import TabsWithStockChart from "@/components/TabsWithStockChart/TabsWithStockChart";
import { Button } from "@/components/ui/button";
import { generateStockDataForTimeframe } from "@/lib/utils";
import { Series, StockData, Timeframe } from "@/types";
import { useEffect, useMemo, useState } from "react";
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

console.log("data 1", data);

type Params = {
	symbol: string;
};

export default function HomePage() {
	const location = useLocation();
	const { symbol: stockSymbol } = useParams<Params>();
	const windowParam =
		new URLSearchParams(location.search)?.get("window") || "1D";

	const [dataSet, setDataSet] = useState<StockData | null>(() => {
		const initialData = staticData.find((data) => data[stockSymbol as string]);
		return initialData ? initialData[stockSymbol as string] : null;
	});
	const [graphDataSet, setGraphDataSet] = useState<Series[]>([]);

	const companyData = useMemo(() => {
		if (staticData.length === 0) return []; // Ensure staticData isn't empty
		const data = staticData[0];
		return Object.keys(data).map((key) => ({
			...data[key].companyInfo,
			...data[key],
			symbol: key
		}));
	}, []);

	useEffect(() => {
		if (typeof dataSet?.lastPrice === "number") {
			const graphData = generateStockDataForTimeframe(
				dataSet.lastPrice,
				windowParam,
				dataSet.companyInfo.symbol
			);
			setGraphDataSet(graphData);
		}
	}, [windowParam, dataSet?.lastPrice, dataSet?.companyInfo?.symbol]);

	useEffect(() => {
		if (!stockSymbol) {
			setDataSet(null);
			return;
		}
		const stockData = staticData.find((data) => data[stockSymbol]);
		setDataSet(stockData ? stockData[stockSymbol] : null);
	}, [stockSymbol]);

	console.log("graphDataSet", graphDataSet);

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
							{graphDataSet.length ? (
								<TabsWithStockChart data={graphDataSet} />
							) : (
								<>Loading...</>
							)}
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
