import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import img from '../../assets/images/Car/car.jpg';
import { BsPinMap } from "react-icons/bs";
import { Link } from 'react-router-dom';

function MycarItem({myCar}) {
    console.log(myCar.id)
    return (
        <div className='mycars__item-layout'>
        <div className="item-box">
            <div className="item-left">
                <img src={myCar.image} alt="" />
            </div>
            <div className="item-right">
                <h6>{myCar.name}</h6>
                <p>Giá tự lái: <strong>{myCar.cost}K</strong></p>
                <p><BsPinMap className='icon-map'/>{myCar.locationDto.address}, {myCar.wardDto.name}, {myCar.districtDto.name}</p>

                <div className="button-box">
                    <Link to={`/car-information/${myCar.id}`} state={myCar.id} className="common view-detail">
                        XEM CHI TIẾT
                    </Link>
                    <Link to='/myownCar/infor' className="common manage-car"  state = {myCar.id}>
                        QUẢN LÝ XE
                    </Link>
                </div>
        </div>
            </div>
        </div>
          
          
    );
}

export default MycarItem;