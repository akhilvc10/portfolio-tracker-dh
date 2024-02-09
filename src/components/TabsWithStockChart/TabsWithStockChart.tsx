import { StockChart } from "../StockChart/StockChart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import no_data from "../../assets/no_data.svg";
import { Series } from "@/types";
import useTabsWithStockChart from "@/hooks/useTabsWithStockChart";

interface TabsWithStockChartProps {
	data: Series[];
}

const TabsWithStockChart: React.FC<TabsWithStockChartProps> = ({ data }) => {
	const { activeTab, tabValues, onChangeTab, adjustedChartData } =
		useTabsWithStockChart({ data });

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
