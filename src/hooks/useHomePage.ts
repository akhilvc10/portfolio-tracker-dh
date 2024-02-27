import { staticData } from "@/api/data";
import { filterDataForTimeframe, generateStockDataForTimeframe } from "@/lib/utils";
import { CompanyInfo, Series, StockData, Timeframe } from "@/types";
import { useEffect, useMemo, useState } from "react";
import { DateRange } from "react-day-picker";
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

	const [date, setDate] = useState<DateRange | undefined>({
    // from: new Date(2022, 0, 20),
    // to: addDays(new Date(2022, 0, 20), 20),
    from: undefined,
    to: undefined
  })


	useEffect(() => {
		console.log("🚀 ~ file: useHomePage.ts ~ line 31 ~ useHomePage ~ date", date)

	},[date])

	const windowParam =
		new URLSearchParams(location.search)?.get("window") as Timeframe || "1D";

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
      console.log("🚀 ~ file: useHomePage.ts ~ line 72 ~ useEffect ~ oneyYearData", oneYearData)
			const graphData = filterDataForTimeframe(oneYearData[0],windowParam )
      console.log("🚀 ~ file: useHomePage.ts ~ line 73 ~ useEffect ~ graphData", graphData)
      setGraphDataSet(graphData);
    } else {
  
      setGraphDataSet([]);
    }
  }, [windowParam, dataSet,date]);




  return {
    companyData,
    dataSet,
    graphDataSet,
		setDate,
		date
  }
}

export default useHomePage