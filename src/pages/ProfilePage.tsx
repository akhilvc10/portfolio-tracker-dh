import { AVATAR_URL } from "@/constants";
import { useAuth } from "@/hooks/useAuth";

const ProfilePage = () => {
	const { email } = useAuth();

	return (
		<div className="flex flex-col h-screen p-4 bg-bg-color">
			<div className="bg-card-bg p-6 flex flex-col  items-center justify-center rounded-[10px] border border-solid border-border-color w-full">
				<img
					className="h-32 w-32 rounded-full mx-auto"
					src={`${AVATAR_URL}=${email}`}
					alt="Profile avatar"
				/>
				<h2 className="mt-4 text-3xl font-bold text-typography-2 text-center">
					{email}
				</h2>
				<p className="text-typography-1 mt-3 text-center">
					Web Developer | Tech Enthusiast
				</p>
				<p className="mt-3 text-typography-1 text-center">
					I'm a passionate web developer with a love for creating dynamic and
					interactive web applications. Exploring new technologies and solving
					problems are what drive me in the tech industry.
				</p>
				<div className="flex justify-center mt-4">
					<a href="#" className="text-blue-500 hover:text-blue-600 mx-2">
						<i className="fab fa-twitter"></i>
					</a>
					<a href="#" className="text-blue-700 hover:text-blue-800 mx-2">
						<i className="fab fa-linkedin"></i>
					</a>
					<a href="#" className="text-gray-900 hover:text-gray-700 mx-2">
						<i className="fab fa-github"></i>
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
