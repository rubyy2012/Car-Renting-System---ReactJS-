
import './styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function ModalLayout(props) {
    return (
        <div className="contailer__modal">
            <div className="modal-layout">
                    {props.children}
            </div>
        </div>
    );
}

export default ModalLayout;