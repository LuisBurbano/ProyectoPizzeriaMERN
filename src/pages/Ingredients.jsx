import React, { useState, useEffect } from 'react';
import { Card, CardContent, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper } from '@mui/material';
import VerticalNavbar from "../components/VerticalNavbar"

const Ingredients = () => {
  // Estado para almacenar los ingredientes
  const [ingredients, setIngredients] = useState([]);

  // Efecto para cargar los datos cuando el componente se monte
  useEffect(() => {
    // Aquí deberías realizar la llamada a la API o cargar los datos de alguna otra forma
    // Por ahora, solo simularemos datos de ejemplo
    const sampleIngredients = [
      { _id: 1, name: 'Ingrediente 1', quantity: 100, price: 2.99 },
      { _id: 2, name: 'Ingrediente 2', quantity: 50, price: 5.49 },
      { _id: 3, name: 'Ingrediente 3', quantity: 200, price: 3.79 }
    ];
    
    // Actualizar el estado de los ingredientes con los datos cargados
    setIngredients(sampleIngredients);
  }, []); // El segundo argumento [] indica que este efecto solo se ejecuta una vez al montar el componente

  return (
    <>
      <VerticalNavbar />
      <Typography variant="h5" color="white" gutterBottom sx={{ position: 'absolute', top: 15, left: 225, zIndex: 9999 }}>
        <b>Ingredientes</b>
      </Typography>
      <Grid alignItems="center" style={{ position: 'absolute', top: 90, left: 225 }} >
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Card sx={{ minWidth: 1250, width: '100%' }}>
            <CardContent>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Nombre</TableCell>
                      <TableCell align="center">Existencias</TableCell>
                      <TableCell align="center">Precio</TableCell>
                      {/* Eliminé la columna de acciones porque aún no está definida */}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {ingredients.map((ingredient) => (
                      <TableRow key={ingredient._id}>
                        <TableCell>{ingredient._id}</TableCell>
                        <TableCell>{ingredient.name}</TableCell>
                        <TableCell align="center">{ingredient.quantity}</TableCell>
                        <TableCell align="center">{ingredient.price}</TableCell>
                        {/* Aquí puedes agregar la columna de acciones si es necesario */}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Ingredients;
