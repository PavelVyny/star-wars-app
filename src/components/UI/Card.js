import React from "react";
import { Card, Col } from "react-bootstrap";
import styled from "styled-components";
import { NavLink } from "react-router-dom";


const Item = ({ item }) => {
	const { name } = item;

	return (
		<CardWrapper className="item-box">
			<Card className="mb-3">
				<Card.Body>
					<Card.Title>
						<NavLink to={'/person/' + name}>
							{name}
						</NavLink>
					</Card.Title>
				</Card.Body>
			</Card>
		</CardWrapper>
	);
};

const CardWrapper = styled(Col)`
	.card {
		
	}
	
`;

export default Item;
