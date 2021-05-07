import {
	LOAD_ITEMS,
	LOAD_ITEM,
	PUT_ITEM,
	PUT_ITEMS,

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

export const PUT_ITEM_ACTION = curentItem => ({
	type: PUT_ITEM,
	payload: curentItem
});
