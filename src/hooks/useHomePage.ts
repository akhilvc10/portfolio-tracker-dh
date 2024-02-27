import { staticData } from "@/api/data";
import {
	filterDataForTimeframe,
	findMinMaxDates,
	generateStockDataForTimeframe
} from "@/lib/utils";
import { CompanyInfo, Series, StockData, Timeframe } from "@/types";
import { useEffect, useMemo, useState } from "react";
import { DateRange } from "react-day-picker";
import { useLocation, useParams } from "react-router-dom";

type Params = {
	symbol: string;
};

export type CompanyDataItem = CompanyInfo &
	StockData & {
		symbol: string;
	};

const useHomePage = () => {
	const location = useLocation();
	const { symbol: stockSymbol } = useParams<Params>();
	const [activeDate, setActiveDate] = useState<{ min: Date | string; max: Date | string; }>({
		min: "",
		max: ""
	});

	const [date, setDate] = useState<DateRange | undefined>({
		from: undefined,
		to: undefined
	});

	

	const windowParam =
		(new URLSearchParams(location.search)?.get("window") as Timeframe) || "1D";

	const [dataSet, setDataSet] = useState<StockData | null>(null);
	const [graphDataSet, setGraphDataSet] = useState<Series[]>([]);

	const companyData = useMemo<CompanyDataItem[]>(() => {
		if (staticData.length === 0) return [];
		const data = staticData[0];
		return Object.keys(data).map((key) => ({
			...data[key].companyInfo,
			...data[key],
			symbol: key
		}));
	}, []);

	useEffect(() => {
		if (stockSymbol !== undefined) {
			const stockData = staticData.find((data) => data[stockSymbol]);
			setDataSet(stockData ? stockData[stockSymbol] : null);
		} else {
			setDataSet(null);
		}
	}, [stockSymbol]);

	useEffect(() => {
		if (dataSet && typeof dataSet.lastPrice === "number") {
			const oneYearData = generateStockDataForTimeframe(
				dataSet.lastPrice,
				dataSet.companyInfo.symbol,
				date?.from,
				date?.to
			);
		
			const graphData = filterDataForTimeframe(oneYearData[0], windowParam);
			setGraphDataSet(graphData);
		} else {
			setGraphDataSet([]);
		}
	}, [windowParam, dataSet, date]);

	useEffect(() => {
		if (graphDataSet.length) {
			const activeDateRange = findMinMaxDates(graphDataSet[0].data);
			setActiveDate(activeDateRange);
		}
	}, [graphDataSet]);

	return {
		companyData,
		dataSet,
		graphDataSet,
		setDate,
		date,
		activeDate
	};
};

export default useHomePage;
