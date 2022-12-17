
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CarInformation from './pages/CarInformation';
import CarOwnerHome from './pages/CarOwnerHome';
import ChangePassword from './components/Forms/ChangePassword/ChangePassword';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import RegisterCar from './pages/RegisterCar';
import MyCars from './pages/MyCars';
import MyTrips from './pages/MyTrips';
import UpdateCarLayout from './layout/UpdateCarLayout/UpdateCarLayout';
import BasicInfor from './components/BasicInforRegistedCar/BasicInfor';
import UpdateImageCar from './components/UpdateImageCar/UpdateImageCar';
import UpdateCavet from './components/UpdateLicense/UpdateCavet';
import UpdateRegistry from './components/UpdateLicense/UpdateRegistry';
import UpdateAssuarrance from './components/UpdateLicense/UpdateAssuarrance';
import FindCar from './pages/FindCar';
// import ProfileUser from './layout/ProfileUserLayout/ProfileUser'
import ProfileUser from './pages/ProfileUser';
function App() {
  return (
    <div className="App">
     <Routes> 
            <Route path="/" element={<HomePage />}/>
              <Route path='profile-user' element={<ProfileUser/>}/>
              <Route path="car-information/:id" element={<CarInformation/>}/>
              <Route path="owner-home" element={<CarOwnerHome />}/>
              <Route path='profile' element={<Profile/>}/>
              <Route path='*' element = {<NotFound/>}/>
              <Route path='/registerCar' element = {<RegisterCar/>}/>
              <Route path='/myCars' element = {<MyCars/>}/>
              <Route path='/myTrips' element = {<MyTrips/>}/>
              <Route path='/change-password' element = {<ChangePassword/>}/>
              <Route path='/find-cars' element = {<FindCar/>}/>
              <Route path='myownCar' element = {<UpdateCarLayout/>}>
                   <Route path='infor' element = {<BasicInfor/>}/> 
                   <Route path='updateImage' element= {<UpdateImageCar/>}/>
                   <Route path='licenseCavet' element= {<UpdateCavet/>}/>
                   <Route path='licenseRegistry' element= {<UpdateRegistry/>}/>
                   <Route path='licenseAssuarance' element= {<UpdateAssuarrance/>}/>
              </Route>
      </Routes>
    </div>
  );
}

export default App;
