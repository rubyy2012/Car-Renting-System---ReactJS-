import './styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import sourceImage from './srcImg';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok} from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";
import { FaYoutube} from "react-icons/fa";
import { IconContext } from 'react-icons'

function Footer() {
    return (
        <IconContext.Provider value ={{className:'social__icon-item'}}>
        <div>
            <footer id='footer'>
               <div className="footer__container">
                 {/* <div className="row row__info"> */}
                 <div className="row__info">
                    {/* <div className="col-1"> */}
                    <div className="column1">
                        <img src={sourceImage.logo} alt="" />
                        <div className="social__icon">
                          <FaFacebook/>
                          <FaInstagram/>
                          <FaTiktok/>
                          <FaTwitter/>
                          <FaYoutube/>
                        </div>
                    </div>
                    {/* <div className="col-2"> */}
                    <div className="column2">
                    <div className='row'>
                       <div className="col-4">
                        <ul>
                            <li><b>CHÍNH SÁCH</b></li>
                            <li><a href=''>Giới thiệu về Mioto</a></li>
                            <li><a href=''>Chính sách và quy định</a></li>
                            <li><a href=''>Quy chế hoạt động</a></li>
                            <li><a href=''>Bảo mật thông tin</a></li>
                            <li><a href=''>Giải quyết tranh chấp</a></li>
                        </ul>
                       </div>
                       <div className="col-4">
                       <ul>
                            <li><b>TÌM HIỂU THÊM</b></li>
                            <li><a href=''>Hướng dẫn chung</a></li>
                            <li><a href=''>Hướng dẫn đặt xe</a></li>
                            <li><a href=''>Hướng dẫn dành cho chủ xe</a></li>
                            <li><a href=''>Hướng dẫn thanh toán</a></li>
                            <li><a href=''>Hỏi và trả lời</a></li>
                            <li><a href=''>Mioto blog</a></li>
                        </ul>
                       </div>
                       <div className="col-4">
                       <ul>
                            <li><b>ĐỐI TÁC</b></li>
                            <li><a href=''>Đăng ký chủ xe Mioto</a></li>
                            <li><a href=''>Đăng ký GPS MITRACK 4G</a></li>
                            <li><a href=''>Đăng ký Bảo hiểm vật chất & Bảo hiểm TNDS xe ô tô</a></li>
                        </ul>
                       </div>
                    </div>
                    </div>
                 </div>
                 <div className="module__payment">
                 <div className="row row__banking">
                    <h4 className='payment__title'><b>CÁCH THỨC THANH TOÁN</b></h4>
                    <div className="payment__credit">
                        <div className="payment__credit-item">
                            <img src={sourceImage.momo} alt="error" />
                        </div>
                        <div className="payment__credit-item">
                             <img src={sourceImage.vnpay} alt="error" />
                        </div>
                        <div className="payment__credit-item">
                             <img src={sourceImage.alepay} alt="error" />  
                        </div>
                        <div className="payment__credit-item">
                             <img src={sourceImage.visa} alt="error" />
                        </div>
                    </div>
                 </div>
                 </div>

               </div>
            </footer>
        </div>
        </IconContext.Provider>
    );
}

export default Footer;
