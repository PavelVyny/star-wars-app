import React from "react";
import { Row, Col, Table } from "react-bootstrap";



const AdditionalInfo = ({ Info, type }) => {
	const { name, population, climate } = Info;

	return (
		<Table striped bordered hover>
			<thead>
				{type === 'homeworld' ? (
					<tr>
						<th>Name</th>
						<th>Population</th>
						<th>Climate</th>
					</tr>
				) :
					(<tr>
						<th>Title</th>
						<th>Release date</th>
					</tr>)
				}
			</thead>
			<tbody>
				{type === 'homeworld' ? (
					<tr>
						<td>{name}</td>
						<td>{population}</td>
						<td>{climate}</td>
					</tr>
				) :
					(<tr>
						<td>{name}</td>
						<td>{population}</td>
						<td>{climate}</td>
					</tr>)
				}
			</tbody>
		</Table>
	);
};

export default AdditionalInfo;
