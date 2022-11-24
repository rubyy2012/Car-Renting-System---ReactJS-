import './styles.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { RiArrowDownSLine } from "react-icons/ri";
function FindCarLayout() {
    const [showStart,setShowStart] = useState(false)
    const [showEnd,setShowEnd] = useState(false)
    const handleStartCalendar = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setShowStart(!showStart)
    }
    const handleEndCalendar = () => {
        setShowEnd(!showEnd)
    }
    return (
        <div className='finding__cars-container'>
            <div className="container finding__cars-layout">
                <div className="navbar__search">
                    <div className="navbar__search-layout">
                        <div className="form-has-location">
                            <h6 className='finding-title'>Quận/Huyện</h6>
                                <select name="" id=""  className="finding-options">
                                    <option>Quận Liên Chiểu</option>
                                    <option>Quận Cẩm Lệ</option>
                                    <option>Quận Thanh Khê</option>
                                </select>
                                <h6 className='finding-title'>Phường</h6>
                                <select name="" id=""  className="finding-options">
                                <option>Phường Hòa Minh</option>
                                    <option>Phường Hòa Khánh Bắc</option>
                                    <option>Phường Hòa Khánh Nam</option>
                                </select>
                        </div>
                
                        <div className="form-has-timer">
                            <h6 className='finding-title'>Bắt đầu</h6>
                            <span className='date-container' onClick={e=>handleStartCalendar(e)}>
                                <span className='date-value-display'>27/12/2022 <RiArrowDownSLine /></span>
                                {showStart? <Calendar className='calendar'/>:''}
                            </span>

                            <h6 className='finding-title'>Kết thúc</h6>
                            <span className='date-container' onClick={handleEndCalendar}>
                                <span className='date-value-display'>27/12/2022 <RiArrowDownSLine /></span>
                                {showEnd? <Calendar className='calendar'/>:''}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="main__search">
                    <div className="cars__sidebar-filter">
                        <h6 className="finding-title">Sắp xếp</h6>
                        <select name="" id="" className="finding-options">
                            <option value="">Giá thấp</option>
                            <option value="">Giá cao</option>
                            <option value="">Ưu tiên đánh giá</option>
                        </select>
        
                        <h6 className="finding-title">Hãng xe</h6>
                        <select name="" id="" className="finding-options">
                            <option value="">Ford</option>
                            <option value="">Honda</option>
                            <option value="">Hynndai</option>
                            <option value="">Kia</option>
                            <option value="">Mazda</option>
                        </select>

                        <h6 className="finding-title">Truyền động</h6>
                        <select name="" id="" className="finding-options">
                            <option value="">Số sàn</option>
                            <option value="">Số tự động</option>
                        </select>

                        <h6 className="finding-title">Loại xe (Số ghế)</h6>
                        <select name="" id="" className="finding-options">
                            <option value="">4 chỗ</option>
                            <option value="">5 chỗ</option>
                            <option value="">6 chỗ</option>
                            <option value="">7 chỗ</option>
                            <option value="">8 chỗ</option>
                        </select>
                    </div>
                    <div className="cars__display-list">
                      <div className="listcars__result-wrapper">
                           {/* <div className='no-car'>Không tìm thấy xe nào.</div> */}
                           <div className="has-cars">
                               <Link to="" className="result-car-item">
                                    <div className="image-car-box">
                                        <img src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haiphong/mazda_3_2017/p/g/2021/07/14/21/Y_Z9MI97vxGI8aMzk6ZAOQ.jpg" alt="" />
                                        <div className="main-infor-box">
                                            <h6 className='name-car'>MAZDA 3 2017</h6>  
                                            <p className='stars'>5.0 <AiFillStar/></p>
                                        </div>
                                    </div>

                                    <div className="location-box">
                                        <div className="type-and-price">
                                            <p className="type-car">Số tự động</p>
                                            <h5 className="price-car">850K</h5>
                                        </div>
                                        <p className="address"> <GoLocation className='address-icon'/> Phường Hòa Minh, Quận Liên Chiểu</p>
                                    </div>
                                </Link>
                                <Link to="" className="result-car-item">
                                    <div className="image-car-box">
                                        <img src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haiphong/mazda_3_2017/p/g/2021/07/14/21/Y_Z9MI97vxGI8aMzk6ZAOQ.jpg" alt="" />
                                        <div className="main-infor-box">
                                            <h6 className='name-car'>MAZDA 3 2017</h6>  
                                            <p className='stars'>5.0 <AiFillStar/></p>
                                        </div>
                                    </div>

                                    <div className="location-box">
                                        <div className="type-and-price">
                                            <p className="type-car">Số tự động</p>
                                            <h5 className="price-car">850K</h5>
                                        </div>
                                        <p className="address"> <GoLocation className='address-icon'/> Phường Hòa Minh, Quận Liên Chiểu</p>
                                    </div>
                                </Link>  

                                <Link to="" className="result-car-item">
                                    <div className="image-car-box">
                                        <img src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haiphong/mazda_3_2017/p/g/2021/07/14/21/Y_Z9MI97vxGI8aMzk6ZAOQ.jpg" alt="" />
                                        <div className="main-infor-box">
                                            <h6 className='name-car'>MAZDA 3 2017</h6>  
                                            <p className='stars'>5.0 <AiFillStar/></p>
                                        </div>
                                    </div>

                                    <div className="location-box">
                                        <div className="type-and-price">
                                            <p className="type-car">Số tự động</p>
                                            <h5 className="price-car">850K</h5>
                                        </div>
                                        <p className="address"> <GoLocation className='address-icon'/> Phường Hòa Minh, Quận Liên Chiểu</p>
                                    </div>
                                </Link>
                                
                                <Link to="" className="result-car-item">
                                    <div className="image-car-box">
                                        <img src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haiphong/mazda_3_2017/p/g/2021/07/14/21/Y_Z9MI97vxGI8aMzk6ZAOQ.jpg" alt="" />
                                        <div className="main-infor-box">
                                            <h6 className='name-car'>MAZDA 3 2017</h6>  
                                            <p className='stars'>5.0 <AiFillStar className='stars-icon'/></p>
                                        </div>
                                    </div>

                                    <div className="location-box">
                                        <div className="type-and-price">
                                            <p className="type-car">Số tự động</p>
                                            <h5 className="price-car">850K</h5>
                                        </div>
                                        <p className="address"> <GoLocation className='address-icon'/> Phường Hòa Minh, Quận Liên Chiểu</p>
                                    </div>
                                </Link>

                                <Link to="" className="result-car-item">
                                    <div className="image-car-box">
                                        <img src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haiphong/mazda_3_2017/p/g/2021/07/14/21/Y_Z9MI97vxGI8aMzk6ZAOQ.jpg" alt="" />
                                        <div className="main-infor-box">
                                            <h6 className='name-car'>MAZDA 3 2017</h6>  
                                            <p className='stars'>5.0 <AiFillStar/></p>
                                        </div>
                                    </div>

                                    <div className="location-box">
                                        <div className="type-and-price">
                                            <p className="type-car">Số tự động</p>
                                            <h5 className="price-car">850K</h5>
                                        </div>
                                        <p className="address"> <GoLocation className='address-icon'/> Phường Hòa Minh, Quận Liên Chiểu</p>
                                    </div>
                                </Link>

                                <Link to="" className="result-car-item">
                                    <div className="image-car-box">
                                        <img src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haiphong/mazda_3_2017/p/g/2021/07/14/21/Y_Z9MI97vxGI8aMzk6ZAOQ.jpg" alt="" />
                                        <div className="main-infor-box">
                                            <h6 className='name-car'>MAZDA 3 2017</h6>  
                                            <p className='stars'>5.0 <AiFillStar/></p>
                                        </div>
                                    </div>

                                    <div className="location-box">
                                        <div className="type-and-price">
                                            <p className="type-car">Số tự động</p>
                                            <h5 className="price-car">850K</h5>
                                        </div>
                                        <p className="address"> <GoLocation className='address-icon'/> Phường Hòa Minh, Quận Liên Chiểu</p>
                                    </div>
                                </Link>

                                <Link to="" className="result-car-item">
                                    <div className="image-car-box">
                                        <img src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haiphong/mazda_3_2017/p/g/2021/07/14/21/Y_Z9MI97vxGI8aMzk6ZAOQ.jpg" alt="" />
                                        <div className="main-infor-box">
                                            <h6 className='name-car'>MAZDA 3 2017</h6>  
                                            <p className='stars'>5.0 <AiFillStar/></p>
                                        </div>
                                    </div>

                                    <div className="location-box">
                                        <div className="type-and-price">
                                            <p className="type-car">Số tự động</p>
                                            <h5 className="price-car">850K</h5>
                                        </div>
                                        <p className="address"> <GoLocation className='address-icon'/> Phường Hòa Minh, Quận Liên Chiểu</p>
                                    </div>
                                </Link>

                                <Link to="" className="result-car-item">
                                    <div className="image-car-box">
                                        <img src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haiphong/mazda_3_2017/p/g/2021/07/14/21/Y_Z9MI97vxGI8aMzk6ZAOQ.jpg" alt="" />
                                        <div className="main-infor-box">
                                            <h6 className='name-car'>MAZDA 3 2017</h6>  
                                            <p className='stars'>5.0 <AiFillStar/></p>
                                        </div>
                                    </div>

                                    <div className="location-box">
                                        <div className="type-and-price">
                                            <p className="type-car">Số tự động</p>
                                            <h5 className="price-car">850K</h5>
                                        </div>
                                        <p className="address"> <GoLocation className='address-icon'/> Phường Hòa Minh, Quận Liên Chiểu</p>
                                    </div>
                                </Link>

                                <Link to="" className="result-car-item">
                                    <div className="image-car-box">
                                        <img src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_haiphong/mazda_3_2017/p/g/2021/07/14/21/Y_Z9MI97vxGI8aMzk6ZAOQ.jpg" alt="" />
                                        <div className="main-infor-box">
                                            <h6 className='name-car'>MAZDA 3 2017</h6>  
                                            <p className='stars'>5.0 <AiFillStar/></p>
                                        </div>
                                    </div>

                                    <div className="location-box">
                                        <div className="type-and-price">
                                            <p className="type-car">Số tự động</p>
                                            <h5 className="price-car">850K</h5>
                                        </div>
                                        <p className="address"> <GoLocation className='address-icon'/> Phường Hòa Minh, Quận Liên Chiểu</p>
                                    </div>
                                </Link>
                           </div>
                      </div>
                    </div>
            </div>
        </div>
        </div>
    );
}

export default FindCarLayout;