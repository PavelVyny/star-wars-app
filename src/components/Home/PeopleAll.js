import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import Card from "../UI/Card";
import Pagination from "../Pagination";
import { LOAD_ITEMS_ACTION } from "../../store/actions/sagaActions";


const PeopleAll = ({ isFavorites }) => {
	const items = useSelector((state) => state.products.items);
	const page = useSelector((state) => state.products.page);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(
			LOAD_ITEMS_ACTION(page),
		);
	}, [dispatch, page])

	return (
		<>
			<Row className="mt-5 justify-content-center justify-content-md-between">
				{items ? (
					items.map((item) => (
						<Card key={item.name} item={item} />
					))
				)
					:
					(
						<h1>Loading</h1>
					)}
			</Row>
			<Pagination curPage="all-products" />
		</>
	);
};

export default PeopleAll;
