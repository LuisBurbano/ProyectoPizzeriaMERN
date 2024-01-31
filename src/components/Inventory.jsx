import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Card, CardContent } from '@mui/material';
import VerticalNavbar from "./VerticalNavbar";

const Inventory = () => {
  const products = [
    { id: 1, name: 'Producto 1', quantity: 10, price: 20.50 },
    { id: 2, name: 'Producto 2', quantity: 20, price: 15.75 },
    { id: 3, name: 'Producto 3', quantity: 15, price: 30.00 },
    // Agrega más productos según sea necesario
  ];

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
        <Card sx={{ minWidth: 300, width: '70%' }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Inventario de Productos
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Nombre</TableCell>
                    <TableCell align="right">Existencias</TableCell>
                    <TableCell align="right">Precio</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell component="th" scope="row">
                        {product.name}
                      </TableCell>
                      <TableCell align="right">{product.quantity}</TableCell>
                      <TableCell align="right">{product.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default Inventory;
