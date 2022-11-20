import NavBarOwner from "../components/NavBarOwner/NavBarOwner";
import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";
import MyCarLayout from "../layout/MyCar/MyCarLayout";


function MyCars() {
    return (
        <>
            <Header/>
            <NavBarOwner/>
            <MyCarLayout/>
            <Footer/>
        </>
    );
}

export default MyCars;