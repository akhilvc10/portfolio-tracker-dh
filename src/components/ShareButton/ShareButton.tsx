import useWebShare from "@/hooks/reusable/useWebShare";
import { Button } from "../ui/button";
import { ShareIcon } from "@heroicons/react/24/outline";

interface ShareButtonProps {
	title: string;
	text: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ title, text }) => {
	const { handleShare } = useWebShare({ title, text });
	return (
		<Button
			onClick={handleShare}
			className="rounded-[10px] border border-border-color px-6 py-3"
		>
			<ShareIcon className="mr-2 h-4 w-4 " /> Share
		</Button>
	);
};

export default ShareButton;
