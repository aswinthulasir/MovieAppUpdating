import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Add = () => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    movieName: '',
    category: '',
    director: '',
    releaseYear: '',
    language: ''
  });

  // Handler to update state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handler to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log(JSON.stringify(formData)); // Convert form data to JSON and log it
    alert(`Form Submitted:\n${JSON.stringify(formData, null, 2)}`); // Alert with JSON format
    
    // You can handle this data (e.g., send to API or update UI state)
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Box 
        component="form" 
        sx={{ 
          p: 4, 
          boxShadow: 3, 
          borderRadius: 2, 
          backgroundColor: '#f9f9f9' 
        }} 
        noValidate 
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Typography variant="h5" component="div" gutterBottom align="center" sx={{ mb: 3, fontWeight: 'bold' }}>
          Add New Movie
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField 
              id="movieName" 
              name="movieName" 
              label="Movie Name" 
              fullWidth 
              variant="outlined"
              value={formData.movieName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              id="category" 
              name="category" 
              label="Category" 
              fullWidth 
              variant="outlined"
              value={formData.category}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              id="director" 
              name="director" 
              label="Director" 
              fullWidth 
              variant="outlined"
              value={formData.director}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              id="releaseYear" 
              name="releaseYear" 
              label="Release Year" 
              type="number"
              fullWidth 
              variant="outlined"
              value={formData.releaseYear}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              id="language" 
              name="language" 
              label="Language" 
              fullWidth 
              variant="outlined"
              value={formData.language}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ py: 1.5 }}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Add;
