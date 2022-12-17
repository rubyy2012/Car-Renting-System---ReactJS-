import './styles.scss';
import React, { useEffect } from 'react';
import ButtonAccess from '../ButtonAccess/ButtonAccess';
import ModalLayout from '../../Modal/ModalLayout';
import { useState } from 'react';
import * as request from '../../../utils/request';
function EditEmail(props) {
    const  [myEmail,setMyEmail] = useState('')
    const handleOnChange = (e) => {
        setMyEmail(e.target.value)
    }
    //HANDLE API
    const data = [{
        "path": "email",
         "op":"replace",
         "value":myEmail
    }]
    const handleSubmit = async () => {
        try
        {
            const res = await request.patch('Account',data)
            console.log(res)
            window.location.reload()
        }
        catch(err)
        {
            console.log("Something error in edit email",err)
        }
       
    }

    return (
        <ModalLayout>
            <div className="modal__email-number">
                <form action="">
                    <div className="email__header">
                       <button type='button' className="btn-close" onClick={props.close}></button>
                        <h2 className='email__header-title'>Cập nhật Email</h2>
                    </div>
                    <div className="email__input-wrapper">
                       <input 
                            className='email__input' 
                            type="text" 
                            placeholder='Email mới' 
                            value={myEmail} 
                            name='email'
                            onChange={e=>handleOnChange(e)}
                            />
                    </div>
                    <div className="email__btn-wrapper">
                        <ButtonAccess 
                            namebtn="Cập nhật" 
                            onHandleSubmit={handleSubmit}
                            />
                    </div>
                </form>
            </div>
        </ModalLayout>
    );
}

export default EditEmail;