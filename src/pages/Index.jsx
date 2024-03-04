
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import miImagen from "../assets/banner.png";
import Promociones from "../assets/Promociones.png";
import MenuCard from "../components/MenuCard";
import { Link } from 'react-router-dom';
import { Button, Grid } from '@mui/material';
import { Typography, Box, Card } from '@mui/material';

const Index = () => {

    const promocionesMenus = [
        { id: 1, title: 'Titulo', description: 'Descripción', price: 10 },
        { id: 2, title: 'Otro título', description: 'Otra descripción', price: 20 },
        // Añade más objetos según sea necesario
    ];

    // Función dummy para manejar el clic de compra
    const handleBuyClick = (menu) => {
        console.log('Comprar', menu.title);
    };


    return (
        <>
            <Navbar />
            <img src={miImagen} alt="Mi Imagen" style={{ width: '100%', height: 'auto' }} />

            <section>
                <img src={Promociones} alt="" style={{ width: '100%', height: 'auto' }} />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '20px', padding: '20px' }}>
                    {promocionesMenus.map(menu => (
                        <div key={menu.id}>
                            <MenuCard title={menu.title} description={menu.description} price={menu.price} onBuyClick={() => handleBuyClick(menu)} />
                        </div>
                    ))}
                </div>
            </section>

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginRight: '50px', color: 'white', maxWidth: '45%', textAlign: 'justify' }}>
                    <Typography variant="h4" gutterBottom>
                        SUCURSALES
                    </Typography>
                    <Typography variant="body1" >
                        ¡Descubre todas nuestras sucursales y las amplias coberturas que ofrecemos dentro de la ciudad!
                        En cada una de nuestras ubicaciones, te garantizamos un servicio excepcional y atención personalizada para satisfacer todas tus necesidades. Nuestras sucursales están estratégicamente ubicadas para brindarte la comodidad que mereces, así como acceso rápido y fácil a nuestros productos y servicios.
                    </Typography>
                    <Link to="/branch-offices" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Button variant="contained" color='error' sx={{ width: '150px', height: '40px', borderRadius: 6, fontSize: '1rem', marginTop: '20px' }}>SUCURSALES</Button>
                    </Link>
                </Box>
                <Card sx={{ maxWidth: 600, padding: '20px', textAlign: 'center', bgcolor: 'rgb(42, 42, 42)', borderRadius: 7 }}>
                    <Box sx={{ marginBottom: '20px', color: 'white' }}>
                        <Typography variant="h6" gutterBottom>
                            Sucursal 1
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

            <Box sx={{ marginBottom: 'auto', bgcolor: '#232222', width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white', maxWidth: '800px', padding: '30px' }}>
                    <Typography variant="h4" gutterBottom>
                        TRABAJA CON NOSOTROS
                    </Typography>
                    <Link to="/work-with-us" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Button variant="contained" color='error' sx={{ width: '200px', height: '50px', borderRadius: 6, fontSize: '1rem' }}>MÁS INFORMACIÓN</Button>
                    </Link>
                </Box>
            </Box>

            <Footer />

        </>
    )
}

export default Index