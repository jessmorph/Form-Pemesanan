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
    );
}
export default AddForm;