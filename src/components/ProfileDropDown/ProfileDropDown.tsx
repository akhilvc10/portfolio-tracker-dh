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

export function ProfileDropDown() {
	const navigate = useNavigate();
	const { logout } = useAuth();

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
					<AvatarImage
						src="https://api.dicebear.com/7.x/lorelei/svg"
						alt="@shadcn"
					/>
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuItem onClick={onClickProfile}>Profile</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={onClickLogoutHandler}>
					Log out
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
