import React, { useState } from 'react';
import { Button, Modal} from "react-bootstrap";
import Navbar from "../components/Navbar_Com";
import InputForm from "../pages/InputForm";
import AddForm from "../components/AddForm";

import "../assets/styles/Default_style.css";
import "../assets/styles/PendingForm_style.css";

function CheckPending(props) {

  return (
    <Modal className="pendProduk d-flex align-items-center ms-5" show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Tambah Produk</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputForm />
      </Modal.Body>
    </Modal>
  );
}

function PendingForm(props) {
  const [showModal, setShowModal] = useState(false);



  return (
    <>

      <div className="row rowMain border-top border-start border-end pb-4 pt-4 ">
        <Button className="modalBtn roundBtn d-flex justify-content-center " onClick={() => setShowModal(true)} >
          Show Modal 1
        </Button>
        {/* <AddSize
                      show={showModal}
                      onHide={() => setShowModal(false)}
                      // onAddSize={handleAddSize}
                    /> */}
        <CheckPending
          show={showModal}
          onHide={() => setShowModal(false)}
        // onAddSize={handleAddSize}
        />
      </div>
    </>
  );
}
export default PendingForm;