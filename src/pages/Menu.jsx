
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import MenuCard from "../components/MenuCard";
import Favoritos from "../assets/Favoritos.png";
import Promociones from "../assets/Promociones.png";
import Especiales from "../assets/Especiales.png";


const Index = () => {

    return (
        <>
            <Navbar />
            <img src={Favoritos} alt="" style={{ width: '100%', height: 'auto' }} />
            <MenuCard />
            <img src={Promociones} alt="" style={{ width: '100%', height: 'auto' }} />
            <MenuCard />
            <img src={Especiales} alt="" style={{ width: '100%', height: 'auto' }} />
            <MenuCard />
            <Footer />

        </>
    )
}

export default Index