import React, { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import { useLocation, Link} from 'react-router-dom';
import "../styles/Login_style.css";
import "../styles/Default_style.css";
import { database } from "../utils/database";

const Logincom = ({ setIsLoggedIn }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessages, setErrorMessages] = useState({});
// console.log(username, password);

const errors = {
    username: "Invalid username",
    password: "Invalid password",
    noUsername: "Please enter your username",
    noPassword: "Please enter your password",
  };

// const onSubmit = async (values) =>{
//   setError(null);
//   const response = await
// }


  const handleSubmit = (e) => {
    // Prevent page from reloading
    e.preventDefault();

    if (!username) {
      // Username input is empty
      setErrorMessages({ name: "noUsername", message: errors.noUsername });
      return;
    }

    if (!password) {
      // Password input is empty
      setErrorMessages({ name: "noPassword", message: errors.noPassword });
      return;
    }
    const currentUser = database.find((user) => user.username === username);

    if (currentUser) {
      if (currentUser.password !== password) {
        // Wrong password
        setErrorMessages({ name: "password", message: errors.password });
      } else {
        // Correct password, log in user
        setErrorMessages({});
        setIsLoggedIn(true);
      }
    } else {
      // Username doens't exist in the database
      setErrorMessages({ name: "username", message: errors.username });
    }
  };


// Render error message
const renderErrorMsg = (name) =>
    name === errorMessages.name && (
      <p className="error_msg">{errorMessages.message}</p>
    );

    return(
        <>
        <div className="container">
            <Card className="card">
                <h1 className="title logo border">LOGO</h1>
                <h1 className="title">Sign In</h1>
                <p className="subtitle">Welcome To Konveksi Gundjaja Abadi</p>
                <Form onSubmit={handleSubmit}>
                    <div className="inputs_container">
                        <input 
                        type="text" 
                        placeholder="Username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}/>
                        {renderErrorMsg("username")}
                        {renderErrorMsg("noUsername")}
                        
                        <input 
                        type="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                        {renderErrorMsg("password")}
                        {renderErrorMsg("noPassword")}
                    </div>
                    <Link to="/onProgress">
                      <Button class="btn login_button" variant="primary">Log In</Button>{' '}
                    </Link>
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