import React from "react";
import { useState } from 'react';
import { Button, Modal } from "react-bootstrap";
import "../../styles/Invoice_style.css"


function SizeCheck(){
    
    const [showModal, setShowModal] = useState(false);

    const handleSave = () => {
        // Do something when the "Save Changes" button is clicked
        setShowModal(false); // Close the modal
      }

    return(
        <>
            <div className="mx-auto m-5">
                <div className="row">
                    <h1>LOGO</h1>
                    <h1 className="text-center">Invoice</h1>
                </div>
                <div className=" mt-4 ">
                    <div className="row pb-2">
                        <label className=" col-2 keterangan"> No. Invoice: </label> <input className="col-3" type="text" disabled value="GJT2020" />
                    </div>
                    <div className="row pb-2">
                        <label className=" col-2 keterangan"> Tanggal: </label> <input className="col-3" type="text" disabled value="01/01/2022" />
                    </div>
                    <div className="row">
                    <p className="ml-4 !important mb-4">This text will be aligned to the right.</p>

                        <label className="col-2 keterangan">Kepada: </label> <input className="col-3" type="text" disabled value="Medion Ardhika Bhakti" />
                    </div>
                    
                
                </div>
                
            </div>

        </>
    )
}
export default SizeCheck;