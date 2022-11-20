import './styles.scss';
import React from 'react';
import Slider from 'react-slick';
import FeaturDatas from '../../../middlewares/feature-data';



function SlickSlider() {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='.features__image'>
      <Slider {...settings}>
      {
         FeaturDatas.map((item,index)=>(
            <div className="features__image-item" key={index}> 
             <img src={item.imgLink} alt="error" />
          </div>   
         ))
      }
      </Slider>
    </div>
  );
}

export default SlickSlider;