import { createContext, useState, ReactNode } from "react";

interface AuthContextType {
	isLoggedIn: boolean;
	login: () => void;
	logout: () => void;
}

const initialContextValue: AuthContextType = {
	isLoggedIn: false,
	login: () => {},
	logout: () => {}
};
export const AuthContext = createContext<AuthContextType>(initialContextValue);

interface AuthProviderProps {
	children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

	const login = () => setIsLoggedIn(true);
	const logout = () => setIsLoggedIn(false);

	const value = {
		isLoggedIn,
		login,
		logout
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
