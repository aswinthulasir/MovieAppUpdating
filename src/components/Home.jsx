import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

// Custom styled components
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  fontWeight: 'bold',
  fontSize: 16,
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const Home = () => {
  const arr_obj = [
    { movieName: "Movie1", category: "Category1", director: "Director1", releaseYear: 2000, language: "Malayalam" },
    { movieName: "Movie2", category: "Category2", director: "Director2", releaseYear: 2000, language: "Tamil" },
    { movieName: "Movie3", category: "Category3", director: "Director3", releaseYear: 2003, language: "Malayalam" }
  ];

  return (
    <TableContainer component={Paper} sx={{ mt: 4, boxShadow: 3, borderRadius: 2 }}>
      <Typography variant="h6" component="div" sx={{ p: 2, fontWeight: 'bold', textAlign: 'center' }}>
        Movie List
      </Typography>
      <Table sx={{ minWidth: 700 }} aria-label="movie table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Movie Name</StyledTableCell>
            <StyledTableCell align="right">Category</StyledTableCell>
            <StyledTableCell align="right">Director</StyledTableCell>
            <StyledTableCell align="right">Release Year</StyledTableCell>
            <StyledTableCell align="right">Language</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {arr_obj.map((row, index) => (
            <StyledTableRow key={index}>
              <TableCell component="th" scope="row">
                {row.movieName}
              </TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">{row.director}</TableCell>
              <TableCell align="right">{row.releaseYear}</TableCell>
              <TableCell align="right">{row.language}</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Home;
