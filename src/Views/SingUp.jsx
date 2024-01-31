import React, { useState } from 'react';
import { TextField, Button, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Register = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [error, setError] = useState('');

    const handleFullNameChange = (event) => {
        setFullName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handleTermsAcceptedChange = () => {
        setTermsAccepted(!termsAccepted);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Aquí puedes agregar la lógica para enviar los datos al servidor o hacer cualquier acción que necesites.
        console.log('Datos de registro enviados:', {
            fullName,
            email,
            password,
            address,
            phone,
            termsAccepted,
        });
    };

    return (
        <>
        <Navbar/>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: '', height: '90vh' ,margin: 'px'}}>
            <Grid container style={{ width: '70%', maxWidth: '850px', backgroundColor: '#ffffff', borderRadius: '10px', padding: '0px' }}>
                {/* Primera mitad para la imagen */}
                <Grid item xs={12} sm={6}>
                    {/* Aquí puedes colocar tu componente de imagen */}
                    <div style={{ backgroundImage: "url('../src/assets/vista-lateral-pizza-pimiento-tomate-rebanadas-pizza-utensilios-cocina.jpg')", backgroundSize: 'cover', height: '100%' }}></div>
                </Grid>
                {/* Segunda mitad para el formulario de registro */}
                <Grid item xs={12} sm={6} container justifyContent="center" alignItems="center" >
                    <form onSubmit={handleSubmit} style={{ width: '70%' }}>
                        <Typography variant="h4" gutterBottom align="center" >
                            Registrarse
                        </Typography>
                        {error && <Typography variant="body2" color="error" align="center">{error}</Typography>}

                        <TextField
                            type="text"
                            label="Nombres Completos"
                            variant="outlined"
                            value={fullName}
                            onChange={handleFullNameChange}
                            fullWidth
                            margin="normal"
                        />
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
                        <TextField
                            type="text"
                            label="Dirección"
                            variant="outlined"
                            value={address}
                            onChange={handleAddressChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            type="tel"
                            label="Celular"
                            variant="outlined"
                            value={phone}
                            onChange={handlePhoneChange}
                            fullWidth
                            margin="normal"
                        />
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                            <input
                                type="checkbox"
                                checked={termsAccepted}
                                onChange={handleTermsAcceptedChange}
                                style={{ marginRight: '10px' }}
                            />
                            <Typography variant="body2" color="textSecondary">
                                Acepto los términos y condiciones
                            </Typography>
                        </div>
                        <Button type="submit" variant="contained" color='error' fullWidth style={{ marginTop: '20px' }}>
                            Registrarse
                        </Button>
                        <Typography variant="body2" align="center" style={{ marginTop: '10px' }}>
                            ¿Ya tienes una cuenta? {' '}
                            <Link to="/login" style={{ textDecoration: 'none' }}>
                                Iniciar sesión
                            </Link>
                        </Typography>
                    </form>
                </Grid>
            </Grid>
        </div>
        </>
    );
};

export default Register;
