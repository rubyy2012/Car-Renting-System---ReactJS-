
import './styles.scss';
import { FaEdit } from "react-icons/fa";
import Avatar from '../../components/Avatar/Avatar';
function ProfileLayout(props) {
   
    return (
        <>
        <div className="body__profile">
            <div className="background-profile" style={{ backgroundImage: `url("https://as2.ftcdn.net/v2/jpg/02/82/00/75/1000_F_282007508_wdCUP7hUMNK1Cuzj7XmOcFmzyzJ0Nnp9.jpg")`,
                                                         backgroundSize:'cover',
                                                         backgroundRepeat:'no-repeat'                                                  
                                                      }}>

            </div>
            <div className="profile-sec">
                <div className="content-profile--new">
                    <div className="desc-profile desc-account">
                        <div className="avatar-box">
                            <div className="avatar-box--layout">
                                 <Avatar/>
                            </div>
                        </div>
                        <div className="snippet">
                            <div className="profile-infor">
                                <div className="item-content">
                                    <div className="item-title">
                                        <h2>Hồng Ngọc</h2>
                                        <span>
                                            <button className='btn-edit--user' onClick={props.openUser}>
                                                <FaEdit className='icon-edit-user'/>
                                            </button>
                                        </span>
                                    </div>
                                    <div className="d-flex">
                                        Tham gia: 26/12/2020
                                    </div>
                                </div>
                            </div>
                            <div className="line-infor">
                                <div className="d-flex">
                                    <div className="infor">
                                        <span className="label">Ngày sinh </span>
                                        <span className="ctn">01/01/1950</span>
                                    </div>
                                    <div className="infor">
                                        <span className="label">Giới tính </span>
                                        <span className="ctn">Nữ</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <div className="desc-profile">
                        <div className="information information--desc">
                            <div className="inside">
                                <ul>
                                    <li> 
                                        <span className="label">
                                            Điện thoại
                                            <button className='btn-edit--user' onClick={props.openPn}><FaEdit className='icon-edit-user'/></button>
                                        </span> 
                                    </li>

                                    <li> 
                                        <span className="label">
                                            GPLX
                                            <button className='btn-edit--user' onClick={props.openGP}><FaEdit className='icon-edit-user'/></button>
                                        </span> 
                                        <span className="ctn">
                                            <label>Chưa xác thực GPLX</label>
                                        </span>
                                    </li>
                                    <li> 
                                        <span className="label">
                                            Email
                                            <button className='btn-edit--user' onClick={props.openEmail}><FaEdit className='icon-edit-user'/></button>
                                        </span> 
                                    </li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        {/* <EditPhoneNumber/> */}
        </>
    );
}

export default ProfileLayout;