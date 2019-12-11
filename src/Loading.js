import React from "react";
// @ts-ignore
import { BallTriangle } from "svg-loaders-react";

const Loading = () => {
	return (
		<div className="loading-wrapper">
			<BallTriangle fill="#eb4d4b" />
		</div>
	);
};

export default Loading;
