import Navbar from "@/components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
	const navbar = {
		links: [
			{
				id: 1,
				url: "home",
				text: "Home"
			},
			{
				id: 2,
				url: "about",
				text: "About"
			},
			{
				id: 3,
				url: "portfolio",
				text: "Portfolio"
			}
		],
		navbarLogo: {
			logoImg: {
				data: {
					attributes: {
						url: ""
					}
				}
			},
			logoUrl: "https://example.com/path/to/logo.png",
			logoText: "Your Brand Name"
		}
	};

	return (
		<>
			<Navbar links={navbar.links} />
			<Outlet />
		</>
	);
}
