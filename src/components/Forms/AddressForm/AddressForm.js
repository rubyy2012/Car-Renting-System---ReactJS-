import './styles.scss';
import { BsAsterisk } from "react-icons/bs";

function AddressForm() {
    return (
        <div className=' address__form'>
            <div className="address__form-container">
                <div className="modal__content">
                    <div className="modal-header">
                        <button type='button' className='close'>
                            <span>x</span>
                        </button>
                        <h4 className="modal-title">
                            Chỉnh sửa địa chỉ
                        </h4>
                    </div>
                    <div className="modal-body">
                        <div className='edit-address__box form-default'>
                            <div className="line-form">
                                <label htmlFor="" className="label">
                                    Địa chỉ
                                    <BsAsterisk className='asterisk__icon'/>
                                </label>
                                <label htmlFor="" className="sublabel">
                                    Quận/Huyện
                                </label>
                                <div className="wrap-select">
                                    <select name="" id="">
                                        <option value="">Huyện Hòa Vang</option>
                                        <option value="">Quận Cẩm Lệ</option>
                                        <option value="">Quận Liên Chiểu</option>
                                        <option value="">Quận Ngũ Hành Sơn</option>
                                        <option value="">Quận Thanh Khê</option>
                                        <option value="">Quận Sơn Trà</option>
                                    </select>
                                </div>

                                <label htmlFor="" className="sublabel">
                                    Phường/Xã
                                </label>
                                <div className="wrap-select">
                                    <select name="" id="">
                                        <option value="">Phường Hòa Khánh Bắc</option>
                                        <option value="">Phường Hòa Khánh Nam</option>
                                        <option value="">Phường Hòa Hiệp Bắc</option>
                                        <option value="">Phường Hòa Hiệp Nam</option>
                                        <option value="">Phường Tân Chính</option>
                                        <option value="">Phường Bắc Mỹ An</option>
                                    </select>
                                </div>

                                <label htmlFor="" className="sublabel">
                                    Đường
                                </label>
                                <div className="wrap-input">
                                    <div className="here-autocomplete">
                                        <input type="text" placeholder='Nhập tên đường/tòa nhà' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wrap-2-btn marginTop-m">
                            <button className="btn btn-secondary btn--m">
                                Hủy bỏ
                            </button>
                            <button className="btn btn-primary btn--m disable-btn">
                                Áp dụng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddressForm;