import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import PlayersForm from "../../FormForPlayers";
import HookForm from "../../HookForm";

import "../styles.css";

const PureModal = ({
  isOpen,
  toggle,
  modalName,
  data,
  index,
  type,
  indexOfPlayer,
}) => {
  const externalCloseBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  ); 

  return (
    <Modal isOpen={isOpen} toggle={toggle} external={externalCloseBtn}>
      <ModalHeader>{modalName}</ModalHeader>
      <ModalBody>
        {modalName == "Add Team" || modalName == "Edit" ? (
          <HookForm
            modalName={modalName}
            dataCard={data}
            index={index}
            type={type}
          />
        ) : (
          <PlayersForm
            modalName={modalName}
            dataCard={data}
            index={index}
            type={type}
            indexOfPlayer={indexOfPlayer}
          />
        )}
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
