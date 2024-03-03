import React, { useState, useEffect } from 'react';
import { Card, CardContent, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper, Button, Modal, Box, TextField } from '@mui/material';
import DeliveryNavbar from '../../components/DeliveryNavbar';

const DeliveryHistory = () => {
    const [orders, setOrders] = useState([]);
    const [openModal, setOpenModal] = useState(false); // State for modal visibility
    const [newOrder, setNewOrder] = useState({ id: '', customerName: '', phoneNumber: '', totalPrice: '', address: '', date: '' }); // State for new order data

    useEffect(() => {
        const sampleOrders = [
            { id: 1, customerName: 'John Doe', phoneNumber: '123-456-7890', totalPrice: 50.99, address: '123 Main St, City, Country', date: '2024-03-01' },
            { id: 2, customerName: 'Jane Smith', phoneNumber: '987-654-3210', totalPrice: 35.49, address: '456 Elm St, Town, Country', date: '2024-02-28' },
            { id: 3, customerName: 'Alice Johnson', phoneNumber: '555-555-5555', totalPrice: 75.25, address: '789 Oak St, Village, Country', date: '2024-02-27' }
        ];
        setOrders(sampleOrders);
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

    const handleAddOrder = () => {
        // Add validation here if necessary
        const newOrderWithId = { ...newOrder, id: orders.length + 1 };
        setOrders([...orders, newOrderWithId]);
        setNewOrder({ id: '', customerName: '', phoneNumber: '', totalPrice: '', address: '', date: '' }); // Reset new order state
        handleCloseModal();
    };

    return (
        <>
            <DeliveryNavbar />
            <Typography variant="h5" color="white" gutterBottom sx={{ position: 'absolute', top: 15, left: 225, zIndex: 9999 }}>
                <b>Historial de entregas</b>
            </Typography>
           
            <Grid alignItems="center" sx={{ position: 'absolute', top: 120, left: 225 }} >
                <Grid item xs={12} sm={8} md={6} lg={4}>
                    <Card sx={{ minWidth: 1250, width: '100%' }}>
                        <CardContent>
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Order ID</TableCell>
                                            <TableCell>Customer Name</TableCell>
                                            <TableCell>Phone Number</TableCell>
                                            <TableCell>Total Price</TableCell>
                                            <TableCell>Address</TableCell>
                                            <TableCell>Date</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {orders.map((order) => (
                                            <TableRow key={order.id}>
                                                <TableCell>{order.id}</TableCell>
                                                <TableCell>{order.customerName}</TableCell>
                                                <TableCell>{order.phoneNumber}</TableCell>
                                                <TableCell>{order.totalPrice}</TableCell>
                                                <TableCell>{order.address}</TableCell>
                                                <TableCell>{order.date}</TableCell>
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

export default DeliveryHistory;
