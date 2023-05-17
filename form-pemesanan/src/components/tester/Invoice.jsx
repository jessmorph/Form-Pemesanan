import React from "react";
import { useState } from 'react';
import { Button, Table } from "react-bootstrap";
import "../../styles/Invoice_style.css"
import Navbar from "../../templates/Navbar_Com";



function Invoice() {

    const [showModal, setShowModal] = useState(false);

    const handleSave = () => {
        // Do something when the "Save Changes" button is clicked
        setShowModal(false); // Close the modal
    }

    return (
        <>
            <Navbar />
            <div className="row border rowMain mt-5">
                <div className="row">
                    <h1>LOGO</h1>
                    <h1 className="text-center">Invoice</h1>
                </div>
                <div className=" mt-4 ">
                    <div className="row pb-2">
                        <label className="col-2 ps-5"> No. Invoice </label>
                        <label className="col-auto">:</label>

                        <input className="col-2" type="text" disabled value="GJT2020" />
                    </div>
                    <div className="row pb-2">
                        <label className="col-2 ps-5"> Tanggal </label>
                        <label className="col-auto">:</label>

                        <input className="col-2" type="text" disabled value="01/01/2022" />
                    </div>
                    <div className="row pb-2">
                        <label className="col-2 ps-5">Kepada</label>
                        <label className="col-auto">:</label>

                        <input className="col-2" type="text" disabled value="Medion Ardhika Bhakti" />
                    </div>



                </div>
                <Table striped bordered hover className="mx-auto mt-3">
                    <thead>
                        <tr className="text-center">
                            <th>No.</th>
                            <th>Nama</th>
                            <th>Quantity</th>
                            <th>Harga/pcs</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Scrub | Toyobo Fodu | Hijau Olive</td>
                            <td>3140</td>
                            <td>Rp. 150.000,00</td>
                            <td>Rp. 511.500.000</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Kaos krag lengan panjang | Toyobo Fodu | Hijau Olive</td>
                            <td>3140</td>
                            <td>Rp. 70.000,00</td>
                            <td>Rp. 365.650.000,00</td>
                        </tr>
                    </tbody>
                </Table>
                <div className="row pb-2">
                    <div className="col-6"></div>
                    <label className="col-2 ">DP </label>
                    <label className="col-auto">:</label>

                    <input className="col-2 text-center" type="text" disabled value="-Rp. 438.575.000,00" />
                </div>
                <div className="row pb-2">
                    <div className="col-6"></div>
                    <label className="col-2 "> Grand Total </label>
                    <label className="col-auto">:</label>

                    <input className="col-2 text-center" type="text" disabled value="Rp. 438.575.000" />
                </div>
            </div>

        </>
    )
}
export default Invoice;