import { AuthContext } from "@/context/AuthProvider";
import { useContext } from "react";


export function useAuth() {
	return useContext(AuthContext);
}