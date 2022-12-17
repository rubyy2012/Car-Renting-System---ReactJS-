import React, { useEffect, useState } from 'react';
import './styles.scss';
import ButtonAccess from '../Forms/ButtonAccess/ButtonAccess';
import { BiSearch } from "react-icons/bi";
import request from '../../utils/request';
function FormSearching() {
    // function FormSearching({districts,handleChangeDistrict,wards}) {
    const [districts, setDistricts] = useState([])
    const [wards,setWards] = useState([])

    const [startDate,setStartDate] = useState('')
    const [endDate,setEndDate] = useState('')
    const [idWard,setIdWard] = useState('')
    const [idDistrict,setIdDistrict] = useState('490')

    const [dataSend,setDataSend] = useState({
        IdDistrict: idDistrict,
        IdWard: idWard||'',
        Start: startDate||'',
        End: endDate||''
    })
    const handleChangeDistrict = (e) => {
        const getIdDistrict = e.target.value
        setIdDistrict(getIdDistrict)
        setDataSend({...dataSend,[e.target.name]:e.target.value})
    }
    const handleChangeWard = (e) => {
        const getIdWard = e.target.value
        setIdWard(getIdWard)
        setDataSend({...dataSend,[e.target.name]:e.target.value})
    }
    const handleStartDate = (e) => {
        setStartDate(e.target.value)
        setDataSend({...dataSend,[e.target.name]:e.target.value})
    }

    const handleEndDate = (e) => {
        setEndDate(e.target.value)
        setDataSend({...dataSend,[e.target.name]:e.target.value})
    }
        useEffect(()=>{
 
        const getDistrict = async () => {
            try {
                const res = await request.get('District')
                setDistricts(res.data)
                setIdDistrict(res.data[0].id)
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

        //Handle API
        const handleSubmit = async() => {
                let newObj = {}
                for(let key in dataSend){
                    console.log(dataSend[key]);
                    if(dataSend[key]!=='')
                        {
                            newObj[key]=dataSend[key]
                        } 
                 }
                const res = await request.get(`Car/find`,{params:newObj})
                localStorage.setItem('searchResults',JSON.stringify(res.data))
                localStorage.setItem('keySearch',JSON.stringify(dataSend))
                window.open('/find-cars')
        }

        const startDefault = new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0];
        const endDefault = new Date(new Date().setDate(new Date().getDate() + 2)).toISOString().split('T')[0];
    return (
        <div className="main__wrapper-layout ">
        <div className="main__wrapper-search">
            <div className="wrapper__search-layout">
                <form action="">
                         <div className=' pick__up-location'>
                            <div className='choose_location pick__up-district'>
                                <label htmlFor="" className='label__form-search'>Chọn quận</label>
                                <select 
                                    className='pick-up'
                                    name='IdDistrict'
                                    onChange={e=>handleChangeDistrict(e)} 
                                    value={idDistrict||''}>
                                        {
                                            districts.map((district)=>(
                                                <option value={district.id} 
                                                        key={district.id}>
                                                        {district.name}
                                                </option>
                                            ))
                                        }
                                </select>
                            </div>

                            <div className='choose_location pick__up-ward'>
                                <label htmlFor="" className='label__form-search'>Chọn phường</label>
                                <select 
                                    className='pick-up'
                                    name='IdWard' 
                                    value = {idWard||''}
                                    onChange={e=>handleChangeWard(e)}>
                                  {wards.map((ward) => (
                                    <option key={ward.id} value={ward.id}>{ward.name}</option>
                                  ))}
                                </select>
                            </div>
                            </div>
                    <label htmlFor="" className='label__form-search'>Bắt đầu</label>
                        <p className='time-field'>
                            <input 
                                type="date" 
                                name='Start'
                                onChange={e=>handleStartDate(e)}
                                value = {startDate||startDefault}
                                min={new Date().toISOString().split('T')[0]}
                            /> 
                        </p>
                    
                    <label htmlFor="" className='label__form-search'>Kết thúc</label>
                        <p className='time-field'>
                            <input
                                type="date" 
                                name='End'
                                onChange={e=>handleEndDate(e)}
                                value = {endDate||endDefault}
                                min={startDate}
                            /> 
                        </p>
                    <ButtonAccess 
                        namebtn='TÌM XE NGAY'  
                        icon=<BiSearch/> 
                        className='icon_search'                       
                        onHandleSubmit = {handleSubmit}                          
                    />
                </form>
                 
            </div>
        </div>
    </div>
    );
}

export default FormSearching;