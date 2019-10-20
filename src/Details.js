/* eslint-disable no-console */
import React from "react";
import pet from "@frontendmasters/pet";
import { navigate } from "@reach/router";
import Modal from "./Modal";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import Loading from "./Loading";
import ThemeContext from "./Themecontext";

class Details extends React.Component {
	state = { loading: true, showModal: false };

	componentDidMount() {
		pet.animal(this.props.id)
			.then(({ animal }) => {
				this.setState({
					url: animal.url,
					name: animal.name,
					animal: animal.type,
					location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
					description: animal.description,
					media: animal.photos,
					breed: animal.breeds.primary,
					loading: false
				});
			})
			.catch(err => this.setState({ error: err }));
	}

	// change to opposite of what it was
	toggleModal = () => this.setState({ showModal: !this.state.showModal });
	adopt = () => navigate(this.state.url);

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
			name,
			showModal
		} = this.state;

		return (
			<div className="details">
				<Carousel media={media} />
				<div>
					<h1>{name}</h1>
					<h2>{`${animal} — ${breed} — ${location}`}</h2>
					<ThemeContext.Consumer>
						{([theme]) => (
							<button
								// @ts-ignore
								style={{ backgroundColor: theme }}
								onClick={this.toggleModal}
							>
								Adopt {name}
							</button>
						)}
					</ThemeContext.Consumer>
					<p>{description}</p>
					{showModal ? (
						<Modal>
							<h1>Would you like to adopt {name}?</h1>
							<div className="buttons">
								<button onClick={this.adopt}>Yes</button>
								<button onClick={this.toggleModal}>No</button>
							</div>
						</Modal>
					) : null}
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
