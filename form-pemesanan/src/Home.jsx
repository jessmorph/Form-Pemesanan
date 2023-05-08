import React from "react";
// import { Button, Form } from "react-bootstrap";
// import Formcom from "./components/Form_Com";
// import Logincom from "./components/Login_Com";
import Sidebarcom from "./templates/SideBar_Com";
import SizeCheck from "./components/tester/SizeCheck";
import Invoice from "./components/tester/Invoice";
import 'bootstrap/dist/css/bootstrap.min.css';


function Home(){
    return(
        <>
            <div>
                {/* <Logincom></Logincom> */}
                {/* <SizeCheck></SizeCheck> */}
                <Invoice></Invoice>
                
            </div>
        </>
    )
}
export default Home;