import React, { useState, useEffect } from 'react';
import { Card, CardContent, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper, Button, Modal, Box, TextField } from '@mui/material';
import VerticalNavbar from "../../components/VerticalNavbar";

const Ingredients = () => {
    const [ingredients, setIngredients] = useState([]);
    const [openModal, setOpenModal] = useState(false); 
    const [newIngredient, setNewIngredient] = useState({ nombre: '', existencias: '', precio: '' }); 

    useEffect(() => {
        const fetchIngredients = async () => {
            try {
                const response = await fetch(`http://localhost:3000/ingredientes/`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setIngredients(data);
            } catch (error) {
                console.error('Error fetching ingredients:', error);
            }
        };
        fetchIngredients();
    }, []);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewIngredient({ ...newIngredient, [name]: value });
    };

    const handleAddIngredient = async () => {
        try {
            const response = await fetch(`http://localhost:3000/ingredientes/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newIngredient),
            });
            if (!response.ok) {
                throw new Error('Failed to add new ingredient');
            }
            const data = await response.json();
            setIngredients([...ingredients, data]);
            setNewIngredient({ nombre: '', existencias: '', precio: '' });
            handleCloseModal();
        } catch (error) {
            console.error('Error adding ingredient:', error);
        }
    };

    return (
        <>
            <VerticalNavbar />
            <Box sx={{ position: 'relative', marginTop: 1 }}>
                <Typography variant="h5" color="white" gutterBottom sx={{ position: 'absolute', top: 15, left: 225, zIndex: 9999 }}>
                    <b>Ingredientes</b>
                </Typography>
                <Button
                    variant="contained"
                    color="error" 
                    onClick={handleOpenModal}
                    sx={{ position: 'absolute', top: 60, left: 225, zIndex: 9999 }}
                >
                    Añadir nuevo ingrediente
                </Button>
                <Grid alignItems="center" sx={{ position: 'absolute', top: 120, left: 225 }} >
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
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {ingredients.map((ingredient) => (
                                                <TableRow key={ingredient.id}>
                                                    <TableCell>{ingredient.id}</TableCell>
                                                    <TableCell>{ingredient.nombre}</TableCell>
                                                    <TableCell align="center">{ingredient.existencias}</TableCell>
                                                    <TableCell align="center">{ingredient.precio}</TableCell>
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
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Añadir nuevo ingrediente
                    </Typography>
                    <TextField
                        margin="normal"
                        fullWidth
                        label="Nombre"
                        name="nombre"
                        value={newIngredient.nombre}
                        onChange={handleInputChange}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        type="number"
                        label="Existencias"
                        name="existencias"
                        value={newIngredient.existencias}
                        onChange={handleInputChange}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        type="number"
                        label="Precio"
                        name="precio"
                        value={newIngredient.precio}
                        onChange={handleInputChange}
                    />
                    <Box sx={{ marginTop: 2 }}>
                        <Button sx={{ marginRight: 2 }} variant="contained" color='success' onClick={handleAddIngredient}>Añadir</Button>
                        <Button variant="contained" color='error' onClick={handleCloseModal}>Cancelar</Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default Ingredients;
