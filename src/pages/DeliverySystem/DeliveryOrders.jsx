import React, { useState, useEffect } from 'react';
import { Card, CardContent, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper, Button } from '@mui/material';
import axios from 'axios';
import DeliveryNavbar from '../../components/DeliveryNavbar';

const DeliveryOrders = () => {
    const [pendingOrders, setPendingOrders] = useState([]);
    const [deliveredOrders, setDeliveredOrders] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/entrega');
                const allOrders = response.data;
                
                // Filtrar las órdenes pendientes
                const pendingOrders = allOrders.filter(order => order.estadoEntrega === 'Pendiente');
    
                // Filtrar las órdenes entregadas
                const deliveredOrders = allOrders.filter(order => order.estadoEntrega === 'Entregado');
    
                setPendingOrders(pendingOrders);
                setDeliveredOrders(deliveredOrders);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };
    
        fetchData();
    }, []);
    
    const handleAcceptDelivery = async (orderId) => {
        try {
            // Update the order status to "Entregado" on the server
            await axios.put(`http://localhost:3000/entrega/${orderId}`, { estadoEntrega: 'Entregado' });
            // Find the order in pendingOrders
            const acceptedOrder = pendingOrders.find(order => order.id === orderId);
            // Remove the order from pendingOrders and add it to deliveredOrders
            const updatedPendingOrders = pendingOrders.filter(order => order.id !== orderId);
            setPendingOrders(updatedPendingOrders);
            setDeliveredOrders([...deliveredOrders, { ...acceptedOrder, estadoEntrega: 'Entregado' }]);
        } catch (error) {
            console.error('Error accepting delivery:', error);
        }
    };
    

    return (
        <>
            <DeliveryNavbar />
            <Typography variant="h5" color="white" gutterBottom sx={{ position: 'absolute', top: 15, left: 225, zIndex: 9999 }}>
                <b>Productos a entregar</b>
            </Typography>

            <Grid alignItems="center" sx={{ position: 'absolute', top: 120, left: 225 }} >
                <Grid item xs={12} sm={8} md={6} lg={4}>
                    <Card sx={{ minWidth: 1250, width: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" color="text.secondary" gutterBottom>
                                Órdenes pendientes de entregar
                            </Typography>
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Orden</TableCell>
                                            <TableCell>Nombre Cliente</TableCell>
                                            <TableCell>Contacto Cliente</TableCell>
                                            <TableCell>Precio total</TableCell>
                                            <TableCell>Direccion</TableCell>
                                            <TableCell>Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {pendingOrders.map((order) => (
                                            <TableRow key={order.id}>
                                                <TableCell>{order.instrucciones}</TableCell>
                                                <TableCell>{order.customerName}</TableCell>
                                                <TableCell>{order.contacto}</TableCell>
                                                <TableCell>{order.total}</TableCell>
                                                <TableCell>{order.deliveryAddress}</TableCell>
                                                <TableCell>
                                                    <Button variant="contained" color='error' onClick={() => handleAcceptDelivery(order.id)}>Aceptar Entrega</Button>
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

            <Grid alignItems="center" sx={{ position: 'absolute', top: 400, left: 225 }} >
                <Grid item xs={12} sm={8} md={6} lg={4}>
                    <Card sx={{ minWidth: 1250, width: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" color="text.secondary" gutterBottom>
                                Órdenes entregadas
                            </Typography>
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Orden</TableCell>
                                            <TableCell>Nombre Cliente</TableCell>
                                            <TableCell>Contacto Cliente</TableCell>
                                            <TableCell>Precio total</TableCell>
                                            <TableCell>Direccion</TableCell>
                                            <TableCell>Estado</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {deliveredOrders.map((order) => (
                                            <TableRow key={order.id}>
                                                <TableCell>{order.instrucciones}</TableCell>
                                                <TableCell>{order.customerName}</TableCell>
                                                <TableCell>{order.contacto}</TableCell>
                                                <TableCell>{order.total}</TableCell>
                                                <TableCell>{order.deliveryAddress}</TableCell>
                                                <TableCell>{order.estadoEntrega === 'Pendiente' ? "Pendiente" : "Entregado"}</TableCell>
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

export default DeliveryOrders;
