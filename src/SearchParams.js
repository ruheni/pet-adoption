import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
	// Hook
	const [location, setLocation] = useState("Seattle, WA");
	const [breeds, setBreeds] = useState([]);
	const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
	const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);

	// useEffect(() => {
	// 	updateBreed([]);
	// 	updateBreed("");

	// 	pet.breeds(animal).then()
	// });

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
