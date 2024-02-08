import CompanyCard from "../CompanyCard/CompanyCard";
import { useNavigate } from "react-router-dom";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from "@/components/ui/carousel";
import { CompanyDataItem } from "@/hooks/useHomePage";

interface CompanyVerticalListProps {
	data: CompanyDataItem[];
}

export default function CompanyVerticalList({
	data
}: CompanyVerticalListProps) {
	const navigate = useNavigate();

	const onClickCardHandler = (symbol: string) => {
		navigate(`/${symbol}?window=1D`);
	};

	return (
		<Carousel
			opts={{
				align: "start"
			}}
			className="w-full"
		>
			<CarouselContent>
				{data.map((company, index) => (
					<CarouselItem className="md:basis-1/2 lg:basis-1/3" key={index}>
						<CompanyCard
							symbol={company.symbol}
							companyName={company.name}
							stockValue={company.lastPrice}
							stockChange={company.change}
							stockChangeDirection={company.stockChangeDirection}
							onClickCard={() => onClickCardHandler(company.symbol)}
						/>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}
