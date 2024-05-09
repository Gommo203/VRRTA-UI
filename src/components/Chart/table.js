import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function createData(assets, fuelEconomy, distance, idling, make, year) {
  return { assets, fuelEconomy, distance, idling, make, year };
}

const rows = [
  createData("Car 01", "30 mpg", "150 miles", "2 hours", "Toyota", "2020"),
  createData("Car 01", "30 mpg", "150 miles", "2 hours", "Toyota", "2020"),
  createData("Car 01", "30 mpg", "150 miles", "2 hours", "Toyota", "2020"),
  createData("Car 01", "30 mpg", "150 miles", "2 hours", "Toyota", "2020"),
  createData("Car 01", "30 mpg", "150 miles", "2 hours", "Toyota", "2020"),
];

export default function BasicTable() {
  return (
    <Table sx={{ width: "40%" }} aria-label="simple table">
      <TableHead>
        <TableRow sx={{ backgroundColor: "#406876" }}>
          <TableCell
            align="right"
            sx={{
              border: "1px solid rgba(224, 224, 224, 1)",
              fontSize: "1.3rem",
              color: "white",
            }}
          >
            Assets
          </TableCell>
          <TableCell
            align="right"
            sx={{
              border: "1px solid rgba(224, 224, 224, 1)",
              fontSize: "1.3rem",
              color: "white",
            }}
          >
            Fuel Economy
          </TableCell>
          <TableCell
            align="right"
            sx={{
              border: "1px solid rgba(224, 224, 224, 1)",
              fontSize: "1.3rem",
              color: "white",
            }}
          >
            Distance
          </TableCell>
          <TableCell
            align="right"
            sx={{
              border: "1px solid rgba(224, 224, 224, 1)",
              fontSize: "1.3rem",
              color: "white",
            }}
          >
            Idling
          </TableCell>
          <TableCell
            align="right"
            sx={{
              border: "1px solid rgba(224, 224, 224, 1)",
              fontSize: "1.3rem",
              color: "white",
            }}
          >
            Make
          </TableCell>
          <TableCell
            align="right"
            sx={{
              border: "1px solid rgba(224, 224, 224, 1)",
              fontSize: "1.3rem",
              color: "white",
            }}
          >
            Year
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{
              "&:last-child td, &:last-child th": {
                border: "1px solid rgba(224, 224, 224, 1)",
              },
            }}
          >
            <TableCell
              align="right"
              sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}
            >
              {row.assets}
            </TableCell>
            <TableCell align="right">{row.fuelEconomy}</TableCell>
            <TableCell
              align="right"
              sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}
            >
              {row.distance}
            </TableCell>
            <TableCell align="right">{row.idling}</TableCell>
            <TableCell
              align="right"
              sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}
            >
              {row.make}
            </TableCell>
            <TableCell
              align="right"
              sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}
            >
              {row.year}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
