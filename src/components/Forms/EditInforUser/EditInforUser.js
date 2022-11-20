import ModalLayout from '../../Modal/ModalLayout';
import ButtonAccess from '../ButtonAccess/ButtonAccess';
import FormInput from '../FormInput/FormInput';
import { FaUserCheck } from "react-icons/fa";
import { BiCalendar } from "react-icons/bi";
import './styles.scss';

function EditInforUser(props) {
    return (
        <ModalLayout>
            <div className="modal__user-infor">
            <div className="modal__user-layout">
                <form action="">
                    <div className="user__header">
                       <button type='button' className="btn-close" onClick={props.close}></button>
                        <h2 className='user__header-title'>Cập nhật thông tin</h2>
                    </div>
                    <div className="user__body">
                        <div className="input__wrapper">
                            <FaUserCheck width={30} size={24}/>
                            <input type="text" placeholder='Hồng Ngọc' id='fullName' name='fullName'/>
                        </div>                  
                        <div className="input__wrapper">
                            <BiCalendar width={30} size={24}/>
                            <input type="text" placeholder='20-12-2001' id='dob' name='dob'/>
                        </div>  
                       <select name="" id="">
                        <option value="">Nữ</option>
                        <option value="">Nam</option>
                       </select>
                    </div>
                    <div className="user__btn-wrapper">
                        <ButtonAccess namebtn="Cập nhật"/>
                    </div>
                </form>
              </div>
            </div>
        </ModalLayout>
    );
}

export default EditInforUser;