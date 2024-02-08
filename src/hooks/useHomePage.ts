import { staticData } from "@/api/data";
import { generateStockDataForTimeframe } from "@/lib/utils";
import { CompanyInfo, Series, StockData, Timeframe } from "@/types";
import { useEffect, useMemo, useState } from "react";
import {  useLocation, useParams } from "react-router-dom";

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
	const windowParam =
		new URLSearchParams(location.search)?.get("window") as Timeframe || "1D";

	const [dataSet, setDataSet] = useState<StockData | null>(() => {
		const initialData = staticData.find((data) => data[stockSymbol as string]);
		return initialData ? initialData[stockSymbol as string] : null;
	});
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


  return {
    companyData,
    dataSet,
    graphDataSet
  }
}

export default useHomePage