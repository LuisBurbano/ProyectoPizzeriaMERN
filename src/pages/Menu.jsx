
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import miImagen1 from "../assets/Group 2.png";
import miImagen2 from "../assets/Group 1.jpg";


const Index = () => {

    return (
        <>
            <Navbar />
            <img src={miImagen1} alt="Mi Imagen2" style={{ width: '100%', height: 'auto' }} />
            <img src={miImagen2} alt="Mi Imagen2" style={{ width: '100%', height: 'auto' }} />
            <Footer />
        </>
    )
}

export default Index