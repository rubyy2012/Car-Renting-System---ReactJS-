import Header from "../Header/Header";
import NavBarOwner from '../../components/NavBarOwner/NavBarOwner'
import Footer from "../Footer/Footer";
import './styles.scss';
import car from '../../assets/images/Car/car.jpg';
import {CiEdit} from  "react-icons/ci";
import { FaCameraRetro } from "react-icons/fa";
import { AiOutlineCalendar, AiOutlineIdcard } from "react-icons/ai";
import { Link, Outlet} from "react-router-dom";
import BasicInfor from "../../components/BasicInforRegistedCar/BasicInfor";
function UpdateCarLayout() {
    return (
         <div className="full__wrapper">
             <Header/>
            <NavBarOwner/>
            <div className="car__header-infor">
                <div className="car__infor-wrapper">
                    <img className="car-img" src={car} alt='error'/>
                    <div className="infor">
                        <p>Dòng xe</p>
                        <h2>BAIC BEIJING U5 PLUS DELUXE 2017</h2>
                        <p className="second-child">Chưa có chuyến</p>
                        <p>Đã bị từ chối</p>
                    </div>
                </div>
            </div>
            <div className="main__container">
                <div className="sidebar__layout">
                    <h3>THÔNG TIN CHUNG</h3>
                    <div className="group-title-bar">
                        <Link to='infor'>
                           <CiEdit className="icon"/>
                            <span>Thông tin</span>
                        </Link>
                        <Link to='updateImage' >
                           <FaCameraRetro className="icon"/>
                            <span>Hình ảnh</span>
                        </Link>
                        <Link to='license' >
                           <AiOutlineIdcard className="icon"/>
                            <span>Giấy tờ xe</span>
                        </Link>
                        <Link to='' >
                           <AiOutlineCalendar className="icon"/>
                            <span>Lịch xe</span>
                        </Link>
                    </div>
                </div>
                <div className="main__content">
                    {/* <BasicInfor/> */}
                    <Outlet/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default UpdateCarLayout;