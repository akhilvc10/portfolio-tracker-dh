import { DataPoint, Series, Timeframe } from "@/types";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatAMPM(dateString: Date) {
  const date = new Date(dateString);
  let hours = date.getHours();
  let minutes: string | number = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  const strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

export function delay(time: number) {
  return new Promise(resolve => setTimeout(resolve, time));
}



export function generateStockDataForTimeframe(baseValue: number, timeframe: Timeframe, stockSymbol: string): Series[] {

  const roundedBaseValue =  Math.floor(baseValue);

  const timeframes: Record<Timeframe, { points: number; interval: number }> = {
    "1D": { points: 7, interval: 60 }, // 7 points, 1-hour intervals
    "5D": { points: 5 * 7, interval: 60 }, // 5 days of 7 points, 1-hour intervals
    "1M": { points: 22, interval: 24 * 60 }, // Approx 22 trading days, 1 point per day
    "6M": { points: 6 * 22, interval: 24 * 60 } // 6 months of trading days
  };

  // Determine the number of points and interval based on the timeframe
  const { points, interval } = timeframes[timeframe];
  const intervalMillis = interval * 60 * 1000; // Convert interval to milliseconds

  let currentTime = new Date(); // Start from current time
  currentTime.setHours(9, 30, 0, 0); // Set to 09:30 AM

  const data: DataPoint[] = [];
  for (let i = 0; i < points; i++) {
    const fluctuation = (Math.random() - 0.5) * 2; // Random fluctuation between -1 and 1
    const change = fluctuation *  roundedBaseValue * 0.005; // Max fluctuation is 0.5% of the baseValue
    const stockPrice = roundedBaseValue + change;

    data.push({
      x: new Date(currentTime).toISOString(),
      y: parseFloat(stockPrice.toFixed(2))
    });

    // Move to next time interval
    currentTime = new Date(currentTime.getTime() + intervalMillis);
  }

  return [{
    id: stockSymbol,
    data
  }];
}
