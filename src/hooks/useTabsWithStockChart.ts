import { Series } from "@/types";
import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const adjustDataForTab = (data: Series[], tabValue: string): Series[] => {
	console.log(
		"🚀 ~ file: TabsWithStockChart.tsx ~ line 9 ~ adjustDataForTab ~ tabValue",
		tabValue
	);

	return data;
};


interface UseTabsWithStockChartProps {
	data: Series[];
}

const useTabsWithStockChart = ({data}: UseTabsWithStockChartProps) => {
  const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const windowParam = searchParams.get("window"); 

	const [activeTab, setActiveTab] = useState<string>(windowParam || "1D");

	const navigate = useNavigate();

	useEffect(() => {
	
		const currentWindowParam = new URLSearchParams(location.search).get(
			"window"
		);
		if (currentWindowParam && currentWindowParam !== activeTab) {
			setActiveTab(currentWindowParam);
		
		}
	}, [location.search]); 

	const adjustedChartData: Series[] = useMemo(
		() => adjustDataForTab(data, activeTab),
		[data, activeTab]
	);

	const onChangeTab = (currentTab: string) => {
		navigate(`?window=${currentTab}`);
		setActiveTab(currentTab);
	};

	const tabValues = ["1D", "5D", "1M", "6M", "YTD", "1Y", "5Y",];
  
  return {
    activeTab,
    tabValues,
    onChangeTab,
    adjustedChartData
  }
}

export default useTabsWithStockChart