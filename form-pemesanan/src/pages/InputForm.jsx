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


            <div class="d-flex mx-auto flex-column mt-5 bgContent" >
                <div class="row rowMain border p-0">
                        <div class="col-11 text-center my-auto"><h2>Lembar Kerja Konveksi Gundjaja Abadi</h2></div>
                        <div class="col-1 p-0">
                            <div class="row-1 text-center my-auto border"><strong>No. Order</strong></div>
                            <div class="row-1 text-center my-auto border">
                                <input class="form-control form-control-sm text-center bg-transparent border-none" type="text" placeholder="GJXXX"/>
                            </div>
                            <div class="row-1 text-center my-auto border"><strong>Tgl Delivery</strong></div>
                            <div class="row-1 text-center my-auto border">
                                <input class="form-control form-control-sm text-center bg-transparent border-none" type="text" placeholder="dd-mm-yyyy"/>
                            </div>
                        </div>
                </div>
                <div class="row rowMain border  "> 
                    {/* row awal */}
                    <div class="col-6 border-end ">
                        {/* col awal */}
                        <div class="row pt-1">
                            <div class="col-2 text-center my-auto"><h6>Tgl Pesan</h6></div>
                            <div class="col-auto my-auto "><h5>:</h5></div>
                            <div class="col-3 my-auto ">
                                <input class="form-control form-control-sm text-center border-none" type="text" placeholder="dd-mm-yyyy"/>
                            </div>

                            <div class="col-2 text-center my-auto"><h6>No Telepon</h6></div>
                            <div class="col-auto my-auto "><h5>:</h5></div>
                            <div class="col-auto my-auto ">
                                <input class="form-control form-control-sm text-center border-none" type="text" placeholder=""/>
                            </div>            
                        </div>

                        <div className="row mt-3">
                            <div class="col-2 text-center my-auto"><h6>Pemesan</h6></div>
                            <div class="col-auto my-auto "><h5>:</h5></div>
                            <div class="col-5 my-auto ">
                                <input class="form-control form-control-sm text-center border-none" type="text" placeholder="Enter Name"/>
                            </div>  
                        </div>
                    </div>

                    <div class="col-6 border-start-0">
                        {/* col ke-2 */}
                        <div class="row pt-1">
                            <div class="col-2 text-center my-auto"><h6>Kota</h6></div>
                            <div class="col-auto my-auto "><h5>:</h5></div>
                            <div class="col-3 my-auto mt-1">
                                <input class="form-control form-control-sm text-center border-none" type="text" placeholder="Enter Kota"/>
                            </div>  

                            <div class="col-2 text-center my-auto"><h6>Provinsi</h6></div>
                            <div class="col-auto my-auto "><h5>:</h5></div>
                            <div class="col-3 my-auto mt-1">
                                <input class="form-control form-control-sm text-center border-none" type="text" placeholder="Enter Provinsi"/>
                            </div> 
                        </div>
                        <div class="row pt-1 mb-2">
                            <div class="col-2 text-center my-auto"><h6>Alamat</h6></div>
                            <div class="col-auto my-auto "><h5>:</h5></div>
                            <div class="col-9 my-auto mt-1">
                                <textarea class="form-control form-control-sm" name="" id="" cols="15" rows="2"></textarea>
                            </div>  
                        </div>
                    </div>
                </div>

                {/* button */}
                <div className="plusBtn mt-4 mb-4">
                    <Button className="btn roundBtn" > + </Button>
                </div>

            </div>
        </div>
        </>
    )
}
export default InputForm;