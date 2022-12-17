import Header from "../Header/Header";
import NavBarOwner from '../../components/NavBarOwner/NavBarOwner'
import Footer from "../Footer/Footer";
import './styles.scss';
import car from '../../assets/images/Car/car.jpg';
import {CiEdit} from  "react-icons/ci";
import { FaCameraRetro } from "react-icons/fa";
import { AiOutlineCalendar, AiOutlineIdcard } from "react-icons/ai";
import { Link, Outlet, useLocation} from "react-router-dom";
import { useState } from "react";
import * as request from "../../utils/request";
import { useEffect } from "react";
function UpdateCarLayout() {

    const location = useLocation()
    const id = location.state
    console.log(id)

    const [dataCar,setDataCar] = useState({
        id:'',
        name:'',
        status:'',
        plate_number:'1',
        location:'1',
        capacity:4,
        transmission:'',
        fuelType:'',
        carImages:[{}],
        districtId:490,
        //variable put method
        wardId:'1',
        address:'',
        fuelConsumption:10,
        description:'',
        cost:'',

    })

    useEffect(()=>{
        const getCar = async () => {
            try 
            {     
                const url = `Car/${id}/CarInfor`
                const res = await request.getWithToken(url)
                setDataCar(res)
            }
            catch(error)
            {
                console.log("error in get carInfor",error)
            }
        }
        getCar()
    },[])
    if(dataCar)
    return (
         <div className="full__wrapper">
             <Header/>
            <NavBarOwner/>
            <div className="car__header-infor">
                <div className="car__infor-wrapper">
                   <img src={dataCar.carImages[0].path} alt="" className="car-img"/>
                    <div className="infor">
                        <p>Dòng xe</p>
                        <h2>{dataCar.name||''}</h2>
                        <p className="second-child">Chưa có chuyến</p>
                        <p>{dataCar.status.name||''}</p>
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
                        <Link to='updateImage' state={id}>
                           <FaCameraRetro className="icon"/>
                            <span>Hình ảnh</span>
                        </Link>
                        <Link to='licenseCavet' state={id} >
                           <AiOutlineIdcard className="icon"/>
                            <span>Cavet</span>
                        </Link>

                        <Link to='licenseRegistry' state={id} >
                           <AiOutlineIdcard className="icon"/>
                            <span>Đăng kiểm</span>
                        </Link>

                        <Link to='licenseAssuarance' state={id} >
                           <AiOutlineIdcard className="icon"/>
                            <span>Bảo hiểm xe</span>
                        </Link>
                        <Link to='' >
                           <AiOutlineCalendar className="icon"/>
                            <span>Lịch xe</span>
                        </Link>
                    </div>
                </div>
                <div className="main__content">
                    <Outlet/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default UpdateCarLayout;