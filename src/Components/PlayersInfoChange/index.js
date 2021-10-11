import React from "react";
import TeamCard from "../TeamCard/card";
import { useParams } from "react-router";
import { CHANGE_INFO, REMOVE_PLAYER } from "../../Constants/index";
import { useCardState, useDataDispach } from "../ContextProvider";

import "./style.css";

const PlayerChange = () => {
  const state = useCardState();
  const dispatch = useDataDispach();
  const { id } = useParams();
  let { teamID } = useParams();
  const choosedState = state.find((item) => item.id == teamID);
  const chooshedTeam = choosedState.team;
  const choosedPlayer = chooshedTeam.find((item) => item.id == id);

  const handleRemove = (teamId) => {
    dispatch({ type: REMOVE_PLAYER, teamId, teamID });
  };
  return (
    <div className="single_player">
      <TeamCard
        data={choosedPlayer}
        modalName="Edit Player Information"
        type={CHANGE_INFO}
        handleRemove={handleRemove}
        forOnePlayer={true}
        classRemove="removeForOnePlayer"
        classEdit="erditForONePlayer"
      />
    </div>
  );
};

export default PlayerChange;
