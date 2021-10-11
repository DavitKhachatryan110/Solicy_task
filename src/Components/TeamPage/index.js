import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ModalFootball from "../Modal";
import TeamCard from "../TeamCard/card";
import { ADD_PLAYER, CHANGE_INFO, REMOVE_PLAYER } from "../../Constants/index";
import { useCardState, useDataDispach } from "../ContextProvider";

import "./style.css";

const TeamPage = () => {
  const state = useCardState();
  const dispatch = useDataDispach();
  const { teamID } = useParams();
  const [players, setPlayers] = useState([]);

  const handleRemove = (teamId) => {
    dispatch({ type: REMOVE_PLAYER, teamId, teamID });
  };

  useEffect(() => {
    const info = state.find((item) => item.id == teamID);
    setPlayers(info.team);
  }, [state]);
  return (
    <div>
      <ModalFootball
        modalName={"Add Player"}
        color="success"
        type={ADD_PLAYER}
      />
      <div className="players_page">
        {players &&
          players.map((item, i) => {
            return (
              <TeamCard
                classEdit="editButton"
                classRemove="remove"
                data={item}
                indexOfPlayer={i}
                modalName="Edit Player Info"
                type={CHANGE_INFO}
                handleRemove={handleRemove}
              />
            );
          })}
      </div>
    </div>
  );
};
export default TeamPage;
