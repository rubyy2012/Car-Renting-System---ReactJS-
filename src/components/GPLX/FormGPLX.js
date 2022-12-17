import React, { useEffect } from 'react';
import ButtonAccess from '../Forms/ButtonAccess/ButtonAccess';
import './style.scss';
import { BsInfoCircle } from "react-icons/bs";
import ModalLayout from '../Modal/ModalLayout';
import BaseFormImage from '../BaseFolder/BaseFormImage';
import { useState } from 'react';
import * as request from '../../utils/request';
function FormGPLX(props) {
    const  [myData,setMyData] = useState({
        number: '',
        name:'',
        dateOfBirth:'',
        image:''
    })
    const handleOnChange = (e) => {
        setMyData({...myData,[e.target.name]:e.target.value})
    }
       //XỬ LÝ ẢNH
       const formData = new FormData()
       const [selectedImages,setSelectedImages] = useState([])
       const [images,setImages] = useState([])
       const onFileChange = async (e) =>
        {
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
                    formData.append('image',images[i]);
                }
            }

        formData.append('number',myData.number)
        formData.append('name',myData.name)
        formData.append('dateOfBirth',myData.dateOfBirth.toLocaleString('en-CA').split('T')[0])
    
 
    //HANDLE API
    const handleSubmit = async () => {
        try
        {
            const res = await request.putWithFormData('account/license',formData)
            console.log(res)
            window.location.reload()
        }
        catch(err)
        {
            console.log("You must enter all field")
        }
       
    }

    useEffect(()=>{
       const getData = async() => 
       {
            try
            {
                const res = await request.getWithToken('account/license')
                const date = res.dateOfBirth.toLocaleString('en-CA').split('T')[0]
                setMyData({...res,dateOfBirth:date})
            }
            catch(error)
            {
                console.log("Something error in load API license (profile)",error)
            }

       }

       getData()
    },[])
    console.log(myData)
   if(myData)
    return (
        // <div className="container modal__container">
        <ModalLayout>
         <div className="layout__container">
         <div className="layout__container-wrapper">
             <form action="">
                <div className="layout__header">
                    <button 
                        type='button' 
                        className="btn-close" 
                        onClick={props.close}
                        >
                    </button>
                    <h1 className='title__header'>Cập nhật giấy phép lái xe</h1>
                </div>            
                    <div className="wrapper">
                        <label htmlFor="number">Số GPLX</label>
                        <span>
                        <BsInfoCircle className='style__icon'/>
                            Dãy 12 chữ số ở mặt trước GPLX
                        </span>
                        <div className="input__wrapper">
                            <input 
                                type="text" 
                                id='number' 
                                placeholder='Nhập số GPLX đã cấp' 
                                name='number'
                                value={myData.number||''}
                                onChange={e=>handleOnChange(e)}
                                />
                        </div>
                        <label htmlFor="name">Họ tên</label>
                        <div className="input__wrapper">
                            <input 
                                type="text" 
                                id='name' 
                                placeholder='Nhập đầy đủ họ tên' 
                                name='name'
                                value={myData.name||''}
                                onChange={e=>handleOnChange(e)}
                                />
                        </div>
                        <label htmlFor="dateOfBirth">Ngày sinh</label>
                        <div className="input__wrapper">
                            <input 
                                type="date" 
                                id='dateOfBirth' 
                                placeholder='yy-mm-dd' 
                                name='dateOfBirth'
                                value={myData.dateOfBirth||''}
                                onChange={e=>handleOnChange(e)}
                                />
                        </div>  
                        <label >Ảnh bằng lái xe</label>
                        <span> 
                            <BsInfoCircle className='style__icon'/>
                            Hình chụp cần thấy được <b>Ảnh đại diện</b> và <b>Số GPLX</b>
                        </span>
                        <BaseFormImage selectedImages={selectedImages} setSelectedImages={selectedImages} onFileChange={onFileChange}/>
                    </div>
                    <ButtonAccess namebtn='CẬP NHẬT' onHandleSubmit={handleSubmit}/>
              </form>
         </div>  
         </div>     
         </ModalLayout>        
        // </div>
    );
}

export default FormGPLX;