import {
	ADD_ITEM,
	REMOVE_ITEM,
} from "./Types";


export const ADD_ITEM_ACTION = (item) => (dispatch) => {
	dispatch({
		type: ADD_ITEM,
		payload: item,
	});
};

export const REMOVE_ITEM_ACTION = (name) => (dispatch) => {
	dispatch({
		type: REMOVE_ITEM,
		payload: name,
	});
};
