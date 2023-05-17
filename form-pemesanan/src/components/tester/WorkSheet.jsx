import React from "react";
import { useState } from 'react';
import { Button, Table, Form } from "react-bootstrap";
import "../../styles/Invoice_style.css"
import Navbar from "../../templates/Navbar_Com";



function WorkSheet() {

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
                    <h1 className="text-center">Work Sheet</h1>
                    <div className="col-3"></div>
                    <div className="col-6 border">
                        <span>IMAGE</span> <br />
                        <span>IMAGE</span> <br />
                        <span>IMAGE</span> <br />
                        <span>IMAGE</span> <br />
                        <span>IMAGE</span> <br />
                        <span>IMAGE</span> <br />
                        <span>IMAGE</span> <br />
                        <span>IMAGE</span> <br />
                        <span>IMAGE</span> <br />
                        <span>IMAGE</span> <br />
                    </div>
                </div>




                <div className="row mt-2">
                    <div className="col-1"></div>
                    <div className="col-10 p-3">
                        <div className="row pt-2 pb-2">
                            <Form.Label><strong>Keterangan</strong></Form.Label>
                            <textarea className="form-control form-control-sm"
                                name=""
                                id=""
                                cols="13"
                                rows="5"
                                placeholder="Masukan keterangan"
                                //   value={sk}
                                //   onChange={handleSKChange}
                                disabled
                            />
                        </div>
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col-1"></div>
                    <div className="col-5 border-top border-start border-bottom text-center my-auto p-3">
                        <div className="row pb-2 ">
                            <label className="col-3 ps-5"> XXS </label>
                            <label className="col-auto">:</label>

                            <input className="col-6" type="text" disabled value="GJT2020" />
                        </div>
                        <div className="row pb-2">
                            <label className="col-3 ps-5"> XS </label>
                            <label className="col-auto">:</label>

                            <input className="col-6" type="text" disabled value="01/01/2022" />
                        </div>
                        <div className="row pb-2">
                            <label className="col-3 ps-5">S</label>
                            <label className="col-auto">:</label>

                            <input className="col-6" type="text" disabled value="Medion Ardhika Bhakti" />
                        </div>
                        <div className="row pb-2">
                            <label className="col-3 ps-5"> M </label>
                            <label className="col-auto">:</label>

                            <input className="col-6" type="text" disabled value="01/01/2022" />
                        </div>
                        <div className="row pb-2">
                            <label className="col-3 ps-5">L</label>
                            <label className="col-auto">:</label>

                            <input className="col-6" type="text" disabled value="Medion Ardhika Bhakti" />
                        </div>
                    </div>

                    <div className="col-5 border-top border-bottom border-end text-center my-auto p-3">
                        <div className="row pb-2 ">
                            <label className="col-3 ps-5"> XXS </label>
                            <label className="col-auto">:</label>

                            <input className="col-6" type="text" disabled value="GJT2020" />
                        </div>
                        <div className="row pb-2">
                            <label className="col-3 ps-5"> XS </label>
                            <label className="col-auto">:</label>

                            <input className="col-6" type="text" disabled value="01/01/2022" />
                        </div>
                        <div className="row pb-2">
                            <label className="col-3 ps-5">S</label>
                            <label className="col-auto">:</label>

                            <input className="col-6" type="text" disabled value="Medion Ardhika Bhakti" />
                        </div>
                        <div className="row pb-2">
                            <label className="col-3 ps-5"> M </label>
                            <label className="col-auto">:</label>

                            <input className="col-6" type="text" disabled value="01/01/2022" />
                        </div>
                        <div className="row pb-2">
                            <label className="col-3 ps-5">L</label>
                            <label className="col-auto">:</label>

                            <input className="col-6" type="text" disabled value="Medion Ardhika Bhakti" />
                        </div>
                    </div>
                </div>

                <div className="row pb-2 mt-4 mb-4">
                    <div className="col-6"></div>
                    <label className="col-2 ">Total Quantity </label>
                    <label className="col-auto">:</label>

                    <input className="col-2 text-center" type="text" disabled value="-Rp. 438.575.000,00" />
                </div>

            </div>

        </>
    )
}
export default WorkSheet;