import ModalLayout from '../../Modal/ModalLayout';
import ButtonAccess from '../ButtonAccess/ButtonAccess';
import { FaUserCheck } from "react-icons/fa";
import { BiCalendar } from "react-icons/bi";
import './styles.scss';
import { useState } from 'react';
import * as request from '../../../utils/request';

function EditInforUser(props) {
    //HANDLE API
    const [data,setData] = useState({
        fullname: '',
        dateOfBirth :  '',
        gender: ''
    })

    const newData = [{
        "path": "fullname",
         "op":"replace",
         "value":data.fullname
    },
    {
        "path": "dateOfBirth",
         "op":"replace",
         "value":data.dateOfBirth
    },
    {
        "path": "gender",
         "op":"replace",
         "value":data.gender
    }]
    const handleOnChange = (e) => {
        setData({...data,[e.target.name]:e.target.value})
        // console.log(data)
    }
    const handleSubmit = async () => {
        try
        {
            console.log(newData)
            const res = await request.patch('Account',newData)
            setData(res)
            console.log(res)
            window.location.reload()
        }
        catch(error)
        {
            console.log("Something errors in edit infor user",error)
        }
    }
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
                            <input 
                                type="text" 
                                id='fullname' 
                                name='fullname' 
                                value={data.fullname}
                                onChange={e=>handleOnChange(e)}
                                />
                        </div>                  
                        <div className="input__wrapper">
                            <BiCalendar width={30} size={24}/>
                            <input 
                                type="date" 
                                value ={data.dateOfBirth} 
                                id='dateOfBirth' 
                                name='dateOfBirth' 
                                onChange={e=>handleOnChange(e)}
                                />
                        </div>  
                       <select 
                                name="gender" 
                                value={data.gender} 
                                onChange={e=>handleOnChange(e)}>
                                <option value='Female'>Female</option>
                                <option value='Male'>Male</option>
                       </select>
                    </div>
                    <div className="user__btn-wrapper">
                        <ButtonAccess namebtn="Cập nhật" onHandleSubmit={handleSubmit} />
                    </div>
                </form>
              </div>
            </div>
        </ModalLayout>
    );
}

export default EditInforUser;