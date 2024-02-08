import { AuthContext } from "@/hooks/useAuth";
import { useState } from "react";

export const AuthProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const login = () => setIsLoggedIn(true);
	const logout = () => setIsLoggedIn(false);

	const value = {
		isLoggedIn,
		login,
		logout
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
