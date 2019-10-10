import React from "react";
import { render } from "react-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
	return (
		<div>
			<h1>Adopt Me!!</h1> 	
			<SearchParams />

			{/* <Pet name="Remmy Williams" animal="Cat" breed="...hmmm" />
			<Pet name="Tyronne Jamie" animal="Parrot" breed="IDK" />
			<Pet name="Ginger" animal="Dog" breed="German Shephard" /> */}
		</div>
	);
};

render(React.createElement(App), document.getElementById("root"));
