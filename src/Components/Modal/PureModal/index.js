import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import HookForm from "../../HookForm";

import '../styles.css'

const PureModal = ({ isOpen, toggle, modalName ,data ,index }) => {
  const externalCloseBtn = (
    <button
      className="close"
      style={{ position: "absolute", top: "15px", right: "15px" }}
      onClick={toggle}
    >
      &times;
    </button>
  );
  return (
    <Modal isOpen={isOpen} toggle={toggle} external={externalCloseBtn}>
      <ModalHeader>{modalName}</ModalHeader>
      <ModalBody>
    <HookForm  modalName={modalName} dataCard={data} index={index}/>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default PureModal;
