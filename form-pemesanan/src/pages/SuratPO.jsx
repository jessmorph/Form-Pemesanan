import React from "react";
import { useState } from 'react';
import { Button, Table } from "react-bootstrap";
import "../assets/styles/Invoice_style.css"
import Navbar from "../components/Navbar_Com";



function SuratPO() {

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
                    <h1 className="text-center">Purchase Order</h1>
                </div>
                <div className="row mt-2">
                    <div className="col-1"></div>
                    <div className="col-5 text-center my-auto p-3">
                        <div className="row pb-2 ">
                            <label className="col-3 ps-5">Our Ref</label>
                            <label className="col-auto">:</label>

                            <input className="col-6" type="text" disabled value="Konveksi Gundjaja Abadi" />
                        </div>
                        <div className="row pb-2">
                            <label className="col-3 ps-5">Telepon</label>
                            <label className="col-auto">:</label>

                            <input className="col-6" type="text" disabled value="08112229919" />
                        </div>
                        <div className="row pb-2">
                            <label className="col-3 ps-5">Kota</label>
                            <label className="col-auto">:</label>

                            <input className="col-6" type="text" disabled value="Bandung" />
                        </div>
                        <div className="row pb-2">
                            <label className="col-3 ps-5">Alamat</label>
                            <label className="col-auto">:</label>

                            <textarea className="form-control-sm col-6"
                                name=""
                                id=""
                                cols="12"
                                rows="5"
                                placeholder="Masukan keterangan"
                            // value={sk}
                            // onChange={handleSKChange}
                            />
                        </div>
                        <div className="row pb-2">
                            <label className="col-3 ps-5">Tanggal</label>
                            <label className="col-auto">:</label>

                            <input className="col-6" type="text" disabled value="01/01/2023" />
                        </div>
                    </div>

                    <div className="col-5 text-center my-auto p-3">
                        <div className="row pb-2 ">
                            <label className="col-3 ps-5">Kepada</label>
                            <label className="col-auto">:</label>

                            <input className="col-6" type="text" disabled value="Medion Ardhika Bhakti" />
                        </div>
                        <div className="row pb-2">
                            <label className="col-3 ps-5">Telepon</label>
                            <label className="col-auto">:</label>

                            <input className="col-6" type="text" disabled value="08112229919" />
                        </div>
                        <div className="row pb-2">
                            <label className="col-3 ps-5">Kota</label>
                            <label className="col-auto">:</label>

                            <input className="col-6" type="text" disabled value="Bandung" />
                        </div>
                        <div className="row pb-2">
                            <label className="col-3 ps-5">Alamat</label>
                            <label className="col-auto">:</label>

                            <textarea className="form-control-sm col-6"
                                name=""
                                id=""
                                cols="12"
                                rows="5"
                                placeholder="Masukan keterangan"
                            // value={sk}
                            // onChange={handleSKChange}
                            />
                        </div>
                        <div className="row pb-2">
                            <label className="col-3 ps-5">Dikirim</label>
                            <label className="col-auto">:</label>

                            <input className="col-6" type="text" disabled value="01/01/2023" />
                        </div>
                    </div>

                </div>

                <div className="row mt-3">
                    <div className="col-1"></div>
                    <div className="col-1 border-top border-start border-bottom text-center">
                        <label><strong>No.</strong></label>
                    </div>
                    <div className="col-4 border-top border-start border-bottom text-center">
                        <label><strong>Deskripsi</strong></label>
                    </div>
                    <div className="col-1 border-top border-start border-bottom text-center">
                        <label><strong>Qty</strong></label>
                    </div>
                    <div className="col-2 border-top border-start border-bottom text-center">
                        <label><strong>Harga/pcs</strong></label>
                    </div>
                    <div className="col-2 border text-center">
                        <label><strong>Total</strong></label>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-1"></div>
                    <div className="col-1 border-start text-center ">
                        <label></label>
                    </div>
                    <div className="col-1 border-start border-bottom text-center d-flex align-items-center justify-content-center">
                        <label><strong>Model</strong></label>
                    </div>
                    <div className="col-3 border-start border-bottom text-center d-flex align-items-center justify-content-center">
                        <label>model yang pernah dimiliki sebelumnya</label>
                    </div>
                    <div className="col-1 border-start text-center">
                        <label></label>
                    </div>
                    <div className="col-2 border-start text-center">
                        <label></label>
                    </div>
                    <div className="col-2 border-start border-end text-center">
                        <label><strong></strong></label>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-1"></div>
                    <div className="col-1 border-start text-center">
                        <label></label>
                    </div>
                    <div className="col-1 border-start border-bottom text-center d-flex align-items-center justify-content-center">
                        <label><strong>Bahan</strong></label>
                    </div>
                    <div className="col-3 border-start border-bottom text-center d-flex align-items-center justify-content-center">
                        <label>Toyobo Fodu Premium Quality</label>
                    </div>
                    <div className="col-1 border-start text-center">
                        <label><strong></strong></label>
                    </div>
                    <div className="col-2  border-start  text-center">
                        <label><strong></strong></label>
                    </div>
                    <div className="col-2 border-start border-end text-center">
                        <label><strong></strong></label>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-1"></div>
                    <div className="col-1 border-start text-center">
                        <label></label>
                    </div>
                    <div className="col-1 border-start border-bottom text-center d-flex align-items-center justify-content-center">
                        <label><strong>Nama</strong></label>
                    </div>
                    <div className="col-3 border-start border-bottom text-center d-flex align-items-center justify-content-center">
                        <label>Nama yang sama seperti sebelumnya</label>
                    </div>
                    <div className="col-1 border-start text-center">
                        <label><strong></strong></label>
                    </div>
                    <div className="col-2  border-start  text-center">
                        <label><strong></strong></label>
                    </div>
                    <div className="col-2 border-start border-end text-center">
                        <label><strong></strong></label>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-1"></div>
                    <div className="col-1 border-start border-bottom text-center pt-5">
                        <label>1</label>
                    </div>
                    <div className="col-1 border-start border-bottom d-flex align-items-center justify-content-center">
                        <label><strong>Size</strong></label>
                    </div>
                    <div className="col-3 border-start border-bottom text-center my-auto p-1">
                        <div className="row pb-2 pt-2">
                            <label className="col-3 ps-3"> XXS </label>
                            <label className="col-auto">:</label>

                            <input className="col-6" type="text" disabled value="GJT2020" />
                        </div>
                        <div className="row pb-2">
                            <label className="col-3 ps-3"> XS </label>
                            <label className="col-auto">:</label>

                            <input className="col-6" type="text" disabled value="01/01/2022" />
                        </div>
                        <div className="row pb-2">
                            <label className="col-3 ps-3">S</label>
                            <label className="col-auto">:</label>

                            <input className="col-6" type="text" disabled value="Medion Ardhika Bhakti" />
                        </div>
                        <div className="row pb-2">
                            <label className="col-3 ps-3"> M </label>
                            <label className="col-auto">:</label>

                            <input className="col-6" type="text" disabled value="01/01/2022" />
                        </div>
                        <div className="row pb-2">
                            <label className="col-3 ps-3">L</label>
                            <label className="col-auto">:</label>

                            <input className="col-6" type="text" disabled value="Medion Ardhika Bhakti" />
                        </div>
                        <div className="row pb-2 ">
                            <label className="col-3 ps-3"> XL </label>
                            <label className="col-auto">:</label>

                            <input className="col-6" type="text" disabled value="GJT2020" />
                        </div>
                        <div className="row pb-2">
                            <label className="col-3 ps-3"> XXL </label>
                            <label className="col-auto">:</label>

                            <input className="col-6" type="text" disabled value="01/01/2022" />
                        </div>
                        <div className="row pb-2">
                            <label className="col-3 ps-3">XXXL</label>
                            <label className="col-auto">:</label>

                            <input className="col-6" type="text" disabled value="Medion Ardhika Bhakti" />
                        </div>
                        <div className="row pb-2">
                            <label className="col-3 ps-3">XXXXL</label>
                            <label className="col-auto">:</label>

                            <input className="col-6" type="text" disabled value="01/01/2022" />
                        </div>
                    </div>
                    <div className="col-1 border-start border-bottom text-center pt-5">
                        <label>3140</label>
                    </div>
                    <div className="col-2 border-start border-bottom text-center pt-5">
                        <label>Rp.150.000,00</label>
                    </div>
                    <div className="col-2 border-start border-bottom border-end text-center pt-5">
                        <label>Rp.511.500.000,00</label>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-1"></div>
                    <div className="col-7 border-start border-top border-bottom text-center d-flex align-items-center justify-content-center">
                        <label><strong>Total</strong></label>
                    </div>
                    <div className="col-3 border text-center d-flex align-items-center justify-content-center">
                        <label>Rp.511.500.000,00</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-7 border-start border-bottom text-center d-flex align-items-center justify-content-center">
                        <label><strong>DP</strong></label>
                    </div>
                    <div className="col-3 border-start border-bottom border-end text-center d-flex align-items-center justify-content-center">
                        <label>Rp.511.500.000,00</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-7 border-start border-bottom text-center d-flex align-items-center justify-content-center">
                        <label><strong>Grand Total</strong></label>
                    </div>
                    <div className="col-3 border-start border-bottom border-end text-center d-flex align-items-center justify-content-center">
                        <label>Rp.511.500.000,00</label>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-3"></div>
                    <div className="col-6 border">
                        <span>DESAIN 1</span> <br />
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

                <div className="row  pt-2 pb-2">
                    <div className="col-1"></div>
                    <div className="col-10 mb-4">
                        <span><strong>Syarat dan Ketentuan</strong></span>
                        <textarea className="form-control form-control-sm"
                            name=""
                            id=""
                            cols="13"
                            rows="5"
                            placeholder="Masukan keterangan"
                        //   value={sk}
                        //   onChange={handleSKChange}
                        />
                    </div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-2 pt-3 border-start border-bottom border-top">
                        <div className="row text-center">
                            <p><strong>TANDA TANGAN PEMESAN</strong></p>
                        </div>
                        <div className="row text-center d-flex align-self-end">
                            <p></p>
                        </div>
                        <div className="row text-center d-flex align-self-end">
                            <p></p>
                        </div>
                        <div className="row text-center d-flex align-self-end">
                            <p></p>
                        </div>
                        <div className="row text-center d-flex align-self-end">
                            <p></p>
                        </div>
                        <div className="row text-center d-flex align-self-end">
                            <p></p>
                        </div>
                        <div className="row text-center d-flex align-self-end">
                            <p><strong>(.............................)</strong></p>
                        </div>
                    </div>
                    <div className="col-4 border-start border-end border-top text-center d-flex justify-content-center align-items-center pt-3 ">
                        <div className="row">
                            <p className=" my-auto mb-3 ">
                                <strong>
                                    Setuju dengan lembar ini tidak akan terjadi perubahan, jika ada maka harus
                                    dengan persetujuan 2 belah pihak
                                </strong>
                            </p>
                            <p className=" my-auto border-bottom border-top pt-4 pb-4">
                                <strong>
                                Apabila barang tidak diambil dalam waktu 30 hari, maka resiko rusak, hilang bukan tanggung jawab kami
                                </strong>
                            </p>
                        </div>


                    </div>
                    
                    <div className="col-2 pt-3 border-end border-bottom border-top">
                        <div className="row text-center">
                            <p><strong>TANDA TANGAN PEMESAN</strong></p>
                        </div>
                        <div className="row text-center d-flex align-self-end">
                            <p></p>
                        </div>
                        <div className="row text-center d-flex align-self-end">
                            <p></p>
                        </div>
                        <div className="row text-center d-flex align-self-end">
                            <p></p>
                        </div>
                        <div className="row text-center d-flex align-self-end">
                            <p></p>
                        </div>
                        <div className="row text-center d-flex align-self-end">
                            <p></p>
                        </div>
                        <div className="row text-center d-flex align-self-end">
                            <p><strong>(.............................)</strong></p>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
export default SuratPO;