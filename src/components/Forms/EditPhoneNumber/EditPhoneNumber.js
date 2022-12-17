import './styles.scss';
import React, { useEffect } from 'react';
import ButtonAccess from '../ButtonAccess/ButtonAccess';
import ModalLayout from '../../Modal/ModalLayout';
import { useState } from 'react';
import * as request from '../../../utils/request';

function EditPhoneNumber(props) {
    const [phoneNumber,setPhoneNumber] = useState('')
    const handleOnChange = (e) => {
        setPhoneNumber(e.target.value)
    }
    
    //HANDLE API
    const data = [{
        "path": "contact",
         "op":"replace",
         "value":phoneNumber
    }]
    const handleSubmit = async() => {
        try
        {
                const res = await request.patch('Account',data)
                console.log(res)
                window.location.reload()
        }
        catch (error)
        {
            console.log('Errors in updating phone number',error)
        }
    }
    
    return (
        <ModalLayout>
            <div className="modal__phone-number">
                <form action="">
                    <div className="pn__header">
                       <button type='button' className="btn-close" onClick={props.close}></button>
                        <h2 className='pn__header-title'>Cập nhật số điện thoại</h2>
                    </div>
                    <div className="pn__input-wrapper">
                       <input 
                            className='pn__input' 
                            type="text" 
                            placeholder='Số điện thoại'
                            value = {phoneNumber}
                            name='contact'
                            onChange={e=>handleOnChange(e)}
                            />
                    </div>
                    <div className="pn__btn-wrapper">
                        <ButtonAccess 
                        namebtn="Cập nhật" 
                        onHandleSubmit = {handleSubmit}                          
                        />
                    </div>
                </form>
            </div>
        </ModalLayout>
    );
}

export default EditPhoneNumber;