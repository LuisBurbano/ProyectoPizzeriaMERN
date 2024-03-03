import React, { useState, useEffect } from 'react';
import { Card, CardContent, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper, Button, Modal, Box, TextField } from '@mui/material';
import VerticalNavbar from "../../components/VerticalNavbar"

const Ingredients = () => {
    const [ingredients, setIngredients] = useState([]);
    const [openModal, setOpenModal] = useState(false); // State for modal visibility
    const [newIngredient, setNewIngredient] = useState({ name: '', quantity: '', price: '' }); // State for new ingredient data

    useEffect(() => {
        const sampleIngredients = [
            { _id: 1, name: 'Ingrediente 1', quantity: 100, price: 2.99 },
            { _id: 2, name: 'Ingrediente 2', quantity: 50, price: 5.49 },
            { _id: 3, name: 'Ingrediente 3', quantity: 200, price: 3.79 }
        ];
        setIngredients(sampleIngredients);
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

    const handleAddIngredient = () => {
        // Add validation here if necessary
        const newId = ingredients.length + 1;
        const newIngredientWithId = { _id: newId, ...newIngredient };
        setIngredients([...ingredients, newIngredientWithId]);
        setNewIngredient({ name: '', quantity: '', price: '' }); // Reset new ingredient state
        handleCloseModal();
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
                    color="error" // Red color
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
                                                <TableRow key={ingredient._id}>
                                                    <TableCell>{ingredient._id}</TableCell>
                                                    <TableCell>{ingredient.name}</TableCell>
                                                    <TableCell align="center">{ingredient.quantity}</TableCell>
                                                    <TableCell align="center">{ingredient.price}</TableCell>
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
                        name="name"
                        value={newIngredient.name}
                        onChange={handleInputChange}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        type="number"
                        label="Existencias"
                        name="quantity"
                        value={newIngredient.quantity}
                        onChange={handleInputChange}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        type="number"
                        label="Precio"
                        name="price"
                        value={newIngredient.price}
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
