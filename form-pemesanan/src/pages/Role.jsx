import React, { useState } from "react";
import { Button, Modal, Form, Table} from "react-bootstrap";
import Navbar from "../templates/Navbar_Com";
// import { createUser } from '../logics/addRole'
import "../styles/role_style.css";

function AddRoleModal(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [confirmPass, setConfirmPassword] = useState("");
  const [error, setError] = useState('');

  // Handle name input change
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  // Handle role input change
  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };
  // Handle password input change
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

    // Handle Confirm password input change
    const handleConfirmPasswordChange = (event) => {
      setConfirmPassword(event.target.value);
    };



  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if(confirmPass != password){
      setError('Passwords do not match');

    }
    else{
      setError("");
      setUsername("");
      setRole("");
      setPassword("");
      setConfirmPassword("");
      props.onAddRole({ username, password, role });
      props.onHide();
      
    }

  };

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Tambah User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formRoleName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={username}
              required
              onChange={handleUsernameChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formRolePassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={password}
              required
              onChange={handlePasswordChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formRoleConfPass">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Passowrd"
              value={confirmPass}
              required
              onChange={handleConfirmPasswordChange} 
            />
            {error && <p className="confPass">{error}</p>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formRole">
            <Form.Label>Role</Form.Label>
            <Form.Select aria-label="Default select example" onChange={handleRoleChange} value={role} placeholder="Select Role" required>
              <option value="">-- Open this select menu --</option>
              <option value="Master">Master</option>
              <option value="Staff">Staff</option>
              
            </Form.Select>
          </Form.Group>
          
        
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

function Role() {
  const [roles, setRoles] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Add new role to table
  const handleAddRole = (newRole) => {
    setRoles([...roles, { id: roles.length + 1, ...newRole }]);
  };

  return (
    <>
    <Navbar/>
    <div className="d-flex flex-column mt-5">
      <Button className="btn_addRole" variant="primary" onClick={() => setShowModal(true)}>
       + Tambah User
      </Button>
      <AddRoleModal
        show={showModal}
        onHide={() => setShowModal(false)}
        onAddRole={handleAddRole}
      />
      <Table striped bordered hover className="mx-auto">
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            <th colSpan="2">Aksi</th>
            
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr className="text-center" key={role.id}>
              <td>{role.id}</td>
              <td>{role.name}</td>
              <td>{role.role}</td>
              <td><Button>edit</Button></td>
              <td><Button>dlet</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
    </>
  );
}

export default Role;
