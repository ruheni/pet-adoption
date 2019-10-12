/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
	// React Hooks
	const [location, setLocation] = useState("Seattle, WA");
	const [breeds, setBreeds] = useState([]);

	// using custom hooks
	const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
	const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

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
			<form>
				<label htmlFor="location">
					Location
					<input
						type="text"
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
		</div>
	);
};

export default SearchParams;
