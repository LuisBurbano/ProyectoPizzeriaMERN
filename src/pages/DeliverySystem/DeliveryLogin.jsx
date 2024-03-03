import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { TextField, Button, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import Footer from "../../components/Footer"

const DeliveryLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (email.trim() === '' || password.trim() === '') {
      setError('Por favor, complete todos los campos');
      return;
    }

    setError('');

    // Función asíncrona para manejar la solicitud de inicio de sesión
    const handleLogin = async () => {
      try {
        // Realizar una solicitud GET al servidor para obtener el usuario por correo electrónico
        const response = await fetch(`http://localhost:3000/user/email/${email}`);
        const userData = await response.json();

        // Verificar si se encontró un usuario y si la contraseña coincide
        if (!userData || userData.password !== password) {
          setError('Correo electrónico o contraseña incorrectos');
          return;
        }

        // Si se encuentra el usuario y la contraseña coincide, redirigir al usuario a la página de sistema
        window.location.href = '/delivery/orders';
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
        setError('Error al intentar iniciar sesión');
      }
    };

    // Llamar a la función handleLogin
    handleLogin();
  };

  return (

    <>
      <Navbar />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: '', height: '70vh', margin: '50px' }}>
        <Grid container style={{ width: '70%', maxWidth: '850px', backgroundColor: '#ffffff', borderRadius: '10px', padding: '0px', position: 'relative' }}>
          {/* Primera mitad para la imagen */}
          <Grid item xs={12} sm={6}>
            <div style={{ backgroundImage: "url('../src/assets/Group 6.png')", backgroundSize: '425px', height: '100%' }}></div>
          </Grid>
          {/* Segunda mitad para el formulario de inicio de sesión */}
          <Grid item xs={12} sm={6} container justifyContent="center" alignItems="center" >
            <form onSubmit={handleSubmit} style={{ width: '70%' }}>
              <Typography variant="h4" gutterBottom align="center" >
                Inicio de sesion repartidor
              </Typography>
              {error && <Typography variant="body2" color="error" align="center">{error}</Typography>}

              <TextField
                type="email"
                label="Email"
                variant="outlined"
                value={email}
                onChange={handleEmailChange}
                fullWidth
                margin="normal"

              />
              <TextField
                type="password"
                label="Contraseña"
                variant="outlined"
                value={password}
                onChange={handlePasswordChange}
                fullWidth
                margin="normal"
              />

              
                <Button type="submit" variant="contained" color='error' fullWidth style={{ marginTop: '20px' }}>
                  Iniciar sesión
                </Button>
              
            </form>
            <Typography variant="body2" align="center" style={{ marginTop: '10px' }}>
                ¿No tienes una cuenta? {' '}
                <Link to="/delivery/register" style={{ textDecoration: 'none' }}>
                  Crear cuenta
                </Link>
              </Typography>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  );
};

export default DeliveryLogin;
