import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';

import { Col, Spinner } from "react-bootstrap";
import styled from "styled-components";

import CardDetail from "../components/UI/CardDetail";
import { LOAD_ITEM_ACTION } from "../store/actions/sagaActions";

const Person = () => {
	const item = useSelector((state) => state.people.currentItem);
	const isFeatching = useSelector((state) => state.people.currentItemIsFeatching);
	const favoriteItems = useSelector((state) => state.people.favoritesList);
	const isPersonInFavorites = favoriteItems.find(favItem => favItem.name === item.name) ? 'yes' : 'no'

	const { name } = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(LOAD_ITEM_ACTION(name));
	}, [name, dispatch]);

	return (
		<ItemWrapper>
			{ !isFeatching ?
				<CardDetail key={item.name} item={item} isMyFavorite={isPersonInFavorites} />
				:
				<Spinner animation="border" variant="primary" />
			}

		</ItemWrapper>

	);
};

const ItemWrapper = styled(Col)`
	.item-box {
		max-width: 100%;
	}
`;

export default Person;
