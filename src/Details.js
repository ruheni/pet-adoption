import React from "react";

const Details = props => {
	return (
		<pre>
			<code>{JSON.stringify(props, null)}</code>
		</pre>
	);
};

export default Details;
