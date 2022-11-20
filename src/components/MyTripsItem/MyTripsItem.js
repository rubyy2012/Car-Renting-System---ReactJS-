
import './styles.scss';
import img from '../../assets/images/Car/car.jpg';
function MyTripsItem() {
    return (
        <div className="mytrips__item-layout">
            <div className="mytrips__item-box">
                <h2>TOYOTA VIOS E 2020</h2>
                    <div className="trips-item-content">
                        <img src={img} alt="" />
                        <div className="trips-infor">
                            <p>Bắt đầu:  Thứ 5, 17/11/2022 </p>
                            <p>Kết thúc: Thứ 6, 18/11/2022</p>
                            <h6>Tổng tiền 908K</h6>
                        </div>
                    </div>
            </div>
            <div className="mytrips__item-status">
                <p>Đang chờ phê duyệt</p>
            </div>
        </div>
    );
}

export default MyTripsItem;