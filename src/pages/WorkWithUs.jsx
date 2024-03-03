import React from 'react';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import miImagen from "../assets/Group 8.png";
import miImagen2 from "../assets/chica.png";
import { Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const WorkWithUs = () => {
    return (
        <>
            <Navbar />

            <Grid container spacing={2} style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Grid item xs={6} style={{ textAlign: 'center' }}>

                    <img src={miImagen} alt="" style={{ width: '100%', height: 'auto' }} />
                    <Link to="/delivery/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Button variant="contained" color='error' sx={{ width: '150px', height: '40px', borderRadius: 6, fontSize: '1rem' }}>Empezar</Button>
                    </Link>


                </Grid>
                <Grid item xs={6} style={{ textAlign: 'center' }}>

                    <img src={miImagen2} alt="" style={{ width: '80%', height: 'auto' }} />

                </Grid>
            </Grid>
            <Footer />
        </>
    );
}

export default WorkWithUs;
