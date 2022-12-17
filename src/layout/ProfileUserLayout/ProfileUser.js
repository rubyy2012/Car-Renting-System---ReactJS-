import React from 'react';
import './styles.scss'
import img from '../../assets/images/Header/Avatar.jpg'
import { FcOk } from "react-icons/fc";
import { BsFillStarFill } from "react-icons/bs";
import CarCarousel from '../../components/Forms/Carousel/CarCarousel';
import Slider from 'react-slick';

import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import * as request from '../../utils/request';
import { useState } from 'react';
function ProfileUser(props) {
    const location = useLocation()
    const idLease = location.state
    console.log(idLease)
    
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

      const [startRenter, setStartRenter] = useState(1)
      const [startLease, setStartLease] = useState(1)
    const [listLeaseComments,setListLeaseComments] = useState()
    const [listRentersComments,setListRentersComments] = useState()
    const [inforUser,setInforUser] = useState({})
    const [listCarApi, setListCarApi] = useState([])
     useEffect(()=>{
        const getApiInforUser = async ()=>{
            try 
            {
                const res = await request.get(`Users/profile/107`)
                // const res = await request.get(`Users/profile/${idLease}`)
                console.log(res)
                setInforUser(res)
            }
            catch(error)
            {
                console.log("Error in get lease comments",error)
            }
        }
        getApiInforUser()
        const  getLeasesComments = async () => 
        {
            try 
            {
                const res = await request.get(`leaseComments/107/${startLease}`)
                // const res = await request.get(`leaseComments/${idLease}/${start}`)
                // console.log(res)
                setListLeaseComments(res)
            }
            catch(error)
            {
                console.log("Error in get lease comments",error)
            }
        }
        getLeasesComments()

        const getRentersComments = async () => 
        {
            try 
            {
                // const res = await request.get(`renterComments/${idLease}/${start}`)
                const res = await request.get(`renterComments/107/${startRenter}`)
                // console.log(res)
                setListRentersComments(res)
            }
            catch(error)
            {
                console.log("Error in get renter comments",error)
            }
        }
        getRentersComments()

        const getCarApi = async () => {
            try 
            {
                // const res = await request.get(`Car/user/${idLease}`)
                const res = await request.get(`Car/user/107`)
                console.log(res)
                setListCarApi(res)
            }
            catch(error)
            {
                console.log("Error in get renter comments",error)
            }
        }
        getCarApi()
     },[startRenter,startLease,idLease])

     const handleLoadMoreRenter = () => 
    {
        setStartRenter(startRenter+1)
    }
    const handleLoadMoreLease = () => {
        setStartLease(startLease+1)
    }

// if(listLeaseComments&&listRentersComments)
    return (
        <div className='profile_user'>
          <div className="body__profile">
            <div className="background-profile" style={{ backgroundImage: `url("https://as2.ftcdn.net/v2/jpg/02/82/00/75/1000_F_282007508_wdCUP7hUMNK1Cuzj7XmOcFmzyzJ0Nnp9.jpg")`,
                                                         backgroundSize:'cover',
                                                         backgroundRepeat:'no-repeat'                                                  
                                                      }}>

            </div>
            <div className="profile__main">
                <div className="title__user">
                    <div className="user__avatar-wrapper">
                        <div className="user-avatar-box">
                            <img className='img_avt' src={img} alt='error'/> 
                        </div>
                    </div>
                    <div className="user__snippet">
                        <h1>{inforUser?inforUser.fullname:''}</h1>
                        <p>Tham gia: {inforUser?inforUser.createdAt:''}</p>
                    </div>
                </div>
                <div className="content__user">
                    <div className="content__user-wrapper">
                        <div className="infor-item phone-box">
                            <h6 className='text-label'>Điện thoại</h6>
                            <p className='status'>{
                                inforUser.contact?
                                    <>
                                        <FcOk className='status-ok'/>
                                        <span>Đã xác thực</span>
                                    </>
                                :<span>Chưa xác thực</span>}
                            </p>
                        </div>
                        <div className="infor-item gplx-box">
                            <h6 className='text-label'>GPLX</h6>
                            <p className='status'>{
                                inforUser.number?
                                    <>
                                        <FcOk className='status-ok'/>
                                        <span>Đã xác thực</span>
                                    </>
                                :<span>Chưa xác thực</span>}
                            </p>
                        </div>
                        <div className="infor-item phone-box">
                            <h6 className='text-label'>Email</h6>
                            <p className='status'>{
                                inforUser.email?
                                    <>
                                        <FcOk className='status-ok'/>
                                        <span>Đã xác thực</span>
                                    </>
                                :<span>Chưa xác thực</span>}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="body__wrapper">
                    {/* NHẬN XÉT TỪ CHỦ XE */}
                    <div className="comments__container">
                        <div className="comments-layout">
                            <h3 className='role-comment'>Nhận xét từ chủ xe</h3>
                            <p className='review-box'>
                                <span className='star-box'>{listLeaseComments?listLeaseComments.rating:''}<BsFillStarFill className='star'/> </span>
                                <span className='line'> </span>
                                <span className='number-trips'> {listLeaseComments?listLeaseComments.numberReview:''} bình luận</span>
                            </p>
                            {
                                listLeaseComments?listLeaseComments.reviewViews.map(lease=>(
                                <div key = {lease.id} className="comment-layout">
                                    <div className="comment__wrapper">
                                        <div className="img-box">
                                            <img src={lease.account.profileImage} alt="" />
                                        </div>

                                        <div className="comment-box">
                                            <h6 className='name-person'>{lease.account.fullname}</h6>
                                            <p className='star-box'>{lease.rating}<BsFillStarFill className='star'/></p>
                                            <p className="comment-content">
                                                {lease.content}
                                            </p>
                                        </div>
                                        
                                    </div>
                                </div>
                                )):''
                            }
                            <button className='btn-loadmore' onClick={handleLoadMoreLease}>Load More</button>
                        </div>
                    </div>
                    
                    {/* NHẬN XÉT TỪ NGƯỜI THUÊ XE */}
                    <div className="comments__container">
                        <div className="comments-layout">
                            <h3 className='role-comment'>Nhận xét từ khách thuê</h3>
                            <p className='review-box'>
                                <span className='star-box'>{listRentersComments?listRentersComments.rating:''} <BsFillStarFill className='star'/> </span>
                                <span className='line'></span>
                                <span className='number-trips'>{listRentersComments?listRentersComments.numberReview:''}</span>
                            </p>

                            {
                                listRentersComments?listRentersComments.reviewViews.map(lease=>(
                                <div key = {lease.id} className="comment-layout">
                                    <div className="comment__wrapper">
                                        <div className="img-box">
                                            <img src={lease.account.profileImage} alt="" />
                                        </div>

                                        <div className="comment-box">
                                            <h6 className='name-person'>{lease.account.fullname}</h6>
                                            <p className='star-box'>{lease.rating}<BsFillStarFill className='star'/></p>
                                            <p className="comment-content">
                                                {lease.content}
                                            </p>
                                        </div>
                                        
                                    </div>
                                </div>
                                )):''
                            }
                            <button className='btn-loadmore' onClick={handleLoadMoreRenter}>Load More</button>   
                        </div>
                    </div>
                </div>
                <div className="car__wrapper">
                    <h4>XE TỰ LÁI CỦA:  NGUYỄN BẢO LÂM (1 XE)</h4>
                    <div id="carousel_car">
                    <Slider {...settings}>
                    {listCarApi?listCarApi.map(item=>(
                        <CarCarousel key={item.id} itemCar={item}/> 
                    )):''}
                    </Slider>
                    </div>
                </div>
            </div>
           
        </div>
        </div>
    );
}

export default ProfileUser;