import { continents } from "./contientData";
import { countries } from "./countriesData";

export function getLocationSelected(event) {
	return event.target.attributes['aria-checked'].value === 'true';
}

export function getLocationName(event) {
	return event.target.attributes.name.value;
}

export function getLocationId(event) {
	return event.target.id;
}

export const getContinentName = (event) => {
	const country = countries.filter((item) => item.name === event.target.attributes.name.value)
	const continent = continents[country[0].continent]
	
	return continent
}