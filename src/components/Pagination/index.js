import React from "react";
import { Pagination, PageItem } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_ITEMS_ACTION } from "../../store/actions/sagaActions";



const PaginationComponent = () => {
	const pages = useSelector((state) => state.products.pages);
	const currentPage = useSelector((state) => state.products.page);
	const pagesArr = [...Array.from({ length: pages }, (_, i) => i + 1)];

	const dispatch = useDispatch();

	const toPage = (page) => {
		dispatch(LOAD_ITEMS_ACTION(page));
	};
	const toPrevPage = () => {
		dispatch(LOAD_ITEMS_ACTION(currentPage - 1));
	};
	const toNextPage = () => {
		dispatch(LOAD_ITEMS_ACTION(currentPage + 1));
	};

	return (
		<Pagination className="justify-content-md-center">
			<Pagination.Prev 
				disabled={(currentPage === 1 ? true : false)}
				onClick={() => toPrevPage()} />
			{
				pagesArr.map((page) => (
					<PageItem 
						key={page} 
						active={(currentPage === page ? true : false)}
						onClick={() => toPage(page)}
					>
					{page}
					</PageItem>
				)
				)
			}
			<Pagination.Next onClick={() => toNextPage()} />
		</Pagination>
	)
}

export default PaginationComponent;