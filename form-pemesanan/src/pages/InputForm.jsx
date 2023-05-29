import React, { useState } from "react";
import { Button, Modal, Form, Table } from "react-bootstrap";
import Navbar from "../templates/Navbar_Com";
import AddForm from "../components/AddForm";
import "../styles/Form_style.css";
import "../styles/Default_style.css";

//modal form

function NewForm(props) {

  return (
    <Modal className="tambah_produk d-flex align-items-center ms-5" show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Tambah Produk</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddForm/>
      </Modal.Body>
    </Modal>
  );
}

//hasil form
function InputForm() {
  const [showModal, setShowModal] = useState(false);
  const [noOrder, setOrder] = useState("");
  const [tglDeliv, setTglDeliv] = useState("");
  const [tglPesan, setTglPesan] = useState("");
  const [noTelp, setNoTelp] = useState("");
  const [pemesan, setPemesan] = useState("");
  const [kota, setKota] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [alamat, setAlamat] = useState("");
  const [dp, setDp] = useState("");
  const [keteranganTambahan, setKeteranganTambahan] = useState("");
  const [sk, setSK] = useState("");
  const [idBarang, setIdBarang] = useState(1);
  const [bahan, setBahan] = useState("Toyobo Fodu Premium Quality aaaaa");
  const [warna, setWarna] = useState("Merah Maroon tua");
  const [model, setModel] = useState("Kaos krag lengan panjang");
  const [nama, setNama] = useState("Tambak udang prop");
  const [xxs, setXxs] = useState(0);
  const [xs, setXs] = useState(0);
  const [s, setS] = useState(0);
  const [m, setM] = useState(0);
  const [l, setL] = useState(0);
  const [xl, setXl] = useState(0);
  const [xxl, setXxl] = useState(0);
  const [xxxl, setXxxl] = useState(0);
  const [xxxxl, setXxxxl] = useState(0);
  const [totalQty, setTotalQty] = useState("");
  const [hargapcs, setHargapcs] = useState("Rp. ");
  const [keterangan, setKeterangan] = useState("");
  const [totalHarga, setTotalHarga] = useState("");
  const [image, setImage] = useState("");

  // Handle Order input change
  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  };

  // Handle Order input change
  const handleTglDelivChange = (event) => {
    setTglDeliv(event.target.value);
  };

  // Handle Order input change
  const handleTglPesanChange = (event) => {
    setTglPesan(event.target.value);
  };

  // Handle Order input change
  const handleNoTelpChange = (event) => {
    setNoTelp(event.target.value);
  };

  // Handle Order input change
  const handlePemesanChange = (event) => {
    setPemesan(event.target.value);
  };

  // Handle Order input change
  const handleKotaChange = (event) => {
    setKota(event.target.value);
  };

  // Handle Order input change
  const handleProvinsiChange = (event) => {
    setProvinsi(event.target.value);
  };

  // Handle Order input change
  const handleAlamatChange = (event) => {
    setAlamat(event.target.value);
  };

  // Handle Order input change
  const handleDpChange = (event) => {
    setDp(event.target.value);
  };

  // Handle Order input change
  const handleKeteranganTambahanChange = (event) => {
    setKeteranganTambahan(event.target.value);
  };

  // Handle Order input change
  const handleIdBarangChange = (event) => {
    setIdBarang(event.target.value);
  };

  // Handle bahan input change
  const handleBahanChange = (event) => {
    setBahan(event.target.value);
  };

  // Handle warna input change
  const handleWarnaChange = (event) => {
    setWarna(event.target.value);
  };
  // Handle model input change
  const handleModelChange = (event) => {
    setModel(event.target.value);
  };

  // Handle nama input change
  const handleNamaChange = (event) => {
    setNama(event.target.value);
  };

  // Handle xxs input change
  const handleXxsChange = (event) => {
    setXxs(event.target.value);
  };

  // Handle xs input change
  const handleXsChange = (event) => {
    setXs(event.target.value);
  };

  // Handle s input change
  const handleSChange = (event) => {
    setS(event.target.value);
  };

  // Handle m input change
  const handleMChange = (event) => {
    setM(event.target.value);
  };

  // Handle l input change
  const handleLChange = (event) => {
    setL(event.target.value);
  };

  // Handle xl input change
  const handleXlChange = (event) => {
    setXl(event.target.value);
  };

  // Handle xxl input change
  const handleXxlChange = (event) => {
    setXxl(event.target.value);
  };

  // Handle xxxl input change
  const handleXxxlChange = (event) => {
    setXxxl(event.target.value);
  };

  // Handle xxxxl input change
  const handleXxxxlChange = (event) => {
    setXxxxl(event.target.value);
  };

  // Handle total quantity input change
  const handleTotalQtyChange = (event) => {
    setTotalQty(event.target.value);
  };

  // Handle harga per pcs input change
  const handleHargaPcsChange = (event) => {
    setHargapcs(event.target.value);
  };

  // Handle keterangan input change
  const handleKeteranganChange = (event) => {
    setKeterangan(event.target.value);
  };

  // Handle Order input change
  const handleTotalHargaChange = (event) => {
    setTotalHarga(event.target.value);
  };

  // Handle SK input change
  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  // Handle SK input change
  const handleSKChange = (event) => {
    setSK(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setStartSize("");
    // setEndSize("");
    // props.onAddSize({ startSize, endSize});
    // props.onHide();

  };

  const handlePending = (event) => {
    event.preventDefault();
    // setStartSize("");
    // setEndSize("");
    // props.onAddSize({ startSize, endSize});
    // props.onHide();

  };


  return (
    <>
      
        <Form  onSubmit={handleSubmit}>
              <div className="row border rowMain">
                <div className="col-1"></div>
                <div className="col-10 text-center my-auto"><h2>Lembar Kerja Konveksi Gundjaja Abadi</h2></div>
                <div className="col-1">
                  <div className="row text-center my-auto border-start border-bottom"><strong><small>No. Order</small></strong></div>
                  <div className="row text-center my-auto border-start ">
                    <Form.Control className=" form-control-sm text-center border-0"
                      type="text"
                      placeholder="GJXXX"
                      value={noOrder}
                      onChange={handleOrderChange}
                    />
                  </div>
                  <div className="row text-center my-auto border-start border-top border-bottom"><strong><small>Tgl Delivery</small></strong></div>
                  <div className="row text-center my-auto border-start ">
                    <Form.Control className=" form-control-sm text-center border-0"
                      type="date"
                      placeholder="dd-mm-yyyy"
                      value={tglDeliv}
                      onChange={handleTglDelivChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row rowMain border-start border-end border-bottom  ">
                {/* row awal */}
                <div className="col-6 border-end ">
                  {/* col awal */}
                  <div className="row pt-1">
                    <div className="col-2 text-center my-auto"><h6>Tgl Pesan</h6></div>
                    <div className="col-auto my-auto "><h5>:</h5></div>
                    <div className="col-3 my-auto ">
                      <Form.Control className=" form-control-sm text-center border-0"
                        type="date"
                        placeholder="dd-mm-yyyy"
                        value={tglPesan}
                        onChange={handleTglPesanChange}
                      />
                    </div>

                    <div className="col-2 text-center my-auto"><h6>No Telepon</h6></div>
                    <div className="col-auto my-auto "><h5>:</h5></div>
                    <div className="col-auto my-auto ">
                      <Form.Control className=" form-control-sm text-center border-0"
                        type="number"
                        placeholder="081xxxxxxxx"
                        value={noTelp}
                        onChange={handleNoTelpChange}
                      />
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-2 text-center my-auto"><h6>Pemesan</h6></div>
                    <div className="col-auto my-auto "><h5>:</h5></div>
                    <div className="col-5 my-auto ">
                      <Form.Control className=" form-control-sm text-center border-0"
                        type="text"
                        placeholder="Masukan nama"
                        value={pemesan}
                        onChange={handlePemesanChange}
                      />
                    </div>

                  </div>
                </div>

                <div className="col-6 border-start-0">
                  {/* col ke-2 */}
                  <div className="row pt-1">
                    <div className="col-2 text-center my-auto"><h6>Kota</h6></div>
                    <div className="col-auto my-auto "><h5>:</h5></div>
                    <div className="col-3 my-auto mt-1">
                      <Form.Control className=" form-control-sm text-center border-0"
                        type="text"
                        placeholder="Masukan kota"
                        value={kota}
                        onChange={handleKotaChange}
                      />
                    </div>

                    <div className="col-2 text-center my-auto"><h6>Provinsi</h6></div>
                    <div className="col-auto my-auto "><h5>:</h5></div>
                    <div className="col-3 my-auto mt-1">
                      <Form.Control className=" form-control-sm text-center border-0"
                        type="text"
                        placeholder="Masukan provinsi"
                        value={provinsi}
                        onChange={handleProvinsiChange}
                      />
                    </div>
                  </div>
                  <div className="row pt-1 mb-2">
                    <div className="col-2 text-center my-auto"><h6>Alamat</h6></div>
                    <div className="col-auto my-auto "><h5>:</h5></div>
                    <div className="col-9 my-auto mt-1">
                      <textarea className="form-control form-control-sm"
                        name=""
                        id=""
                        cols="15"
                        rows="2"
                        placeholder="Masukan alamat"
                        value={alamat}
                        onChange={handleAlamatChange}
                      />
                    </div>
                  </div>
                </div>
              </div>


              {/* <Table striped bordered hover className="mx-auto">
                <thead>
                  <tr className="text-center">
                    <th>ID</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th colSpan="2">Aksi</th>

                  </tr>
                </thead>
                <tbody>
                  {roles.map((role) => (
                    <tr className="text-center" key={role.id}>
                      <td>{role.id}</td>
                      <td>{role.username}</td>
                      <td>{role.role}</td>
                      <td><Button>edit</Button></td>
                      <td><Button>dlet</Button></td>
                    </tr>
                  ))}
                </tbody>
              </Table> */}

              <div className="row rowMain text-center mt-3">
                                  <div className="col-1 border "><strong>No.</strong></div>
                  <div className="col-2 border"><strong>Bahan</strong></div>
                  <div className="col-2 border"><strong>Warna</strong></div>
                  <div className="col-2 border"><strong>Model</strong></div>
                  <div className="col-2 border"><strong>Nama</strong></div>
                  <div className="col-2 border"><strong>Harga/pcs</strong></div>
                  <div className="col-1 border"><strong>Total Qty</strong></div>

                <div className="row p-0 mb-3 me-0 ms-0">
                  <div className="col-1 border-bottom border-start d-flex justify-content-center align-items-center">
                    <div className="p-0 m-0 ">
                      <Form.Control className="form-control-sm text-center border-0 bg-transparent p-0 m-0"
                        type="text"
                        value={idBarang}
                        onChange={handleIdBarangChange}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-2 border-bottom border-start d-flex justify-content-center align-items-center text-center ">

                    <Form.Control className="form-control form-control-sm  border-0 bg-transparent p-0 m-0 text-wrap "

                      value={bahan}
                      onChange={handleBahanChange}
                      disabled
                    />

                  </div>
                  <div className="col-2 border-bottom text-wrap border-start d-flex justify-content-center align-items-center">
                    <div className="col-12 p-0 m-0 text-center ">
                      <Form.Control className="form-control form-control-sm text-center border-0 bg-transparent p-0 m-0 "
                        type="text"
                        value={warna}
                        onChange={handleWarnaChange}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-2 border-bottom text-wrap border-start d-flex justify-content-center align-items-center">
                    <div className="col-12 p-0 m-0 text-center ">
                      <Form.Control className="form-control form-control-sm text-center border-0 bg-transparent p-0 m-0 "
                        type="text"
                        value={model}
                        onChange={handleModelChange}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-2 border-bottom text-wrap border-start d-flex justify-content-center align-items-center">
                    <div className="col-12 p-0 m-0 text-center ">
                      <Form.Control className="form-control form-control-sm text-center border-0 bg-transparent p-0 m-0 "
                        type="text"
                        value={nama}
                        onChange={handleNamaChange}
                        disabled

                      />
                    </div>
                  </div>
                  <div className="col-2 border-bottom text-wrap border-start d-flex justify-content-center align-items-center">
                    <div className="col-12 p-0 m-0 text-center ">
                      <Form.Control className="form-control form-control-sm text-center border-0 bg-transparent p-0 m-0 "
                        type="text"
                        value={hargapcs}
                        onChange={handleHargaPcsChange}
                        disabled
 
                      />
                    </div>
                  </div>
                  <div className="col-1 border-bottom text-wrap border-start d-flex justify-content-center align-items-center">
                    <div className="col-12 p-0 m-0 text-center ">
                      <Form.Control className="form-control form-control-sm text-center border-0 bg-transparent p-0 m-0 "
                        type="text"
                        value={totalQty}
                        onChange={handleTotalQtyChange}
                        disabled

                      />
                    </div>
                  </div>

                  <div className="col-1 border d-flex align-items-center justify-content-center"><strong>Size</strong></div>

                  <div className="col-2 border-bottom">
                    <div className="row text-center my-auto ">
                      <div className="col-5 pe-0 d-flex justify-content-center align-items-center p-0 m-0">
                        <span><small> XXS</small></span>
                      </div>
                      <div className="col-1 d-flex justify-content-center align-items-center p-0 m-0">
                        <span>:</span>
                      </div>
                      <div className="col-5 p-0 m-0">
                        <Form.Control className="form-control-sm text-center border-0 bg-transparent p-0 m-0"
                          type="text"
                          value={xxs}
                          onChange={handleXxsChange}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row text-center my-auto  ">
                      <div className="col-5 pe-0 d-flex justify-content-center align-items-center p-0 m-0">
                        <span><small> XS</small></span>
                      </div>
                      <div className="col-1 d-flex justify-content-center align-items-center p-0 m-0">
                        <span>:</span>
                      </div>
                      <div className="col-5 p-0 m-0">
                        <Form.Control className="form-control-sm text-center border-0 bg-transparent p-0 m-0"
                          type="text"
                          value={xs}
                          onChange={handleXsChange}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row text-center my-auto  ">
                      <div className="col-5 pe-0 d-flex justify-content-center align-items-center p-0 m-0">
                        <span><small> S</small></span>
                      </div>
                      <div className="col-1 d-flex justify-content-center align-items-center p-0 m-0">
                        <span>:</span>
                      </div>
                      <div className="col-5 p-0 m-0">
                        <Form.Control className="form-control-sm text-center border-0 bg-transparent p-0 m-0"
                          type="text"
                          value={s}
                          onChange={handleSChange}
                          disabled
                        />
                      </div>
                    </div>

                  </div>
                  <div className="col-2 border-start border-bottom">
                    <div className="row text-center my-auto  ">
                      <div className="col-5 pe-0 d-flex justify-content-center align-items-center p-0 m-0">
                        <span><small> M</small></span>
                      </div>
                      <div className="col-1 d-flex justify-content-center align-items-center p-0 m-0">
                        <span>:</span>
                      </div>
                      <div className="col-5 p-0 m-0">
                        <Form.Control className="form-control-sm text-center border-0 bg-transparent p-0 m-0"
                          type="text"
                          value={m}
                          onChange={handleMChange}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row text-center my-auto ">
                      <div className="col-5 pe-0 d-flex justify-content-center align-items-center p-0 m-0">
                        <span><small> L</small></span>
                      </div>
                      <div className="col-1 d-flex justify-content-center align-items-center p-0 m-0">
                        <span>:</span>
                      </div>
                      <div className="col-5 p-0 m-0">
                        <Form.Control className="form-control-sm text-center border-0 bg-transparent p-0 m-0"
                          type="text"
                          value={l}
                          onChange={handleLChange}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row text-center my-auto">
                      <div className="col-5 pe-0 d-flex justify-content-center align-items-center p-0 m-0">
                        <span><small> XL</small></span>
                      </div>
                      <div className="col-1 d-flex justify-content-center align-items-center p-0 m-0">
                        <span>:</span>
                      </div>
                      <div className="col-5 p-0 m-0">
                        <Form.Control className="form-control-sm text-center border-0 bg-transparent p-0 m-0"
                          type="text"
                          value={xl}
                          onChange={handleXlChange}
                          disabled
                        />
                      </div>
                    </div>

                  </div>
                  <div className="col-2 border-bottom border-start">
                    <div className="row text-center my-auto ">
                      <div className="col-5 pe-0 d-flex justify-content-center align-items-center p-0 m-0">
                        <span><small> XXL</small></span>
                      </div>
                      <div className="col-1 d-flex justify-content-center align-items-center p-0 m-0">
                        <span>:</span>
                      </div>
                      <div className="col-5 p-0 m-0">
                        <Form.Control className="form-control-sm text-center border-0 bg-transparent p-0 m-0"
                          type="text"
                          value={xxl}
                          onChange={handleXxlChange}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row text-center my-auto  ">
                      <div className="col-5 pe-0 d-flex justify-content-center align-items-center p-0 m-0">
                        <span><small>XXXL</small></span>
                      </div>
                      <div className="col-1 d-flex justify-content-center align-items-center p-0 m-0">
                        <span>:</span>
                      </div>
                      <div className="col-5 p-0 m-0">
                        <Form.Control className="form-control-sm text-center border-0 bg-transparent p-0 m-0"
                          type="text"
                          value={xxxl}
                          onChange={handleXxxlChange}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row text-center my-auto  ">
                      <div className="col-5 pe-0 d-flex justify-content-center align-items-center p-0 m-0">
                        <span><small> XXXXL</small></span>
                      </div>
                      <div className="col-1 d-flex justify-content-center align-items-center p-0 m-0">
                        <span>:</span>
                      </div>
                      <div className="col-5 p-0 m-0">
                        <Form.Control className="form-control-sm text-center border-0 bg-transparent p-0 m-0"
                          type="text"
                          value={xxxxl}
                          onChange={handleXxxxlChange}
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-3 border-bottom border-start">
                    <div className="row text-center my-auto  ">
                      <div className="col-12 d-flex justify-content-center align-items-center border-bottom">
                        <span><strong>Keterangan</strong></span>
                      </div>
                    </div>
                    <div className="row pt-1 mb-2">
                      <div className="col-12 my-auto mt-1">
                        <textarea className="form-control form-control-sm"
                          name=""
                          id=""
                          cols="15"
                          rows="2"
                          placeholder="Masukan alamat"
                          value={keterangan}
                          onChange={handleKeteranganChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-2 border-bottom border-start">
                    <div className="row text-center my-auto  ">
                      <div className="col-12 d-flex justify-content-center align-items-center border-bottom">
                        <span><strong>Total Harga</strong></span>
                      </div>
                    </div>
                    <div className="row pt-1 mb-2">
                      <div className="col-12 d-flex justify-content-center align-items-center">
                        <Form.Control className="form-control-sm text-center border-0 bg-transparent p-0 m-0"
                          type="text"
                          value={"Rp. 500.000.000,00"}
                          onChange={handleTotalHargaChange}
                          disabled
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-5 border-start border-bottom border-end">
                    <div className="row text-center my-auto  ">
                      <div className="col-12 p-0 m-0 ">
                        <Form.Control className="form-control-sm text-center border-0 bg-transparent p-0 m-0"
                          type="text"
                          value={"IMAGE"}
                          onChange={handleImageChange}
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-3 ">

                  </div>
                  <div className="col-2 border-start border-bottom border-end">
                    <Button>EDIT</Button>
                  </div>
                  <div className="col-2 border-start border-bottom border-end">
                    <Button>DELETE</Button>
                  </div>
                </div>
              </div>


              {/* button */}
              <div className="row rowMain border-top border-start border-end pb-4 pt-4 ">
                <Button className="modalBtn roundBtn d-flex justify-content-center " onClick={() => setShowModal(true)} >
                  +
                </Button>
                {/* <AddSize
                      show={showModal}
                      onHide={() => setShowModal(false)}
                      // onAddSize={handleAddSize}
                    /> */}
                <NewForm
                  show={showModal}
                  onHide={() => setShowModal(false)}
                // onAddSize={handleAddSize}
                />
              </div>
              <div className="border-bottom border-start row rowMain">
                <div className="col-6 ">
                </div>
                <div className="col-6 border">
                  <div className="row border-bottom">
                    <div className="col-4 border-end d-flex align-items-center justify-content-center">
                      <span><strong>Total Quantity</strong></span>
                    </div>
                    <div className="col-4 border-end d-flex align-items-center justify-content-center">
                      <span className=""><strong>Harga Total</strong></span>
                    </div>
                    <div className="col-4 d-flex align-items-center justify-content-center">
                      <span className=""><strong>DP</strong></span>
                      <Form.Control className=" form-control-sm dpForm text-center border-0 ms-1 me-1"
                        type="number"
                        placeholder="0"
                        value={dp}
                        onChange={handleDpChange}
                        required
                      />

                      <span>%</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4 border-end d-flex align-items-center">
                      <input type="text" className="custom-input text-center" value={0} disabled />
                    </div>
                    <div className="col-4 border-end d-flex align-items-center">
                      <input type="text" className="custom-input text-center" value={1} disabled />
                    </div>
                    <div className="col-4 d-flex align-items-center">
                      <input type="text" className="custom-input text-center" value={2} disabled />
                    </div>
                  </div>

                </div>
              </div>
              <div className="row rowMain border-end border-start pt-2 pb-2">
                <Form.Label><strong>Keterangan Tambahan</strong></Form.Label>
                <textarea className="form-control form-control-sm "
                  name=""
                  id=""
                  cols="13"
                  rows="4"
                  placeholder="Masukan keterangan"
                  value={keteranganTambahan}
                  onChange={handleKeteranganTambahanChange}
                />
              </div>
              <div className="row rowMain border-end border-start border-top pt-2 pb-2">
                <Form.Label><strong>Syarat dan Ketentuan</strong></Form.Label>
                <textarea className="form-control form-control-sm"
                  name=""
                  id=""
                  cols="13"
                  rows="5"
                  placeholder="Masukan keterangan"
                  value={sk}
                  onChange={handleSKChange}
                />
              </div>
              <div className="border-bottom border-start border-top row rowMain">
                <div className="col-2 d-flex justify-content-center align-items-center ">
                  <Button >
                    Pending
                  </Button>
                </div>
                <div className="col-4 border-start border-end text-center d-flex justify-content-center align-items-center pt-3 pb-3">
                  <p className="my-auto">
                    <strong>
                      Setuju dengan lembar ini tidak akan terjadi perubahan, jika ada maka harus
                      dengan persetujuan 2 belah pihak
                    </strong>
                  </p>
                </div>
                <div className="col-4 border-end text-center d-flex justify-content-center align-items-center pt-3 pb-3">
                  <p className="my-auto">
                    <strong>
                      Apabila barang tidak diambil dalam waktu 30 hari, maka resiko rusak, hilang bukan tanggung jawab kami
                    </strong>
                  </p>
                </div>
                <div className="col-2 d-flex justify-content-center align-items-center border-end">
                  <Button >
                    Submit
                  </Button>
                </div>
              </div>
        </Form>
    </>
  )
}
export default InputForm;