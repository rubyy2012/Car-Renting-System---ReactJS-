
import './styles.scss';
import { FaEdit } from "react-icons/fa";
import { useEffect } from 'react';
import { useState } from 'react';
import React from 'react';
import * as request from '../../utils/request';
import BaseFromImage from '../../components/BaseFolder/BaseFormImage'
function ProfileLayout(props) {
    const [user,setUser] = useState({
        fullname:'',
        contact:'',
        profileImage: '',
        number:'',
        dateOfBirth:'',
        createdAt:'',
        gender:'',
        email:''
    })
    useEffect(()=>{
        const getUserInfor = async () => {
            try
            {
                const res = await request.getWithToken('profile/me')
                let option = {day:'2-digit',month:'2-digit',year:'numeric'}
                let createDay = new Date(res.createdAt)
                let birthDay = new Date(res.dateOfBirth)
                res.createdAt = createDay.toLocaleDateString('nl-NL',option)
                res.dateOfBirth = birthDay.toLocaleDateString('nl-NL',option)
                setUser(res)
            }
            catch(error)
            {
                console.log("Check your token",error)
            }
        }    
        getUserInfor()  
    },[])
    //UPDATE INFOR


    console.log(user)
    // console.log(day.toLocaleDateString("en-US"))

    //XỬ LÝ ẢNH
    const formData = new FormData()
    const [selectedImages,setSelectedImages] = useState([])
    const [images,setImages] = useState([])
    const onFileChange = async (e) =>
     {
         chooseAvtBtn[0].classList.add('hide')
         const selectedFiles = e.target.files;
         setImages(selectedFiles)
         //Xử lý hiển thị hình ảnh
         const selectedFilesArray = Array.from(selectedFiles);
         const imagesArray = selectedFilesArray.map((image)=>{
             return URL.createObjectURL(image);
         })
         setSelectedImages([...selectedImages,...imagesArray]); 
     }
     //  Xử lý dữ liệu gửi đi
     if(images)
         {
             for(let i = 0; i<images.length;i++)
             {
                 formData.append('userAvatar',images[i]);
             }
         }
      
         
    const chooseAvtBtn = document.getElementsByClassName('obj-photo')
    const [avatar,setAvatar] = useState('')
    const sendAvatar = async () => {
        try
        {
            const res = await request.putWithFormData('account/avatar',formData)
            setAvatar(res.profileImage)
            window.location.reload()
            console.log(res)
        }
        catch(error)
        {
            console.log(error)
        }
    }
       

    
    if(user){
    return (
        <>
        <div className="body__profile">
            <div className="background-profile" style={{ backgroundImage: `url("https://as2.ftcdn.net/v2/jpg/02/82/00/75/1000_F_282007508_wdCUP7hUMNK1Cuzj7XmOcFmzyzJ0Nnp9.jpg")`,
                                                         backgroundSize:'cover',
                                                         backgroundRepeat:'no-repeat'                                                  
                                                      }}>

            </div>
            <div className="profile-sec">
        <button onClick={sendAvatar}>SAVE</button>

                <div className="content-profile--new">
                    <div className="desc-profile desc-account">
                        <div className="avatar-box">
                            <div className="avatar-box--layout">
                                 <div className='avatar-wrapper'>
                                    <img src={user.profileImage} alt='error' className='myavatar'></img>         
                                    <BaseFromImage selectedImages={selectedImages} setSelectedImages={selectedImages} onFileChange={onFileChange}/>
                                </div>
                            </div>

                        </div>


                        <div className="snippet">
                            <div className="profile-infor">
                                <div className="item-content">
                                    <div className="item-title">
                                        <h2>{user.fullname}</h2>
                                        <span>
                                            <button className='btn-edit--user' onClick={()=>props.openUser(user)}>
                                                <FaEdit className='icon-edit-user'/>
                                            </button>
                                        </span>
                                    </div>
                                    <div className="d-flex">
                                        Tham gia: {user.createdAt}
                                    </div>
                                </div>
                            </div>
                            <div className="line-infor">
                                <div className="d-flex">
                                    <div className="infor">
                                        <span className="label">Ngày sinh </span>
                                        {user.dateOfBirth?<span className="ctn">{user.dateOfBirth}</span>:''}
                                    </div>
                                    <div className="infor">
                                        <span className="label">Giới tính </span>
                                        {user.gender?<span className="ctn">{user.gender}</span>:''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="desc-profile">
                        <div className="information information--desc">
                            <div className="inside">
                                <ul>
                                    <li> 
                                        <span className="label">
                                            Điện thoại
                                            <button className='btn-edit--user' onClick={props.openPn}><FaEdit className='icon-edit-user'/></button>
                                            <span className='ctn'>
                                                  {user.contact?<label>{user.contact}</label>:<label>Chưa xác thực số điện thoại</label>}
                                            </span>
                                        </span> 
                                    </li>

                                    <li> 
                                        <span className="label">
                                            GPLX
                                            <button className='btn-edit--user' onClick={props.openGP}><FaEdit className='icon-edit-user'/></button>
                                            <span className="ctn">
                                            {user.number?<label>{user.number}</label>: <label>Chưa xác thực GPLX</label>}
                                            </span>
                                        </span> 
                                       
                                    </li>
                                    <li> 
                                        <span className="label">
                                            Email
                                            <button className='btn-edit--user' onClick={props.openEmail}><FaEdit className='icon-edit-user'/></button>
                                            <span className='ctn'>
                                                 {user.email?<label>{user.email}</label>: <label>Chưa xác thực email</label> }
                                            </span>
                                        </span> 
                                    </li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>

                </div>
            </div>
        </div>

        </>
    );
}}

export default ProfileLayout;