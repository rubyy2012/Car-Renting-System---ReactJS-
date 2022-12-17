import MainScreen from "../layout/MainScreen/MainScreen";
import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";
import { useState } from "react";
import Login from "../components/Forms/Login/Login";
import Register from "../components/Forms/Register/Register";
import './HomePage';
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