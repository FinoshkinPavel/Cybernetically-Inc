import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CircularProgress } from "@mui/material";
import { useAppSelector } from "../../hooks/useAppSelector";
import { TablePagination } from "../Pagination/TablePagination";
import { usePaginationData } from "../../hooks/usePaginationData";
import s from "./Table.module.scss";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { fetchData } from "../../store/reducer/data-reducer/data-async-thunk";

export const DataTable: React.FC = () => {
	const { data, isLoading } = useAppSelector((state) => state.data);
	const dispatch = useAppDispatch();
	const { apiKey } = useParams();
	const { paginationData, slicedData } = usePaginationData(data);

	React.useEffect(() => {
		apiKey && dispatch(fetchData(apiKey));
	}, []);

	if (isLoading) {
		return (
			<div className={s.circular}>
				<CircularProgress color="inherit" />
			</div>
		);
	}

	return (
		<>
			<TableContainer component={Paper} sx={{ width: "90%", height: "85%" }}>
				<Table stickyHeader aria-label="simple table">
					<TableHead>
						<TableRow>
							{slicedData.length &&
								Object.keys(slicedData[0]).map((el, i) => {
									return (
										<TableCell align="center" key={i}>
											{el}
										</TableCell>
									);
								})}
						</TableRow>
					</TableHead>
					<TableBody>
						{slicedData.map((el) => (
							<TableRow
								key={el.symbol}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
							>
								{Object.values(el).map((value, i) => (
									<TableCell align="center" key={i}>
										{value}
									</TableCell>
								))}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				totalCountEl={data ? data.length : 1}
				countPerPageEl={paginationData.countPerPageEl}
				setCountPerPageEl={paginationData.setCountPerPageEl}
				currentPage={paginationData.currentPage}
				setCurrentPage={paginationData.setCurrentPage}
			/>
		</>
	);
};
