import { takeEvery, put, call, fork, take, debounce } from 'redux-saga/effects'
import axios from 'axios'
import config from '../../config'

import {
	PUT_ITEMS_ACTION,
	PUT_ITEM_ACTION,
	PUT_FILTRED_ITEMS_ACTION,
	PUT_ADDITIONAL_WORLD_ACTION,
	PUT_ADDITIONAL_FILMS_ACTION,

} from "../../store/actions/sagaActions";

import {
	LOAD_ITEMS,
	LOAD_ITEM,
	LOAD_FILTERS,
	LOAD_ADDITIONAL_WORLD,
	LOAD_ADDITIONAL_FILMS

} from '../../store/actions/Types'

export default function* rootSaga() {
	yield fork(watchLoadItems)
	yield fork(watchLoadItem)
	yield fork(watchLoadFilters)
	yield fork(watchLoadAdditionalWorld)
	yield fork(watchLoadAdditionalFilms)

}


//get all items
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
	const data = response.data.results[0];
	yield put(PUT_ITEM_ACTION(data))
}

export function* watchLoadItem() {
	yield takeEvery(LOAD_ITEM, workerLoadItem)
}

// get searched items
function fetchFilters(searchValue) {
	return axios
		.get(`${config.apiUrl}/people/?search=${searchValue}`)
}

function* workerLoadFilters(action) {
	const response = yield call(fetchFilters, action.searchValue)
	const data = response.data;

	yield put(PUT_FILTRED_ITEMS_ACTION(data))
}

export function* watchLoadFilters() {
	yield debounce(1000, LOAD_FILTERS, workerLoadFilters)
}

// get additional homeworld
function fetchAdditionalWorld(homeworld) {
	return axios
		.get(`${homeworld}`)
}

function* workerLoadAdditionalWorld(action) {
	const response = yield call(fetchAdditionalWorld, action.homeworld)
	const data = response.data;

	yield put(PUT_ADDITIONAL_WORLD_ACTION(data))
}

export function* watchLoadAdditionalWorld() {
	yield  takeEvery(LOAD_ADDITIONAL_WORLD, workerLoadAdditionalWorld)
}

// get additional films
function fetchAdditionalFilms(films) {
	return axios.get(`${films[0]}`)
}

function* workerLoadAdditionalFilms(action) {
	const response = yield call(fetchAdditionalFilms, action.films)
	const data = response.data;

	yield put(PUT_ADDITIONAL_FILMS_ACTION(data))
}

export function* watchLoadAdditionalFilms() {
	yield  takeEvery(LOAD_ADDITIONAL_FILMS, workerLoadAdditionalFilms)
}
