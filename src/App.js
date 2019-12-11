import React, { useState } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./Themecontext";
import NavBar from "./NavBar";

const App = () => {
	const themeHook = useState("peru");

	return (
		<React.StrictMode>
			<ThemeContext.Provider value={themeHook}>
				<div>
					<NavBar />
					<Router>
						<SearchParams path="/" />
						<Details path="/details/:id" />
					</Router>
				</div>
			</ThemeContext.Provider>
		</React.StrictMode>
	);
};

render(React.createElement(App), document.getElementById("root"));
