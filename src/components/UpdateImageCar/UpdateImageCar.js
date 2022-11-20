import BaseFormImage from '../BaseFolder/BaseFormImage';
import ButtonAccess from '../Forms/ButtonAccess/ButtonAccess';
import './styles.scss';

function UpdateImageCar() {
    return (
        <div>
        <BaseFormImage/>
             {/* <div className="car__photo">
                            <ul className='photo__box'>
                             <li>
                                <div className='obj-photo'>
                                    <span className="ins">
                                        <div className="fileUploader">
                                        <div className="file-container">
                                            <button type='button' className='chooseFileButton btn btn-primary btn--m'>
                                                Chọn hình
                                            </button>
                                            <input id='select_images' type="file" accept='.jpg,.png,.jpeg' multiple />
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
                        <div className="space m"></div> */}
        </div>
    );
}

export default UpdateImageCar;