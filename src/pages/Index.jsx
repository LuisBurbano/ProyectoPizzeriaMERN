
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import miImagen from "../assets/banner.png";

const Index = () => {

    return (
        <>
            <Navbar />
            <img src={miImagen} alt="Mi Imagen" style={{ width: '100%', height: 'auto' }} />
            <Footer />
        </>
    )
}

export default Index