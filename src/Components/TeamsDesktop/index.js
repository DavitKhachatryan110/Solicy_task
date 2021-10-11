import React, { useState, useEffect } from "react";
import ModalFootball from "../Modal";
import TeamCard from "../TeamCard/card";
import { useCardState, useDataDispach } from "../ContextProvider";
import { REMOVE_PLAYER } from "../../Constants";

import "./styles.css";

const Desktop = () => {
  const dispatch = useDataDispach();
  const state = useCardState();

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE", id});
  };

  return (
    <div>
      <div>
        <ModalFootball modalName="Add Team" />
      </div>
      <div className="cart_section">
        {state &&
          state.map((item, index) => (
            <TeamCard
              classRemove="remove"
              classEdit="editButton"
              data={item}
              teampage={true}
              handleRemove={handleRemove}
              modalName="Edit"
              type="CHANGE"
            />
          ))}
      </div>
    </div>
  );
};

export default Desktop;
