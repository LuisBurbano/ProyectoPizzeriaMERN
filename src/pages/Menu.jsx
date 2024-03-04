import { useEffect, useState } from 'react';
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import MenuCard from "../components/MenuCard";
import Favoritos from "../assets/Favoritos.png";
import Promociones from "../assets/Promociones.png";
import Especiales from "../assets/Especiales.png";
import axios from 'axios';
import { Button, Modal, TextField, Typography } from '@mui/material';

const Index = () => {
    const [menus, setMenus] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState(null);
    const [customerName, setCustomerName] = useState('');
    const [deliveryAddress, setDeliveryAddress] = useState('');
    const [cantidad, setCantidad] = useState(1);
    const [cedula, setCedula] = useState('');
    const [instrucciones, setInstrucciones] = useState('');
    const [contacto, setContacto] = useState('');

    useEffect(() => {
        const fetchMenus = async () => {
            try {
                const response = await axios.get('http://localhost:3000/menu');
                setMenus(response.data);
            } catch (error) {
                console.error('Error fetching menus:', error);
            }
        };

        fetchMenus();
    }, []);

    // Filtrar los menús por categoría
    const favoritosMenus = menus.filter(menu => menu.category === "Favoritos");
    const promocionesMenus = menus.filter(menu => menu.category === "Promociones");
    const especialesMenus = menus.filter(menu => menu.category === "Especiales");

    const handleOpenModal = (menu) => {
        setSelectedMenu(menu);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedMenu(null);
        setCustomerName('');
        setDeliveryAddress('');
    };

    const handleBuyClick = (menu) => {
        handleOpenModal(menu);
    };

    const handleConfirmPurchase = async () => {
        try {
            const currentDate = new Date().toISOString();
            const total = selectedMenu.price * cantidad;
            // Aquí puedes enviar los datos del cliente a tu base de datos
            // Por ejemplo, usando axios para hacer una solicitud POST
            const response = await axios.post('http://localhost:3000/compras', {
                cedula: cedula,
                customerName: customerName,
                menuId: selectedMenu.id,
                menuTitle: selectedMenu.title,
                deliveryAddress: deliveryAddress,
                purchaseDate: currentDate,
                cantidad: cantidad,
                price: selectedMenu.price,
                total: total,
                instrucciones: instrucciones
            });
            console.log('Compra realizada con éxito:', response.data);
            handleCloseModal();
        } catch (error) {
            console.error('Error al realizar la compra:', error);
        }
    };

    return (
        <>
            <Navbar />
            <section>
                <img src={Favoritos} alt="" style={{ width: '100%', height: 'auto' }} />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '20px', padding: '20px' }}>
                    {favoritosMenus.map(menu => (
                        <div key={menu.id}>
                            <MenuCard title={menu.title} description={menu.description} price={menu.price} onBuyClick={() => handleBuyClick(menu)} />
                        </div>
                    ))}
                </div>
            </section>
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
            <section>
                <img src={Especiales} alt="" style={{ width: '100%', height: 'auto' }} />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '20px', padding: '20px' }}>
                    {especialesMenus.map(menu => (
                        <div key={menu.id}>
                            <MenuCard title={menu.title} description={menu.description} price={menu.price} onBuyClick={() => handleBuyClick(menu)} />
                        </div>
                    ))}
                </div>
            </section>
            <Footer />

            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', maxWidth: '400px', width: '100%' }}>
                    <Typography variant="h4" gutterBottom>
                        <h2 id="modal-title" style={{ marginBottom: '20px', textAlign: 'center', fontSize: '1.5rem' }}>Confirmar compra</h2>

                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        <p style={{ marginBottom: '20px', textAlign: 'center' }}>{selectedMenu && `¿Estás seguro que deseas comprar ${selectedMenu.title}?`}</p>
                    </Typography>
                    <TextField
                        label="Nombre del cliente"
                        variant="outlined"
                        fullWidth
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        style={{ marginBottom: '15px' }}
                    />
                    <TextField
                        label="Cedula"
                        variant="outlined"
                        fullWidth
                        value={cedula}
                        onChange={(e) => setCedula(e.target.value)}
                        style={{ marginBottom: '15px' }}
                    />
                    <TextField
                        label="Dirección de entrega"
                        variant="outlined"
                        fullWidth
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                        style={{ marginBottom: '15px' }}
                    />
                    <TextField
                        label="Cantidad"
                        variant="outlined"
                        fullWidth
                        type='number'
                        value={cantidad}
                        inputProps={{ min: 1 }}
                        onChange={(e) => setCantidad(e.target.value)}
                        style={{ marginBottom: '15px' }}
                    />
                    <TextField
                        label="Numero de contacto"
                        variant="outlined"
                        fullWidth
                        type='number'
                        value={contacto}
                        onChange={(e) => setContacto(e.target.value)}
                        style={{ marginBottom: '15px' }}
                    />
                    <TextField
                        label="Instrucciones de entrega"
                        variant="outlined"
                        fullWidth
                        value={instrucciones}
                        onChange={(e) => setInstrucciones(e.target.value)}
                        style={{ marginBottom: '15px' }}
                    />
                    {selectedMenu && cantidad && (
                        <Typography style={{ marginBottom: '20px', fontSize: '1.2rem', fontWeight: 'bold' }}>Total: ${selectedMenu.price * cantidad}</Typography>
                    )}

                    <Button variant="contained" color='error' sx={{ width: '250px', height: '60px', borderRadius: 6, fontSize: '1rem', marginTop: '20px' }}>Confirmar compra</Button>
                </div>
            </Modal>
        </>
    )
}

export default Index;
