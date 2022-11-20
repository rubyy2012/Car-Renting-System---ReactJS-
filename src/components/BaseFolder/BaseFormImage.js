import './style.scss';
import React from 'react';
import axios from 'axios';
import { useState } from 'react';


function BaseFormImage(props) {

    const formData = new FormData();
    const [selectedImages,setSelectedImages] = useState([])
    const onFileChange = async (e) => {
       const selectedFiles = e.target.files;
       console.log(selectedFiles);
       
       //Xử lý hiển thị hình ảnh
       const selectedFilesArray = Array.from(selectedFiles);
       const imagesArray = selectedFilesArray.map((image)=>{
            return URL.createObjectURL(image);
       })
       setSelectedImages([...selectedImages,...imagesArray]); 
       
    //    Xử lý dữ liệu gửi đi
    if(selectedFiles)
    {
        for(let i = 0; i<selectedFiles.length;i++)
        {
            formData.append('image',selectedFiles[i]);
        }
    }
    }

    const submitFormData = async (e) => {
                 e.preventDefault();
                 await axios.post('https://6370fed40399d1995d888ffe.mockapi.io/api/Auth/images',{formData},{
                    headers: {
                      'Content-Type': 'multipart/form-data'
                    }
                })
                    .then(res=>console.log(res))
                    .catch(error=>console.log(error));             
    }
    return (
        <div>
            <div className="car__photo">
                            <ul className='photo__box'>
                             <li>
                                <div className='obj-photo'>
                                    <span className="ins">
                                        <div className="fileUploader">
                                        <div className="file-container">
                                            <button type='button' className='chooseFileButton btn btn-primary btn--m'>
                                                Chọn hình
                                            </button>
                                            <input id='select_images' type="file" accept='.jpg,.png,.jpeg' multiple onChange={onFileChange}/>
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
                                           <img src={image} alt="" className='obj-photo'/>
                                       </li>
                                    ))
                                }
                               
                            </ul>
                        </div>
                        <div className="space m"></div>
        </div>
    );
}

export default BaseFormImage;