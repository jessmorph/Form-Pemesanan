import React, { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import "../styles/Login_style.css";
import "../styles/Default_style.css";
import { database } from "../utils/database";

const Logincom = ({ setIsLoggedIn }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessages, setErrorMessages] = useState({});
// console.log(username, password);

const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  });
  const data = await response.json();
  if (response.status === 200) {
    navigate('/onProgress');
  } else {
    console.log(data.message);
    alert("its working");
    navigate('/onProgress');
  }
};

    return(
        <>
          <div className="container">
            <Card className="card">
              <h1 className="title logo border">LOGO</h1>
              <h1 className="title">Sign In</h1>
              <p className="subtitle">Welcome To Konveksi Gundjaja Abadi</p>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formRoleName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={username}  
                    required
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formRolePassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
                      value={password}
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    </Form.Group>
                    
                    <Button type="submit" className="btn login_button" variant="primary">Log In</Button>{' '}  
                    <div className="link_container">
                      <a href="" className="small">
                        Forgot Password?
                      </a>
                  </div>
                </Form>
            </Card>
        </div>
    </>
    )
}
export default Logincom;