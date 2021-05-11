import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import { setSearchValue } from "../../store/actions/filterActions";
import { LOAD_FILTERS_ACTION } from "../../store/actions/sagaActions";

const Search = () => {
	const dispatch = useDispatch();
	const searchValue = useSelector((state) => state.people.searchValue);

	const handleChangeQuery = event => {
		dispatch(setSearchValue(event.target.value));
		dispatch(LOAD_FILTERS_ACTION(event.target.value));
		
	}
	return (
		<Form>
			<Form.Group controlId="formBasicEmail">
				<Form.Control
					type="text"
					placeholder="Search by name"
					onChange={handleChangeQuery}
					value={searchValue}
				/>
			</Form.Group>
		</Form>
	);
};

export default Search;

