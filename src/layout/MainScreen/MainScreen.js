import './styles.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect } from 'react';
import travel from '../../assets/images/Banner/travel-road.jpg';
import SlickSlider from '../../components/Forms/SlickSlider/SlickSlider';
import dantri from '../../assets/images/Banner/news-dantri.2d5c647f.svg';
import vnexpress from '../../assets/images/Banner/vnexpress.svg';
import genk from '../../assets/images/Banner/news-genk.897bac56.svg';
import car from '../../assets/images/Banner/news-car.5c3da7c3.png';
import CarCarousel from '../../components/Forms/Carousel/CarCarousel';
import FormSearching from '../../components/Searching/FormSearching';
import InstructionData from '../../middlewares/instruction-data';
import Slider from 'react-slick';
import axios from 'axios';

function MainScreen() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
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
              infinite: true,
              dots: true
            }
          }
        ]
      };

      const ListCar = [
        {
            Id:1,
            Name: 'HYUNDAI GRAND I10 SEDAN 2018',
            type:'Số sàn',
            Cost: 800,
            address: 'P.Tân Chính, Q.Thanh Khê',
            numberStar:4.9
        },
        {
            Id:2,
            Name: ' TOYOTA COROLLA CROSS G 2020',
            type:'Số tự động',
            Cost: 790,
            address: 'P.Thạc Gián, Q.Thanh Khê',
            numberStar:4.7
        },
        {
            Id:3,
            Name: ' CHEVROLET SPARK 2018',
            type:'Số tự động',
            Cost: 1120,
            address: 'P.Hòa Khánh Bắc, Q.Liên Chiểu',
            numberStar:4.8
        },
        {
            Id:4,
            Name: ' SUZUKI ERTIGA 2016',
            type:'Số sàn',
            Cost: 950,
            address: 'P.Hòa Cường Bắc, Q.Hải Châu',
            numberStar:4.9
        },
        {
            Id:5,
            Name: 'TOYOTA WIGO 2019',
            type:'Số sàn',
            Cost: 1000,
            address: 'P.Hòa An, Q.Cẩm Lệ',
            numberStar:4.5
        },
        {
            Id:6,
            Name: 'SUZUKI XL7 2020',
            type:'Số tự động',
            Cost: 780,
            address: 'P.An Hải Bắc, Q.Sơn Trà',
            numberStar:4.8
        },
        {
            Id:7,
            Name: 'HONDA BRIO RS 2021',
            type:'Số sàn',
            Cost: 840,
            address: 'P.Bắc Mỹ An, Q.Ngũ Hành Sơn',
            numberStar:4.9
        },
        {
            Id:8,
            Name: 'KIA SOLUTO 2019',
            type:'Số tự động',
            Cost: 900,
            address: 'P.Thọ Quang, Q.Sơn Trà',
            numberStar:4.8
        },
    ]

    useEffect(()=>{
        axios.get('https://rentalcarpbl6api.azurewebsites.net/api/Car/View/WardDistrict')
            .then(res=>{
                console.log(res.data);
            })
    },[])
    return (
       <div id='main' className=''>
       <div className="wrapper">
        <div className=" main__wrapper">
            <div className="wrapper__banner"  style={{background: `url(${travel})`,backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
                <div className="wrapper__title">
                    <h1>MIOTO - CÙNG BẠN TRÊN MỌI HÀNH TRÌNH</h1>
                </div>
                <FormSearching/>
             </div>

             <div className="container wrapper__features">
                <div className="features__container">
                    <h3>TÍNH NĂNG NỔI BẬT</h3>
                    <SlickSlider/>
                </div>
                <div className="rent__instruction">
                    <h3>Hướng dẫn thuê xe</h3>
                        <div className="rent__struction-layout">
                       {
                        InstructionData.map((item,index)=>(
                         <div className="rent__struction-item" key={index} >
                            <img src={item.imgLink} alt="error" />
                            <div className='construction-text'>
                            <h4>{item.title}</h4>
                            </div>  
                        </div>
                        ))}
                    </div>
                </div>

                <div id='carousel_car'>
                    <Slider {...settings}>
                    {ListCar.map((item,index) =>(
                         <CarCarousel key={index} itemCar={item} listCar={ListCar}/>
                         ))}
                    </Slider>
                </div>

                <div className=" banner__news">
                    <div className="container banner__new-container">
                        <div className="banner__bg-news">
                        <img src={car} alt="" />
                        </div>
                        <div className="banner__news-wrapper">
                            <h3>BÁO CHÍ NÓI VỀ CHÚNG TÔI</h3>
                            <div className="banner__image-news">
                                <div className="img__news-item">
                                    <img src={dantri} alt="error" />
                                </div>
                                <div className="img__news-item">
                                    <img src={vnexpress} alt="error" />       
                                </div>
                                <div className="img__news-item">
                                <img src={genk} alt="error" />       
                                </div>
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

export default MainScreen;