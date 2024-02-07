import { NewsItem } from "@/types";
import NewsCard from "../NewsCard/NewsCard";

const NewsSection = ({ news }: { news: NewsItem[] }) => {
	return (
		<>
			{news.map((item, index) => (
				<NewsCard
					key={index}
					source={item.source}
					date={item.date}
					title={item.headline}
					imageUrl={item.imageUrl}
				/>
			))}
		</>
	);
};


export default NewsSection