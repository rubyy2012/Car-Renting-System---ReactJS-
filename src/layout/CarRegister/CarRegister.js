import './styles.scss';
import { FaMapMarkedAlt } from "react-icons/fa";
import ButtonAccess from '../../components/Forms/ButtonAccess/ButtonAccess';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import BaseFormImage from '../../components/BaseFolder/BaseFormImage';
import { useEffect } from 'react';



function CarRegister() {
    

    // const formData = new FormData();
   
    // const onFileChange = (e) =>
    // {
    // //    const boxImage = document.getElementsByClassName('photo__box')[0];
    // //    const li = document.createElement('li')
    // //    const imgElement = document.createElement('img');
    // //    imgElement.className = 'obj-photo';
    // //    li.appendChild(imgElement);
    // //    boxImage.appendChild(li);
    // //    e.preventDefault();
    // //    const selectedFiles = e.target.files;
    // //    const selectedFilesArray = Array.from(selectedFiles);
    // //    const imagesArray = selectedFilesArray.map((image)=>{
    // //         return URL.createObjectURL(image);
    // //    })
    // // //    console.log(imagesArray);
    // //    setSelectedImages([...selectedImages,...imagesArray]);
    // //    console.log(...selectedImages);
    // //    console.log(selectedFiles);
    // //    for(let i = 0; i<selectedFiles.length;i++)
    // //    {
    // //      formData.append('image',selectedFiles[i]);
    // //    }
       
    // }
    // const formData = new FormData();
    // const [selectedImages,setSelectedImages] = useState([])
    // const onFileChange = async (e) => {
    //    const selectedFiles = e.target.files;
    //    console.log(selectedFiles);
       
    //    //Xử lý hiển thị hình ảnh
    //    const selectedFilesArray = Array.from(selectedFiles);
    //    const imagesArray = selectedFilesArray.map((image)=>{
    //         return URL.createObjectURL(image);
    //    })
    //    setSelectedImages([...selectedImages,...imagesArray]); 
       
    // //    Xử lý dữ liệu gửi đi
    // if(selectedFiles)
    // {
    //     for(let i = 0; i<selectedFiles.length;i++)
    //     {
    //         formData.append('image',selectedFiles[i]);
    //     }
    // }
    // }

    // const submitFormData = async (e) => {
    //              e.preventDefault();
    //              await axios.post('https://6370fed40399d1995d888ffe.mockapi.io/api/Auth/images',{formData},{
    //                 headers: {
    //                   'Content-Type': 'multipart/form-data'
    //                 }
    //             })
    //                 .then(res=>console.log(res))
    //                 .catch(error=>console.log(error));             
    // }
    
    const [data,setData] = useState()
    const [carBrandList, setBrand] = useState([])
    const [carModelList, setModel] = useState([])
    const [idBrand,setIdBrand] = useState(0)

    const handleChangeBrand = (e) => {
        const getIdBrand = e.target.value
        setIdBrand(getIdBrand)
        console.log('hello')
    }
    console.log(idBrand)

    useEffect(()=>{
        
        const getData= async () => {
            try {
                axios.get('http://localhost:3000/data')
                .then(res=>{
                    let brandlist=[]
                    let modellist=[]
                    for(let i in res.data.carBrand){
                        
                        let car_brand = {
                            id: res.data.carBrand[i].id,
                            name: res.data.carBrand[i].name
                        };
                        brandlist.push(car_brand)
                                                              
                        let model_list=[];
                        let list_car=res.data.carBrand[i]
                        for(let j in list_car.carModel){
                            let model = {
                                id: list_car.carModel[j].id,
                                name: list_car.carModel[j].name 
                            }
                            model_list.push(model)
                            //console.log(model_list)
                        }
                        
                        modellist.push(model_list)
                        
                    }
                    
                    setBrand(brandlist) 
                    setModel(modellist)   
                    // console.log(brandList)

                    // setData(res.data)
                    // console.log(data)
                })
            }
            catch(error)
            {
                console.log('districts:something error')
            }  
        }
        getData()},[])
        // setIdBrand(...idBrand,1)
        // console.log(carBrandList)
    return (
        
        <div className='module-register'>
        
            <div className="register-container">
                <div className="content-register">
                <form action="">
                    <div className="group form-default">
                        <h6>Biển số xe</h6>
                        <p className="fl">
                            <span className='note'>Lưu ý: Biển số sẽ không thể thay đổi sau khi đăng kí.</span>
                        </p>
                        <div className="col-left">
                            <div className="line-form">
                                <div className="wrap-input">
                                    <input type="text"  />
                                </div>
                            </div>
                        </div>
                        {/* <div className="space m clear">
                        </div> */}
                        <div className="clear"></div>

                        <h6>Thông tin cơ bản</h6>
                        <p className="fl">
                            <span className='note'>Lưu ý: Các thông tin cơ bản sẽ không thể thay đổi sau khi đăng kí.</span>
                        </p>
                        <div className="space clear"></div>
                        <div className="col-left">
                            <div className="line-form">
                                <label htmlFor="" className='label'>Hãng xe</label>
                                <span className='wrap-select'>
                                    <select name="" id="" onChange={e=>handleChangeBrand(e)}>
                                    {
                                        carBrandList.map((item,index)=>(
                                            <option value={index} key={index}>{item.name}</option>
                                        ))
                                    }
                                    </select>
                                </span>
                            </div>
                        </div>
                        <div className="col-right">
                         <div className="line-form">
                                 <label htmlFor="" className='label'>Mẫu xe</label>
                                 <span className='wrap-select'>
                                    <select name="" id="">
                                    
                                    </select>
                                </span>
                            </div>
                        </div>
                        <div className="space clear"></div>

                        <div className="col-left">
                            <div className="line-form">
                                <label htmlFor="" className='label'>Số ghế</label>
                                <span className='wrap-select'>
                                    <select name="" id="">
                                        <option value="">4</option>
                                        <option value="">5</option>
                                        <option value="">6</option>
                                        <option value="">7</option>
                                        <option value="">8</option>
                                    </select>
                                </span>
                            </div>
                        </div>

                        <div className="col-right">
                         <div className="line-form">
                                 <label htmlFor="" className='label'>Năm sản xuất</label>
                                 <span className='wrap-select'>
                                    <select name="" id="">
                                        <option value="">2017</option>
                                        <option value="">2018</option>
                                        <option value="">2019</option>
                                        <option value="">2020</option>
                                        <option value="">2021</option>
                                        <option value="">2022</option>
                                    </select>
                                </span>
                            </div>
                        </div>
                        <div className="space clear"></div>

                        <div className="col-left">
                            <div className="line-form">
                                <label htmlFor="" className='label'>Truyền động</label>
                                <span className='wrap-select'>
                                    <select name="" id="">
                                        <option value="">Số tự động</option>
                                        <option value="">Số sàn</option>
                                    </select>
                                </span>
                            </div>
                        </div>

                        <div className="col-right">
                         <div className="line-form">
                                 <label htmlFor="" className='label'>Loại nhiên liệu</label>
                                 <span className='wrap-select'>
                                    <select name="" id="">
                                        <option value="">Xăng</option>
                                        <option value="">Dầu diesel</option>
                                    </select>
                                </span>
                            </div>
                        </div>
                        <div className="space clear"></div>
                        <h6>Mức tiêu thụ nhiên liệu</h6>
                        <p className="fl">
                            <span className="">
                            Số lít nhiên liệu cho quãng đường 100km.
                            </span>
                        </p>
                        <div className="clear"></div>
                        <div className="col-left">
                        <div className="line-form">
                                <label htmlFor="" className="label"></label>
                                <div className="wrap-input">
                                    <input type="text"  />
                                </div>
                            </div>
                        </div>
                        <h6>Mô tả</h6>
                        <textarea name="" id="" cols="30" rows="10" className='textarea'
                         placeholder=' Huyndai Elantra số tự động đăng kí tháng 06/2018. Xe gia đình mới đẹp, 
                        nội thất nguyên bản, sạch sẽ, bảo dưỡng thường xuyên, rửa xe miễn phí cho khách.
                        Xe rộng rãi, an toàn, tiện nghi, phù hợp cho gia đình du lịch. Xe trang bị hệ 
                        thống cảm biến lùi, gạt mưa tự động, đèn pha tự động, camera hành trình, hệ thống 
                        giải trí AV cùng nhiều tiện nghi khác...'>
                        </textarea>
                        <h6>Đơn giá thuê mặc định</h6>
                        <div className="fl">
                            <span className="note">
                            Đơn giá áp dụng cho tất cả các ngày. 
                            </span>
                        </div>
                        <div className="col-left">
                            <div className="abc">
                                <div className="line-form">
                                    <p className="pl">
                                        <span className="note">
                                          Giá đề xuất: 3050K
                                        </span>
                                    </p>
                                    <div className='wrap-input-label d-flex'>
                                        <div className="wrap-input">
                                            <input type="text" />
                                        </div>
                                        <span className='phay'>K</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space m"></div>
                        {/* <h6>Địa chỉ xe</h6>
                        <div className="line-form">
                            <div className='wrap-input has-ico-search'>
                                <input type="text" placeholder='Địa chỉ mặc định để giao nhận xe.' />
                                <button type='button'>
                                     <FaMapMarkedAlt className='input__map-icon'/>
                                </button>
                            </div>
                        </div> */}
                        <div className="space m clear"></div>
                        <h6>Điều khoản thuê xe</h6>
                        <p><span className='note'>Ghi rõ yêu cầu khách có thể thuê xe</span></p>
                        <div className="line-form end">
                            <textarea name="" id="" cols="30" rows="10" className='textarea' 
                             placeholder='Không sử dụng xe vào mục đích phi pháp. Lái xe cẩn thận, giữ xe sạch sẽ, trả xe đúng giờ. Phụ thu 500k nếu hút thuốc lá trong xe.'>
                            </textarea>
                        </div>
                        {/* <div className="space m"></div> */}


                        <h6>Địa chỉ xe</h6>
                        <div className="col-left">
                            <div className="line-form">
                                <label htmlFor="" className='label'>Quận</label>
                                <span className='wrap-select'>
                                    <select name="" id="">
                                        <option value="">Q. Liên Chiểu</option>
                                        <option value="">Q. Thanh Khê</option>
                                    </select>
                                </span>
                            </div>
                        </div>

                        <div className="col-right">
                         <div className="line-form">
                                 <label htmlFor="" className='label'>Phường</label>
                                 <span className='wrap-select'>
                                    <select name="" id="">
                                        <option value="">P. Hòa An</option>
                                        <option value="">P. Hòa Thuận</option>
                                        <option value="">P. Hòa Hải</option>
                                    </select>
                                </span>
                            </div>
                        </div>

                        <p className="ward-input">
                            <span className=''>Đường</span>
                        </p>
                        <div className="col-left">
                            <div className="line-form">
                                <div className="wrap-input">
                                    <input type="text"  />
                                </div>
                            </div>
                        </div>

                        <h6>Hình ảnh</h6>
                        <BaseFormImage/>
                        <ButtonAccess namebtn='ĐĂNG KÝ'/>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
}

export default CarRegister;