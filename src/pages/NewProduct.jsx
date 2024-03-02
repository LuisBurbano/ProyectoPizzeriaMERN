import React, { useState } from 'react';
import { Box, Button, FormControl, FormHelperText, Grid, Input, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import VerticalNavbar from "../components/VerticalNavbar";

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
      const formData = new FormData();
      formData.append('image', image);
      formData.append('data', JSON.stringify(data));

      const response = await fetch('http://localhost:3000/product', {
        method: 'POST',
        body: formData,
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

  // Function for handling drag and drop
  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setImage(droppedFile);
    }
  };

  return (
    <>
      <VerticalNavbar />
      <Typography variant="h5" color="white" gutterBottom sx={{ position: 'absolute', top: 15, left: 225, zIndex: 9999 }}>
        <b>Nuevo Producto</b>
      </Typography>
      <Grid alignItems="center" sx={{ position: 'absolute', top: 90, left: 225 }} >
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ width: '44%', p: 3, bgcolor: 'background.paper', borderRadius: 7 }}
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            
            <label htmlFor="file-input">
              <div
                style={{
                  border: '2px dashed #ccc',
                  borderRadius: '6px',
                  padding: '1rem',
                  marginBottom: '1rem',
                  textAlign: 'center',
                  cursor: 'pointer',
                }}
              >
                <input
                  id="file-input"
                  type="file"
                  accept="image/png, image/jpeg"
                  onChange={handleImageChange}
                  style={{ display: 'none' }}
                />
                {image ? (
                  <Typography variant="body1">{image.name}</Typography>
                ) : (
                  <>
                    <Typography variant="body1">Haz clic para seleccionar un archivo o arrastra y suelta un archivo aquí</Typography>
                    <Typography variant="body2" style={{ opacity: 0.6 }} >PNG o JPG (máx. 5MB)</Typography>
                  </>
                )}
              </div>
            </label>
            
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
              GUARDAR PRODUCTO
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default NewProduct;
