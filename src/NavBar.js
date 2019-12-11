import React, { useState } from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import colors from "./Colors";

const spin = keyframes`
    to{
        transform: rotate(360deg);
    }
`;

const NavBar = () => {
	return (
		<header
			css={css`
				background-color: ${colors.secondary};
				padding: 15px;
				margin-bottom: 20px;
			`}
		>
			<Link to="/">Adopt Me</Link>
			<span
				role="img"
				aria-label="logo"
				css={css`
					font-size: 60px;
					display: inline-block;
					animation: 1s ${spin} linear infinite ;

					&:hover {
						text-decoration: underline;
						animation: .2s ${spin} linear infinite;
					}
				`}
			>
				🐩
			</span>
		</header>
	);
};

export default NavBar;
