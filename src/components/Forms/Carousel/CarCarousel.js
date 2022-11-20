import React from 'react';
import img from '../../../assets/images/Car/car.jpg';
import { BiMap } from "react-icons/bi";
import { BiStar } from "react-icons/bi";
import './styles.scss';
import { Link} from 'react-router-dom';

function CarCarousel({itemCar}) {
    return (
      <div className="carousel__container">
                <div className='car-layout'>
                    <Link to = {`/car-information/${itemCar.Id}`} state ={{data:itemCar}}className='CarItem' href="#">
                    <div className="img-price">
                        <img src={img} alt="" />
                        <div className='price-car'>{itemCar.Cost}K</div>
                    </div>
                        <div className="car-infor">
                            <h4>{itemCar.Name}</h4>
                            <p className='type'>{itemCar.type}</p>
                            <span>{itemCar.numberStar}<BiStar className='rate-star'/></span>
                            <p><BiMap className='map_icon' />{itemCar.address}</p>
                        </div>
                    </Link>
                </div>
     </div>
   )
}

export default CarCarousel;