import { NavLinkTypes } from "@/types";
import { NavLink } from "react-router-dom";

interface MobileNavLink extends NavLinkTypes {
	closeMenu: () => void;
}

const MobileNavLink = ({ url, text, closeMenu }: MobileNavLink) => {
	const handleClick = () => {
		closeMenu();
	};

	return (
		<li className="flex gap-2 p-2 text-lg font-primary">
			<NavLink
				to={url}
				onClick={handleClick}
				className={`mx-4 -mb-1 flex items-center w-full`}
			>
				{text}
			</NavLink>
		</li>
	);
};

export default MobileNavLink;
