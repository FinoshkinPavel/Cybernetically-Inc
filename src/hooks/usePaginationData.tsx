import { ResponseDataType } from "../services/getData";
import { useState } from "react";

export const usePaginationData = (data: ResponseDataType[]) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [countPerPageEl, setCountPerPageEl] = useState(10);

	const lastIndexEl = currentPage * countPerPageEl;
	const firstIndexEl = lastIndexEl - countPerPageEl;

	const slicedData = data.slice(firstIndexEl, lastIndexEl);

	return {
		paginationData: {
			currentPage,
			countPerPageEl,
			setCurrentPage,
			setCountPerPageEl,
		},
		slicedData,
	};
};
