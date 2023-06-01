import React from "react";

import Modal from "react-bootstrap/Modal";

function Button() {
  return (
    <>
      <Modal>
        <Modal.Header closeButton>
          <Modal.Title>Online Access Configuration</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default Button;
