import { Data, DataPoint, Series, Timeframe } from "@/types";
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


export function generateCustomTickValuesFromArray(data: DataPoint[], intervalHours: number) {
  if (!data || data.length === 0 || intervalHours <= 0) {
    return [];
  }

  const allTimestamps = data.reduce((acc: number[], currentValue: DataPoint) => {
    if (Array.isArray(currentValue.x)) {
      acc.push(...currentValue.x.map(date => new Date(date).getTime()));
    } else {
      acc.push(new Date(currentValue.x).getTime());
    }
    return acc;
  }, []);

  const minTimestamp = Math.min(...allTimestamps);
  const maxTimestamp = Math.max(...allTimestamps);

  const intervalMilliseconds = intervalHours * 60 * 60 * 1000;


  const tickValues = [];
  for (let currentTime = minTimestamp; currentTime <= maxTimestamp; currentTime += intervalMilliseconds) {
    tickValues.push(new Date(currentTime).toISOString());
  }

  return tickValues;
}




export const filterDataForTimeframe = (data: Series, timeframe:Timeframe) => {
  const now = new Date();
  let startDate: Date;

  switch (timeframe) {
    case '1D':
      startDate = new Date(now.setDate(now.getDate() - 1));
      break;
    case '5D':
      startDate = new Date(now.setDate(now.getDate() - 5));
      break;
    case '1M':
      startDate = new Date(now.setMonth(now.getMonth() - 1));
      break;
    default:
      startDate = new Date(now.setMonth(now.getMonth() - 1));
  }

  return [{
    ...data,
    data: data.data.filter(item => new Date(item.x) >= startDate)}];
};


export function generateStockDataForTimeframe(
    baseValue: number,
    stockSymbol: string,
    fromDate?: Date | undefined,
    toDate?: Date | undefined
  ): Series[] {

  const now = new Date();
  const start = fromDate || new Date(now.setFullYear(now.getFullYear() - 1));
  const end = toDate || new Date();

  let currentTime = start;
  const data = [];

  while (currentTime <= end) {
      // Simulate a small change in the stock price
      const change = (Math.random() - 0.5) * 2; // Random change between -1 and 1
      const variance = baseValue * 0.005 * change; // Max 0.5% of the baseValue
      baseValue += variance;

      data.push({
          x: currentTime.toISOString(),
          y: parseFloat(baseValue.toFixed(2)) // Keep the stock price to two decimal places
      });

      // Increment current time by 1 hour
      currentTime = new Date(currentTime.getTime() + 3600 * 1000);
  }

  return [{
      id: stockSymbol,
      baseValue,
      data
  }];
}



export const findHighestValue = (data: Data): DataPoint => {
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



 export const isValidEmail = (email:string) => {
  return /\S+@\S+\.\S+/.test(email);
};