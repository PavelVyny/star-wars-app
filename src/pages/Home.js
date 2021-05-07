import React from "react";
import Title from "../components/UI/Title";
import PeopleAll from "../components/Home/PeopleAll";

const Home = () => {
	return (
		<>
			<Title title="All people" />
			<PeopleAll isFavorites="false" />
		</>
	);
};

export default Home;
