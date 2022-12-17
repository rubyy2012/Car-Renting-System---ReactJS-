
import HomePage from '../pages/HomePage'
import FindCar from '../pages/FindCar';
import CarOwnerHome from '../pages/CarOwnerHome';
import Profile from '../pages/Profile';
import RegisterCar from '../pages/RegisterCar';
import MyCars from '../pages/MyCars';
import MyTrips from '../pages/MyTrips';
import NotFound from './pages/NotFound';
const publicRoutes = [
 {
    path:'/',
    component: HomePage
 },
 {
    path:'/search-cars',
    component: FindCar
 },
 {
    path:'/home-owner',
    component: CarOwnerHome
 },
 {
    path:'/profile',
    component: Profile
 },
 {
    path:'/register-car',
    component: RegisterCar
 },
 {
    path:'/myCars',
    component: MyCars
 },
 {
    path:'/myTrips',
    component: MyTrips
 }
]

const privateRoutes = [

]


export { publicRoutes,privateRoutes}