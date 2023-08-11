import * as React from "react";
import Pagination from "@mui/material/Pagination";
import { Selector } from "../Selector/Selector";
import s from "./Pagination.module.scss";

type PaginationPropsType = {
	currentPage: number;
	totalCountEl: number;
	countPerPageEl: number;
	setCurrentPage: (value: number) => void;
	setCountPerPageEl: (value: number) => void;
};

export const TablePagination: React.FC<PaginationPropsType> = (props) => {
	const { setCurrentPage, setCountPerPageEl, totalCountEl, countPerPageEl } =
		props;

	const pageCount = Math.ceil(totalCountEl / countPerPageEl);

	const changeCurrentPageHandler = (
		event: React.ChangeEvent<unknown>,
		value: number
	) => {
		setCurrentPage(value);
	};

	return (
		<div className={s.paginationBlock}>
			<Pagination
				onChange={changeCurrentPageHandler}
				count={pageCount}
				variant="outlined"
				color="standard"
				showLastButton
				showFirstButton
			/>

			<Selector
				pageCount={countPerPageEl}
				itemsCount={[10, 25, 50]}
				setPageCount={setCountPerPageEl}
			/>
		</div>
	);
};
