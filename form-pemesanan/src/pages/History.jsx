import React from "react";
import { Button } from "react-bootstrap";
import Navbar from "../templates/Navbar_Com";

function History(){
    return(
        <>
        <div>
            <Navbar/>
            <div class="d-flex mx-auto flex-column mt-5" >
                <Button class="btn btn-primary btn-block btn-sm" variant="primary">+ Add Role</Button>{' '}
                <div class="table-responsive" >
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
        </>
    )
}
export default History;