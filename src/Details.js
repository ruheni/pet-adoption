/* eslint-disable no-console */
import React from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import Loading from "./Loading";
import ThemeContext from "./Themecontext";

class Details extends React.Component {
	state = { loading: true };

	componentDidMount() {
		pet.animal(this.props.id).then(({ animal }) => {
			this.setState({
				name: animal.name,
				animal: animal.type,
				location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
				description: animal.description,
				media: animal.photos,
				breed: animal.breeds.primary,
				loading: false
			});
		}, console.error);
	}

	render() {
		if (this.state.loading) {
			return <Loading />;
		}

		const {
			animal,
			breed,
			location,
			description,
			media,
			name
		} = this.state;

		return (
			<div className="details">
				<Carousel media={media} />
				<div>
					<h1>{name}</h1>
					<h2>{`${animal} - ${breed} -${location}`}</h2>

					<ThemeContext.Consumer>
						{([theme]) => (
							<button
								style={{
									// @ts-ignore
									backgroundColor: theme
								}}
							>
								Adopt {name}
							</button>
						)}
					</ThemeContext.Consumer>

					<p>{description}</p>
				</div>
			</div>
		);
	}
}

export default function DetailsWithErrorBoundary(props) {
	return (
		<ErrorBoundary>
			<Details {...props} />
		</ErrorBoundary>
	);
}
