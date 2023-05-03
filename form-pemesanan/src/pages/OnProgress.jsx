import React from "react";
import {useLocation} from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Navbar from "../templates/Navbar_Com";
import "../styles/Default_style.css";

const OnProgress = () => {
  const location = useLocation()
  
  return (
    <div>
            <Navbar/>
            <div>
                <div class="table-responsive " >
                    <table class="table table-striped table-bordered table-hover table-sm mx-auto text-center">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>ID</th>
                                <th>Nama</th>
                                <th>Role</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>a1212</td>
                                <td>John Doe</td>
                                <td>Master</td>
                                <td>john@example.com</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>b1212</td>
                                <td>Jane</td>
                                <td>Staff</td>
                                <td>jane@example.com</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>b1213</td>
                                <td>Bob Johnson</td>
                                <td>Staff</td>
                                <td>bob@example.com</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
  );
  }
  
  export default OnProgress;
  