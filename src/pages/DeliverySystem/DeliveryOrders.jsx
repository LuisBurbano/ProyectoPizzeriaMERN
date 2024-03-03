import React, { useState, useEffect } from 'react';
import { Card, CardContent, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper, Button, Modal, Box, TextField } from '@mui/material';
import DeliveryNavbar from '../../components/DeliveryNavbar';

const DeliveryOrders = () => {
    const [pendingOrders, setPendingOrders] = useState([]);
    const [deliveredOrders, setDeliveredOrders] = useState([]);
    const [openModal, setOpenModal] = useState(false); // State for modal visibility
    const [newOrder, setNewOrder] = useState({ id: '', customerName: '', phoneNumber: '', totalPrice: '', address: '', status: 'Pending' }); // State for new order data

    useEffect(() => {
        // Fetch pending orders from backend
        const fetchPendingOrders = async () => {
            // Simulating fetching data from backend
            const samplePendingOrders = [
                { id: 1, customerName: 'John Doe', phoneNumber: '123-456-7890', totalPrice: 50.99, address: '123 Main St, City, Country', status: 'Pending' },
                { id: 2, customerName: 'Jane Smith', phoneNumber: '987-654-3210', totalPrice: 35.49, address: '456 Elm St, Town, Country', status: 'Pending' }
            ];
            setPendingOrders(samplePendingOrders);
        };

        // Fetch delivered orders from backend
        const fetchDeliveredOrders = async () => {
            // Simulating fetching data from backend
            const sampleDeliveredOrders = [
                { id: 3, customerName: 'Alice Johnson', phoneNumber: '555-555-5555', totalPrice: 75.25, address: '789 Oak St, Village, Country', status: 'Delivered' }
            ];
            setDeliveredOrders(sampleDeliveredOrders);
        };

        fetchPendingOrders();
        fetchDeliveredOrders();
    }, []);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewOrder({ ...newOrder, [name]: value });
    };

    const handleAcceptDelivery = (order) => {
        // Move order to delivered orders
        setDeliveredOrders([...deliveredOrders, { ...order , status: 'Pending' }]);
        // Remove order from pending orders
        setPendingOrders(pendingOrders.filter(item => item.id !== order.id));
    };

    const handleDeliveredOrder = (order) => {
        // Eliminar la orden entregada de las órdenes entregadas
        const updatedDeliveredOrders = deliveredOrders.filter(item => item.id !== order.id);
    
        // Agregar la orden entregada con estado "Entregado"
        const updatedOrder = { ...order, status: 'Delivered' };
        const updatedOrders = [...updatedDeliveredOrders, updatedOrder];
    
        // Actualizar el estado de las órdenes entregadas
        setDeliveredOrders(updatedOrders);
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
                                Órdenes pendientes de aceptar
                            </Typography>
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Order ID</TableCell>
                                            <TableCell>Customer Name</TableCell>
                                            <TableCell>Phone Number</TableCell>
                                            <TableCell>Total Price</TableCell>
                                            <TableCell>Address</TableCell>
                                            
                                            <TableCell>Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {pendingOrders.map((order) => (
                                            <TableRow key={order.id}>
                                                <TableCell>{order.id}</TableCell>
                                                <TableCell>{order.customerName}</TableCell>
                                                <TableCell>{order.phoneNumber}</TableCell>
                                                <TableCell>{order.totalPrice}</TableCell>
                                                <TableCell>{order.address}</TableCell>
                                                
                                                <TableCell>
                                                    <Button variant="contained" color='error' onClick={() => handleAcceptDelivery(order)}>Aceptar Entrega</Button>
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
                                Órdenes pendientes de entregar
                            </Typography>
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Order ID</TableCell>
                                            <TableCell>Customer Name</TableCell>
                                            <TableCell>Phone Number</TableCell>
                                            <TableCell>Total Price</TableCell>
                                            <TableCell>Address</TableCell>
                                            <TableCell>Status</TableCell>

                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {deliveredOrders.map((order) => (
                                            <TableRow key={order.id}>
                                                <TableCell>{order.id}</TableCell>
                                                <TableCell>{order.customerName}</TableCell>
                                                <TableCell>{order.phoneNumber}</TableCell>
                                                <TableCell>{order.totalPrice}</TableCell>
                                                <TableCell>{order.address}</TableCell>
        
                                                <TableCell>
                                                    {order.status === 'Delivered' ? "Entregado" : <Button variant="contained" color='primary' onClick={() => handleDeliveredOrder(order)}>Entregado</Button>}
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
        </>
    );
};

export default DeliveryOrders;
