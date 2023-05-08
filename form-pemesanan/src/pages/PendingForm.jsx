import React from "react";
import { Button } from "react-bootstrap";
import Navbar from "../templates/Navbar_Com";

function PendingForm(){
    return(
        <>
        <Navbar/>
        <div id="form_layout">
            <div id="form_title">
                <h2>Lembar Kerja Konveksi Gundjaja Abadi</h2>
                <h2>Jenis Produk <input type="text" /></h2> 
            </div>
            <div>
            <h3>Tanggal <input type="text" /></h3>
            <h3>Nama Pemesan <input type="text" /></h3>
            </div>
        </div>
        </>
    )
}
export default PendingForm;