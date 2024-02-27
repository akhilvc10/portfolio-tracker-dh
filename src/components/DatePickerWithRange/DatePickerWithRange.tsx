"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { isBefore, isAfter, startOfDay, endOfDay } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from "@/components/ui/popover";

interface DatePickerWithRangeProps
	extends React.HTMLAttributes<HTMLDivElement> {
	setDate: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
	date: DateRange | undefined;
	activeDate: {
		min: string | Date;
		max: string | Date;
	};
}

const DatePickerWithRange: React.FC<DatePickerWithRangeProps> = ({
	className,
	setDate,
	date,
	activeDate
}) => {
	const startDate = new Date(activeDate?.min);
	const endDate = new Date(activeDate?.max);

	const disabledDate = (current: Date) => {
		if (current && activeDate.min && activeDate.max) {
			const currentDate = startOfDay(current);
			return (
				isBefore(currentDate, startOfDay(startDate)) ||
				isAfter(currentDate, endOfDay(endDate))
			);
		}
		return false;
	};

	return (
		<div className={cn("grid gap-2 w-full md:w-auto", className)}>
			<Popover>
				<PopoverTrigger asChild>
					<Button
						id="date"
						variant={"outline"}
						className={cn(
							"w-full md:w-[300px] justify-start text-left font-normal",
							!date && "text-muted-foreground"
						)}
					>
						<CalendarIcon className="mr-2 h-4 w-4" />
						{date?.from ? (
							date.to ? (
								<>
									{format(date.from, "LLL dd, y")} -{" "}
									{format(date.to, "LLL dd, y")}
								</>
							) : (
								format(date.from, "LLL dd, y")
							)
						) : (
							<span>Pick a date</span>
						)}
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-auto p-0" align="start">
					<Calendar
						disabled={disabledDate}
						initialFocus
						mode="range"
						defaultMonth={date?.from}
						selected={date}
						onSelect={setDate}
						numberOfMonths={2}
					/>
				</PopoverContent>
			</Popover>
		</div>
	);
};

export default DatePickerWithRange;
