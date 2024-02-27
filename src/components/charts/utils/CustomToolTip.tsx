// @ts-nocheck

import { DataPoint } from "@/types";
import { CustomLayerProps } from "@nivo/line";

const CustomToolTip =
	(highest: DataPoint) =>
	({ xScale, yScale }: CustomLayerProps) => {
		const x = xScale(highest.x);
		const y = yScale(highest.y);
		const text = `Highest: ${highest.y}`;

		return (
			<svg
				width={102}
				height={46}
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				x={x - 51}
				y={y - -50}
			>
				<mask id="prefix__a" className="fill-primary">
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M61.186 12.787L51.204.213 41.22 12.786H2.854a2 2 0 00-2 2V43.13a2 2 0 002 2h96.699a2 2 0 002-2V14.786a2 2 0 00-2-2H61.186z"
					/>
				</mask>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M61.186 12.787L51.204.213 41.22 12.786H2.854a2 2 0 00-2 2V43.13a2 2 0 002 2h96.699a2 2 0 002-2V14.786a2 2 0 00-2-2H61.186z"
					fill="var(--card-bg)"
				/>
				<path
					d="M51.204.214l.783-.622-.783-.986-.784.986.784.622zm9.982 12.572l-.783.622.3.379h.483v-1zm-19.965 0v1h.483l.3-.378-.783-.621zm9.2-11.95l9.982 12.572 1.566-1.243L51.987-.408 50.42.836zm-8.417 12.572L51.987.836 50.42-.408l-9.982 12.573 1.566 1.243zm-39.15.379h38.367v-2H2.854v2zm-1 1a1 1 0 011-1v-2a3 3 0 00-3 3h2zm0 28.343V14.786h-2V43.13h2zm1 1a1 1 0 01-1-1h-2a3 3 0 003 3v-2zm96.699 0H2.854v2h96.699v-2zm1-1a1 1 0 01-1 1v2a3 3 0 003-3h-2zm0-28.344V43.13h2V14.786h-2zm-1-1a1 1 0 011 1h2a3 3 0 00-3-3v2zm-38.367 0h38.367v-2H61.186v2z"
					fill="#2673CE"
					mask="url(#prefix__a)"
				/>
				<text
					x="50%"
					y="65%"
					text-anchor="middle"
					alignment-baseline="central"
					className="font-primary dark:stroke-gray-200 stroke-gray-500"
				>
					{text}
				</text>
			</svg>
		);
	};

export default CustomToolTip;
