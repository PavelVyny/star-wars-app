import { takeEvery, put, call, fork } from 'redux-saga/effects'
import axios from 'axios'
import config from '../../config'

import {
	PUT_ITEMS_ACTION,
	PUT_ITEM_ACTION,
} from "../../store/actions/sagaActions";

import {
	LOAD_ITEMS,
	LOAD_ITEM,
} from '../../store/actions/Types'

export default function* rootSaga() {
	yield fork(watchLoadItems)
	yield fork(watchLoadItem)

}


//get all products 
function fetchItems(page) {
	return axios
		.get(`${config.apiUrl}/people/?page=${page}`)
}

function* workerLoadItems(action) {
	const response = yield call(fetchItems, action.page)
	const data = response.data;
	yield put(PUT_ITEMS_ACTION(data))
}

function* watchLoadItems() {
	yield takeEvery(LOAD_ITEMS, workerLoadItems)
}

//get one item
function fetchItem(name) {
	return axios
		.get(`${config.apiUrl}/people/?search=${name}`)
}

function* workerLoadItem(action) {
	const response = yield call(fetchItem, action.name)
	const data = response.data;
	yield put(PUT_ITEM_ACTION(data))
}

export function* watchLoadItem() {
	yield takeEvery(LOAD_ITEM, workerLoadItem)
}
