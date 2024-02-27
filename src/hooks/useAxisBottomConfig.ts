import { useMemo } from 'react';
import { format, parseISO } from "date-fns";
import { generateCustomTickValuesFromArray } from '@/lib/utils';
import { Series } from '@/types';
import type { AxisProps } from "@nivo/axes";

export enum Timeframe {
  Daily = '1D',
  Weekly = '5D',
  Monthly = '1M',
  SixMonths = '6M',
  Yearly = '1Y',
}

const useAxisBottomConfig = ({ data, timeframe }: { data: Series[], timeframe: Timeframe }) => {
  const axisBottomConfig = useMemo(() => {
    const dataPoints = data[0]?.data || [];
    let tickValues: string[] = [];


    const multiplierMap = {
      [Timeframe.Daily]: 8,
      [Timeframe.Weekly]: 24,
      [Timeframe.Monthly]: 24 * 5,
      [Timeframe.SixMonths]: 24 * 5 * 3,
      [Timeframe.Yearly]: 24 * 5,
    };

    const multiplier = multiplierMap[timeframe] || 1; 
    tickValues = generateCustomTickValuesFromArray(dataPoints, multiplier);

   
    const formatDate = (value: string): string => {
      if (timeframe === Timeframe.Daily) return format(parseISO(value), "h:mm a");
      if ([Timeframe.Weekly, Timeframe.Monthly].includes(timeframe)) return format(parseISO(value), "MMM d");
      if ([Timeframe.SixMonths, Timeframe.Yearly].includes(timeframe)) return format(parseISO(value), "MMM yyyy");
      return value;
    };

    return {
      format: formatDate,
      tickValues,
      tickPadding: 5,
      legendOffset: 36,
      tickSize: 5,
      legendPosition: 'middle'
    } as AxisProps;
  }, [timeframe, data]);

  return axisBottomConfig;
};

export default useAxisBottomConfig;
