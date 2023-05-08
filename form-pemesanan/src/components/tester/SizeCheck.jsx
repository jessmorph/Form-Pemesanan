import React from "react";
import { useState } from 'react';
import { Button, Modal } from "react-bootstrap";

function Invoice(){
    const [showModal, setShowModal] = useState(false);

    const handleSave = () => {
        // Do something when the "Save Changes" button is clicked
        setShowModal(false); // Close the modal
      }

    return(
        <>
            <Button onClick={() => setShowModal(true)}>Open Modal</Button>
                <Modal show={showModal} onHide={() => setShowModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title class="pt-5 pb-4">Tambah Produk</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleSave}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

        </>
    )
}
export default Invoice;