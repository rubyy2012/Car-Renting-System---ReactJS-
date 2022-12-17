import './styles.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import 'react-calendar/dist/Calendar.css';
import { useEffect } from 'react';
import request from '../../utils/request';
function FindCarLayout() {
    //GET DATA FROM HOME'S RESULTS SEARCHING
    const originData =  JSON.parse(localStorage.getItem('searchResults'||[]))
    let keySearch = JSON.parse(localStorage.getItem('keySearch'||{}))
    const [idDistrict,setIdDistrict] = useState(keySearch.IdDistrict)
    const [idWard,setIdWard] = useState(keySearch.IdWard)
    const [startDate,setStartDate] = useState(keySearch.Start)
    const [endDate,setEndDate] = useState(keySearch.End)
    const [districts, setDistricts] = useState([])
    const [wards,setWards] = useState([])
    const [carResults,setCarsResults] = useState(originData||[])
    const [searchField] = useState({...keySearch,
        IdCarBrand:'',
        IdTransmission:'',
        Capacity:'',
        SortBy:''
    })
    const handleChangeDistrict = async (e) => {
        const getIdDistrict = e.target.value
        setIdDistrict(getIdDistrict)
        const districtChange = {...searchField,[e.target.name]:e.target.value}
        let newObj = {}
        for(let key in districtChange){
            if(districtChange[key]!=='')
                {
                    newObj[key]=districtChange[key]
                } 
         }
        const res = await request.get(`Car/find`,{params:newObj})
        setCarsResults(res.data)
        //OK
    }
    const handleChangeWard = async (e) => {
        // const getIdWard = e.target.value
        // setIdWard(getIdWard)
        const wardChange = {...searchField,[e.target.name]:e.target.value}
        let newObj = {}
        for(let key in wardChange){
            if(wardChange[key]!=='')
                {
                    newObj[key]=wardChange[key]
                } 
         }
        const res = await request.get(`Car/find`,{params:newObj})
        setCarsResults(res.data)
        console.log(res.data)
        //OK
    }


    const [aux,setAux] = useState({
        IdCarBrand:'',
        IdTransmission:'',
        Capacity:'',
        SortBy:'',
        Start:'',
        End:''
    })
    const [keySort,setIdKeySort] = useState('he')
    const [idBrand,setIdBrand] = useState('')
    const [idCapacity,setIdCapacity] = useState('')
    const [idTransmission,setIdTransmission] = useState('')

    const handleChangeKeySort= async (e) => {
        setIdKeySort(e.target.value)
        const auxChange = {...searchField,[e.target.name]:e.target.value}
        let newObj = {}
        for(let key in auxChange){
            if(auxChange[key]!=='')
                {
                    newObj[key]=auxChange[key]
                } 
         }
        const res = await request.get(`Car/find`,{params:newObj})
        setCarsResults(res.data)
        console.log(res.data)
    }
    const handleChangeBrand= async (e) => {
        setIdBrand(e.target.value)
        const auxChange = {...searchField,[e.target.name]:e.target.value}
        let newObj = {}
        for(let key in auxChange){
            if(auxChange[key]!=='')
                {
                    newObj[key]=auxChange[key]
                } 
         }
        const res = await request.get(`Car/find`,{params:newObj})
        setCarsResults(res.data)
        console.log(res.data)
    }
    const handleChangeCapacity= async (e) => {
        setIdCapacity(e.target.value)
        const auxChange = {...searchField,[e.target.name]:e.target.value}
        let newObj = {}
        for(let key in auxChange){
            if(auxChange[key]!=='')
                {
                    newObj[key]=auxChange[key]
                } 
         }
        const res = await request.get(`Car/find`,{params:newObj})
        setCarsResults(res.data)
        console.log(res.data)
    }
    const handleChangeTransmission = async (e) => {
        setIdTransmission(e.target.value)
        const auxChange = {...searchField,[e.target.name]:e.target.value}
        let newObj = {}
        for(let key in auxChange){
            if(auxChange[key]!=='')
                {
                    newObj[key]=auxChange[key]
                } 
         }
        const res = await request.get(`Car/find`,{params:newObj})
        setCarsResults(res.data)
        console.log(res.data)
    }
    useEffect(()=>{
 
        const getDistrict = async () => {
            try {
                const res = await request.get('District')
                setDistricts(res.data)
                setIdDistrict(idDistrict)
            }

            catch(error)
            {
                console.log('districts:something error')
            }  
        }
        getDistrict()},[])

       useEffect(()=>{
            const getWards = async() => 
            {
                try
                {
                    const res = await request.get(`District/${idDistrict}`)
                    setWards(res.data)
                }
                catch(error)
                {
                    console.log('wards:something error',error)
                }   
            }
            getWards()     
        },[idDistrict])

        const handleStartDate = async(e) => {
            setStartDate(e.target.value)
            const auxChange = {...searchField,[e.target.name]:e.target.value}
            let newObj = {}
            for(let key in auxChange){
                if(auxChange[key]!=='')
                    {
                        newObj[key]=auxChange[key]
                    } 
            }
            const res = await request.get(`Car/find`,{params:newObj})
            setCarsResults(res.data)
            console.log(res.data)
            //ok
        }
    
        const handleEndDate = async(e) => {
            setEndDate(e.target.value)
            const auxChange = {...searchField,[e.target.name]:e.target.value}
            let newObj = {}
            for(let key in auxChange){
                if(auxChange[key]!=='')
                    {
                        newObj[key]=auxChange[key]
                    } 
            }
            const res = await request.get(`Car/find`,{params:newObj})
            setCarsResults(res.data)
            console.log(res.data)
            //ok
        }

        //load API Infor Search
        const [auxInfor,setAuxInfor] = useState([])
        const [listBrands,setListBrands] = useState([])
        const [keySorts, setKeySorts] = useState([])
        useEffect(()=>{
            const getInfor = async()=>{
                try
                {
                    const res = await request.get(`Car/CarMoreInfor`)
                    setAuxInfor(res.data)
                }
                catch(error)
                {
                    console.log('get infor in find cars page',error)
                }
            }
            getInfor()


            const getCarBrand = async () => {
                try
                {
                    const res = await request.get(`Brand`)
                    setListBrands(res.data)
                }
                catch(error)
                {
                    console.log('errors: get car brand in find cars page',error)
                }
            }
            getCarBrand()

            const getKeySort = async()=> {
                try
                {
                    const res = await request.get(`Car/sortby`)
                    setKeySorts(res.data)
                }
                catch(error)
                {
                    console.log('errors: get keysort in find cars page',error)
                }
            }
            getKeySort()
        },[])
    if(carResults)
    return (
        <div className='finding__cars-container'>
            <div className="container finding__cars-layout">
                <div className="navbar__search">
                    <div className="navbar__search-layout">
                        <div className="form-has-location">
                            <h6 className='finding-title'>Quận/Huyện</h6>
                            
                                <select 
                                    name= 'IdDistrict'
                                    value={idDistrict||''}
                                    className="finding-options"
                                    onChange={e=>handleChangeDistrict(e)}
                                >
                                        {
                                            districts.map((district)=>(
                                                <option value={district.id} 
                                                        key={district.id}>
                                                        {district.name}
                                                </option>
                                            ))
                                        }


                                </select>
                                <h6 className='finding-title'>Phường</h6>
                                <select 
                                    name='IdWard' 
                                    value = {idWard||''}
                                    onChange={e=>handleChangeWard(e)}
                                    className="finding-options">
                                    {wards.map((ward) => (
                                          <option key={ward.id} value={ward.id}>{ward.name}</option>
                                    ))}
                                </select>
                        </div>
                
                        <div className="form-has-timer">
                            <h6 className='finding-title'>Bắt đầu</h6>
                            <span className='date-container'>
                                <span className='date-value-display'>
                                    <input 
                                        type='date'
                                        name='Start'
                                        value={startDate||''}
                                        onChange={e=>handleStartDate(e)}
                                        min={new Date().toISOString().split('T')[0]}
                                    />
                                </span>
                            </span>


                            <h6 className='finding-title'>Kết thúc</h6>
                            <span className='date-container'>
                                <span className='date-value-display'>
                                    <input 
                                        type='date'
                                        name='End'
                                        value={endDate||''}
                                        onChange={e=>handleEndDate(e)}
                                        min={startDate}
                                        />
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="main__search">
                    <div className="cars__sidebar-filter">
                        <h6 className="finding-title">Sắp xếp</h6>
                        <select 
                            name="SortBy" 
                            value={keySort}
                            onChange={e=>handleChangeKeySort(e)}
                            id="" 
                            className="finding-options">
                            <option >--Tất cả--</option>

                        {
                            keySorts.sortby?keySorts.sortby.map(item=>(
                            <option key={item.id} value={item.nickname}>{item.name}</option>
                            )):''
                        }
                        </select>
        
                        <h6 className="finding-title">Hãng xe</h6>
                        <select 
                            name="IdCarBrand" 
                            value={idBrand}
                            onChange={e=>handleChangeBrand(e)}
                            id="" 
                            className="finding-options">
                            <option >--Tất cả--</option>
                        {
                            listBrands?listBrands.map(item=>(
                                <option key={item.id}value={item.id}>{item.name}</option>
                            )):''
                        }
                        </select>

                        <h6 className="finding-title">Truyền động</h6>
                        <select 
                            name="IdTransmission" 
                            value={idTransmission}
                            onChange={e=>handleChangeTransmission(e)}
                            id="" 
                            className="finding-options">
                            <option >--Tất cả--</option>
                        {
                            auxInfor.transmissions? auxInfor.transmissions.map(item=>(
                                <option key={item.id} value={item.id} >{item.name}</option>
                            )):''
                        }
                        </select>

                        <h6 className="finding-title">Loại xe (Số ghế)</h6>
                        <select 
                            name="Capacity" 
                            value={idCapacity}
                            onChange={e=>handleChangeCapacity(e)}
                            id="" 
                            className="finding-options">
                            <option >--Tất cả--</option>
                        {
                            auxInfor.capacities?auxInfor.capacities.map(item=>(
                            <option key={item.id} value={item.id}>{item.capacity} chỗ</option>
                            )):''
                        }
                        </select>
                    </div>
                    <div className="cars__display-list">
                      <div className="listcars__result-wrapper">
                          {carResults?(
                            <div className="has-cars">
                            {
                                carResults.map(car=>(
                                    <Link 
                                        to="" 
                                        key={car.id}
                                        className="result-car-item">
                                            <div className="image-car-box">
                                                <img src={car.image.path} alt="" />
                                                <div className="main-infor-box">
                                                    <h6 className='name-car'>{car.name}</h6>  
                                                    <p className='stars'>{car.numberStar} <AiFillStar/></p>
                                                </div>
                                            </div>

                                            <div className="location-box">
                                                <div className="type-and-price">
                                                    <p className="type-car">{car.transmission.name}</p>
                                                    <h5 className="price-car">{car.cost}K</h5>
                                                </div>
                                                <p className="address"> <GoLocation className='address-icon'/> {car.wardDto.name}, {car.districtDto.name}</p>
                                            </div>
                                     </Link>
                                ))
                            }
                            </div>
                          ):<div className='no-car'>Không tìm thấy xe nào.</div>} 
                      </div>
                    </div>
            </div>
        </div>
        </div>
    );
}

export default FindCarLayout;