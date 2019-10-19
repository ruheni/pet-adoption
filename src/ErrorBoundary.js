// error boundaries
import React from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundary extends React.Component {
	state = { hasError: false, redirect: false };

	static getDerivesStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		// eslint-disable-next-line no-console
		console.error("ErrorBoundary caught an error", error, errorInfo);
	}

	componentDidUpdate() {
		if (this.state.hasError) {
			setTimeout(() => this.setState({ redirect: true }), 5000);
		}
	}

	render() {
		if (this.state.redirect) {
			return <Redirect to="/" />;
		}
		if (this.state.hasError) {
			return (
				<h1>
					An error occured in this listing.
					<Link to="/">Click here</Link>
					{""}
					to go back to home page or wait five seconds
				</h1>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
