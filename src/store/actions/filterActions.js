import {
	SET_SEARCH_VALUE
} from "./Types";


export const setSearchValue = value => ({
	type: SET_SEARCH_VALUE,
	payload: value
})
