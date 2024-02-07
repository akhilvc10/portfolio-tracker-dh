import CompanyCard from "../CompanyCard/CompanyCard";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from "@/components/ui/carousel";

type CompanyData = {
	symbol: string;
	companyName: string;
	stockValue: string;
	stockChange: string;
	stockChangeDirection: "increase" | "decrease";
};

const companyData: CompanyData[] = [
	{
		symbol: "NFLX",
		companyName: "Netflix Inc",
		stockValue: "$557.37",
		stockChange: "0.84%",
		stockChangeDirection: "decrease"
	},
	{
		symbol: "NVDA",
		companyName: "NVIDIA Corp",
		stockValue: "$683.55",
		stockChange: "1.41%",
		stockChangeDirection: "decrease"
	},
	{
		symbol: "GOOGL",
		companyName: "Alphabet Inc Class A",
		stockValue: "$143.85",
		stockChange: "0.11%",
		stockChangeDirection: "increase"
	},
	// Add more companies here...
	{
		symbol: "AAPL",
		companyName: "Apple Inc.",
		stockValue: "$146.28",
		stockChange: "2.09%",
		stockChangeDirection: "increase"
	},
	{
		symbol: "AMZN",
		companyName: "Amazon.com Inc",
		stockValue: "$3,346.83",
		stockChange: "1.11%",
		stockChangeDirection: "increase"
	},
	{
		symbol: "FB",
		companyName: "Facebook Inc",
		stockValue: "$279.70",
		stockChange: "1.33%",
		stockChangeDirection: "decrease"
	},
	{
		symbol: "MSFT",
		companyName: "Microsoft Corp",
		stockValue: "$299.76",
		stockChange: "1.00%",
		stockChangeDirection: "decrease"
	},
	{
		symbol: "TSLA",
		companyName: "Tesla Inc",
		stockValue: "$688.99",
		stockChange: "0.40%",
		stockChangeDirection: "increase"
	},
	{
		symbol: "BRK.A",
		companyName: "Berkshire Hathaway Inc",
		stockValue: "$412,500.00",
		stockChange: "0.22%",
		stockChangeDirection: "increase"
	},
	{
		symbol: "V",
		companyName: "Visa Inc",
		stockValue: "$236.29",
		stockChange: "0.58%",
		stockChangeDirection: "increase"
	}
];

export default function CompanyVerticalList() {
	return (
		<Carousel
			opts={{
				align: "start"
			}}
			className="w-full"
		>
			<CarouselContent>
				{companyData.map((company, index) => (
					<CarouselItem className="md:basis-1/2 lg:basis-1/3" key={index}>
						<CompanyCard
							symbol={company.symbol}
							companyName={company.companyName}
							stockValue={company.stockValue}
							stockChange={company.stockChange}
							stockChangeDirection={company.stockChangeDirection}
						/>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}
