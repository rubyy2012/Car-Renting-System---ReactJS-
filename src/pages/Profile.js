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
    const openPnLayout = () => {
        setPnLayout(!isPnLayout)
    }
    const [isEmailLayout,setEmailLayout] = useState(false);
    const openEmailLayout = () => {
        setEmailLayout(!isEmailLayout)
    }
    const [isGPLayout,setGPLayout] = useState(false);
    const openGPLayout = () => {
        setGPLayout(!isGPLayout)
    }
    const [isUserLayout,setUserLayout] = useState(false);
    const openUserLayout = () => {
        setUserLayout(!isUserLayout)
    }
    return (
        <>
            <div>
                <Header/>
                <ProfileLayout openGP = {openGPLayout} 
                               openEmail={openEmailLayout} 
                               openPn = {openPnLayout} 
                               openUser = {openUserLayout}/>
                <Footer/>
            </div>

            <>
             {isEmailLayout? <EditEmail close={openEmailLayout}/>:''}
             {isUserLayout? <EditInforUser close={openUserLayout}/>:''}
             {isPnLayout?  <EditPhoneNumber close={openPnLayout}/>:''}
             {isGPLayout? <FormGPLX close={openGPLayout}/>:''}
            </>
        </>

    );
}

export default Profile;