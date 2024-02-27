import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import no_data from "../../assets/no_data.svg";
import { DatumValue, Series } from "@/types";
import useTabsWithStockChart from "@/hooks/useTabsWithStockChart";
import { format, parseISO } from "date-fns";
import { findHighestValue } from "@/lib/utils";
import { ResponsiveLine } from "@nivo/line";
import useAxisBottomConfig, { Timeframe } from "@/hooks/useAxisBottomConfig";
import CustomToolTip from "../charts/utils/CustomToolTip";

interface TabsWithStockChartProps {
	data: Series[];
}

const TabsWithStockChart: React.FC<TabsWithStockChartProps> = ({ data }) => {
	const { activeTab, tabValues, onChangeTab, adjustedChartData } =
		useTabsWithStockChart({ data });
	const searchParams = new URLSearchParams(window.location.search);
	const timeframe =
		(searchParams.get("window") as Timeframe) || Timeframe.Daily;

	const axisBottom = useAxisBottomConfig({ data, timeframe });

	const highestValue = findHighestValue(data);

	const formatTooltipDate = (value: DatumValue): string => {
		const dateString =
			typeof value === "number" ? new Date(value).toISOString() : value;
		try {
			return format(parseISO(dateString), "PPpp");
		} catch (error) {
			return dateString;
		}
	};

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
					<ResponsiveLine
						animate
						data={adjustedChartData}
						curve="linear"
						xScale={{
							type: "point"
						}}
						tooltip={({ point }) => {
							return (
								<div
									className="bg-card-bg md:p-3 p-1 text-[10px] md:text-lg shadow-sm"
									style={{ color: "var(--color-typography-1)" }}
								>
									<strong>
										X: {formatTooltipDate(point.data.x.toString())}, Y:{" "}
										{point.data.yFormatted}
									</strong>
								</div>
							);
						}}
						markers={[
							{
								axis: "x",
								value: highestValue.x,
								legendPosition: "top-right",
								textStyle: {
									fill: "var(--color-typography-1)",
									fontSize: 12,
									fontWeight: "bold",
									backgroundColor: "white",
									padding: 10
								},
								lineStyle: {
									stroke: "#2673CE",
									strokeWidth: 1,
									strokeDasharray: "3 3"
								},
								legendOrientation: "vertical"
							}
						]}
						yScale={{
							type: "linear",
							min: "auto",
							max: "auto",
							stacked: false,
							reverse: false
						}}
						axisTop={null}
						axisRight={null}
						xFormat="time:%Y-%m-%d"
						axisBottom={axisBottom}
						margin={{ top: 50, right: 20, bottom: 30, left: 50 }}
						axisLeft={{
							tickSize: 0,
							tickPadding: 5,
							tickRotation: 0,
							legendPosition: "middle"
						}}
						defs={[
							{
								id: "gradient",
								type: "linearGradient",
								colors: [
									{ offset: 0, color: "#2673CE" },
									{ offset: 3, color: "#fdfbfb" }
								]
							}
						]}
						fill={[
							{
								match: "*",
								id: "gradient"
							}
						]}
						pointColor={{ theme: "background" }}
						pointBorderWidth={2}
						pointBorderColor={{ from: "serieColor" }}
						enableGridX={false}
						colors={["#2673CE"]}
						enablePoints={false}
						enableArea={true}
						areaOpacity={0.4}
						useMesh={true}
						theme={{
							grid: {
								line: {
									stroke: "#ddd",
									strokeWidth: 1,
									strokeDasharray: "4 4"
								}
							},
							tooltip: {
								container: {
									background: "var(--card-bg)"
								},
								basic: {
									color: "var(--typography-1)"
								}
							},
							axis: {
								ticks: {
									line: {
										strokeWidth: 2
									},

									text: {
										fill: "var(--color-typography-1)"
									}
								}
							}
						}}
						layers={[
							"grid",
							"markers",
							"axes",
							"areas",
							"crosshair",
							"lines",
							"slices",
							"points",
							"mesh",
							CustomToolTip(highestValue)
						]}
					/>
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
