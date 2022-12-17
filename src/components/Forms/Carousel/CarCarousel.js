import React from 'react';
import './styles.scss';
import { Link} from 'react-router-dom';
import { BiMap, BiStar } from 'react-icons/bi';
function CarCarousel({itemCar}) {
    return (
       <div className="carousel__container">
                <div className='car-layout'>
                    <Link to = {`/car-information/${itemCar.id}`} state={itemCar.id}
                        className='CarItem'>
                        <div className="img-price">
                            {itemCar.imageDtos?<img src={itemCar.imageDtos[0].path} alt="" />:''}
                            <div className='price-car'>{itemCar.cost}K</div>
                        </div>
                        <div className="car-infor">
                            <h4>{itemCar.name}</h4>
                            <p className='type'>{itemCar.transmissionDtos.name}</p>
                            <span>{itemCar.numberStar}<BiStar className='rate-star'/></span>
                            <p><BiMap className='map_icon' />{itemCar.locationDto.address}, {itemCar.ward.name}, {itemCar.district.name}</p>
                        </div>
                    </Link>
                </div>
     </div>

//     <div className="carousel__container">
//     <div className='car-layout'>
//         <Link to = '' 
//             className='CarItem'>
//             <div className="img-price">
//                 <img src='' alt="" />
//                 <div className='price-car'>K</div>
//             </div>
//             <div className="car-infor">
//                 <h4></h4>
//                 <p className='type'></p>
//                 <span><BiStar className='rate-star'/></span>
//                 <p><BiMap className='map_icon' /></p>
//             </div>
//         </Link>
//     </div>
// </div>
   )
}

export default CarCarousel;