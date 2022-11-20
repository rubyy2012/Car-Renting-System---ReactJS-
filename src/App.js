
import { Outlet, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CarDetail from './layout/CarDetail/CarDetail';
import CarInformation from './pages/CarInformation';
import CarOwnerHome from './pages/CarOwnerHome';
import CarRegister from './layout/CarRegister/CarRegister';
import AddressForm from './components/Forms/AddressForm/AddressForm';
import ChangePassword from './components/Forms/ChangePassword/ChangePassword';
import CarCarousel from './components/Forms/Carousel/CarCarousel';
import Header from './layout/Header/Header';
import NotFound from './pages/NotFound';
import ProfileLayout from './layout/ProfileLayout/ProfileLayout';
import Profile from './pages/Profile';
import Footer from './layout/Footer/Footer';
import EditPhoneNumber from './components/Forms/EditPhoneNumber/EditPhoneNumber';
import ModalLayout from './components/Modal/ModalLayout';
import FormGPLX from './components/GPLX/FormGPLX';
import EditEmail from './components/Forms/EditEmail/EditEmail';
import EditInforUser from './components/Forms/EditInforUser/EditInforUser'
import RegisterCar from './pages/RegisterCar';
import MyCars from './pages/MyCars';
import UpdateCarLayout from './layout/UpdateCarLayout/UpdateCarLayout';
import BasicInfor from './components/BasicInforRegistedCar/BasicInfor';
import UpdateImageCar from './components/UpdateImageCar/UpdateImageCar';
import UpdateLicense from './components/UpdateLicense/UpdateLicense';
import MyTrips from './pages/MyTrips';
import FindCarLayout from './layout/FindCarLayout/FindCarLayout';
function App() {
  return (
    <div className="App">
     <Routes> 
            <Route path="/" element={<HomePage />}/>
              <Route path="car-information/:id" element={<CarInformation/>}/>
              <Route path="owner-home" element={<CarOwnerHome />}/>
              <Route path='profile' element={<Profile/>}/>
              <Route path='*' element = {<NotFound/>}/>
              <Route path='/registerCar' element = {<RegisterCar/>}/>
              <Route path='/myCars' element = {<MyCars/>}/>
              <Route path='/myTrips' element = {<MyTrips/>}/>
              <Route path='/change-password' element = {<ChangePassword/>}/>
              <Route path='/find-cars' element = {<FindCarLayout/>}/>
              <Route path='myownCar' element = {<UpdateCarLayout/>}>
                   <Route path='infor' element = {<BasicInfor/>}/> 
                   <Route path='updateImage' element= {<UpdateImageCar/>}/>
                   <Route path='license' element= {<UpdateLicense/>}/>
              </Route>
             
      </Routes>
    </div>
  );
}

export default App;
