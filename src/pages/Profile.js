import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import ProfileLayout from "../layout/ProfileLayout/ProfileLayout";
import { useState } from "react";
import EditEmail from "../components/Forms/EditEmail/EditEmail";
import EditPhoneNumber from "../components/Forms/EditPhoneNumber/EditPhoneNumber";
import FormGPLX from "../components/GPLX/FormGPLX";
import EditInforUser from "../components/Forms/EditInforUser/EditInforUser";

function Profile() {
    const [isPnLayout,setPnLayout] = useState(false);
    const openPnLayout = (user) => {
        setPnLayout(!isPnLayout)
        setUserData(user)
    }
    const [isEmailLayout,setEmailLayout] = useState(false);
    const openEmailLayout = (user) => {
        setEmailLayout(!isEmailLayout)
        setUserData(user)
    }
    const [isGPLayout,setGPLayout] = useState(false);
    const openGPLayout = () => {
        setGPLayout(!isGPLayout)
    }
    const [isUserLayout,setUserLayout] = useState(false);
    const [userData, setUserData] = useState()
    const openUserLayout = (user) => {
        setUserData(user)
        setUserLayout(true)
    }
    console.log("userData",userData)

    const userToken = localStorage.getItem('userToken')
    return (
        <>
            <div>
                {userData?<Header userData={userData}/>:<Header/>}
                <ProfileLayout openGP = {openGPLayout} 
                               openEmail={openEmailLayout} 
                               openPn = {openPnLayout} 
                               openUser = {openUserLayout}
                               userToken = {userToken}
                               />
                <Footer/>
            </div>

            <>
             {isEmailLayout? <EditEmail 
                            close={openEmailLayout} 
                            userData = {userData}    
                            userToken = {userToken}
                            />:''}
             {isUserLayout? <EditInforUser 
                            close={()=>setUserLayout(false)}  
                            userData = {userData}    
                            userToken = {userToken}
                            />:''}
             {isPnLayout?  <EditPhoneNumber
                            close={openPnLayout}
                            userData={userData} 
                            userToken = {userToken}
                            />:''}
             {isGPLayout? <FormGPLX 
                            close={openGPLayout}
                            userToken = {userToken}
                            />:''}
            </>
        </>

    );
}

export default Profile;