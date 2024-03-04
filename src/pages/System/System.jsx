import React, { useState, useEffect } from "react";
import VerticalNavbar from "../../components/VerticalNavbar";
import { Typography, Grid, Box, Card, CardContent } from "@mui/material";
import Stadistics from "../../components/Stadistics";

const System = () => {
    const [ganancias, setGanancias] = useState(0);
    const [ordenes, setOrdenes] = useState(0);

    // Simulando obtener datos de las ventas del servidor
    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                // Simular la obtención de datos del servidor
                const response = await fetch('http://localhost:3000/compras');
                const data = await response.json();

                // Obtener la fecha actual
                const fechaActual = new Date();

                // Filtrar las compras que ocurrieron en el mes actual
                const comprasDelMes = data.filter(compra => {
                    const fechaCompra = new Date(compra.purchaseDate);
                    return fechaCompra.getMonth() === fechaActual.getMonth() && fechaCompra.getFullYear() === fechaActual.getFullYear();
                });

                // Calcular las ganancias y la cantidad de órdenes del mes
                let gananciasMes = 0;
                let ordenesMes = 0;
                comprasDelMes.forEach(compra => {
                    gananciasMes += parseFloat(compra.price) * parseInt(compra.cantidad);
                    ordenesMes++;
                });

                // Establecer los estados con los valores calculados
                setGanancias(gananciasMes);
                setOrdenes(ordenesMes);
            } catch (error) {
                console.error('Error fetching sales data:', error);
            }
        };

        obtenerDatos();
    }, []);

    return (
        <>
            <VerticalNavbar />
            <Box sx={{ position: 'relative', marginTop: 2 }}>
                <Typography variant="h5" color="white" gutterBottom sx={{ position: 'relative', top: 15, left: 225, zIndex: 9999 }}>
                    <b>Sistema</b>
                </Typography>
                <Grid container spacing={1} style={{ position: 'relative', top: 40, left: 225}} >
                    <Grid item xs={12} md={3} >
                        <Card variant="outlined" color="white" sx={{minWidth: 150, width: '100%', borderRadius: 5, color: 'white', backgroundColor: 'rgb(198, 40, 40)' }}>
                            <CardContent>
                                <Typography >
                                    <p>${ganancias.toFixed(2)}</p>
                                    <p>Ganancias del Mes </p>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Card variant="outlined" color="white" sx={{ minWidth: 150, width: '100%',borderRadius: 5, color: 'white', backgroundColor: 'rgb(198, 40, 40)' }}>
                            <CardContent>
                                <Typography >
                                    <p>{ordenes}</p>
                                    <p>Órdenes del Mes</p>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                
                <Grid style={{ position: 'relative', top: 90, left: 225 }} >
                    <Grid >
                        <Typography variant="h5" color="white" gutterBottom >
                            <b>Estadisticas generales</b>
                        </Typography>
                        <Stadistics />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default System;
