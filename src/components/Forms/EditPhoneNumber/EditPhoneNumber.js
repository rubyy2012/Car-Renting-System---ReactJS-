import './styles.scss';
import React from 'react';
import ButtonAccess from '../ButtonAccess/ButtonAccess';
import ModalLayout from '../../Modal/ModalLayout';

function EditPhoneNumber(props) {
    return (
        // <div className='pn__container'>
        //     <div className="phone__number-layout">
        <ModalLayout>
            <div className="modal__phone-number">
                <form action="">
                    <div className="pn__header">
                       <button type='button' className="btn-close" onClick={props.close}></button>
                        <h2 className='pn__header-title'>Cập nhật số điện thoại</h2>
                    </div>
                    <div className="pn__input-wrapper">
                       <input className='pn__input' type="text" placeholder='Số điện thoại' />
                    </div>
                    <div className="pn__btn-wrapper">
                        <ButtonAccess namebtn="Cập nhật"/>
                    </div>
                </form>
            </div>
        </ModalLayout>
        //     </div>
        // </div>
    );
}

export default EditPhoneNumber;