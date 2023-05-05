import React from "react";
import Data from "../jsonData/Data.json";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const RecentTransaction = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          alignItems: "center",
        }}
      >
        <h2>Recent Transation</h2>
        <a
          href="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          View All <ArrowForwardIcon />
        </a>
      </div>
      <TableContainer component={"Paper"}>
        <Table sx={{ minWidth: { md: 650 } }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>UserId</TableCell>
              <TableCell align="center">Amount</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Source</TableCell>
              <TableCell align="center">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Data.map((row) => (
              <TableRow
                key={row.UserId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.UserId}
                </TableCell>
                <TableCell align="center">{row.Amount}</TableCell>
                <TableCell align="center">{row.Status}</TableCell>
                <TableCell align="center">{row.Source}</TableCell>
                <TableCell align="center">{row.Date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default RecentTransaction;
