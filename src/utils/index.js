export const add = (state, name) => {
	let tempFavorites = [...state.favoritesList];
	const tempPeople = [...state.items];

	let tempItem = tempFavorites.find((item) => item.name === name);
	if (!tempItem) {
		tempItem = tempPeople.find((item) => item.name === name);

		let favItem = { ...tempItem };

		return [...tempFavorites, favItem];
	} else {
		return [...tempFavorites];
	}
};

export const remove = (state, name) => {
	let tempFavorites = [...state.favoritesList];
	tempFavorites = tempFavorites.filter((item) => item.name !== name);
	return [...tempFavorites];
};
