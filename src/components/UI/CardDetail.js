import React, { useEffect } from "react";
import { Button, Card, Row, Col, ListGroup, Tabs, Tab } from "react-bootstrap";
import AdditionalInfo from "./AdditionalInfo";
import styled from "styled-components";

import { ADD_ITEM_ACTION, REMOVE_ITEM_ACTION } from "../../store/actions/favoritesActions";
import { LOAD_ADDITIONAL_WORLD_ACTION } from "../../store/actions/sagaActions";
import { useDispatch, useSelector } from "react-redux";

const ItemDetail = ({ item, isMyFavorite }) => {
	console.log('item =>', item)

	
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(LOAD_ADDITIONAL_WORLD_ACTION(item.homeworld));
		
	}, []);

	

	const homeworld = useSelector((state) => state.people.personHomeworld);
	const films = useSelector((state) => state.people.films);
	

	const { name, height, mass, heir_color, skin_color, eye_color, birth_year, gender } = item;

	const addItemToFavs = () => {
		dispatch(ADD_ITEM_ACTION(item));
	};

	const removeItemFromFavs = () => {
		dispatch(REMOVE_ITEM_ACTION(name));
	};

	return (
		<CardWrapper className="card-detail">
			<Card className="mb-3">
				<Card.Body>
					<Row >
						<Col>
							<Card.Title>
								{name}
							</Card.Title>
						</Col>
						<Col className="d-flex justify-content-end">
							{isMyFavorite === 'no' ? (
								<Button variant="success" onClick={addItemToFavs}>
									Add to favorites
								</Button>

							) :
								(
									<Button variant="danger" onClick={removeItemFromFavs}>
										Remove from favorites
									</Button>
								)
							}
						</Col>
					</Row>
					<ListGroup className="card-detail__list mt-5">
						<ListGroup.Item>
							<span className="card-detail__param-text">Height:</span>
							{height ? height : '-'}
						</ListGroup.Item>
						<ListGroup.Item>
							<span className="card-detail__param-text">Mass:</span>
							{mass ? mass : '-'}
						</ListGroup.Item>
						<ListGroup.Item>
							<span className="card-detail__param-text">Hair color:</span>
							{heir_color ? heir_color : '-'}
						</ListGroup.Item>
						<ListGroup.Item>
							<span className="card-detail__param-text">Skin color:</span>
							{skin_color ? skin_color : '-'}
						</ListGroup.Item>
						<ListGroup.Item>
							<span className="card-detail__param-text">Eye color:</span>
							{eye_color ? eye_color : '-'}
						</ListGroup.Item>
						<ListGroup.Item>
							<span className="card-detail__param-text">Birth year:</span>
							{birth_year ? birth_year : '-'}
						</ListGroup.Item>
						<ListGroup.Item>
							<span className="card-detail__param-text">Gender:</span>
							{gender ? gender : '-'}
						</ListGroup.Item>
					</ListGroup>
					<Tabs defaultActiveKey={false} id="person-tabs" className="mt-5">
						<Tab eventKey="home" title="Homeworld">
							<AdditionalInfo Info={homeworld} type='homeworld'></AdditionalInfo>
						</Tab>
						<Tab eventKey="films" title="Films">
							<AdditionalInfo Info={films} type='films'></AdditionalInfo>
						</Tab>
					</Tabs>
				</Card.Body>
			</Card>
		</CardWrapper>
	);
};

const CardWrapper = styled(Col)`
	.card-detail {
		&__param-text {
			font-weight: 700;
			padding-right: 5px;
		}
	}
`;

export default ItemDetail;
