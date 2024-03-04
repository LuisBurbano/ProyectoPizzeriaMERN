import React, { useState, useEffect } from 'react';
import { Card, CardContent, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper } from '@mui/material';
import axios from 'axios';
import DeliveryNavbar from '../../components/DeliveryNavbar';

const DeliveryHistory = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('http://localhost:3000/entrega');
                setOrders(response.data);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, []);

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
                                            <TableCell>Nombre Cliente</TableCell>
                                            <TableCell>Contacto</TableCell>
                                            <TableCell>Total </TableCell>
                                            <TableCell>Direccion</TableCell>
                                            <TableCell>Estado</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {orders.map((order) => (
                                            <TableRow key={order.id}>
                                                <TableCell>{order.instrucciones}</TableCell>
                                                <TableCell>{order.customerName}</TableCell>
                                                <TableCell>{order.contacto}</TableCell>
                                                <TableCell>{order.total}</TableCell>
                                                <TableCell>{order.deliveryAddress}</TableCell>
                                                <TableCell>{order.estadoEntrega}</TableCell>
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
