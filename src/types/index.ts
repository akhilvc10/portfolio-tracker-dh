export type DataPoint = {
	x: Date | string; 
	y: number;
};

export type Series = {
	id: string;
	color: string;
	data: DataPoint[];
};
