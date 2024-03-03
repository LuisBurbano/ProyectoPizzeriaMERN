import React, { useState, useEffect } from "react";
import VerticalNavbar from "../../components/VerticalNavbar";
import { Typography, Grid, Box, Card, CardContent } from "@mui/material";
import Stadistics from "../../components/Stadistics";



const System = () => {




    const [ganancias, setGanancias] = useState(0);
    const [ordenes, setOrdenes] = useState(0);
    const [productosSemana, setProductosSemana] = useState([]);
    const [productosMes, setProductosMes] = useState([]);
    const [productosAnio, setProductosAnio] = useState([]);

    // Simulando obtener datos de ganancias, órdenes y productos vendidos del servidor
    useEffect(() => {
        // Aquí podrías hacer llamadas a tu backend para obtener los datos reales
        // Por ahora, vamos a simular datos estáticos
        const obtenerDatos = async () => {
            // Simulando obtener ganancias del mes
            const gananciasDelMes = 5000; // Supongamos que las ganancias del mes son $5000
            setGanancias(gananciasDelMes);

            // Simulando obtener órdenes del mes
            const ordenesDelMes = 100; // Supongamos que hay 100 órdenes en el mes
            setOrdenes(ordenesDelMes);

            // Simulando obtener productos vendidos de la semana
            const productosSemanaDummy = ["Producto A", "Producto B", "Producto C"];
            setProductosSemana(productosSemanaDummy);

            // Simulando obtener productos vendidos del mes
            const productosMesDummy = ["Producto D", "Producto E", "Producto F"];
            setProductosMes(productosMesDummy);

            // Simulando obtener productos vendidos del año
            const productosAnioDummy = ["Producto G", "Producto H", "Producto I"];
            setProductosAnio(productosAnioDummy);
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
                                    <p>${ganancias}</p>
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
