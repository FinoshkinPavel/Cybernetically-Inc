import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ResponseDataType } from "../../services/getData";

type TablePropsType = {
  data: Array<ResponseDataType>;
};

export const DataTable: React.FC<TablePropsType> = ({ data }) => {
  const dataKey = Object.keys(data[0]);
  return (
    <TableContainer
      component={Paper}
      sx={{ maxWidth: "90%", maxHeight: "50%" }}
    >
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
          {data.map((el) => (
            <TableRow
              key={el.symbol}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {el.symbol}
              </TableCell>
              <TableCell align="center">{el.sector}</TableCell>
              <TableCell align="center">{el.bidSize}</TableCell>
              <TableCell align="center">{el.askSize}</TableCell>
              <TableCell align="center">{el.bidPrice}</TableCell>
              <TableCell align="center">{el.askPrice}</TableCell>
              <TableCell align="center">{el.lastSaleSize}</TableCell>
              <TableCell align="center">{el.lastSaleTime}</TableCell>
              <TableCell align="center">{el.lastSalePrice}</TableCell>
              <TableCell align="center">{el.lastUpdated}</TableCell>
              <TableCell align="center">{el.securityType}</TableCell>
              <TableCell align="center">{el.volume}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
