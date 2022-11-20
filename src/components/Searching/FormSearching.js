import React from 'react';
import './styles.scss';
import { BiMap } from "react-icons/bi";
import ButtonAccess from '../Forms/ButtonAccess/ButtonAccess';
import { BiSearch } from "react-icons/bi";

function FormSearching() {
    return (
    <div className="main__wrapper-layout ">
        <div className="main__wrapper-search">
            <div className="wrapper__search-layout">
                <form action="">
                         <div className=' pick__up-location'>
                            <div className='choose_location pick__up-district'>
                                <label htmlFor="" className='label__form-search'>Chọn quận</label>
                                <select className='pick-up'>
                                    <option value="">Q. Thanh Khê</option>
                                    <option value="">Q. Cẩm Lệ</option>
                                    <option value="">Q. Liên Chiểu</option>
                                    <option value="">Q. Ngũ Hành Sơn</option>
                                    <option value="">Q. Hải Châu</option>
                                    <option value="">H. Hòa Vang</option>
                                </select>
                            </div>

                            <div className='choose_location pick__up-ward'>
                                <label htmlFor="" className='label__form-search'>Chọn phường</label>
                                <select className='pick-up'>
                                <option value="">Q. Thanh Khê</option>
                                    <option value="">Q. Cẩm Lệ</option>
                                    <option value="">Q. Liên Chiểu</option>
                                    <option value="">Q. Ngũ Hành Sơn</option>
                                    <option value="">Q. Hải Châu</option>
                                    <option value="">H. Hòa Vang</option>
                                </select>
                            </div>
                            </div>
                    <label htmlFor="" className='label__form-search'>Bắt đầu</label>
                        <p className='time-field'>
                            <input type="date" /> 
                            {/* <select className='select-time'name="" id="">
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
                            </select> */}
                        </p>
                    
                    <label htmlFor="" className='label__form-search'>Kết thúc</label>
                        <p className='time-field'>
                            <input type="date" />
                            {/* <select className='select-time'name="" id="">
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
                            </select> */}
                        </p>
                    <ButtonAccess namebtn='TÌM XE NGAY' icon=<BiSearch className='icon_search'/>/>
                </form>
                 
            </div>
        </div>
    </div>
    );
}

export default FormSearching;