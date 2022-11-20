import React from 'react';
import PropTypes from 'prop-types';
import {FiFacebook } from "react-icons/fi";
import { FaGooglePlusG } from "react-icons/fa";
import './styles.scss';

function GeneralAccess() {
    return (
        <div>
            <div className="access__account">Hoặc đăng nhập bằng tài khoản</div>
            <div className="access__button-share">
                <div className="button__share-item">
                    <a href="" className='icon__share-facebook'>
                    <FiFacebook className='icon__share '/>
                    FACEBOOK</a>
                </div>
                <div className="button__share-item">
                    <a href="" className='icon__share-goolge'>
                    <FaGooglePlusG className='icon__share '/>
                    GOOGLE</a>
                </div>
            </div>
        </div>
    );
}

export default GeneralAccess;