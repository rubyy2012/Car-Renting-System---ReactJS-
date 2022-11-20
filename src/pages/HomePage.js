import MainScreen from "../layout/MainScreen/MainScreen";
import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";
import { useState } from "react";
import Login from "../components/Forms/Login/Login";
import Register from "../components/Forms/Register/Register";
import travel from '../assets/images/Banner/travel-road.jpg';
import FormSearching from '../components/Searching/FormSearching';
import InstructionData from '../middlewares/instruction-data';
import SlickSlider from '../components/Forms/SlickSlider/SlickSlider';
import Slider from "react-slick";
import CarCarousel from "../components/Forms/Carousel/CarCarousel";
import car from '../assets/images/Banner/news-car.5c3da7c3.png';
import vnexpress from '../assets/images/Banner/vnexpress.svg';
import genk from '../assets/images/Banner/news-genk.897bac56.svg';
import dantri from '../assets/images/Banner/news-dantri.2d5c647f.svg';
import './HomePage';
import Authorization from "../apiServices/Authorization";
import { useEffect } from "react";
import ChangePassword from '../components/Forms/ChangePassword/ChangePassword';





function HomePage() {
    const [openLogin,setopenLogin] = useState(false);
    const [openRegister,setopenRegister] = useState(false);
    const [isChangePassword,setChangePassword] = useState(false);

    function handleChangePwModal() {
        setChangePassword(!isChangePassword);
    }

    const handleLogin = () => {
        setopenLogin(!openLogin);
    }
    const handleRegister = () => {
        setopenRegister(!openRegister);
    }

    return (
        <>
            <div className="full_wrap">
            <Header openLogin = {handleLogin} openRegister = {handleRegister} openChangePw={handleChangePwModal}/>
            <MainScreen/>
            <Footer/>
            </div>

            <>
              {openLogin? <Login btnClose={handleLogin}/>:''}
              {openRegister? <Register btnClose={handleRegister}/>:''}
              {isChangePassword? <ChangePassword btnClose={handleChangePwModal}/>:''}
            </>
        </>
    );
}

export default HomePage;