import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/useAuth";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { AVATAR_URL } from "@/constants";

export function ProfileDropDown() {
	const navigate = useNavigate();
	const { logout, email } = useAuth();

	const onClickProfile = () => {
		navigate("/profile");
	};

	const onClickLogoutHandler = () => {
		navigate("/");
		logout();
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Avatar className="cursor-pointer">
					<AvatarImage src={`${AVATAR_URL}=${email}`} alt="@shadcn" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuItem onClick={onClickProfile}>Profile</DropdownMenuItem>
				<DropdownMenuItem className="flex justify-between">
					Toggle Theme
					<ThemeSwitch />
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={onClickLogoutHandler}>
					Log out
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
