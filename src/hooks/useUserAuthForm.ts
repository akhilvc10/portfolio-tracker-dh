import { useState } from "react";
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router-dom";

const useUserAuthForm = () => {

  const [isLoading, setIsLoading] = useState<boolean>(false);
	const [email, setEmail] =useState<string>("");
	const { login } = useAuth();
	const navigate = useNavigate();

	async function onSubmit(event: React.SyntheticEvent) {
		event.preventDefault();
		setIsLoading(true);

		
		setTimeout(() => {
			setIsLoading(false);
			login(email);
			navigate("/");
		}, 3000);
	}

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};


  return {
    onSubmit,
    email,
    isLoading,
    handleEmailChange
  }
}

export default useUserAuthForm