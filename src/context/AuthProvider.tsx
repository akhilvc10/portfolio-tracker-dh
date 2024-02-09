import { createContext, useState, ReactNode, useEffect, useMemo } from "react";

interface AuthContextType {
	isLoggedIn: boolean;
	login: (email: string) => void;
	logout: () => void;
	email: string | null;
}

const initialContextValue: AuthContextType = {
	isLoggedIn: false,
	login: () => {},
	logout: () => {},
	email: null
};
export const AuthContext = createContext<AuthContextType>(initialContextValue);

interface AuthProviderProps {
	children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
	const [email, setEmail] = useState<string | null>(null);

	useEffect(() => {
		const isUserLoggedIn = localStorage.getItem("isLoggedIn") === "true";
		const userEmail = localStorage.getItem("userEmail");

		setIsLoggedIn(isUserLoggedIn);
		setEmail(userEmail);
	}, []);

	const login = (email: string) => {
		localStorage.setItem("userEmail", email);
		localStorage.setItem("isLoggedIn", "true");
		setIsLoggedIn(true);
		setEmail(email);
	};

	const logout = () => {
		localStorage.removeItem("userEmail");
		localStorage.setItem("isLoggedIn", "false");
		setIsLoggedIn(false);
		setEmail(null);
	};

	useEffect(() => {
		const handleStorageChange = (event: StorageEvent) => {
			if (event.key === "isLoggedIn") {
				setIsLoggedIn(event.newValue === "true");
			} else if (event.key === "userEmail") {
				setEmail(event.newValue);
			}
		};

		window.addEventListener("storage", handleStorageChange);

		return () => {
			window.removeEventListener("storage", handleStorageChange);
		};
	}, []);

	const value = useMemo(
		() => ({
			isLoggedIn,
			login,
			logout,
			email
		}),
		[isLoggedIn, email]
	);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
