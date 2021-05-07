import React from "react";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Card from "../UI/Card";

const PeopleFavorites = ({ isFavorites }) => {
	const items = useSelector((state) => state.products.favoritesList);


	return (
		<>
			<Row className="mt-5 justify-content-center justify-content-md-between">
				{items ? (
					items.map((item) => (
						<Card key={item.name} item={item} isMyFavorite="true" />
					)
					)
				) : (
						<h1>Loading</h1>
					)}
			</Row>
		</>
	);
};

export default PeopleFavorites;
