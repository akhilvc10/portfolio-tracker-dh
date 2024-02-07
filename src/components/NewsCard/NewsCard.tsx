import React from "react";

interface NewsCardProps {
	source: string;
	date: string;
	title: string;
	imageUrl?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
	source,
	date,
	title,
	imageUrl
}) => {
	return (
		<div className="my-2 items-center overflow-hidden border-b bg-white pb-2">
			<div className="justify-between md:flex">
				<div className="p-8 pl-0">
					<div className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
						{source}
					</div>
					<a
						href="#"
						className="mt-1 block text-lg font-medium leading-tight text-black hover:underline"
					>
						{title}
					</a>
					<p className="mt-2 text-gray-500">{date}</p>
				</div>
				{imageUrl && (
					<div className="flex items-center">
						<div className="object-fit h-[120px] w-48 rounded-lg bg-gray-200">
							<img
								src={imageUrl}
								className="h-full w-full rounded-lg"
								alt="image"
							/>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default NewsCard;
