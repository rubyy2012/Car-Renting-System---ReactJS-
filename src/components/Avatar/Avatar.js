import './styles.scss';
import avatar from '../../assets/images/Header/Avatar.jpg';
import { useState } from 'react';
function Avatar() {
    const [image,setImage] = useState('');
    return (
        <div className='avatar-wrapper'>
            <img src={avatar} alt="" />
            {/* <input type="file" 
                   onChange={e=>{
                    const file = e.target.file[0];
                    if(file&&file.type.subString(0,5)==='image')
                    {
                        setImage(file);
                    }
                   }} /> */}
        </div>
    );
}

export default Avatar;