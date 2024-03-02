
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import miImagen2 from "../assets/trabaja con nosotros.png";


const Index = () => {

    return (
        <>
            <Navbar />
            <img src={miImagen2} alt="Mi Imagen2" style={{ width: '100%', height: 'auto' }} />
            <Footer />
        </>
    )
}

export default Index