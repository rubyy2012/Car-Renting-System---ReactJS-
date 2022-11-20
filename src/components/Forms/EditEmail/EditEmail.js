import './styles.scss';
import React from 'react';
import ButtonAccess from '../ButtonAccess/ButtonAccess';
import ModalLayout from '../../Modal/ModalLayout';

function EditEmail(props) {
    return (
        <ModalLayout>
            <div className="modal__email-number">
                <form action="">
                    <div className="email__header">
                       <button type='button' className="btn-close" onClick={props.close}></button>
                        <h2 className='email__header-title'>Cập nhật Email</h2>
                    </div>
                    <div className="email__input-wrapper">
                       <input className='email__input' type="text" placeholder='Email mới' />
                    </div>
                    <div className="email__btn-wrapper">
                        <ButtonAccess namebtn="Cập nhật"/>
                    </div>
                </form>
            </div>
        </ModalLayout>
    );
}

export default EditEmail;