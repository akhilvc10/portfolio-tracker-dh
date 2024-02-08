import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./globals.css";
import App from "./App";
import { AuthProvider } from "./context/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<App />
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>
);
