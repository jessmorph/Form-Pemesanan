import React from "react";
import { Button } from "react-bootstrap";
import "./style/Login_style.css"

function Logcom(){
    return(
        <>
        <div id="form_layout">
            <div id="form_title">
                <h2>Lembar Kerja Konveksi Gundjaja Abadi</h2>
                <h2>Jenis Produk <input type="text" /></h2> 
            </div>
            <div> 
            <h3>Tanggal Pesan <input type="text" /></h3>
            <h3>Nama Pemesan <input type="text" /></h3>
            </div>
        </div>
        </>
    )
}
export default Logcom;