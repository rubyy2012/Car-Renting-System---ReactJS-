import './styles.scss';
import React, { useEffect } from 'react';
import * as request from '../../utils/request';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';


function UpdateRegistry() {
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

        const [imagesRegsitry,setImagesRegistry] = useState()
        

            const handleSubmitRegistry = async () => {
                try
                {
                    console.log('click')
                    const res = await request.postWithFormData(`Car/${idCar}/CarImageType/2`,formData)
                    setImagesRegistry(res)
                    window.location.reload()
                    console.log(res)
                }
                catch(error)
                {
                    console.log(error)
                } 
            }

            // GET DATA FROM API
            useEffect(()=>{
                const getImagesRegistry= async() => 
                {
                   try
                    {
                        const res = await request.getWithToken(`Car/${idCar}/CarImageType/2`)
                        setImagesRegistry(res)
                        // console.log(res)
                    }
                    catch(error)
                    {
                        console.log('errors in get images cavet',error)
                    } 
                }
                getImagesRegistry()
             },[])

          console.log(imagesRegsitry)
if(imagesRegsitry)
    return (
        <>
        <div className='type__license-container'>
        <div className="car__photo">
                            <ul className='photo__box'>
                             <li>
                                <div className='obj-photo'>
                                    <span className="ins">
                                        <div className="fileUploader">
                                        <div className="file-container">
                                            <button  className='chooseFileButton btn btn-primary btn--m'>
                                                Chọn hình
                                            </button>
                                            <input id='select_images' type="file" accept='.jpg,.png,.jpeg' multiple onChange={onFileChange} name='image'/>
                                        </div>
                                        </div>
                                    </span>
                                </div>
                                </li>
                                {
                                    selectedImages && selectedImages.map((image,index)=>
                                    (
                                        <li className='img-boxitem' key={index}>
                                           <button className="btn-close" type='button'
                                              onClick={
                                                (e)=>{
                                                    selectedImages.filter(item=>image.index!==item.index)
                                                    setSelectedImages(selectedImages);}
                                                   }/>
                                            <img src={image} alt="" className='obj-photo photo-avatar'/>
                                       </li>
                                    ))
                                }
                               
                            </ul>
                            <ul className='photo__box'>
                            {
                                imagesRegsitry.map(item=>(
                                    <li className='img-boxitem' key={item.id}>
                                        <img src={item.path}  alt="" className='obj-photo photo-avatar'/>
                                    </li>
                                ))
                            }
                            </ul>
                        </div>
            <button className='btn-send' onClick={handleSubmitRegistry}>Cập nhật</button>
        </div>
        </>
       
    );
}

export default UpdateRegistry;