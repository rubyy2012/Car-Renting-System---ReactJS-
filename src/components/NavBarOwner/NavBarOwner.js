import { BiCalendar, BiCar } from 'react-icons/bi';
import { VscDiffAdded } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import './style.scss';


function NavBarOwner() {
    return (
        <div className="sidebar-settings general-settings">
                        <ul>
                          <li> 
                            <Link to="/myCars"> 
                              <BiCar className="home__owner-icon"/>
                              <span className="label">Danh sách xe</span>
                            </Link>
                           </li>

                           <li> 
                             <Link to="">
                                <BiCalendar className="home__owner-icon"/>
                                <span>Lịch chung</span>
                              </Link>
                           </li>

                            <li> 
                             <Link to="/owner-home">
                                <VscDiffAdded className="home__owner-icon"/>
                                <span>Đăng ký xe</span>
                              </Link>
                           </li>
                        </ul>
                    </div>
    );
}

export default NavBarOwner;