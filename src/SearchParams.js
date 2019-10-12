/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Results from "./Results";

const SearchParams = () => {
	// React Hooks
	const [location, setLocation] = useState("Seattle, WA");
	const [breeds, setBreeds] = useState([]);

	// using custom hooks
	const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
	const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

	const [pets, setPets] = useState([]);

	/** async request */
	async function requestPets() {
		const { animals } = await pet.animals({
			location,
			breed,
			type: animal
		});

		console.log("animals", animals);

		setPets(animals || []);
	}

	// React Effects
	/**
	 *  @params effect function with the logic
	 *  @params [] dependencies => to reduce number of times it updates
	 */
	useEffect(() => {
		setBreeds([]);
		setBreed("");

		pet.breeds(animal).then(({ breeds }) => {
			const breedStrings = breeds.map(({ name }) => name);
			setBreeds(breedStrings);
		}, console.error);
	}, [animal, setBreeds, setBreed]);

	return (
		<div className="search-params">
			<form
				onSubmit={e => {
					e.preventDefault();
					requestPets();
				}}
			>
				<label htmlFor="location">
					Location
					<input
						id="location"
						value={location}
						placeholder="Location"
						onChange={e => setLocation(e.target.value)}
					/>
				</label>
				<AnimalDropdown />
				<BreedDropdown />

				<button>Submit</button>
			</form>

			<Results pets={pets} />
		</div>
	);
};

export default SearchParams;
