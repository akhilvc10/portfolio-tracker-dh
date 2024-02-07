import { useMemo, useState } from "react";
import { StockChart } from "../StockChart/StockChart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import no_data from "../../assets/no_data.svg";
import { Series } from "@/types";

const adjustDataForTab = (data: Series[], tabValue: string): Series[] => {
	console.log(
		"🚀 ~ file: TabsWithStockChart.tsx ~ line 8 ~ adjustDataForTab ~ tabValue",
		tabValue
	);
	// Your adjustment logic here
	return data;
};

// Define the props for the component
interface TabsWithStockChartProps {
	data: Series[];
}

const TabsWithStockChart: React.FC<TabsWithStockChartProps> = ({ data }) => {
	const [activeTab, setActiveTab] = useState<string>("1D");

	const adjustedChartData: Series[] = useMemo(
		() => adjustDataForTab(data, activeTab),
		[data, activeTab]
	);

	const onChangeTab = (currentTab: string) => {
		setActiveTab(currentTab);
	};

	const tabValues = ["1D", "5D", "1M", "6M", "YTD", "1Y", "5Y", "MAX"];

	return (
		<Tabs defaultValue={activeTab} onValueChange={onChangeTab}>
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
