import avatar from '../../assets/images/Header/Avatar.jpg';
import { BiMap } from "react-icons/bi";
import ButtonAccess from '../../components/Forms/ButtonAccess/ButtonAccess';
import CarCarousel from '../../components/Forms/Carousel/CarCarousel';
import 'react-bootstrap';
import './styles.scss';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { BiStar } from "react-icons/bi";
import Avatar from '../../components/Avatar/Avatar';
import { useEffect, useState } from 'react';
import axios from 'axios';
function CarDetail({itemCar}) {
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
            numberStar:4.7,
            linkImg:'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/kia_seltos_premium_2020/p/g/2021/07/13/14/QAt5XvEz-9-DowktC7e5sw.jpg'
        },
        {
            Id:3,
            Name: ' CHEVROLET SPARK 2018',
            type:'Số tự động',
            Cost: 1120,
            address: 'P.Hòa Khánh Bắc, Q.Liên Chiểu',
            numberStar:4.8,
            linkImg:'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/kia_seltos_premium_2020/p/g/2021/07/13/14/QAt5XvEz-9-DowktC7e5sw.jpg'

        },
        {
            Id:4,
            Name: ' SUZUKI ERTIGA 2016',
            type:'Số sàn',
            Cost: 950,
            address: 'P.Hòa Cường Bắc, Q.Hải Châu',
            numberStar:4.9,
            linkImg:'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/kia_seltos_premium_2020/p/g/2021/07/13/14/QAt5XvEz-9-DowktC7e5sw.jpg'

        },
        {
            Id:5,
            Name: 'TOYOTA WIGO 2019',
            type:'Số sàn',
            Cost: 1000,
            address: 'P.Hòa An, Q.Cẩm Lệ',
            numberStar:4.5,
            linkImg:'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/kia_seltos_premium_2020/p/g/2021/07/13/14/QAt5XvEz-9-DowktC7e5sw.jpg'

        },
        {
            Id:6,
            Name: 'SUZUKI XL7 2020',
            type:'Số tự động',
            Cost: 780,
            address: 'P.An Hải Bắc, Q.Sơn Trà',
            numberStar:4.8,
            linkImg:'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/kia_seltos_premium_2020/p/g/2021/07/13/14/QAt5XvEz-9-DowktC7e5sw.jpg'

        },
        {
            Id:7,
            Name: 'HONDA BRIO RS 2021',
            type:'Số sàn',
            Cost: 840,
            address: 'P.Bắc Mỹ An, Q.Ngũ Hành Sơn',
            numberStar:4.9,
            linkImg:'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/kia_seltos_premium_2020/p/g/2021/07/13/14/QAt5XvEz-9-DowktC7e5sw.jpg'

        },
        {
            Id:8,
            Name: 'KIA SOLUTO 2019',
            type:'Số tự động',
            Cost: 900,
            address: 'P.Thọ Quang, Q.Sơn Trà',
            numberStar:4.8,
            linkImg:'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/kia_seltos_premium_2020/p/g/2021/07/13/14/QAt5XvEz-9-DowktC7e5sw.jpg'

        },
    ]


    //handle Load more Comment
    const [limit, setLimit] = useState(4)
    const [listComments,setListComments] = useState([]);
    useEffect(()=>{
        const url = 'https://6370fed40399d1995d888ffe.mockapi.io/api/Auth/comments?page=1&limit=' + limit;
           axios.get(url)
            .then((res)=>{
                if(res.status === 200)
                {
                    setListComments([...res.data]);
                    console.log(...listComments);
                }
                else {
                    console.log('something error');
                }              
            })
    },[limit]);
    const handleLoadMore = () => 
    {
       setLimit(limit+4)
    }

    return (
        <div id ='main'>
             <div className=" container wrapper">
                 <div className=" main__wrapper">
                 <div className="car__detail-banner">
                     <div className="car__banner-wrapper">
                        <img src={avatar} alt="abc" />
                     </div>
                 </div>
                    <div className="infor__car-desc">

                      <div className="content-detail">
                      <div className="car__banner-wrapper">              
                      </div>
                        <div className="infor-car">
                            {/* <h2>MITSUBISHI ATTRAGE 2020</h2> */}
                            <h2>{itemCar.Name}</h2>
                                    <p className='ratings'>{itemCar.numberStar} <BiStar className='rating-star'/></p>
                                    <p  className='typeCar'>{itemCar.type}</p>
                            </div>
                      </div>

                     <div className="side__bar-detail">
                        <div className='rent-box rent-car'id="booking-sidebar">
                        <form action=''>
                            <div className="price">
                                <h3>
                                    {itemCar.Cost}K
                                    <span>/ngày</span>
                                </h3>
                            </div>
                            <div className="line-form has-timer">
                                <label htmlFor="">Ngày nhận xe</label>
                                <div className="wrap-input has-dropdown date">
                                    <input type="date"/>
                                </div>
                                <div className="wrap-input has-dropdown time wrap-select">
                                    <select name="" id="">
                                        <option value="">00:00</option>
                                        <option value="">00:30</option>
                                        <option value="">01:00</option>
                                        <option value="">01:30</option>
                                        <option value="">02:00</option>
                                        <option value="">02:30</option>
                                        <option value="">03:00</option>
                                        <option value="">03:30</option>
                                        <option value="">04:00</option>
                                        <option value="">04:30</option>
                                        <option value="">05:00</option>
                                        <option value="">05:30</option>
                                        <option value="">06:00</option>
                                        <option value="">06:30</option>
                                        <option value="">07:00</option>
                                        <option value="">07:30</option>
                                        <option value="">08:00</option>
                                        <option value="">08:30</option>
                                        <option value="">09:00</option>
                                        <option value="">09:30</option>
                                        <option value="">10:00</option>
                                        <option value="">10:30</option>
                                        <option value="">11:00</option>
                                        <option value="">11:30</option>
                                        <option value="">12:00</option>
                                        <option value="">12:30</option>
                                        <option value="">13:00</option>
                                        <option value="">13:30</option>
                                        <option value="">14:00</option>
                                        <option value="">14:30</option>                               
                                        <option value="">15:00</option>
                                        <option value="">15:30</option>
                                        <option value="">16:00</option>
                                        <option value="">16:30</option>
                                        <option value="">17:00</option>
                                        <option value="">17:30</option>
                                        <option value="">18:00</option>
                                        <option value="">18:30</option>
                                        <option value="">19:00</option>
                                        <option value="">19:30</option>
                                        <option value="">20:00</option>
                                        <option value="">20:30</option>
                                        <option value="">21:00</option>
                                        <option value="">21:30</option>
                                        <option value="">22:00</option>
                                        <option value="">22:30</option>
                                        <option value="">23:00</option>
                                        <option value="">23:30</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="line-form has-timer">
                                <label htmlFor="">Ngày trả xe</label>
                                <div className="wrap-input has-dropdown date">
                                    <input type="date"/>
                                </div>
                                <div className="wrap-input has-dropdown time wrap-select">
                                    <select name="" id="">
                                        <option value="">00:00</option>
                                        <option value="">00:30</option>
                                        <option value="">01:00</option>
                                        <option value="">01:30</option>
                                        <option value="">02:00</option>
                                        <option value="">02:30</option>
                                        <option value="">03:00</option>
                                        <option value="">03:30</option>
                                        <option value="">04:00</option>
                                        <option value="">04:30</option>
                                        <option value="">05:00</option>
                                        <option value="">05:30</option>
                                        <option value="">06:00</option>
                                        <option value="">06:30</option>
                                        <option value="">07:00</option>
                                        <option value="">07:30</option>
                                        <option value="">08:00</option>
                                        <option value="">08:30</option>
                                        <option value="">09:00</option>
                                        <option value="">09:30</option>
                                        <option value="">10:00</option>
                                        <option value="">10:30</option>
                                        <option value="">11:00</option>
                                        <option value="">11:30</option>
                                        <option value="">12:00</option>
                                        <option value="">12:30</option>
                                        <option value="">13:00</option>
                                        <option value="">13:30</option>
                                        <option value="">14:00</option>
                                        <option value="">14:30</option>                               
                                        <option value="">15:00</option>
                                        <option value="">15:30</option>
                                        <option value="">16:00</option>
                                        <option value="">16:30</option>
                                        <option value="">17:00</option>
                                        <option value="">17:30</option>
                                        <option value="">18:00</option>
                                        <option value="">18:30</option>
                                        <option value="">19:00</option>
                                        <option value="">19:30</option>
                                        <option value="">20:00</option>
                                        <option value="">20:30</option>
                                        <option value="">21:00</option>
                                        <option value="">21:30</option>
                                        <option value="">22:00</option>
                                        <option value="">22:30</option>
                                        <option value="">23:00</option>
                                        <option value="">23:30</option>
                                    </select>
                                </div>
                            </div>
                            
                            <span className='select-timer-error'>Xe bận trong khoảng thời gian trên. Vui lòng đặt xe khác hoặc thay đổi lịch trình thích hợp.</span>
                            {/* <div className='line-form local'>
                                <label htmlFor="">Địa điểm giao nhận xe</label>
                                <div className='pick__up-car'>
                                    <div className='pick-up'>
                                        <BiMap className='map__icon'/>
                                        <input type="text" />
                                    </div>
                                </div>
                            </div> */}

                            <div className='line-form local'>
                                <label htmlFor="">Phụ phí</label>
                                <div className='box-extra-fee'>
                                    <div className='over-time'>
                                        <span>Quá giờ</span>
                                    </div>
                                    <p className='note-fee'>Phí: 90 000đ/giờ. Quá 5 giờ tính bằng giá thuê 1 ngày</p>
                                </div>

                                <div className='box-extra-fee'>
                                    <div className='over-time'>
                                        <span>Vệ sinh xe</span>
                                    </div>
                                    <p className='note-fee'>Phí: 100 000đ (nếu trả xe nhiều vết bẩn, bùn cát, sình lầy.... cần phải vệ sinh lại trước khi giao cho khách sau)</p>
                                </div>

                                <div className='box-extra-fee'>
                                    <div className='over-time'>
                                        <span>Khử mùi xe</span>
                                    </div>
                                    <p className='note-fee'>Phí: 400 000đ (nếu hút thuốc lá trong xe, chở sầu riêng, hải sản nặng mùi .... cần phải đi khử mùi trước khi giao cho khách sau)</p>
                                </div>
                            </div>

                            <div className="car__bill">
                                <h4 className='text'>Chi tiết giá</h4>
                                <div className="bill-wrap">
                                    <div className="group">
                                        <p className=''>Đơn giá thuê</p>
                                        <span>
                                            <span>1 200 000/ngày</span>
                                        </span>
                                    </div>

                                    <div className="group">
                                        <p className=''>Phí dịch vụ</p>
                                        <span>
                                            <span>102 000/ngày</span>
                                        </span>
                                    </div>

                                    <div className="group">
                                        <p className=''>Phí bảo hiểm</p>
                                        <span>
                                            <span>102 000/ngày</span>
                                        </span>
                                    </div>

                                    <div className="group has-line">
                                        <p className=''>Tổng phí thuê xe</p>
                                        <span>
                                            <span>1 404 000</span> x <strong>1 ngày</strong>
                                        </span>
                                    </div>

                                    <div className="group has-line">
                                        <p className=''><strong>Tổng cộng</strong></p>
                                        <span>
                                            <strong><span>1 404 000đ</span></strong>
                                        </span>
                                    </div>
                                    <div className="space-m">

                                    </div>
                                    <ButtonAccess namebtn='ĐẶT XE'/>
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
                                        <li>Số ghế: 4</li>
                                        <li>Truyền động: Số tự động</li>
                                        <li>Nhiên liệu: Xăng</li>
                                        <li>Mức tiêu thụ nhiên liệu: 4l/100km</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="group">
                                <span className="lstitlenew">
                                   MÔ TẢ
                                </span>
                                <div className="ctn-desc-new">
                                  <p>  
                                        Attrage 2020 số tự động gia đình đi ít.
                                        Nội thất da đẹp, sạch sẽ, bảo dưỡng định kỳ thường xuyên,
                                        Xe rộng rãi nhất phân khúc, tiện nghi.
                                        Xe trang bị, camera lùi, camera hành trình, camera cập lề..
                                        Màn hình giải trí thông minh...
                                        Chi phí quá giờ trả xe: 100.000₫/giờ, sau 4h tính chi phí 1 ngày thuê.
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
                                        Quý khách lưu ý một số qui định sau:
                                        Không sử dụng xe thuê vào mục đích phi pháp, trái pháp luật
                                        Không được sử dụng xe thuê để cầm cố hay thế chấp, sử dụng đúng mục đích
                                        Không hút thuốc,ăn kẹo cao su xả rác trong xe
                                        Không chở hàng quốc cấm dễ cháy nổ,hoa quả thưc phẩm lưu mùi trong xe.
                                        Khi trả xe, khách hàng vui lòng vệ sinh sạch sẽ hoặc gửi phụ thu thêm phí rửa xe, hút bụi nếu xe dơ. (sẽ thu nhiều hơn tuỳ theo mức độ dơ) 
                                        Trân trọng cảm ơn, chúc quý khách có những chuyến đi tuyệt vời!
                                   </p>
                                </div>
                            </div>

                            <div className="group">
                                <span className="lstitlenew">
                                   CHỦ XE
                                </span>
                                <div className="profile-mini">
                                   <div className="fix-avatar">
                                        <Link to ="">
                                            <img src={avatar} alt="" />
                                        </Link>
                                   </div>
                                   <div className="desc align-center-desc">
                                        <Link to ="">
                                            <h2>Hồng Ngọc</h2>
                                            <span className='ratings'>{itemCar.numberStar} <BiStar className='rating-star'/></span>
                                        </Link>
                                   </div>
                                </div>
                            </div>
                            </div>
                            <div className="infor__car-desc">
                            <div className="review">
                                <h4 className="title">ĐÁNH GIÁ</h4>
                                {
                                    listComments.map((item,index)=>(
                                        <div className="list-comments" key={index}>
                                    <div className="left">
                                        {/* <div className="fix-avatar"> */}
                                            <Link to ="">
                                            {/* <img src={avatar} alt="" /> */}
                                            <Avatar/>
                                            </Link>
                                    </div>
                                    <div className="right">
                                        <Link to ="">
                                            <h4>{item.name}</h4>
                                        </Link>
                                        <div className="cmt-box">
                                            <div className="group">
                                                {item.ratingStar}
                                            </div>
                                            <p className="desc">
                                            {item.comment}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                    ))
                                }
                               

                                {/* <div className="list-comments">
                                    <div className="left">
                                       <Link to ="">
                                            <Avatar/>
                                        </Link>
                                    </div>
                                    <div className="right">
                                        <Link to ="">
                                            <h4>Hong Ngoc</h4>
                                        </Link>
                                        <div className="cmt-box">
                                            <div className="group">
                                                Star-rating
                                            </div>
                                            <p className="desc">
                                            Rất tốt. Xe tốt. Chủ xe thân thiện, hợp tác với khách thuê tốt!
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="list-comments">
                                    <div className="left">
                                       <Link to ="">
                                            <Avatar/>
                                        </Link>
                                    </div>
                                    <div className="right">
                                        <Link to ="">
                                            <h4>Hong Ngoc</h4>
                                        </Link>
                                        <div className="cmt-box">
                                            <div className="group">
                                                Star-rating
                                            </div>
                                            <p className="desc">
                                            Rất tốt. Xe tốt. Chủ xe thân thiện, hợp tác với khách thuê tốt!
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="list-comments">
                                    <div className="left">
                                       <Link to ="">
                                            <Avatar/>
                                        </Link>
                                    </div>
                                    <div className="right">
                                        <Link to ="">
                                            <h4>Hong Ngoc</h4>
                                        </Link>
                                        <div className="cmt-box">
                                            <div className="group">
                                                Star-rating
                                            </div>
                                            <p className="desc">
                                            Rất tốt. Xe tốt. Chủ xe thân thiện, hợp tác với khách thuê tốt!
                                            </p>
                                        </div>
                                    </div>
                                </div> */}
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
                                ListCar.map((item,index)=>(
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