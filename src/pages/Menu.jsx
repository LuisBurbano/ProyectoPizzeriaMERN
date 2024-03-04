import { useEffect, useState } from 'react';
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import MenuCard from "../components/MenuCard";
import Favoritos from "../assets/Favoritos.png";
import Promociones from "../assets/Promociones.png";
import Especiales from "../assets/Especiales.png";
import axios from 'axios';
import { Button, Modal, TextField } from '@mui/material';

const Index = () => {
    const [menus, setMenus] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState(null);
    const [customerName, setCustomerName] = useState('');
    const [deliveryAddress, setDeliveryAddress] = useState('');

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
            // Aquí puedes enviar los datos del cliente a tu base de datos
            // Por ejemplo, usando axios para hacer una solicitud POST
            const response = await axios.post('http://localhost:3000/compras', {
                menuId: selectedMenu.id,
                menuTitle: selectedMenu.title,
                price: selectedMenu.price,
                customerName: customerName,
                deliveryAddress: deliveryAddress
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
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px' }}>
                    <h2 id="modal-title">Confirmar compra</h2>
                    <p>{selectedMenu && `¿Estás seguro que deseas comprar ${selectedMenu.title}?`}</p>
                    <TextField
                        label="Nombre del cliente"
                        variant="outlined"
                        fullWidth
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                    />
                    <TextField
                        label="Dirección de entrega"
                        variant="outlined"
                        fullWidth
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                    />
                    <Button variant="contained" color="primary" onClick={handleConfirmPurchase}>Confirmar compra</Button>
                </div>
            </Modal>
        </>
    )
}

export default Index;
