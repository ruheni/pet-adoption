/* eslint-disable no-console */
import React, { useState, useEffect, useContext } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Results from "./Results";
import ThemeContext from "./Themecontext";

const SearchParams = () => {
	// React Hooks
	const [location, setLocation] = useState("Seattle, WA");
	const [breeds, setBreeds] = useState([]);

	// using custom hooks
	const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
	const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

	const [pets, setPets] = useState([]);

	const [theme, setTheme] = useContext(ThemeContext);

	/** async request */
	async function requestPets() {
		const { animals } = await pet.animals({
			location,
			breed,
			type: animal
		});

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

				<label htmlFor="theme">
					Theme
					<select
						id="Theme"
						// @ts-ignore
						value={theme}
						// @ts-ignore
						onChange={e => setTheme(e.target.value)}
						// @ts-ignore
						onBlur={e => setTheme(e.target.value)}
					>
						<option value="peru">Peru</option>
						<option value="darkblue">Dark Blue</option>
						<option value="mediumorchid">Medium Orchid</option>
						<option value="chartreuse">Chartreuse</option>
					</select>
				</label>

				<button
					style={{
						// @ts-ignore
						backgroundColor: theme
					}}
				>
					Submit
				</button>
			</form>

			<Results pets={pets} />
		</div>
	);
};

export default SearchParams;
