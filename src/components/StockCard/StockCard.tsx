import useStockCardData from "@/hooks/useStockCardData";
import StockInfoCardList from "../StockInfoCardList/StockInfoCardList";

interface StockCardProps {
	symbol: string;
}

const StockCard: React.FC<StockCardProps> = ({ symbol }) => {
	const { stockCardData } = useStockCardData({ symbol });
	return (
		<div className="rounded-[10px] border border-solid border-border-color bg-card-bg px-6 py-0">
			<div className="flex flex-col py-1">
				{stockCardData.map((item) => {
					return <StockInfoCardList title={item.title} value={item.value} />;
				})}
			</div>
		</div>
	);
};

export default StockCard;
