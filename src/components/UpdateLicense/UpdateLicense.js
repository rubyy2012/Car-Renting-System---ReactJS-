import './styles.scss';
import React, { useEffect } from 'react';
import BaseFormImage from '../BaseFolder/BaseFormImage';
import ButtonAccess from '../Forms/ButtonAccess/ButtonAccess';
import * as request from '../../utils/request';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';


function UpdateLicense() {
    const location = useLocation()
    const idCar = location.state
    console.log(idCar)
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
                 formData.append('images',images[i]);
             }
         }

        //HANDLE API

        const [imageCavet,setImageCavet] = useState()
        

            const handleSubmitCavet = async () => {
                try
                {
                    console.log('click')
                    const res = await request.postWithFormData(`Car/${idCar}/CarImageType/1`,formData)
                    setImageCavet(res)
                    console.log(res)
                }
                catch(error)
                {
                    console.log(error)
                } 
            }

          console.log(imageCavet)
          const handleSubmitRegistry= async () =>
           {
            try
            {
                console.log('click')
                const res = await request.postWithFormData(`Car/${idCar}/CarImageType/2`,formData)
                setImageCavet(res)
                console.log(res)
            }
            catch(error)
            {
                console.log(error)
            } 
        }

        const handleSubmitAssuarrance= async () =>
        {
         try
         {
             console.log('click')
             const res = await request.postWithFormData(`Car/${idCar}/CarImageType/3`,formData)
             setImageCavet(res)
             console.log(res)
         }
         catch(error)
         {
             console.log(error)
         } 
     }

    return (
        <>
        <div className='type__license-container'>
            <BaseFormImage selectedImages={selectedImages} setSelectedImages={selectedImages} onFileChange={onFileChange} images={images}/>
            <button className='btn-send' onClick={handleSubmitCavet}>Cập nhật</button>
        </div>

        <div className="line-distinct"></div>
         <div className='type__license-container'>
            <BaseFormImage selectedImages={selectedImages} setSelectedImages={selectedImages} onFileChange={onFileChange} images={images}/>
            <button className='btn-send' onSubmit={handleSubmitRegistry}>Cập nhật</button>
        </div>

        <div className="line-distinct"></div>
         <div className='type__license-container'>
            <BaseFormImage selectedImages={selectedImages} setSelectedImages={selectedImages} onFileChange={onFileChange} images={images}/>
            <button className='btn-send' onSubmit={handleSubmitAssuarrance}>Cập nhật</button>
        </div>
        </>
       
    );
}

export default UpdateLicense;