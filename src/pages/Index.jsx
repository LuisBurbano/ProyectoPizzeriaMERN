
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import miImagen from "../assets/banner.png";
import miImagen2 from "../assets/Group 1.jpg";
import miImagen3 from "../assets/Group 3.png";



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