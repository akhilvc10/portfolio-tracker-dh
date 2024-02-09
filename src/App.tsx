import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DashboardLayout from "./layouts/DashboardLayout";
import NoMatch from "./pages/NoMatch";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import UnAuthLayout from "./layouts/UnAuthLayout";
import { useAuth } from "./hooks/useAuth";

export default function App() {
	const { isLoggedIn } = useAuth();

	const renderRoutes = () => {
		if (isLoggedIn) {
			return (
				<Route path="/" element={<DashboardLayout />}>
					<Route index element={<Navigate replace to="/AAPL?window=1D" />} />
					<Route path=":symbol" element={<HomePage />} />
					<Route path="about" element={<AboutPage />} />
					<Route path="profile" element={<ProfilePage />} />
					<Route path="*" element={<NoMatch />} />
				</Route>
			);
		} else
			return (
				<Route path="/" element={<UnAuthLayout />}>
					<Route index element={<Navigate replace to="/login" />} />
					<Route path="login" element={<LoginPage />} />
				</Route>
			);
	};
	return <Routes>{renderRoutes()}</Routes>;
}
