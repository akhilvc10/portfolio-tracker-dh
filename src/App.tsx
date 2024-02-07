import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DashboardLayout from "./layouts/DashboardLayout";
import NoMatch from "./pages/NoMatch";
import ProfilePage from "./pages/ProfilePage";

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<DashboardLayout />}>
				<Route index element={<HomePage />} />
				<Route path="about" element={<AboutPage />} />
				<Route path="profile" element={<ProfilePage />} />
				<Route path="*" element={<NoMatch />} />
			</Route>
		</Routes>
	);
}
