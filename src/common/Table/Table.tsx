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
import { dataKey } from "../../utils/utils-const";
import s from "./Table.module.scss";

export const DataTable: React.FC = () => {
  const data = useAppSelector((state) => state.data);

  const { paginationData, slicedData } = usePaginationData(data);
  const requestStatus = useAppSelector((state) => state.requestStatus.status);

  if (requestStatus === "loading") {
    return (
      <div className={s.circular}>
        <CircularProgress color="inherit" />
      </div>
    );
  }

  return (
    <>
      <TableContainer component={Paper} sx={{ width: "90%", height: "50%" }}>
        <Table stickyHeader aria-label="simple table">
          <TableHead>
            <TableRow>
              {dataKey.map((el) => {
                return (
                  <TableCell key={el} align="center">
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
                <TableCell component="th" scope="row" align="center">
                  {el.symbol}
                </TableCell>
                {Object.values(el).map((value) => (
                  <TableCell align="center" key={value}>
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
