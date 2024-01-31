import React, { useState } from 'react';
import { Box, Button, FormControl, FormHelperText, Grid, Input, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import VerticalNavbar from "./VerticalNavbar";

const NewProduct = () => {
  // State for form fields
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState('Promociones');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  // Function for handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  // Function for handling image upload
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <>
      <VerticalNavbar />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ height: '90vh' }}
      >
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ width: '100%', p: 3, bgcolor: 'background.paper', borderRadius: 3 }}
          >
            <Typography variant="h5" gutterBottom>
              Nuevo Producto
            </Typography>
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleImageChange}
              style={{ marginBottom: '1rem' }}
            />
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel id="category-label">Categoría</InputLabel>
              <Select
                labelId="category-label"
                id="category"
                value={category}
                label="Categoría"
                onChange={(e) => setCategory(e.target.value)}
              >
                <MenuItem value="Promociones">Promociones</MenuItem>
                {/* Add more categories here */}
              </Select>
              <FormHelperText>Selecciona la categoría del producto</FormHelperText>
            </FormControl>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Título del producto"
              fullWidth
              sx={{ mb: 2 }}
            />
            <Input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Descripción del producto"
              fullWidth
              multiline
              rows={4}
              sx={{ mb: 2 }}
            />
            <Input
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Precio"
              fullWidth
              type="number"
              sx={{ mb: 2 }}
            />
            <Button type="submit" variant="contained" color="error" fullWidth style={{ marginTop: '20px' }}>
              GUARDAR PRODUCTOS
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default NewProduct;
