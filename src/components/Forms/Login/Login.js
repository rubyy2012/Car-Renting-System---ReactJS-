
import './styles.scss';
import { BiLock, BiUserCheck } from "react-icons/bi";
import { BsEnvelope } from "react-icons/bs";
import { BiX } from "react-icons/bi";
import FormInput from '../FormInput/FormInput';
import ButtonAccess from '../ButtonAccess/ButtonAccess';
import GeneralAccess from '../GeneralAccess/GeneralAccess';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';

function Login(props) {

    const handleCloseModal = () => 
    {
        const modalElement = document.getElementsByClassName('modal__container')[0];
        modalElement.classList.add('hidden');
    }
    const schema = yup.object().shape({
        userName: yup.string().required('You have to enter your username!'),
        password: yup.string().required('You have to enter your password!'),
    });

    const {register,handleSubmit, formState: {errors}} = useForm({resolver:yupResolver(schema)});
    const onSubmit = async (data) => {
        console.log(data);
        const url = 'https://6370fed40399d1995d888ffe.mockapi.io/api/Auth/login'
        try
               {
                const resp = await axios.post(url, 
                    {
                      userName: data.userName,
                      password: data.password,
                    });
                    console.log(resp)
                  if(resp.status===201)
                    {
                        localStorage.setItem('userToken','hello');  
                        handleCloseModal();
                        window.location.reload();
                    }
               } 
               catch(error)
               {
                    console.log('Something error!');
               }
           }

    return (
        <div className="modal__container">
        <div className="layout__container">
         <div className="layout__container-wrapper">
             <button onClick={props.btnClose}><BiX className='close__icon'/></button>
             <div className="layout__header">
                <h1 className='title__header'>Đăng nhập</h1>
             </div>            
             <form action="">
                <div className="wrapper">
                      <div className="input__wrapper">
                         <BiUserCheck width={35} size={35}/>
                         <input type="text" {...register('userName')} placeholder='Your username' id='username'/>
                     </div>
                     {errors.userName?<p className='error_messages'>{errors.userName.message}</p>:''}                   
                     <div className="input__wrapper">
                         <BiLock width={27} size={27}/>
                         <input type="text" {...register('password')} placeholder='Your password' id='password'/>
                     </div> 
                     {errors.password?<p className='error_messages'>{errors.password.message}</p>:''}                
                </div>
                <p><button>Quên mật khẩu?</button></p>
                <ButtonAccess namebtn='ĐĂNG NHẬP' onSubmit ={handleSubmit(onSubmit)}/>
              </form>
         </div>          
        </div>     
        </div>
    );
}

export default Login;