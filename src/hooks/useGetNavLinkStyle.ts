import { useLocation } from "react-router-dom";

const useGetNavLinkStyleForHome = () => {
	const location = useLocation();

  const getNavLinkStyleForHome = (path: string) => ({
		fontWeight:
			location.pathname.startsWith(path) &&
			new URLSearchParams(location.search).has("window")
				? "bold"
				: "normal",
		color:
			location.pathname.startsWith(path) &&
			new URLSearchParams(location.search).has("window")
				? "hsl(var(--primary))"
				: "inherit"
	});


  return {
    getNavLinkStyleForHome
  }
} 

export default useGetNavLinkStyleForHome