import { Link } from 'react-router-dom';
import './styles.scss';
import img from '../../assets/images/Banner/register-car.877c9255.png';
import NavBarOwner from '../../components/NavBarOwner/NavBarOwner';
function OwnerHome() {
    return (
        <div id='car__owner'>
        <div className=" car__owner-container">
            <div className="car__owner-layout">
                <div className="sidebar-control z-2">
                    <NavBarOwner/>
                    <div className="module-settings min-height-register module-trips">
                        <div className="trip-container">
                            <div className="register-mode">
                                <img className='img-fluid'src={img} alt="" />
                                
                                <div className="wrap-2-btn">
                                <Link to="/registerCar" className="btn btn--m btn-register-car">Đăng ký xe tự lái</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default OwnerHome;