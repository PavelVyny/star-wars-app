import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';

import { Col } from "react-bootstrap";
import styled from "styled-components";

import Card from "../components/UI/Card";
import { LOAD_ITEM_ACTION } from "../store/actions/sagaActions";

const Person = () => {
	const item = useSelector((state) => state.products.curentItem);
	const { name } = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(LOAD_ITEM_ACTION(name));
	}, [name, dispatch]);

	return (
		<ItemWrapper>
			<Card key={item.id} item={item} />
		</ItemWrapper>

	);
};

const ItemWrapper = styled(Col)`
	.item-box {
		max-width: 100%;
	}
	.card {
		height: 40vh;
	}
	.card-body {
		display: flex;
    	flex-direction: column;
		justify-content: center;
		align-items: center;
	}

`;



export default Person;
