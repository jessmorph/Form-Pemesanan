import React from "react";
import { Button } from "react-bootstrap";
import Navbar from "../templates/Navbar_Com";
import "../styles/Form_style.css";
import "../styles/Default_style.css";

function InputForm(){
    return(
        <>
        <div>
            <Navbar/>


            <div className="d-flex mx-auto flex-column mt-5 bgContent" >
                <div className="row rowMain border p-0">
                        <div className="col-11 text-center my-auto"><h2>Lembar Kerja Konveksi Gundjaja Abadi</h2></div>
                        <div className="col-1 p-0">
                            <div className="row-1 text-center my-auto border"><strong>No. Order</strong></div>
                            <div className="row-1 text-center my-auto border">
                                <input className="form-control form-control-sm text-center bg-transparent border-none" type="text" placeholder="GJXXX"/>
                            </div>
                            <div className="row-1 text-center my-auto border"><strong>Tgl Delivery</strong></div>
                            <div className="row-1 text-center my-auto border">
                                <input className="form-control form-control-sm text-center bg-transparent border-none" type="text" placeholder="dd-mm-yyyy"/>
                            </div>
                        </div>
                </div>
                <div className="row rowMain border border-bottom-0 "> 
                    {/* row awal */}
                    <div className="col-6 ">
                        {/* col awal */}
                        <div className="row border border-bottom-0 border-left-0 pt-1">
                            <div className="col-2 text-center my-auto"><h6>Tgl Pesan</h6></div>
                            <div className="col-auto my-auto "><h5>:</h5></div>
                            <div className="col-3 my-auto ">
                                <input className="form-control form-control-sm text-center border-none" type="text" placeholder="dd-mm-yyyy"/>
                            </div>

                            <div className="col-2 text-center my-auto"><h6>No Telepon</h6></div>
                            <div className="col-auto my-auto "><h5>:</h5></div>
                            <div className="col-auto my-auto ">
                                <input className="form-control form-control-sm text-center border-none" type="text" placeholder=""/>
                            </div>            
                        </div>

                        <div classNameName="row border border-top-0 pb-1">
                            <div className="col-2 text-center my-auto"><h6>Pemesan</h6></div>
                            <div className="col-auto my-auto "><h5>:</h5></div>
                            <div className="col-5 my-auto ">
                                <input className="form-control form-control-sm text-center border-none" type="text" placeholder="Enter Name"/>
                            </div>  
                        </div>

                        
                    </div>

                    <div className="col-6 border">
                        {/* col ke-2 */}
                        <div className="row border border-bottom-0 border-left-0 pt-1">
                            <div className="col-2 text-center my-auto"><h6>Alamat</h6></div>
                            <div className="col-auto my-auto "><h5>:</h5></div>
                            <div className="col-9 my-auto mt-1">
                                <textarea className="form-control form-control-sm" name="" id="" cols="15" rows="2"></textarea>
                            </div>  
                        </div>
                    </div>
                </div>

                {/* button */}
                <div classNameName="plusBtn mt-4 mb-4">
                    <Button classNameName="btn roundBtn" > + </Button>
                </div>

            </div>
        </div>
        </>
    )
}
export default InputForm;