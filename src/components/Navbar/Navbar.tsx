import { NavLink } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import { ProfileDropDown } from "../ProfileDropDown/ProfileDropDown";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import Logo from "../Logo/Logo";
import { NavLinkTypes } from "@/types";
import MobileNavLink from "../MobileNavLink/MobileNavLink";
import useGetNavLinkStyleForHome from "@/hooks/useGetNavLinkStyle";

export default function Navbar({ links }: { links: Array<NavLinkTypes> }) {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const { getNavLinkStyleForHome } = useGetNavLinkStyleForHome();

	const closeMenu = () => {
		setMobileMenuOpen(false);
	};

	return (
		<header className="bg-card-bg flex justify-center text-center text-sm capitalize leading-tight tracking-tight font-primary">
			<nav className="border-b-border-color flex w-full items-center justify-between border-b border-solid px-9 py-4 max-md:max-w-full max-md:flex-wrap max-md:px-5">
				<Logo classNames="" />
				<div className="hidden md:flex  my-auto justify-between gap-5 self-stretch max-md:max-w-full max-md:flex-wrap">
					<ul className="w-full justify-center space-x-3 lg:flex  font-primary">
						<li>
							<NavLink to="/" style={getNavLinkStyleForHome("/")}>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/about"
								className={({ isActive }) =>
									isActive ? "font-bold text-primary" : ""
								}
							>
								About Us
							</NavLink>
						</li>
					</ul>
				</div>

				<div className="flex justify-end items-center gap-3">
					<div className="flex items-center gap-3">
						<div className="hidden">
							<ThemeSwitch />
						</div>
						<ProfileDropDown />
					</div>

					<Button
						size="icon"
						onClick={() => setMobileMenuOpen(true)}
						className="p-1 lg:hidden bg-card-bg text-typography-1"
						variant="outline"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="var(--color-typography-1)"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</Button>
				</div>

				<Dialog open={mobileMenuOpen}>
					<DialogContent className="w-full h-dvh">
						<div className="fixed inset-0 z-40 bg-bg-color" />{" "}
						<div className="fixed inset-y-0 z-50 w-full overflow-y-auto  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-inset sm:ring-white/10 ltr:right-0 rtl:left-0">
							<div className="flex items-center justify-between">
								<a href="#" className="-m-1.5 p-1.5">
									<Logo />
								</a>

								<Button
									onClick={closeMenu}
									className="lg:hidden aspect-square p-0"
									variant="outline"
								>
									<XMarkIcon aria-hidden="true" className="w-6 h-6" />
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
							</div>
						</div>
					</DialogContent>
				</Dialog>
			</nav>
		</header>
	);
}
