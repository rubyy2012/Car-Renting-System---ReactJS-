import avatar from '../../assets/images/Header/Avatar.jpg';
import { BiMap } from "react-icons/bi";
import ButtonAccess from '../../components/Forms/ButtonAccess/ButtonAccess';
import CarCarousel from '../../components/Forms/Carousel/CarCarousel';
import 'react-bootstrap';
import './styles.scss';
import Slider from 'react-slick';
import { Link, useLocation } from 'react-router-dom';
import { BiStar } from "react-icons/bi";
import { useEffect, useState } from 'react';
import  request from '../../utils/request';
import  * as requests from '../../utils/request';
import { FaStar } from "react-icons/fa";
import { FcCheckmark } from "react-icons/fc";
function CarDetail() {
    const location = useLocation()
    const id = location.state
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
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

      

    const [car,setCar] = useState()
    const [start, setStart] = useState(1)
    const [listComments,setListComments] = useState([]);
    const [listCars,setListCar] = useState([])
    const [districts, setDistricts] = useState([])
    const [wards,setWards] = useState([])
    const [idDistrict,setIdDistrict] = useState('490')
    const [idWard,setIdWard] = useState('')
    const [street,setStreet] = useState('')
    const [startDate,setStartDate] = useState('')
    const [endDate,setEndDate] = useState('')
    const handleLoadMore = () => 
    {
        setStart(start+1)
    }

    useEffect(()=>{
        //GET LIST CAR
        const getlistCars = async() => 
        {
            try
            {
                const res = await request.get('Car/carsActive')
                setListCar(res.data)
            }
            catch(error)
            {
                console.log('cars:something error',error)
            }
        }
        getlistCars()

        //GET INFOR CAR THEO ID
        const getCar = async () => {
            try 
            {
                console.log()
                const url = `https://rentalcarapi2022.azurewebsites.net/api/Car/${id}`;
                const res = await request.get(url)
                setCar(res.data)
            }
            catch(error)
            {
                console.log("Something error in get Car!")
            }
        }
        getCar()
    },[id])

    useEffect(()=>{
        const getComments = async () => 
        {
            try 
            {
                const res = await request.get(`carreview/${id}/${start}`)
                      const newData = res.data
                      setListComments([...listComments,...newData])
            }
            catch(error)
            {
                console.log('something error in get comments!')
            }
        }
        getComments()
    },[start]);

    const [date,setDate] = useState({
        RentDate:'',
        ReturnDate: ''
    })
    const [dataSend,setDataSend] = useState({
        RentDate: startDate||'',
        ReturnDate: endDate||'',
        Address: street||'',
        WardId: idWard||''
    })
    const handleStartDate = (e) => {
        setStartDate(e.target.value)
        setDate({...date,[e.target.name]:e.target.value})
        setDataSend({...dataSend,[e.target.name]:e.target.value})
        console.log(e.target.value)
    }

    const handleEndDate = (e) => {
        setEndDate(e.target.value)
        setDate({...date,[e.target.name]:e.target.value})
        setDataSend({...dataSend,[e.target.name]:e.target.value})
        console.log(e.target.value)
    }
    const handleChangeStreet = (e) => {
        setStreet(e.target.value)
        setDataSend({...dataSend,[e.target.name]:e.target.value})
        console.log(e.target.value)
    }
    const handleChangeDistrict = (e) => {
        const getIdDistrict = e.target.value
        setIdDistrict(getIdDistrict)
        // setDataSend({...dataSend,[e.target.name]:e.target.value})
        console.log(e.target.value)
    }
    const handleChangeWard = (e) => {
        const getIdWard = e.target.value
        setIdWard(getIdWard)
        setDataSend({...dataSend,[e.target.name]:e.target.value})
        console.log(e.target.value)
    }



    //------------------HANDLE API-------------------------------
     //getAPI location
     useEffect(()=>{
 
        const getDistrict = async () => {
            try {
                const res = await request.get('District')
                setDistricts(res.data)
                setIdDistrict(res.data[0].id)
            }

            catch(error)
            {
                console.log('districts:something error')
            }  
        }
        getDistrict()},[])

       useEffect(()=>{
            const getWards = async() => 
            {
                try
                {
                    const res = await request.get(`District/${idDistrict}`)
                    setWards(res.data)
                }
                catch(error)
                {
                    console.log('wards:something error',error)
                }   
            }
            getWards()     
        },[idDistrict])

     //get total Price

 
        const [prices,setPrices] = useState(0)
        useEffect(()=>{
            const getPrice = async() => 
            {
                try
                {
                    let newObj = {}
                    for(let key in date){
                    console.log(date[key]);
                    if(date[key]!=='')
                        {
                            newObj[key]=date[key]
                        } 
                    }
                    console.log('date',date)
                    const res = await request.get(`Car/${id}/PriceAverage`,{params:date})
                    setPrices(res.data)
                    console.log(res.data)
                }
                catch(error)
                {
                    console.log('get total Price:something error',error)
                }   
            }
            getPrice()     
        },[endDate])


        //Booking xe

        const handleBooking = async (e) => {
            e.preventDefault()
            try
                {
                    console.log('click')
                    // console.log(dataSend)
                    const res = await requests.postWithFormData(`Car/${id}/Booking`,dataSend)
                    console.log(res)
                }
                catch(error)
                {
                    console.log('handle booking:something error',error)
                }   
        }

        const startDefault = new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0];
        const endDefault = new Date(new Date().setDate(new Date().getDate() + 2)).toISOString().split('T')[0];
    if(car && listCars)
    return (
        <div id ='main'>
             <div className=" container wrapper">
                 <div className=" main__wrapper">
                 <div className="car__detail-banner">
                     <div className="car__banner-wrapper">
                      {car.carImageDtos? <img src={car.carImageDtos[0].path} alt="abc" />:''}
                     </div>
                 </div>
                    <div className="infor__car-desc">
                      <div className="content-detail">
                      <div className="car__banner-wrapper">              
                      </div>
                        <div className="infor-car">
                            <h2>{ car.name}</h2>
                                    <p className='ratings'>{car.numberStar} <BiStar className='rating-star'/></p>
                                    <p  className='typeCar'>{car.transmissionDto.name}</p>
                            </div>
                      </div>

                     <div className="side__bar-detail">
                        <div className='rent-box rent-car'id="booking-sidebar">
                        <form action=''>
                            <div className="price">
                                <h3>
                                    {car.cost}K
                                    <span>/ngày</span>
                                </h3>
                            </div>
                            <div className="line-form has-timer">
                                <label htmlFor="">Ngày nhận xe</label>
                                <div className="wrap-input has-dropdown date">
                                    <input 
                                        type="date"
                                        name='RentDate'
                                        onChange={e=>handleStartDate(e)}
                                        value = {startDate||startDefault}
                                        min={new Date().toISOString().split('T')[0]}
                                        />
                                </div>
                            </div>
                            
                            <div className="line-form has-timer">
                                <label htmlFor="">Ngày trả xe</label>
                                <div className="wrap-input has-dropdown date">
                                    <input 
                                        type="date"
                                        name='ReturnDate'
                                        onChange={e=>handleEndDate(e)}
                                        value = {endDate||endDefault}
                                        min={startDate}
                                        />
                                </div>
                            </div>
                            <p className='status-valid'>
                               <FcCheckmark/> {prices.schedule} 
                            </p>
                            <p className='location-transaction'>Địa điểm giao nhận xe</p>
                            <div className="line-form has-timer">
                                <label htmlFor="">Quận</label>
                                <div className="wrap-input has-dropdown date">
                                    <select
                                        className='choose-location-infor'
                                        onChange={e=>handleChangeDistrict(e)} 
                                        value={idDistrict||''}>
                                        {
                                            districts.map((district)=>(
                                                <option value={district.id} 
                                                        key={district.id}>
                                                        {district.name}
                                                </option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>

                            <div className="line-form has-timer">
                                <label htmlFor="">Phường</label>
                                <div className="wrap-input has-dropdown date">
                                    <select
                                        className='choose-location-infor'
                                        name='WardId' 
                                        value = {idWard||''}
                                        onChange={e=>handleChangeWard(e)}>
                                        {wards.map((ward) => (
                                        <option key={ward.id} value={ward.id}>{ward.name}</option>
                                     ))}
                                    </select>
                                </div>
                            </div>

                            <div className="line-form has-timer">
                                <label htmlFor="">Đường</label>
                                <div className="wrap-input has-dropdown date">
                                    <input type="text"
                                           className='choose-location-infor'
                                           name='Address'
                                           value= {street||''}
                                           onChange={e=>handleChangeStreet(e)}
                                    />
                                </div>
                            </div>

                            <div className="car__bill">
                                <h4 className='text'>Chi tiết giá</h4>
                                <div className="bill-wrap">
                                    <div className="group">
                                        <p className=''>Đơn giá thuê</p>
                                        <span>
                                            {prices?<span>{prices.priceAverage} K/ngày</span>:''}
                                        </span>
                                    </div>

                                    <div className="group has-line">
                                        <p className=''>Phí giao nhận xe</p>
                                        <span>
                                            <span>Miễn phí</span>
                                        </span>
                                    </div>

                                    <div className="group has-line">
                                        <p className=''>Tổng phí thuê xe</p>
                                        <span>
                                            <span>{prices.priceAverage}K</span> x <strong>{prices.day} ngày</strong>
                                        </span>
                                    </div>

                                    <div className="group has-line">
                                        <p className=''><strong>Tổng cộng</strong></p>
                                        <span>
                                            <strong><span>{prices.total} K</span></strong>
                                        </span>
                                    </div>
                                    <div className="space-m">

                                    </div>
                                    <ButtonAccess namebtn='ĐẶT XE' onHandleSubmit={e=>handleBooking(e)}/>
                                </div>
                            </div>

                        </form>  
                        </div>
                     </div>

                        <div className="content-detail">
                            <div className="infor__car-desc">
                            <div className="group">
                                <span className="lstitlenew">
                                   ĐẶC ĐIỂM
                                </span>
                                <div className="ctn-desc-new">
                                    <ul className="features">
                                        <li>Số ghế: {car.capacity}</li>
                                        <li>Truyền động: {car.transmissionDto.name}</li>
                                        <li>Nhiên liệu: {car.fuelTypeDto.name}</li>
                                        <li>Mức tiêu thụ nhiên liệu: {car.fuelConsumption} lít/100km</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="group">
                                <span className="lstitlenew">
                                   MÔ TẢ
                                </span>
                                <div className="ctn-desc-new">
                                  <p>  
                                      {/* MÔ TẢ */}
                                     {car.description}
                                  </p>
                                </div>
                            </div>

                            <div className="group">
                                <span className="lstitlenew">
                                   GIẤY TỜ THUÊ XE (BẢN GỐC)
                                </span>
                                <div className="ctn-desc-new">
                                    <ul className="">
                                        <li>CMND và GPLX (đối chiếu)</li>
                                        <li>Passport hoặc Hộ khẩu hoặc KT3 (giữ lại)</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="group">
                                <span className="lstitlenew">
                                   ĐIỀU KHOẢN
                                </span>
                                <div className="ctn-desc-new">
                                   <p>
                                        {car.rule}
                                   </p>
                                </div>
                            </div>

                            <div className="group">
                                <span className="lstitlenew">
                                   CHỦ XE
                                </span>
                                <div className="profile-mini">
                                   <div className="fix-avatar">
                                        <Link to ="/profile-user"  state = {car.account.id}>
                                            <img src={car.profileImage} alt="" />
                                        </Link>
                                   </div>
                                   <div className="desc align-center-desc">
                                        {/* <Link to ="profile-user" state ={car.account.id}> */}
                                        <Link to ="/profile-user" state = {car.account.id}>
                                            <h2>{car.account.fullname}</h2>
                                            <span className='ratings'>{car.numberStar} <BiStar className='rating-star'/></span>
                                        </Link>
                                   </div>
                                </div>
                            </div>
                            </div>
                            <div className="infor__car-desc">
                            <div className="review">
                                <h4 className="title">ĐÁNH GIÁ</h4>
                               {/* LIST COMmENT */}
                               {
                                    listComments.map((item,index)=>(
                                        <div className="list-comments" key={index}>
                                    <div className="left">
                                        <div className="fix-avatar">
                                            <Link to ="/profile-user" state={item.accountDto.id}>
                                            <img src={item.accountDto.profileImage} alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <Link to ="/profile-user" state={item.accountDto.id}>
                                            <h4>{item.accountDto.fullname}</h4>
                                        </Link>
                                        <div className="cmt-box">
                                            <div className="group">
                                                {item.rating} <FaStar className='star'/> 
                                            </div>
                                            <p className="desc">
                                            {item.content}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                    ))
                                }
                                <button className='btn-loadmore' onClick={handleLoadMore}>Load More</button>
                            </div>
                        </div>
                  
                        </div>
                    </div>

                    <div className="car__list">
                        <h4 className='title'>XE LIÊN QUAN</h4>
                        <div id='carousel_car'>
                            <Slider {...settings}>
                            {
                                listCars.map((item,index)=>(
                                    <CarCarousel itemCar={item} key={index}/>
                                ))
                            }
                            </Slider>
                        </div>
                    </div>
                  <div className="space-bt"></div>
              </div>      
                
             </div>
        </div>
    );
}

export default CarDetail;