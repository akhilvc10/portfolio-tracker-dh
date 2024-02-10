import { DataPoint, Series } from "@/types";
import { ResponsiveLine } from "@nivo/line";
import { format, parseISO } from "date-fns";
import React from "react";

type Data = Series[];

const findHighestValue = (data: Data): DataPoint => {
	let highest: DataPoint = { x: "", y: 0 };
	data.forEach((serie) => {
		serie.data.forEach((d) => {
			if (d.y > highest.y) {
				highest = d;
			}
		});
	});

	return highest;
};

interface ResponsiveNivoLineProps {
	data: Data;
}

const ResponsiveNivoLine: React.FC<ResponsiveNivoLineProps> = ({ data }) => {
	const highestValue = findHighestValue(data);

	const formatTooltipDate = (value: string | number) => {
		try {
			return format(parseISO(value as string), "PPpp");
		} catch (error) {
			return value;
		}
	};

	return (
		<ResponsiveLine
			data={data}
			curve="linear"
			xScale={{
				type: "point"
			}}
			tooltip={({ point }) => {
				return (
					<div className="bg-card-bg p-3 shadow-sm" style={{ color: "black" }}>
						<strong>
							x: {formatTooltipDate(point.data.xFormatted)}, y:{" "}
							{point.data.yFormatted}
						</strong>
					</div>
				);
			}}
			markers={[
				// Existing marker for the highest value
				{
					axis: "y",
					value: highestValue.y,
					lineStyle: {
						stroke: "var(--border-color)",
						strokeWidth: 2,
						strokeDasharray: "3 3"
					},
					textStyle: {
						fill: "var(--color-typography-1)",
						fontSize: 12,
						fontWeight: "bold"
					},
					legend: `Highest: ${highestValue.y}`,
					legendOrientation: "horizontal"
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
			axisBottom={{
				format: (v) => {
					return format(parseISO(v), "h:mm a");
				},
				tickValues: 10,
				legendOffset: 10,
				tickSize: 5,
				tickPadding: 10,
				legendPosition: "middle"
			}}
			margin={{ top: 25, right: 0, bottom: 25, left: 25 }}
			axisLeft={{
				tickSize: 5,
				tickPadding: 5,
				tickRotation: 0,
				legendPosition: "middle"
			}}
			pointColor={{ theme: "background" }}
			pointBorderWidth={2}
			pointBorderColor={{ from: "serieColor" }}
			pointLabelYOffset={-12}
			enableGridX={true}
			enableGridY={true}
			colors={["#2673CE"]}
			lineWidth={2}
			enablePoints={false}
			enableArea={true}
			areaOpacity={0.1}
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
					}
				},
				axis: {
					ticks: {
						text: {
							fill: "var(--color-typography-1)"
						}
					}
				}
			}}
		/>
	);
};

export const StockChart = React.memo(ResponsiveNivoLine);
