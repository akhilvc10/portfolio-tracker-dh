import AboutCompanyAccordion from "@/components/AboutCompanyAccordion/AboutCompanyAccordion";
import CompanyVerticalList from "@/components/CompanyVerticalList/CompanyVerticalList";
import DatePickerWithRange from "@/components/DatePickerWithRange/DatePickerWithRange";
import NewsSection from "@/components/NewsSection/NewsSection";
import ShareButton from "@/components/ShareButton/ShareButton";
import StockCard from "@/components/StockCard/StockCard";
import TabsWithStockChart from "@/components/TabsWithStockChart/TabsWithStockChart";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger
} from "@/components/ui/tooltip";
import useHomePage from "@/hooks/useHomePage";

export default function HomePage() {
	const { companyData, dataSet, graphDataSet, setDate, date } = useHomePage();

	return (
		<div className="bg-bg-color font-primary fadeIn">
			<div className="mx-14 md:mx-20">
				<CompanyVerticalList data={companyData} />
			</div>

			<div className="container rounded-[10px] bg-card-bg p-5 md:p-10 border-border-color border border-solid">
				<div className="flex flex-col items-start justify-between md:border-b lg:flex-row lg:items-center">
					<div className="flex w-full flex-col">
						<div className="flex-col items-center justify-between md:flex md:flex-col md:items-start">
							<div className="flex justify-between w-full">
								<Tooltip>
									<TooltipTrigger asChild>
										<div className="pb-3 text-3xl font-bold">
											{dataSet?.companyInfo.name}
										</div>
									</TooltipTrigger>
									<TooltipContent>{dataSet?.companyInfo.symbol}</TooltipContent>
								</Tooltip>
								{dataSet?.companyInfo ? (
									<div className="flex gap-5">
										<div className="hidden md:flex">
											<DatePickerWithRange setDate={setDate} date={date} />
										</div>

										<ShareButton
											title={`${dataSet?.companyInfo.name} | ${dataSet?.lastPrice}`}
											text={`${dataSet?.companyInfo.name} | ${dataSet?.lastPrice}`}
										/>
									</div>
								) : null}
							</div>
						</div>
						<div className="flex flex-col justify-center pb-4">
							<div className="text-2xl font-semibold text-green-500">
								{dataSet?.lastPrice} (${dataSet?.percentChange}%)
							</div>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 gap-4 py-4 lg:grid-cols-3">
					<div className="lg:col-span-2 order-last md:order-first">
						<div className="order-first">
							{graphDataSet?.length ? (
								<>
									<div className="flex md:hidden w-full mb-5">
										<DatePickerWithRange setDate={setDate} date={date} />
									</div>
									<TabsWithStockChart data={graphDataSet} />
								</>
							) : (
								<>Loading...</>
							)}
						</div>
						<div className="mt-10 w-full">
							<div className="my-3 text-2xl font-bold">In the news</div>
							{dataSet?.news?.length ? (
								<NewsSection news={dataSet?.news || []} />
							) : (
								"No news"
							)}
						</div>
					</div>

					<div className="space-y-2 order-first md:order-none">
						{dataSet?.companyInfo.symbol || dataSet?.companyInfo.description ? (
							<>
								<StockCard symbol={dataSet.companyInfo.symbol} />
								<AboutCompanyAccordion
									description={dataSet.companyInfo.description}
								/>
							</>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
}
