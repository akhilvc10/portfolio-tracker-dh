import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./globals.css";
import App from "./App";
import { AuthProvider } from "./context/AuthProvider";
import { TooltipProvider } from "./components/ui/tooltip";
import { Toaster } from "./components/ui/sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<TooltipProvider>
					<App />
					<Toaster />
				</TooltipProvider>
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>
);
