import React from 'react';
import './styles.scss';


function ButtonAccess(props) {
    return (
            <button className='access__btn' type='submit' onClick={props.onSubmit} >
                        <b>{props.icon}{props.namebtn}</b>             
            </button>
    );
}

export default ButtonAccess;