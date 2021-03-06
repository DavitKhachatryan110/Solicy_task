import React, { useState } from "react";
import { Button } from "reactstrap";
import PureModal from "./PureModal";

import "./styles.css";

const ModalFootball = ({
  modalName,
  className,
  color,
  data,
  index,
  type,
  indexOfPlayer,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
 
  return (
    <div className="addButton">
      <Button outline color={color} onClick={toggle} className={className}>
        {modalName}
      </Button>
      <PureModal
        modalName={modalName}
        isOpen={isOpen}
        toggle={toggle}
        data={data}
        index={index}
        type={type}
        indexOfPlayer={indexOfPlayer}
      />
    </div>
  );
};

export default ModalFootball;
