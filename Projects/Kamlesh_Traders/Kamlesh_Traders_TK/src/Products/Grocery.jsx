import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button
} from "@mui/material";

const Grocery = () => {
  function createData(Sno, Name, color, qty, weight, price) {
    return { Sno, Name, color, qty, weight, price };
  }

  const rows = [
    createData(1, "Brinjal", "purpul", 6, 2.0, 4.0),
    createData(2, "Bell pepper", "Red and Yello", 3, 9.0, 37),
    createData(3, "Carrot", "Light pink", 262, 16.0, 24),
    createData(4, "Tomato", "red", 3.7, 67, 4.3),
    createData(5, "Cauliflower", "green and white", 16.0, 49, 23),
  ];

  return (
    <>
      {/* Use MUI Typography for better styling */}
      <Typography variant="h4" sx={{ textAlign: "center", my: 2 }}>
        Grocery List
      </Typography>

      <TableContainer component={Paper} sx={{ maxWidth: 800, margin: "auto" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><strong>Sno </strong></TableCell>
              <TableCell align="right"><strong>Name</strong></TableCell>
              <TableCell align="right"><strong>color&nbsp;(g)</strong></TableCell>
              <TableCell align="right"><strong>qty&nbsp;(g)</strong></TableCell>
              <TableCell align="right"><strong>weight&nbsp;(g)</strong></TableCell>
              <TableCell align="right"><strong>price &#8377;(Rs)</strong></TableCell>
              <TableCell align="right"><strong>Update</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.Sno} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.Sno}
                </TableCell>
                <TableCell align="right">{row.Name}</TableCell>
                <TableCell align="right">{row.color}</TableCell>
                <TableCell align="right">{row.qty}</TableCell>
                <TableCell align="right">{row.weight}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right"><Button variant="contained" color="success">Update</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Grocery;
