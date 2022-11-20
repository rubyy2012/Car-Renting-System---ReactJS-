import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import img from '../../assets/images/Car/car.jpg';
import { BsPinMap } from "react-icons/bs";
import { Link } from 'react-router-dom';

function MycarItem(props) {
    return (
        <div className='mycars__item-layout'>
        <div className="item-box">
            <div className="item-left">
                <img src={img} alt="" />
            </div>
            <div className="item-right">
                <h6>BAIC BEIJING U5 PLUS DELUXE 2017</h6>
                <p>Giá tự lái: <strong>550K</strong></p>
                <p><BsPinMap className='icon-map'/> Quận Liên Chiểu, Đà Nẵng</p>

                <div className="button-box">
                    <Link to='' className="common view-detail">
                        XEM CHI TIẾT
                    </Link>
                    <Link to='/myownCar/infor' className="common manage-car">
                        QUẢN LÝ XE
                    </Link>
                </div>
        </div>
            </div>
        </div>
          
          
    );
}

export default MycarItem;