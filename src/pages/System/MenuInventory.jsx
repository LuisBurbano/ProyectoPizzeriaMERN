import React, { useState, useEffect } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Card, CardContent, Button, TextField, Modal, Grid } from '@mui/material';
import VerticalNavbar from "../../components/VerticalNavbar";
import axios from 'axios';

const MenuInventory = () => {
  const [menus, setMenus] = useState([]);
  const [editMenuId, setEditMenuId] = useState(null);
  const [editMenuName, setEditMenuName] = useState('');
  const [editMenuDescription, setEditMenuDescription] = useState('');
  const [editMenuPrice, setEditMenuPrice] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await axios.get('http://localhost:3000/menu');
        setMenus(response.data);
      } catch (error) {
        console.error('Error fetching menus:', error);
      }
    };

    fetchMenus();
  }, []);

  const handleDelete = async (menuId) => {
    try {
      await axios.delete(`http://localhost:3000/menu/${menuId}`);
      setMenus(menus.filter(menu => menu.id !== menuId));
      console.log(`Menu with ID ${menuId} deleted successfully`);
    } catch (error) {
      console.error(`Error deleting menu with ID ${menuId}:`, error);
    }
  };

  const handleEdit = (menuId, name, description, price) => {
    setEditMenuId(menuId);
    setEditMenuName(name);
    setEditMenuDescription(description);
    setEditMenuPrice(price);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setEditMenuId(null);
    setEditMenuName('');
    setEditMenuDescription('');
    setEditMenuPrice(0);
  };

  const handleSaveEdit = async () => {
    try {
      await axios.put(`http://localhost:3000/menu/${editMenuId}`, {
        name: editMenuName,
        description: editMenuDescription,
        price: editMenuPrice
      });
      // Actualizar el menú en la lista
      setMenus(menus.map(menu =>
        menu.id === editMenuId
          ? { ...menu, name: editMenuName, description: editMenuDescription, price: editMenuPrice }
          : menu
      ));
      console.log(`Menu with ID ${editMenuId} edited successfully`);
      handleCloseModal();
    } catch (error) {
      console.error(`Error editing menu with ID ${editMenuId}:`, error);
    }
  };

  return (
    <>
      <VerticalNavbar />
      <Box sx={{ position: 'relative', marginTop: 2 }}>
      <Typography variant="h5" color="white" gutterBottom sx={{ position: 'absolute', top: 15, left: 225, zIndex: 9999 }}>
        <b>Inventario de Menús</b>
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
                    <TableCell>Descripción</TableCell>
                    <TableCell align="right">Precio</TableCell>
                    <TableCell align="center">Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {menus.map((menu) => (
                    <TableRow key={menu.id}>
                      <TableCell>{menu.id}</TableCell>
                      <TableCell>{menu.name}</TableCell>
                      <TableCell>{menu.description}</TableCell>
                      <TableCell align="right">{menu.price}</TableCell>
                      <TableCell align="center">
                        <Button sx={{marginRight:1}} variant="contained" color="error" onClick={() => handleDelete(menu.id)}>Eliminar</Button>
                        <Button variant="contained" color="primary" onClick={() => handleEdit(menu.id, menu.name, menu.description, menu.price)}>Editar</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
        </Grid>
      </Grid>
      </Box>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2" gutterBottom>
            Editar Menú
          </Typography>
          <TextField
            label="Nombre"
            variant="outlined"
            fullWidth
            value={editMenuName}
            onChange={(e) => setEditMenuName(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            label="Descripción"
            variant="outlined"
            fullWidth
            value={editMenuDescription}
            onChange={(e) => setEditMenuDescription(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            label="Precio"
            variant="outlined"
            fullWidth
            type="number"
            value={editMenuPrice}
            onChange={(e) => setEditMenuPrice(e.target.value)}
            margin="normal"
            required
          />
          <Button sx={{marginRight:2}} variant="contained" color="primary" onClick={handleSaveEdit}>Guardar</Button>
          <Button variant="contained" color="error" onClick={handleCloseModal}>Cancelar</Button>
        </Box>
      </Modal>
    </>
  );
};

export default MenuInventory;
