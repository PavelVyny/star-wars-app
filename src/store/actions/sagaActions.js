import {
	LOAD_ITEMS,
	LOAD_ITEM,
	PUT_ITEM,
	PUT_ITEMS,
	LOAD_FILTERS,
	LOAD_ADDITIONAL_WORLD,
	PUT_ADDITIONAL_WORLD,
	LOAD_ADDITIONAL_FILMS,
	PUT_ADDITIONAL_FILMS

} from "./Types";


export const LOAD_ITEMS_ACTION = (page) => {
	return {
		type: LOAD_ITEMS,
		page
	}
}

export const PUT_ITEMS_ACTION = (data) => {
	return {
		type: PUT_ITEMS,
		payload: data
	}
}

export const LOAD_ITEM_ACTION = name => ({
	type: LOAD_ITEM,
	name
})

export const PUT_ITEM_ACTION = currentItem => ({
	type: PUT_ITEM,
	payload: currentItem
});

export const LOAD_FILTERS_ACTION = (searchValue) => ({
	type: LOAD_FILTERS,
	searchValue
})

export const PUT_FILTRED_ITEMS_ACTION = (data) => ({
	type: PUT_ITEMS,
	payload: data
})

export const LOAD_ADDITIONAL_WORLD_ACTION = (homeworld) => {
	return {
		type: LOAD_ADDITIONAL_WORLD,
		homeworld
	}
}

export const PUT_ADDITIONAL_WORLD_ACTION = (data) => {
	return {
		type: PUT_ADDITIONAL_WORLD,
		payload: data
		
	}
}

export const LOAD_ADDITIONAL_FILMS_ACTION = (films) => {
	return {
		type: LOAD_ADDITIONAL_FILMS,
		films
	}
}

export const PUT_ADDITIONAL_FILMS_ACTION = (data) => {
	return {
		type: PUT_ADDITIONAL_FILMS,
		payload: data
		
	}
}