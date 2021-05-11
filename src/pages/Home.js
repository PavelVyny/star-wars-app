import React from "react";
import { Row, Col } from "react-bootstrap";
import Title from "../components/UI/Title";
import PeopleAll from "../components/Home/PeopleAll";
import Search from '../components/globalComponents/Search';

const Home = () => {
	return (
		<>
			<Title title="All people" />
			<Row className="flex-row-md-reverse">
				<Col className="col-md-10">
					<PeopleAll />
				</Col>
				<Col className="col-md-2">
					<Search />
				</Col>
			</Row>
		</>
	);
};

export default Home;
