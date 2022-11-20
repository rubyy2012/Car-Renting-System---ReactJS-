
import CarDetail from "../layout/CarDetail/CarDetail";
import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";
import {useLocation} from 'react-router-dom';

function CarInformation() {
    const location = useLocation()
    const car = location.state?.data;
    return (
        <div>
            <Header/>
            <CarDetail itemCar = {car} />
            <Footer/>
        </div>
    );
}

export default CarInformation;