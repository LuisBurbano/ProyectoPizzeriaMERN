import React from 'react';
import { Typography, Link, Box, Grid } from '@mui/material';
import { Instagram, Facebook, Twitter } from '@mui/icons-material'; // Importa los iconos de redes sociales según sea necesario
import miImagen from "../assets/LogoPizzeria.png";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#101010', color: 'white', padding: '20px 0' }}>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        {/* Sección del logo */}
        <Grid item xs={12} sm={6} md={3}>
          <Box display="flex" alignItems="center">
            <img src={miImagen} alt="Mi Imagen" style={{ width: '60%', height: 'auto', marginRight: '10px' }} />
          </Box>
        </Grid>

        {/* Sección de "Nosotros" */}
        <Grid item xs={12} sm={6} md={3}>
          <Box display="flex" flexDirection="column" alignItems="left">
            <Typography variant="h6" gutterBottom fontWeight="bold">Nosotros</Typography>
            <Link href="#" color="inherit" style={{ marginBottom: '10px', textDecoration: 'none' }}>Información Legal</Link>
            <Link href="#" color="inherit" style={{ marginBottom: '10px', textDecoration: 'none' }}>Términos y Condiciones</Link>
            <Link href="#" color="inherit" style={{ marginBottom: '10px', textDecoration: 'none' }}>Política de Privacidad</Link>
          </Box>
        </Grid>

        {/* Sección de "Redes sociales" */}
        <Grid item xs={12} sm={6} md={3}>
          <Box display="flex" flexDirection="column" alignItems="left ">
            <Typography variant="h6" gutterBottom fontWeight="bold">Redes sociales</Typography>
            <Link href="#" color="inherit" style={{ marginRight: '10px', textDecoration: 'none' }}><Instagram sx={{ fontSize: 28 }}/>  </Link>
            <Link href="#" color="inherit" style={{ marginRight: '10px', textDecoration: 'none' }}><Facebook sx={{ fontSize: 28 }}/> </Link>
            <Link href="#" color="inherit" style={{ marginRight: '10px', textDecoration: 'none' }}><Twitter sx={{ fontSize: 28 }}/> </Link>
          </Box>
        </Grid>
      </Grid>
      <Box mt={2} textAlign="center">
        <Typography variant="body1" fontWeight="bold">&copy; 2024 Pizzería. Todos los derechos reservados.</Typography>
      </Box>
    </footer>
  );
};

export default Footer;
