import React, { useState } from 'react';
import { Box, Button, FormControl, FormHelperText, Grid, Input, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import VerticalNavbar from "./VerticalNavbar";

const NewProduct = () => {
  // State for form fields
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState('Favoritos');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  // Function for handling form submission
  const handleSubmit = async (event) => {

    event.preventDefault();
    const data = {
      category,
      title,
      description,
      price,
      quantity,
    };

    try {
      const response = await fetch('http://localhost:3000/product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Datos de registro enviados correctamente');
        // Aquí puedes agregar cualquier lógica adicional después de enviar los datos
      } else {
        console.error('Error al enviar los datos:', response.statusText);
        // Manejo de errores si es necesario
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error.message);
      // Manejo de errores si es necesario
    }
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
                <MenuItem value="Favoritos">Favoritos</MenuItem>
                <MenuItem value="Promociones">Promociones</MenuItem>
                <MenuItem value="Especiales">Especiales</MenuItem>
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
              rows={3}
              sx={{ mb: 2 }}
            />
            <Input
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="Existencias"
              fullWidth
              type="number"
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
