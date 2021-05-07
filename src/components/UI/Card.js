import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { ADD_ITEM_ACTION, REMOVE_ITEM_ACTION } from "../../store/actions/favoritesActions";
import { useDispatch } from "react-redux";

const Item = ({ item, isMyFavorite }) => {
	const dispatch = useDispatch();
	const { name } = item;
	const addItemToFavs = () => {
		dispatch(ADD_ITEM_ACTION(item));
	};

	const removeItemFromFavs = () => {
		dispatch(REMOVE_ITEM_ACTION(name));
	};

	return (
		<CardWrapper className="item-box" xs={10} sm={6} md={4} lg={3}>
			<Card className="mb-3">
				<Card.Body>
					<Card.Title>
						<NavLink to={'/person/' + name}>
							{name}
						</NavLink>
					</Card.Title>

					{!isMyFavorite ? (
						<Button variant="primary" onClick={addItemToFavs}>
							Add to favorites
						</Button>

					) :
						(
							<Button variant="primary" onClick={removeItemFromFavs}>
								Remove from favorites
							</Button>
						)
					}

				</Card.Body>
			</Card>
		</CardWrapper>
	);
};

const CardWrapper = styled(Col)`
	.card {
		min-width: 250px;
	}
	
`;

export default Item;
