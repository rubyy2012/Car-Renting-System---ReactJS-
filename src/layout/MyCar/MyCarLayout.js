
import { useEffect, useState } from 'react';
import MycarItem from '../../components/MyCarItem/MycarItem';
import * as request from '../../utils/request';
import './styles.scss';
function MyCarLayout() {

   const [idStatus,setIdStatus] = useState(0)
   const [listCars,setListCars] = useState([])
    useEffect(()=>{
        const getApi = async () => {
            try
            {
                const res =  await request.getWithToken(`Car/mycar/${idStatus}`)
                setListCars(res)
            }
            catch(error)
            {
                console.log("The error is ",error)
            }
        }
        getApi()
    },[idStatus])

        console.log("ListCar",listCars)
        console.log(idStatus)
   if(listCars)
   {
    return (
        <div className='mycars__body' >
            <div className="mycars__container">
            <div className="mycars__wrapper">
                <div className="mycars__filter">
                    <div className="filter-status">
                        <h2>TRẠNG THÁI</h2>
                        <select name="statusCar" id="" onChange={e=>setIdStatus(e.target.value)}>
                            <option value="0" >Tất cả xe</option>
                            <option value="1" >Đang chờ duyệt</option>
                            <option value="2">Đã bị từ chối</option>
                            <option value="3">Đang hoạt động</option>
                            <option value="4">Đã cho thuê</option>
                        </select>
                    </div>
                </div>
                  <div className="mycars__results-filter">
                    <div className="results-filter-wrapper">
                    {
                        listCars.map(car=>(
                            <MycarItem key={car.id} myCar={car}/>
                        ))
                    }
                    </div>
                  </div>                   
                </div>
            </div>
        </div>
        
        //  </div>
    );
   }
}

export default MyCarLayout;