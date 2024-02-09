import { useEffect, useMemo, useState } from "react";
import { StockChart } from "../StockChart/StockChart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import no_data from "../../assets/no_data.svg";
import { Series } from "@/types";
import { useNavigate, useLocation } from "react-router-dom";

const adjustDataForTab = (data: Series[], tabValue: string): Series[] => {
	console.log(
		"🚀 ~ file: TabsWithStockChart.tsx ~ line 9 ~ adjustDataForTab ~ tabValue",
		tabValue
	);

	return data;
};

interface TabsWithStockChartProps {
	data: Series[];
}

const TabsWithStockChart: React.FC<TabsWithStockChartProps> = ({ data }) => {
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const windowParam = searchParams.get("window"); // Get the "window" parameter

	const [activeTab, setActiveTab] = useState<string>(windowParam || "1D");
	console.log(
		"🚀 ~ file: TabsWithStockChart.tsx ~ line 27 ~ activeTab",
		activeTab
	);

	const navigate = useNavigate();

	useEffect(() => {
		// Only respond to URL search parameter changes
		const currentWindowParam = new URLSearchParams(location.search).get(
			"window"
		);
		if (currentWindowParam && currentWindowParam !== activeTab) {
			setActiveTab(currentWindowParam);
			// Potentially unnecessary to call onChangeTab here if we're just syncing state
		}
	}, [location.search]); // Remove activeTab from dependencies to focus on URL changes

	const adjustedChartData: Series[] = useMemo(
		() => adjustDataForTab(data, activeTab),
		[data, activeTab]
	);

	const onChangeTab = (currentTab: string) => {
		navigate(`?window=${currentTab}`);
		setActiveTab(currentTab);
	};

	const tabValues = ["1D", "5D", "1M", "6M", "YTD", "1Y", "5Y", "MAX"];

	return (
		<Tabs key={activeTab} defaultValue={activeTab} onValueChange={onChangeTab}>
			<TabsList className="grid grid-cols-8 lg:grid-cols-12">
				{tabValues.map((tabValue) => (
					<TabsTrigger key={tabValue} value={tabValue}>
						{tabValue}
					</TabsTrigger>
				))}
			</TabsList>

			<TabsContent value={activeTab} style={{ height: "400px" }}>
				{adjustedChartData && adjustedChartData.length > 0 ? (
					<StockChart data={adjustedChartData} />
				) : (
					<div className="flex items-center justify-center">
						<img src={no_data} alt="no-data" />
						No data to display
					</div>
				)}
			</TabsContent>
		</Tabs>
	);
};

export default TabsWithStockChart;
