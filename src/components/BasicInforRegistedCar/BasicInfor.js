
import './styles.scss';
function BasicInfor() {
    return (
        <div className="basic__infor-layout">
           <form action="">
                <div className="group form-default">
                   <h6 className="basic__infor-label">Biển số xe</h6>
                   <div className="col-left">
                            <div className="line-form">
                                <div className="wrap-input">
                                    <input type="text" readOnly className='inactive' />
                                </div>
                            </div>
                    </div>
                    <span className="takenote">
                        Thông tin không thể thay đổi!
                    </span>

                   <h6 className="basic__infor-label">Địa chỉ xe</h6>
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

                   <h6 className="basic__infor-label">Thông tin cơ bản</h6>
                   <div className="col-left">
                   <label htmlFor="" className='label-input'>Số ghế</label>
                            <div className="line-form">
                                <div className="wrap-input">
                                    <input type="text" readOnly className='inactive' />
                                </div>
                            </div>
                   </div>

                   <div className="col-right">
                   <label htmlFor="" className='label-input'>Truyền động</label>
                            <div className="line-form">
                                <div className="wrap-input">
                                    <input type="text" readOnly className='inactive' />
                                </div>
                            </div>
                   </div>

                   <div className="col-left">
                   <label htmlFor="" className='label-input'>Loại nhiên liệu</label>
                            <div className="line-form">
                                <div className="wrap-input">
                                    <input type="text" readOnly className='inactive' />
                                </div>
                            </div>
                   </div>

                   <div className="col-right">
                   <label htmlFor="" className='label-input'>Mức tiêu thụ nhiên liệu (lít/100km)</label>
                            <div className="line-form">
                                <div className="wrap-input">
                                    <input type="text"  />
                                </div>
                            </div>
                   </div>

                   <h6 className="basic__infor-label">Mô tả</h6>
                   <div className="line-form end">
                            <textarea name="" id="" cols="30" rows="10" className='textarea' 
                             placeholder='Không sử dụng xe vào mục đích phi pháp. Lái xe cẩn thận, giữ xe sạch sẽ, trả xe đúng giờ. Phụ thu 500k nếu hút thuốc lá trong xe.'>
                            </textarea>
                    </div>

                    <input className="btn-save" type='submit' value='Lưu thay đổi'/>
                </div>
           </form>          
        </div>
    );
}

export default BasicInfor;