import React, { useState, useEffect } from "react";
import ModalFootball from "../Modal";
import TeamCard from "../TeamCard/card";
import { useCardState, useDataDispach } from "../ContextProvider";
import { REMOVE_PLAYER } from "../../Constants";

import "./styles.css";

const Desktop = () => {
  const dispatch = useDataDispach();

  const state = useCardState();
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(state);
  }, [state]);

  const handleRemove = (index) => {
    dispatch({ type: "REMOVE", index });
  };

  return (
    <div>
      <div>
        <ModalFootball modalName="Add Team" />
      </div>
      <div className="cart_section">
        {data.map((item, index) => (
          <TeamCard
            data={item}
            index={index}
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
