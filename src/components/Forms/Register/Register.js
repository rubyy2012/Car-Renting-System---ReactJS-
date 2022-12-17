import React from 'react';
import { FiUser } from "react-icons/fi";
import { BiPhone, BiX } from "react-icons/bi";
import { FiLock } from "react-icons/fi";
import { FiUnlock } from "react-icons/fi";
import { BiUserCheck } from "react-icons/bi";
import FormInput from '../FormInput/FormInput';
import ButtonAccess from '../ButtonAccess/ButtonAccess';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function Register(props) {
    const [isValidUser,setIsValidUser] = useState(null)
    const navigate = useNavigate()
    const handleCloseModal = () => 
    {
        const modalElement = document.getElementsByClassName('modal__container')[0];
        modalElement.classList.add('hidden');
    }

        const phoneRegExp = /(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/;
        const schema = yup.object().shape({
            yourName: yup.string().required('You have to enter your Fullname!'),
            userName: yup.string().required('You have to enter your username!'),
            password: yup.string().required('You have to enter your password!').min(5,'Your password must be at least 5 character!'),
            confirmPassword: yup.string().required('Please enter your confirm password!'),
            phoneNumber: yup.string().required('Enter your phone number').matches(
                phoneRegExp,
                "Please enter valid phone number!"
            )
        });
        
        const onSubmit = async(data,e) => {
            // e.preventDefault()
            console.log('hello')
            const url = 'https://rentalcarpbl6api.azurewebsites.net/api/Auth/register'
             const newData = {
                yourName:data.yourName,
                userName: data.userName,
                password: data.password,
                confirmPassword: data.confirmPassword,
                phoneNumber: data.phoneNumber,
             }
             console.log(newData)
               try
               {
                 await axios.post(url, newData)
                    .then(res=> {
                            const token = res.data.accessToken
                            localStorage.setItem('userToken',token);  
                            console.log('try')
                            handleCloseModal();
                            setIsValidUser(null)
                            window.location.reload()
                    })
                    .catch((error)=>{
                        setIsValidUser(error.response.data.Message)
                    })   
                        
                }      
               catch(error)
               {
                    console.log("Something errored!")
               }
        } 
        const {register,handleSubmit, formState: {errors}} = useForm({resolver:yupResolver(schema)})
    return (
        <div id='register'>
        <div className="modal__container">
        <div className="layout__container">
         <div className="layout__container-wrapper">
            <button onClick={props.btnClose}><BiX className='close__icon'/></button>
             <div className="layout__header">
                <h1 className='title__header'>Đăng ký tài khoản</h1>
             </div>         
                {/* */}
             <form action="">
                <div className="wrapper">
                    <div className="input__wrapper">
                         <FiUser width={27} size={27}/>
                         <input type ='text' {...register('yourName')}  placeholder='Your Fullname' id='fullname'/>
                     </div>
                       {errors.yourName?<p className='error_messages'>{errors.yourName.message}</p>:''} 
                     <div className="input__wrapper">
                         <BiUserCheck width={30} size={30}/>
                         <input type="text" {...register('userName')}  placeholder='Your Username' id='username' />
                     </div>
                     {errors.userName?<p className='error_messages'>{errors.userName.message}</p>:''}
                     {/* {isError? <p className='error_messages'>{errorMess}</p>:''} */}
                     <div className="input__wrapper">
                         <FiLock width={30} size={24}/>
                         <input type="text" {...register('password')} placeholder='Password' id='password' name='password' />
                     </div>
                     {errors.password?<p className='error_messages'>{errors.password.message}</p>:''}
                     <div className="input__wrapper">
                         <FiUnlock width={30} size={24}/>
                         <input type="text" {...register('confirmPassword')} placeholder='Confirm password' id='confirmpassword' name='confirmPassword'/>
                     </div>
                    {errors.confirmPassword?<p className='error_messages'>{errors.confirmPassword.message}</p>:''}                     
                     <div className="input__wrapper">
                         <BiPhone width={30} size={24}/>
                         <input type="text" {...register('phoneNumber')} placeholder='Phone number' id='phonenumber' name='phoneNumber'/>
                     </div> 
                     {errors.phoneNumber? <p className='error_messages'>{errors.phoneNumber.message}</p>:''}
                     {isValidUser? <p className='error_messages'>{isValidUser}</p>:''}
                </div>
                <ButtonAccess namebtn='ĐĂNG KÝ' onHandleSubmit={handleSubmit(onSubmit)}/>
              </form>
         </div>          
        </div>     
        </div>

    </div>
    );
}

export default Register;