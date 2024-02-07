export type DataPoint = {
	x: Date | string; 
	y: number;
};

export type Series = {
	id: string;
	data: DataPoint[];
};

export type NewsItem = {
  headline: string;
  date: string;
	source: string;
	imageUrl: string;
};

type CompanyInfo = {
  name: string;
  industry: string;
  ceo: string;
  symbol: string;
};

export type StockData = {
  lastPrice: number | string; // Assuming the mix of types was intentional
  openPrice: number | string;
  lowPrice: number | string;
  change: string | number;
  percentChange: string | number;
  volume: string;
  date: string;
  stockChangeDirection: "increase" | "decrease";
  news: NewsItem[];
  companyInfo: CompanyInfo;
};

export type StaticDataTypes = {
  [key: string]: StockData;
};

export type Timeframe = "1D" | "5D" | "1M" | "6M";


