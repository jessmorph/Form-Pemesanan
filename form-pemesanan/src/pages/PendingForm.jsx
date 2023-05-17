import React, { useState } from 'react';
import { Button, Dropdown } from "react-bootstrap";
import Navbar from "../templates/Navbar_Com";
import InputForm from "../pages/InputForm";


function PendingForm() {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };

    return (
        <>
            <Navbar />
            <div className="rowMain row border mt-5">
      <Dropdown show={showDropdown} onToggle={toggleDropdown}>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          Dropdown
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>
            <InputForm />
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
        </>
    )
}
export default PendingForm;