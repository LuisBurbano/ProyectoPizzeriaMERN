import React from 'react';

import miImagen from "../assets/LogoPizzeria.png";
import { AppBar, Toolbar, Typography, Button, styled } from '@mui/material';
import { Link } from 'react-router-dom';


// Estilos personalizados para el AppBar
const TransparentAppBar = styled(AppBar)({
  backgroundColor: 'transparent',
  boxShadow: 'none',
});

// Estilos personalizados para el botón de Iniciar Sesión
const RedButton = styled(Button)({
  color: 'white', // Color del texto
  backgroundColor: '#C62828', // Color de fondo
});

const userName = localStorage.getItem('userName');

const Navbar = () => {
  return (
    <TransparentAppBar position="static">
      <Toolbar>
        {/* Logo a la izquierda */}

        <img src={miImagen} alt="Mi Imagen" style={{ width: '6%', height: 'auto' }} />

        {/* Botones de navegación */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color='error' >Inicio</Button>
          </Link>
          <Link to="/menu" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Button color="inherit">Menu</Button>
          </Link>
          <Link to="/work-with-us" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Button color="inherit">Trabaja con Nosotros</Button>
          </Link>
          <Link to="/branch-offices" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Button color="inherit">Sucursales</Button>
          </Link>
        </Typography>

        {/* Botón de iniciar sesión con estilo de color */}
        
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color='error'>Iniciar Sesión</Button>
        </Link>
        
      </Toolbar>
    </TransparentAppBar>
  );
};

export default Navbar;


