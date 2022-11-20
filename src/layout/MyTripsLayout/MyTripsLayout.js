import './styles.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import MyTripsItem from '../../components/MyTripsItem/MyTripsItem';

function MyTrips() {
    return (
        <div id='mytrips'>
            <div className="mytrips__container">
                <div className="mytrips__nav-bar">
                    <ul>
                        <li><Link to=''>Chuyến hiện tại</Link></li>
                        <li><Link to=''>Lịch sử chuyến</Link></li>
                    </ul>
                </div>
                <div className="mytrips__content">
                    <div className="trips__layout">
                        {/* <div className="trips-no-car">
                            <img src="https://www.mioto.vn/static/media/trips.d2edc6d9.svg" alt="" />
                            <p>Bạn chưa có chuyến nào, hãy thuê ngay một chiếc xe để trải nghiệm dịch vụ của Mioto</p>
                            <button className="btn-search-car-now">
                                TÌM XE NGAY
                            </button>
                        </div> */}


                        <div className="trips-has-car">
                          <MyTripsItem/>
                          <MyTripsItem/>
                          <MyTripsItem/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyTrips;