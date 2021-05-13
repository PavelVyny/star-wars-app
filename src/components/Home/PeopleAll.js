import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import Card from "../UI/Card";
import styled from "styled-components";
import Pagination from "../Pagination";
import { LOAD_ITEMS_ACTION } from "../../store/actions/sagaActions";


const PeopleAll = () => {
	const items = useSelector((state) => state.people.items);
	const page = useSelector((state) => state.people.page);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(
			LOAD_ITEMS_ACTION(page),
		);
	}, [dispatch, page])

	return (
		<ItemWrapper>
			<Row className="justify-content-center cards">
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
		</ItemWrapper>

	);
};

const ItemWrapper = styled(Row)`
	.cards {
		display: grid;
		max-width: calc(100% - 20px);
		grid-template-columns: repeat(auto-fill,200px);
		-ms-flex-pack: justify;
		justify-content: space-between;
	}
`;



export default PeopleAll;
