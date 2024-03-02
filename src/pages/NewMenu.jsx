import React, { useState, useEffect } from 'react';
import { Box, Button, FormControl, Grid, Input, InputLabel, MenuItem, Select, Typography, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import VerticalNavbar from "../components/VerticalNavbar";

const NewMenu = () => {
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState('Favoritos');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [productModalOpen, setProductModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState('');
    const [selectedQuantity, setSelectedQuantity] = useState('');
    const [products, setProducts] = useState([]);
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:3000/productos');
            if (response.ok) {
                const data = await response.json();
                setProductList(data);
            } else {
                console.error('Error al obtener los productos:', response.statusText);
            }
        } catch (error) {
            console.error('Error al obtener los productos:', error.message);
        }
    };

    const handleProductModalOpen = () => {
        setProductModalOpen(true);
    };

    const handleProductModalClose = () => {
        setProductModalOpen(false);
    };

    const handleProductAdd = () => {
        if (selectedProduct && selectedQuantity) {
            const product = productList.find(item => item.id === selectedProduct);
            if (product) {
                const newProduct = {
                    id: product.id,
                    name: product.name,
                    quantity: selectedQuantity
                };
                setProducts([...products, newProduct]);
                setSelectedProduct('');
                setSelectedQuantity('');
                handleProductModalClose();
            }
        }
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile) {
            setImage(droppedFile);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            category,
            title,
            description,
            price,
            quantity,
            products
        };

        try {
            const formData = new FormData();
            formData.append('image', image);
            formData.append('data', JSON.stringify(data));

            const response = await fetch('http://localhost:3000/menu', {
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

    return (
        <>
            <VerticalNavbar />
            <Typography variant="h5" color="white" gutterBottom sx={{ position: 'absolute', top: 15, left: 225, zIndex: 9999 }}>
                <b>Nuevo Menú</b>
            </Typography>
            <Grid alignItems="center" sx={{ position: 'absolute', top: 90, left: 225 }} >
                <Grid item xs={12} sm={8} md={6} lg={4}>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{ width: '38%', p: 3, bgcolor: 'background.paper', borderRadius: 7 }}
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
                            GUARDAR MENÚ
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={6} lg={4} sx={{ position: 'absolute', top: 0, right: 70, p: 3, bgcolor: 'background.paper', borderRadius: 7, minWidth: 460 }}>
                    <Button onClick={handleProductModalOpen} variant="contained" color="error" style={{ marginBottom: '20px' }}>
                        AÑADIR PRODUCTO
                    </Button>
                    <Modal
                        open={productModalOpen}
                        onClose={handleProductModalClose}
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
                            p: 4
                        }}>
                            <FormControl fullWidth>
                                <InputLabel id="product-select-label">Producto</InputLabel>
                                <Select
                                    labelId="product-select-label"
                                    id="product-select"
                                    value={selectedProduct}
                                    label="Producto"
                                    onChange={(e) => setSelectedProduct(e.target.value)}
                                >
                                    {productList.map((product) => (
                                        <MenuItem key={product.id} value={product.id}>{product.name}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl fullWidth sx={{ mt: 2 }}>
                                <InputLabel id="quantity-input-label">Cantidad</InputLabel>
                                <Input
                                    id="quantity"
                                    type="number"
                                    value={selectedQuantity}
                                    onChange={(e) => setSelectedQuantity(e.target.value)}
                                />
                            </FormControl>
                            <Box sx={{ marginTop: 2 }}>
                                <Button onClick={handleProductAdd} variant="contained" color="success"  sx={{ marginRight:2 }}>
                                    Añadir
                                </Button>
                                <Button onClick={handleProductModalClose} variant="contained" color="error" >
                                    Cancelar
                                </Button>
                            </Box>
                        </Box>
                    </Modal>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Producto</TableCell>
                                    <TableCell align="right">Cantidad</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {products.map((product, index) => (
                                    <TableRow key={index}>
                                        <TableCell component="th" scope="row">{product.name}</TableCell>
                                        <TableCell align="right">{product.quantity}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </>
    );
};

export default NewMenu;
