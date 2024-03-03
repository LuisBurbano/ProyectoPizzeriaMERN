import React from 'react';
import { Drawer, List, ListItem, Button, styled } from '@mui/material';
import Logo from '../assets/LogoPizzeria.png'; // Ruta a tu logo
import HourDate from './HourDate';
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
    <>
      <HourDate />
      <DrawerContainer>
        <Drawer variant="permanent" anchor="left">
        <LogoImg src={Logo} alt="Mi Imagen" />
          

          <List>
          <ListItem>
              <Link to="/system" style={{ textDecoration: 'none', color: 'inherit' }} >
                <Button color="inherit" >Dashboard</Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/system/ingredients" style={{ textDecoration: 'none', color: 'inherit' }} >
                <Button color="inherit" >Ingredientes</Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/system/new-product" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button color="inherit">Nuevo Producto</Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/system/new-menu" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button color="inherit">Nuevo menú</Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/system/inventory" style={{ textDecoration: 'none', color: 'inherit' }} >
                <Button color="inherit" >Inventario</Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/system/menu-inventory" style={{ textDecoration: 'none', color: 'inherit' }} >
                <Button color="inherit" >Menús</Button>
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
    </>
  );
};

export default VerticalNavbar;
