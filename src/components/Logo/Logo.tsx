import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

interface LogoProps {
	classNames?: string;
	page?: string;
}

const Logo: React.FC<LogoProps> = ({ classNames, page }) => {
	const navigate = useNavigate();

	const navigateToHome = () => {
		navigate("/");
	};
	return (
		<div
			onClick={navigateToHome}
			className={cn(
				`border-border-color gap-3 text-typography-2 dark:text-typography-2 flex items-center justify-center self-stretch whitespace-nowrap rounded-xl cursor-pointer font-bold uppercase ${classNames}`
			)}
		>
			<div
				className={cn(
					`${page === "Login" ? "w-[55px] h-[55px]" : "w-[35px] h-[35px]"}`
				)}
			>
				<img src={logo} className="w-full h-full rounded-sm" alt="" />
			</div>
			<p className="hidden md:block text-typography-2 font-primary">
				GrowFolio
			</p>
		</div>
	);
};

export default Logo;
