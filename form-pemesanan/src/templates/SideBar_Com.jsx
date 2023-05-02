import React, { useState } from 'react';
import "../styles/Sidebar_style.css";
import SidebarItem from "./SidebarItem"

import items from "../utils/sidebar.json"

const Sidebarcom = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
        <div className='mainSideBar'>
          <div className="sidebar">
            { items.map((item, index) => <SidebarItem key={index} item={item} />) }
          </div>

        </div>

    </>
  );
};

export default Sidebarcom;