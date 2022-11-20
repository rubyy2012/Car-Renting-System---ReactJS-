import { useState } from 'react';
import Login from '../components/Forms/Login/Login';
import Register from '../components/Forms/Register/Register';
import Header from '../layout/Header/Header';
import OwnerHome from '../layout/OwnerHome/OwnerHome';
function CarOwnerHome() {
  const [openLogin,setopenLogin] = useState(false);
  const [openRegister,setopenRegister] = useState(false);

  const handleLogin = () => {
      setopenLogin(!openLogin);
  }
  const handleRegister = () => {
      setopenRegister(!openRegister);
  }
    return (
      <>
         <div className='home__owner-wrapper'>
            <Header openLogin = {handleLogin} openRegister = {handleRegister}/>
            <OwnerHome/>
        </div>
        <>
          {openLogin? <Login btnClose={handleLogin}/>:''}
          {openRegister? <Register btnClose={handleRegister}/>:''}
        </>
      </>
       
        
    );
}

export default CarOwnerHome;