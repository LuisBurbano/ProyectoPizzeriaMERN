import React from 'react';
import { AppBar, Toolbar, Typography, Button, styled } from '@mui/material';

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

const Navbar = () => {
  return (
    <TransparentAppBar position="static">
      <Toolbar>
        {/* Logo a la izquierda */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          MiLogo
        </Typography>
        {/* Botones de navegación */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button color="inherit">Inicio</Button>
          <Button color="inherit">Menu</Button>
          <Button color="inherit">Trabaja con Nosotros</Button>
          <Button color="inherit">Locales</Button>
        </Typography>
        {/* Botón de iniciar sesión con estilo de color */}
        <RedButton variant="contained">Iniciar Sesión</RedButton>
      </Toolbar>
    </TransparentAppBar>
  );
};

export default Navbar;