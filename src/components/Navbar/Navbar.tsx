import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import { ProfileDropDown } from "../ProfileDropDown/ProfileDropDown";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import Logo from "../Logo/Logo";
interface NavLink {
	id: number;
	url: string;
	text: string;
}

interface MobileNavLink extends NavLink {
	closeMenu: () => void;
}

function MobileNavLink({ url, text, closeMenu }: MobileNavLink) {
	const handleClick = () => {
		closeMenu();
	};
	return (
		<li className="flex gap-2 p-2 text-lg font-primary">
			<Link
				to={url}
				onClick={handleClick}
				className={`mx-4 -mb-1 flex items-center`}
			>
				{text}
			</Link>
		</li>
	);
}

export default function Navbar({ links }: { links: Array<NavLink> }) {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const closeMenu = () => {
		setMobileMenuOpen(false);
	};

	return (
		<header className="bg-card-bg flex justify-center text-center text-sm capitalize leading-tight tracking-tight font-primary">
			<nav className="border-b-border-color flex w-full items-center justify-between border-b border-solid px-9 py-4 max-md:max-w-full max-md:flex-wrap max-md:px-5">
				<Logo classNames="" />
				<div className="text-typography-1 my-auto flex justify-between gap-5 self-stretch max-md:max-w-full max-md:flex-wrap">
					<ul className="hidden w-full justify-center space-x-3 lg:flex text-typography-1 font-primary">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About Us</Link>
						</li>
					</ul>
				</div>
				<div className="flex items-center gap-3">
					<ThemeSwitch />
					<ProfileDropDown />
				</div>

				<Dialog open={mobileMenuOpen}>
					<DialogContent className="sm:max-w-[425px]">
						<div className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75" />{" "}
						<div className="fixed inset-y-0 z-50 w-full overflow-y-auto bg-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-inset sm:ring-white/10 ltr:right-0 rtl:left-0">
							<div className="flex items-center justify-between">
								<a href="#" className="-m-1.5 p-1.5">
									<span className="sr-only">Strapi</span>
								</a>

								<Button className="p-4 lg:hidden" variant="outline">
									<span className="sr-only">Close menu</span>
									<XMarkIcon className="h-6 w-6" aria-hidden="true" />
								</Button>
							</div>
							<div className="mt-6 flow-root">
								<div className="-my-6 divide-y divide-gray-700">
									<div className="space-y-2 py-6">
										{links.map((item) => (
											<MobileNavLink
												key={item.id}
												closeMenu={closeMenu}
												{...item}
											/>
										))}
									</div>
								</div>
								{/* <ThemeSwitcher /> */}
							</div>
						</div>
					</DialogContent>
				</Dialog>

				<Button
					size="icon"
					onClick={() => setMobileMenuOpen(true)}
					className="p-4 lg:hidden"
					variant="outline"
				>
					<Bars3Icon className="h-7 w-7 text-gray-300" aria-hidden="true" />
				</Button>
			</nav>
		</header>
	);
}
