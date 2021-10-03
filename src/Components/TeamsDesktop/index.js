import React, { useState, useEffect } from "react";
import ModalFootball from "../Modal";
import TeamCard from "../TeamCard/card";
import { useCardState, useDataDispach } from "../ContextProvider";

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
console.log(data,'deeeeeeeeedeeeeeeeeeeeedeeeeee')
  return (
    <div>
      <div>
        <ModalFootball modalName="Add Team" />
      </div>
      <div className="cart_section">
        {data.map((item, index) => (
          <TeamCard data={item} index={index} handleRemove={handleRemove} />
        ))}
      </div>
    </div>
  );
};

export default Desktop;
