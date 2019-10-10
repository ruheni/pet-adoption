import React from "react";
import { render } from "react-dom";
import Pet  from "./Pet";

const App = () => {
	return React.createElement("div", {}, [
		React.createElement("h1", {}, "Adopt Me!!"),
		React.createElement(Pet, {
			name: "Remmy Williams",
			animal: "Cat",
			breed: "....hmmm"
		}),
		React.createElement(Pet, {
			name: "Tyronne",
			animal: "Parrot",
			breed: "IDK"
		}),
		React.createElement(Pet, {
			name: "Ginger",
			animal: "Dog",
			breed: "German Shephard"
		})
	]);
};

render(React.createElement(App), document.getElementById("root"));
