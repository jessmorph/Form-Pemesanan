import React, { useState } from "react";
import { Button, Modal, Form, Table } from "react-bootstrap";
import Navbar from "../templates/Navbar_Com";
import "../styles/Form_style.css";
import "../styles/Default_style.css";

//modal form

function AddForm(props) {
  const [bahan, setBahan] = useState('');
  const [warna, setWarna] = useState("");
  const [model, setModel] = useState("");
  const [nama, setNama] = useState("");
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
  const [error, setError] = useState('');




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



  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    setBahan("");
    setWarna("");
    setModel("");
    setNama("");
    setXxs("");
    setXs("");
    setS("");
    setM("");
    setL("");
    setXl("");
    setXxl("");
    setXxxl("");
    setXxxxl("");
    setHargapcs("");
    setTotalQty("");
    setKeterangan("");

    props.onAddProduk({ bahan, warna, model, nama, xxs, xs, s, m, l, xl, xxl, xxxl, xxxxl, hargapcs, totalQty, keterangan });
    props.onHide();

  };

  return (
    <Modal className="tambah_produk d-flex align-items-center ms-5" show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Tambah Produk</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formRoleName">
            <div className="row align-items-center">
              <div className="col-2">
                <Form.Label className="col-2">Bahan</Form.Label>
              </div>
              <div className="col-5">
                <Form.Control
                  type="text"
                  placeholder="Enter Bahan"
                  value={bahan}
                  required
                  onChange={handleBahanChange}
                />
              </div>
            </div>

          </Form.Group>
          <Form.Group className="mb-3" controlId="formRolePassword">
            <div className="row align-items-center">
              <div className="col-2">
                <Form.Label className="col-4">Warna</Form.Label>
              </div>
              <div className="col-5">
                <Form.Control
                  type="text"
                  placeholder="Enter Warna"
                  value={warna}
                  required
                  onChange={handleWarnaChange}
                />
              </div>
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formRolePassword">
            <div className="row align-items-center">
              <div className="col-2">
                <Form.Label className="col-4">Model</Form.Label>
              </div>
              <div className="col-5">
                <Form.Control
                  type="text"
                  placeholder="Enter Model"
                  value={model}
                  required
                  onChange={handleModelChange}
                />
              </div>
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formRolePassword">
            <div className="row align-items-center">
              <div className="col-2">
                <Form.Label className="col-4">Nama</Form.Label>
              </div>
              <div className="col-5">
                <Form.Control
                  type="text"
                  placeholder="Enter Nama"
                  value={nama}
                  required
                  onChange={handleNamaChange}
                />
              </div>
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formRolePassword">
            <div className="row align-items-center">
              <div className="col-2">
                <Form.Label className="col-4">XXS</Form.Label>
              </div>
              <div className="col-3">
                <Form.Control
                  type="number"
                  placeholder=""
                  value={xxs}
                  required
                  onChange={handleXxsChange}
                />
              </div>
              <div className="col-2">
                <Form.Label className="col-4">XL</Form.Label>
              </div>
              <div className="col-3">
                <Form.Control
                  type="number"
                  placeholder=""
                  value={xl}
                  required
                  onChange={handleXlChange}
                />
              </div>
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formRolePassword">
            <div className="row align-items-center">
              <div className="col-2">
                <Form.Label className="col-4">XS</Form.Label>
              </div>
              <div className="col-3">
                <Form.Control
                  type="number"
                  placeholder=""
                  value={xs}
                  required
                  onChange={handleXsChange}
                />
              </div>
              <div className="col-2">
                <Form.Label className="col-4">XXL</Form.Label>
              </div>
              <div className="col-3">
                <Form.Control
                  type="number"
                  placeholder=""
                  value={xxl}
                  required
                  onChange={handleXxlChange}
                />
              </div>
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formRolePassword">
            <div className="row align-items-center">
              <div className="col-2">
                <Form.Label className="col-4">S</Form.Label>
              </div>
              <div className="col-3">
                <Form.Control
                  type="number"
                  placeholder=""
                  value={s}
                  required
                  onChange={handleSChange}
                />
              </div>
              <div className="col-2">
                <Form.Label className="col-4">XXXL</Form.Label>
              </div>
              <div className="col-3">
                <Form.Control
                  type="number"
                  placeholder=""
                  value={xxxl}
                  required
                  onChange={handleXxxlChange}
                />
              </div>
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formRolePassword">
            <div className="row  align-items-center">
              <div className="col-2">
                <Form.Label className="col-4">M</Form.Label>
              </div>
              <div className="col-3">
                <Form.Control
                  type="number"
                  placeholder=""
                  value={m}
                  required
                  onChange={handleMChange}
                />
              </div>
              <div className="col-2">
                <Form.Label className="col-4">XXXXL</Form.Label>
              </div>
              <div className="col-3">
                <Form.Control
                  type="number"
                  placeholder=""
                  value={xxxxl}
                  required
                  onChange={handleXxxxlChange}
                />
              </div>
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formRolePassword">
            <div className="row align-items-center">
              <div className="col-2">
                <Form.Label className="col-4">L</Form.Label>
              </div>
              <div className="col-3">
                <Form.Control
                  type="number"
                  placeholder=""
                  value={l}
                  required
                  onChange={handleLChange}
                />
              </div>
              <div className="col-2">
                <Form.Label className="col-4">Gambar</Form.Label>
              </div>
              <div className="col-3">
                <Form.Control
                  type="number"
                  placeholder=""
                  value={hargapcs}

                // onChange={handleStartSizeChange}
                />
              </div>
              <div className="col-1 p-0">
                <Button className="p-1 m-0 browse_btn">
                  Browse
                </Button>

              </div>
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formRolePassword">
            <div className="row align-items-center">
              <div className="col-2">
                <Form.Label className="col-2">Total</Form.Label>
              </div>
              <div className="col-4">
                <Form.Control
                  type="number"
                  placeholder=""
                  value={parseInt(xxs) + parseInt(xs) + parseInt(s) + parseInt(m) + parseInt(l) + parseInt(xl) + parseInt(xxl) + parseInt(xxxl) + parseInt(xxxxl)}
                  disabled
                  onChange={handleTotalQtyChange}
                />
              </div>
              <div className="col-2">
                <Form.Label className="col-4">Harga/pcs</Form.Label>
              </div>
              <div className="col-4">
                <Form.Control
                  type="text"
                  placeholder="Rp."
                  value={hargapcs}
                  required
                  onChange={handleHargaPcsChange}
                />
              </div>

            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formRoleName">
            <Form.Label>Keterangan</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Masukan keterangan"
              value={keterangan}
              required
              onChange={handleKeteranganChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

// //modal size
function AddSize(props) {
  const [startSize, setStartSize] = useState('');
  const [endSize, setEndSize] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Handle Start size input change
  const handleStartSizeChange = (event) => {
    setStartSize(event.target.value);
  };

  // Handle End size input change
  const handleEndSizeChange = (event) => {
    setEndSize(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setStartSize("");
    setEndSize("");
    props.onAddSize({ startSize, endSize });
    props.onHide();

  };

  return (
    <Modal show={props.show} onHide={props.onHide} className="d-flex justify-content-center align-items-center ms-5">
      <Modal.Header closeButton>
        <Modal.Title>Size</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formRoleName">
            <Form.Label>Size Terkecil</Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukan Size"
              value={startSize}
              required
              onChange={handleStartSizeChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formRolePassword">
            <Form.Label>Size Terbesar</Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukan Size"
              value={endSize}
              required
              onChange={handleEndSizeChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={() => setShowModal(true)}>
            Buat Form
          </Button>
          <AddForm
            show={showModal}
            onHide={() => setShowModal(false)}
          // onAddSize={handleAddSize}
          />
        </Form>
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

  return (
    <>
      <div>
        <Navbar />
        <Form onSubmit={handleSubmit}>
          <div className="d-flex mx-auto flex-column mt-5 mb-5 " >
            <div className="">
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

              {/* button */}
              <div className="rowMain border-top border-start border-end pb-4 pt-4">
                <Button className="btn roundBtn" onClick={() => setShowModal(true)} >
                  +
                </Button>
                {/* <AddSize
                      show={showModal}
                      onHide={() => setShowModal(false)}
                      // onAddSize={handleAddSize}
                    /> */}
                <AddForm
                  show={showModal}
                  onHide={() => setShowModal(false)}
                // onAddSize={handleAddSize}
                />
              </div>
              <div className="border-bottom border-start row rowMain">
                <div className="col-6 ">

                </div>
                <div className="col-6 border m-0">
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
                      Setuju dengan lembar ini tidak akan terjadi perubahan, jika ada maka harus
                      dengan persetujuan 2 belah pihak
                      </strong>
                    </p>
                </div>
                <div className="col-2 d-flex justify-content-center align-items-center border-end">
                    <Button >
                      Submit
                    </Button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </>
  )
}
export default InputForm;