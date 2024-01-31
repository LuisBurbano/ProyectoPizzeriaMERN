import VerticalNavbar from "./VerticalNavbar"
import React, { useState } from 'react';
import { Box, Button, Card, CardContent, FormControl, FormHelperText, Input, InputLabel, MenuItem, Select, Typography } from '@mui/material';

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
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Card sx={{ minWidth: 300, width: '50%' }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Nuevo Producto
            </Typography>
            <form onSubmit={handleSubmit} sx={{ width: '100%' }}>
              <Box sx={{ mb: 2 }}>
                <Input type="file" accept="image/png, image/jpeg" onChange={handleImageChange} />
              </Box>
              <Box sx={{ mb: 2 }}>
                <FormControl fullWidth>
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
              </Box>
              <Box sx={{ mb: 2 }}>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Título del producto"
                  fullWidth
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <Input
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Descripción del producto"
                  fullWidth
                  multiline
                  rows={4}
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <Input
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Precio"
                  fullWidth
                  type="number"
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  GUARDAR PRODUCTO
                </Button>
              </Box>
            </form>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default NewProduct;
