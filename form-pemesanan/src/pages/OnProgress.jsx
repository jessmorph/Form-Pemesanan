import React from "react";
import { useLocation } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
import Navbar from "../components/Navbar_Com";
import "../assets/styles/Default_style.css";
import "../assets/styles/OnProgress_style.css";

const OnProgress = () => {
    const location = useLocation()

    return (
        <div>
            
            <div className="row rowMain border mt-5">
                <div className="row">
                    <div className="col-1 border-end border-bottom d-flex justify-content-center align-items-center">
                        <span><strong>No.</strong></span>
                    </div>
                    <div className="col-1 border-end border-bottom d-flex justify-content-center align-items-center">
                        <span><strong>No PO</strong></span>
                    </div>
                    <div className="col-1 border-end border-bottom d-flex justify-content-center align-items-center">
                        <span><strong>Selesai</strong></span>
                    </div>
                    <div className="col-2 border-end border-bottom d-flex justify-content-center align-items-center">
                        <span><strong>Pemesan</strong></span>
                    </div>
                    <div className="col-2 border-end border-bottom d-flex justify-content-center align-items-center">
                        <span><strong>Form PO</strong></span>
                    </div>
                    <div className="col-2 border-end border-bottom d-flex justify-content-center align-items-center">
                        <span><strong>Form Desain</strong></span>
                    </div>
                    <div className="col-2 border-end border-bottom d-flex justify-content-center align-items-center">
                        <span><strong>Aksi</strong></span>
                    </div>
                    <div className="col-1 border-end border-bottom d-flex justify-content-center align-items-center">
                        <span><strong>Pembuat</strong></span>
                    </div>
                </div>

                <div className="row">
                    <div className="col-1 border-end border-bottom d-flex justify-content-center align-items-center">
                        <span>1</span>
                    </div>
                    <div className="col-1 border-end border-bottom d-flex justify-content-center align-items-center">
                        <span>GJ 002</span>
                    </div>
                    <div className="col-1 border-end border-bottom d-flex justify-content-center align-items-center">
                        <span>03-07-2023</span>
                    </div>
                    <div className="col-2 border-end border-bottom d-flex justify-content-center align-items-center">
                        <span>Medion Ardhika Bhakti</span>
                    </div>
                    <div className="col-2 border-end border-bottom d-flex justify-content-center align-items-center">
                        <span><Button className="btnModal">Form PO</Button></span>
                    </div>
                    <div className="col-2 border-end border-bottom d-flex justify-content-center align-items-center">
                        <span><Button className="btnModal">Form Desain</Button></span>
                    </div>
                    <div className="col-2 border-end border-bottom d-flex justify-content-center align-items-center">
                        <span><strong>Aksi</strong></span>
                    </div>
                    <div className="col-1 border-end border-bottom d-flex justify-content-center align-items-center">
                        <span><strong>Pembuat</strong></span>
                    </div>
                </div>

            
            </div>
        </div>
    );
}

export default OnProgress;
