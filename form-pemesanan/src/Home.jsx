import React from "react";
import { Button, Form } from "react-bootstrap";
import Formcom from "./components/Form_Com";
import Logincom from "./components/Login_Com";
import Sidebarcom from "./templates/SideBar_Com";

function Home(){
    return(
        <>
            <div>
                {/* <Logincom></Logincom> */}
                <Sidebarcom></Sidebarcom>
                
            </div>
        </>
    )
}
export default Home;