import Logo from "@/components/Logo/Logo";
import { UserAuthForm } from "@/components/UserForm/UserForm";
import { Link } from "react-router-dom";

export default function LoginPage() {
	return (
		<div className="fadeIn container font-primary relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
			<div className="relative hidden h-full flex-col text-white lg:flex dark:border-r bg-white bg-opacity-10 backdrop-blur-lg border border-gray-200 shadow-lg rounded-lg">
				<Logo classNames="items-center justify-center h-screen" />
			</div>
			<div className="h-full">
				<div className="mx-auto flex w-full h-full flex-col justify-center space-y-6 sm:w-[350px]">
					<Logo
						classNames="items-center justify-center mb-5 md:hidden"
						page="Login"
					/>

					<div className="flex flex-col space-y-2 text-center">
						<h1 className="text-2xl font-semibold tracking-tight">Login</h1>
						<p className="text-sm text-muted-foreground">
							Enter your email below to login
						</p>
					</div>
					<UserAuthForm />
					<p className="px-8 text-center text-sm text-muted-foreground">
						By clicking continue, you agree to our{" "}
						<Link
							to="/"
							className="underline underline-offset-4 hover:text-primary"
						>
							Terms of Service
						</Link>{" "}
						and{" "}
						<Link
							to="/"
							className="underline underline-offset-4 hover:text-primary"
						>
							Privacy Policy
						</Link>
						.
					</p>
				</div>
			</div>
		</div>
	);
}
