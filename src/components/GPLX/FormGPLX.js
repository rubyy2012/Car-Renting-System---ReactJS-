import React from 'react';
import ButtonAccess from '../Forms/ButtonAccess/ButtonAccess';
import FormInput from '../Forms/FormInput/FormInput';
import './style.scss';
import { BsInfoCircle } from "react-icons/bs";
import GPLX from '../../assets/images/GPLX/license.jpg';
import ModalLayout from '../Modal/ModalLayout';



function FormGPLX(props) {
    return (
        // <div className="container modal__container">
        <ModalLayout>
         <div className="layout__container">
         <div className="layout__container-wrapper">
             <form action="">
                <div className="layout__header">
                    <button type='button' className="btn-close" onClick={props.close}></button>
                    <h1 className='title__header'>Cập nhật giấy phép lái xe</h1>
                </div>            
                    <div className="wrapper">
                        <label htmlFor="LicenseNo">Số GPLX</label>
                        <span>
                        <BsInfoCircle className='style__icon'/>
                            Dãy 12 chữ số ở mặt trước GPLX
                        </span>
                        {/* <FormInput id='licensenumber' placeholder='Nhập số GPLX đã cấp' name=''/> */}
                        <div className="input__wrapper">
                            <input type="text" id='licensenumber' placeholder='Nhập số GPLX đã cấp' name=''/>
                        </div>
                        <label htmlFor="fullname">Họ tên</label>
                        <div className="input__wrapper">
                            <input type="text" id='fullname' placeholder='Nhập đầy đủ họ tên' name=''/>
                        </div>
                        <label htmlFor="birthday">Ngày sinh</label>
                        <div className="input__wrapper">
                            <input type="text" id='birthday' placeholder='dd_mm_yy' name=''/>
                        </div>
                       
                        <label >Ảnh bằng lái xe</label>
                        <span> 
                            <BsInfoCircle className='style__icon'/>
                            Hình chụp cần thấy được <b>Ảnh đại diện</b> và <b>Số GPLX</b>
                        </span>
                        <div className='uploadImage' style={{background: `url(${GPLX})`}}>
                            <label htmlFor="imgFile">Upload Image</label>
                            <input id='imgFile'type='file'/>
                        </div>
                    </div>
                    <ButtonAccess namebtn='CẬP NHẬT'/>
              </form>
         </div>  
         </div>     
         </ModalLayout>        
        // </div>
    );
}

export default FormGPLX;