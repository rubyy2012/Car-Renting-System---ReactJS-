import NavBarOwner from "../components/NavBarOwner/NavBarOwner";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import CarRegister from '../layout/CarRegister/CarRegister';
import { useLocation } from "react-router-dom";

function RegisterCar() {
    return (
        <div>
            <Header/>
            <NavBarOwner/>
            <CarRegister/>
            <Footer/>
        </div>
    );
}

export default RegisterCar;