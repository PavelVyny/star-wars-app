import {
	PUT_ITEM,
	PUT_ITEMS,
	ADD_ITEM,
	REMOVE_ITEM,
} from "../actions/Types";
import { add, remove } from "../../utils";

const initialState = {
	pages: 10,
	page: 1,
	items: [],
	curentItem: {},
	favoritesList: [],
};

export default function (state = initialState, action) {
	switch (action.type) {

		case PUT_ITEMS:
			return { ...state, items: action.payload.results };

		case PUT_ITEM:
			return { ...state, curentItem: action.payload };

		case ADD_ITEM: {
			return { ...state, favoritesList: add(state, action.payload.name) };
		}

		case REMOVE_ITEM:
			return {
				...state,
				favoritesList: remove(state, action.payload),
			};

		default:
			return state;
	}
}
