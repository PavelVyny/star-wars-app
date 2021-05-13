import React from "react";
import { Row, Col, Table } from "react-bootstrap";



const AdditionalInfo = ({ Info, type }) => {
	let tableHead, tableBody

	if (type === 'homeworld') {
		let { name, population, climate } = Info;
		tableHead =
			<tr>
				<th>Name</th>
				<th>Population</th>
				<th>Climate</th>
			</tr>
		tableBody =
			<tr>
				<td>{name}</td>
				<td>{population}</td>
				<td>{climate}</td>
			</tr>

	} else if (type === 'films') {
		let { title, release_date } = Info;
		tableHead =
			<tr>
				<th>Title</th>
				<th>Release date</th>
			</tr>

		tableBody =
			<tr>
				<td>{title}</td>
				<td>{release_date}</td>
			</tr>
	}

	return (
		<Table striped bordered hover>
			<thead>
				{tableHead}
			</thead>
			<tbody>
				{tableBody}
			</tbody>
		</Table>
	);
};

export default AdditionalInfo;
