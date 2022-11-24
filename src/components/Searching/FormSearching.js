import React from 'react';
import './styles.scss';
import ButtonAccess from '../Forms/ButtonAccess/ButtonAccess';
import { BiSearch } from "react-icons/bi";

function FormSearching({districts,handleChangeDistrict,wards}) {
    return (
        <div className="main__wrapper-layout ">
        <div className="main__wrapper-search">
            <div className="wrapper__search-layout">
                <form action="">
                         <div className=' pick__up-location'>
                            <div className='choose_location pick__up-district'>
                                <label htmlFor="" className='label__form-search'>Chọn quận</label>
                                <select className='pick-up' onChange={e=>handleChangeDistrict(e)} >
                                {
                                    districts.map((district)=>(
                                        <option value={district.id} key={district.name}>{district.name}</option>
                                    ))
                                }
                                </select>
                            </div>

                            <div className='choose_location pick__up-ward'>
                                <label htmlFor="" className='label__form-search'>Chọn phường</label>
                                <select className='pick-up'>
                                  {wards.map((ward) => (
                                    <option key={ward.id} value={ward.id}>{ward.name}</option>
                                  ))}
                                </select>
                            </div>
                            </div>
                    <label htmlFor="" className='label__form-search'>Bắt đầu</label>
                        <p className='time-field'>
                            <input type="date" /> 
                        </p>
                    
                    <label htmlFor="" className='label__form-search'>Kết thúc</label>
                        <p className='time-field'>
                            <input type="date" />
                        </p>
                    <ButtonAccess namebtn='TÌM XE NGAY' icon=<BiSearch className='icon_search'/>/>
                </form>
                 
            </div>
        </div>
    </div>
    );
}

export default FormSearching;