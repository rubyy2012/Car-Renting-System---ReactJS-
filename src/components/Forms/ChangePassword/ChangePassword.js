import './styles.scss';
import { BiLock } from "react-icons/bi";
import FormInput from '../FormInput/FormInput';
import ButtonAccess from '../ButtonAccess/ButtonAccess';

function ChangePassword(props) {
    return (
        <div id="change__password">
            <div className="change__password-container">
                <div className="change__password-layout">
                    <div className="change__pw-header">
                        <button type='button' className='close' onClick={props.btnClose}>
                            <span>x</span>
                        </button>
                        <h4 className="change__pw-title">
                            Đổi mật khẩu
                        </h4>
                    </div>
                    <div className="change__pw-body">

                    <div className="input__wrapper">
                        <BiLock width={30} size={24}/>
                        <input type="text" placeholder='Mật khẩu hiện tại' id='' name='' required/>
                    </div>
                    <div className="input__wrapper">
                        <BiLock width={30} size={24}/>
                        <input type="text" placeholder='Mật khẩu mới' id='' name='' required/>
                    </div>
                    <div className="input__wrapper">
                        <BiLock width={30} size={24}/>
                        <input type="text" placeholder='Xác nhận mật khẩu mới' id='' name='' required/>
                    </div>
                    <ButtonAccess namebtn='CẬP NHẬT'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChangePassword;