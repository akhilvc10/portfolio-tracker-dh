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

export type CompanyInfo = {
  name: string;
  industry: string;
  ceo: string;
  symbol: string;
  description: string;
};

export type StockData = {
  lastPrice: number | string; 
  openPrice: number | string;
  lowPrice: number | string;
  change: number | string;
  percentChange: number | string;
  volume: string;
  date: string;
  stockChangeDirection: "increase" | "decrease";
  dayRange: string;
  yearRange: string;
  marketCap: string;
  news: NewsItem[];
  companyInfo: CompanyInfo;
};

export interface StockDataTypes {
  [key: string]: {
    lastPrice: number | string;
    openPrice: number | string;
    lowPrice: number | string;
    change: number | string;
    percentChange: number | string;
    volume: string;
    date: string;
    stockChangeDirection: "increase" | "decrease";
    dayRange: string;
    yearRange: string;
    marketCap: string;
    news: NewsItem[];
    companyInfo: CompanyInfo;
  };
}

export type Timeframe = "1D" | "5D" | "1M" | "6M";


