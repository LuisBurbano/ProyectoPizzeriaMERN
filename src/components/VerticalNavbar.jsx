import React from 'react';
import { Drawer, List, ListItem, Button, styled } from '@mui/material';
import Logo from '../assets/LogoPizzeria.png'; // Ruta a tu logo
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const DrawerContainer = styled('div')({
  width: drawerWidth // Establecer el color del texto como blanco
});

const LogoImg = styled('img')({
  width: '125px',
  height: 'auto',
  display: 'block',
  margin: '10px auto',
});

const VerticalNavbar = () => {
  return (
    <DrawerContainer>
      <Drawer variant="permanent" anchor="left">
        <LogoImg src={Logo} alt="Mi Imagen" />
        <List>
          <ListItem>
            <Link to="/system/new-product" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Button color="inherit">Nuevo Producto</Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/system/inventory" style={{ textDecoration: 'none', color: 'inherit' }} >
              <Button color="inherit" >Inventario</Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} >
              <Button color="inherit">Regresar</Button>
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </DrawerContainer>
  );
};

export default VerticalNavbar;
