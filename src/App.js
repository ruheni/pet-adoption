// @ts-nocheck
import React, { useState } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./Themecontext";

const App = () => {
	const themeHook = useState("#2C3A47");

	return (
		<React.StrictMode>
			<ThemeContext.Provider value={themeHook}>
				<div>
					<header>
						<Link to="/">Adopt Me!!</Link>
					</header>
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
