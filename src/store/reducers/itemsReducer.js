import {
	PUT_ITEM,
	PUT_ITEMS,
	ADD_ITEM,
	REMOVE_ITEM,
	SET_SEARCH_VALUE,
	PUT_ADDITIONAL_WORLD,
	PUT_ADDITIONAL_FILMS

} from "../actions/Types";
import { add, remove } from "../../utils";

const initialState = {
	pages: 10,
	page: 1,
	items: [],
	currentItem: {},
	currentItemIsFeatching: true,
	favoritesList: [],
	searchValue: '',
	personHomeworld: '',
	personFilms: '',
};

export default function (state = initialState, action) {
	switch (action.type) {

		case PUT_ITEMS:
			return { ...state, items: action.payload.results, };

		case PUT_ITEM:
			return { ...state, currentItem: action.payload, currentItemIsFeatching: false };

		case ADD_ITEM: {
			return { ...state, favoritesList: add(state, action.payload.name) };
		}

		case REMOVE_ITEM:
			return {
				...state,
				favoritesList: remove(state, action.payload),
			};

		case SET_SEARCH_VALUE:
			return { ...state, searchValue: action.payload }

		case PUT_ADDITIONAL_WORLD:
			return { ...state, personHomeworld: action.payload };

		case PUT_ADDITIONAL_FILMS:
			return { ...state, personFilms: action.payload };

		default:
			return state;
	}
}
