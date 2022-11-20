
import CarCarousel from '../../components/Forms/Carousel/CarCarousel';
import MycarItem from '../../components/MyCarItem/MycarItem';
import './styles.scss';
function MyCarLayout() {

    const ListCar = [
        {
            Id:1,
            Name: 'HYUNDAI GRAND I10 SEDAN 2018',
            type:'Số sàn',
            Cost: 800,
            address: 'P.Tân Chính, Q.Thanh Khê',
            numberStar:4.9
        },
        {
            Id:2,
            Name: ' TOYOTA COROLLA CROSS G 2020',
            type:'Số tự động',
            Cost: 790,
            address: 'P.Thạc Gián, Q.Thanh Khê',
            numberStar:4.7
        },
        {
            Id:3,
            Name: ' CHEVROLET SPARK 2018',
            type:'Số tự động',
            Cost: 1120,
            address: 'P.Hòa Khánh Bắc, Q.Liên Chiểu',
            numberStar:4.8
        },
        {
            Id:4,
            Name: ' SUZUKI ERTIGA 2016',
            type:'Số sàn',
            Cost: 950,
            address: 'P.Hòa Cường Bắc, Q.Hải Châu',
            numberStar:4.9
        },
        {
            Id:5,
            Name: 'TOYOTA WIGO 2019',
            type:'Số sàn',
            Cost: 1000,
            address: 'P.Hòa An, Q.Cẩm Lệ',
            numberStar:4.5
        },
        {
            Id:6,
            Name: 'SUZUKI XL7 2020',
            type:'Số tự động',
            Cost: 780,
            address: 'P.An Hải Bắc, Q.Sơn Trà',
            numberStar:4.8
        },
        {
            Id:7,
            Name: 'HONDA BRIO RS 2021',
            type:'Số sàn',
            Cost: 840,
            address: 'P.Bắc Mỹ An, Q.Ngũ Hành Sơn',
            numberStar:4.9
        },
        {
            Id:8,
            Name: 'KIA SOLUTO 2019',
            type:'Số tự động',
            Cost: 900,
            address: 'P.Thọ Quang, Q.Sơn Trà',
            numberStar:4.8
        },
        {
            Id:9,
            Name: 'KIA SOLUTO 2019',
            type:'Số tự động',
            Cost: 900,
            address: 'P.Thọ Quang, Q.Sơn Trà',
            numberStar:4.8
        },
        {
            Id:10,
            Name: 'KIA SOLUTO 2019',
            type:'Số tự động',
            Cost: 900,
            address: 'P.Thọ Quang, Q.Sơn Trà',
            numberStar:4.8
        },
    ]
    return (
        <div className='mycars__body' >
            <div className="mycars__container">
            <div className="mycars__wrapper">
                <div className="mycars__filter">
                    <div className="filter-status">
                        <h2>TRẠNG THÁI</h2>
                        <select name="" id="">
                            <option value="">Đang chờ duyệt</option>
                            <option value="">Đã bị từ chối</option>
                            <option value="">Đang hoạt động</option>
                            <option value="">Đã cho thuê</option>
                        </select>
                    </div>
                </div>
                  <div className="mycars__results-filter">
                    <div className="results-filter-wrapper">
                    <MycarItem/>
                    <MycarItem/>
                    <MycarItem/>
                    {/* {
                        ListCar.map((item,index)=>(
                            <div className="results-filter-layout">
                            {<CarCarousel itemCar = {item}/>}
                            </div>
    
                        ))
                    } */}
                    </div>
                  </div>                   
                </div>
            </div>
        </div>
        
        //  </div>
    );
}

export default MyCarLayout;