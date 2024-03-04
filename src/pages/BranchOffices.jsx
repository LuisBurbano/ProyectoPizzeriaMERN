import React from 'react';
import { Typography, Box, Card } from '@mui/material';
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function BranchOffices() {
  return (
    <>
    <Navbar />
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      <Card sx={{ maxWidth: 600, padding: '20px', textAlign: 'center', bgcolor: 'rgb(42, 42, 42)' , borderRadius: 7}}>
        <Box sx={{ marginBottom: '20px', color: 'white' }}>
          <Typography variant="h6" gutterBottom>
            Sucursal Principal
          </Typography>
          <Typography variant="body1">
            Dirección: La carolina, Av. de los Shyris N36-190 y Naciones Unidas
          </Typography>
        </Box>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2459.55858968513!2d-78.48224979355085!3d-0.17739790279509182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a83874cc869%3A0x1e62bd27f1ec8b77!2sAv.%20Naciones%20Unidas%20%26%20Av.%20de%20los%20Shyris%2C%20170102%20Quito!5e0!3m2!1ses!2sec!4v1709424621212!5m2!1ses!2sec"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        />
      </Card>
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      <Card sx={{ maxWidth: 600, padding: '20px', textAlign: 'center', bgcolor: 'rgb(42, 42, 42)' , borderRadius: 7}}>
        <Box sx={{ marginBottom: '20px', color: 'white' }}>
          <Typography variant="h6" gutterBottom>
            Sucursal 2
          </Typography>
          <Typography variant="body1">
            Dirección: Valle de los chillos, El Triangulo
          </Typography>
        </Box>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.763560745639!2d-78.4603218139332!3d-0.3001868686268701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5bd0059c844e1%3A0xe69ca49704fcf8eb!2sEl%20Triangulo!5e0!3m2!1ses-419!2sec!4v1709534315570!5m2!1ses-419!2sec"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        />
      </Card>
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      <Card sx={{ maxWidth: 600, padding: '20px', textAlign: 'center', bgcolor: 'rgb(42, 42, 42)' , borderRadius: 7}}>
        <Box sx={{ marginBottom: '20px', color: 'white' }}>
          <Typography variant="h6" gutterBottom>
            Sucursal 3
          </Typography>
          <Typography variant="body1">
            Dirección: El pintado, Ajavi y Mariscal Sucre
          </Typography>
        </Box>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7781925935883!2d-78.54514759012534!3d-0.256970835364825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d598e01ce9c21f%3A0x35b9cf0b5c27e350!2sAjavi%20Y%20Mariscal%20Sucre!5e0!3m2!1ses-419!2sec!4v1709534657334!5m2!1ses-419!2sec"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        />
      </Card>
    </Box>
    <Footer />
    </>
  );
}

export default BranchOffices;
