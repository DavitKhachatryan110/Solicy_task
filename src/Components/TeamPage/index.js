import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import ModalFootball from "../Modal";
import TeamCard from "../TeamCard/card";
import { ADD_PLAYER, CHANGE_INFO,REMOVE_PLAYER } from "../../Constants/index";
import { useCardState ,useDataDispach} from "../ContextProvider";

import "./style.css"

const TeamPage = () => {
  const state = useCardState();
  const dispatch = useDataDispach();
  // const [data, setData] = useState([]);
  const infoFromCard = useLocation();
  const data = infoFromCard.state.team;
  console.log(data, "vvvvvvvvvvvvvvvvvvvvv");
  const index = infoFromCard.index;
  const [players, setPlayers] = useState([]);

  const handleRemove = (indexOfPlayer) => {
    dispatch({ type: REMOVE_PLAYER, indexOfPlayer ,index });
  };

  useEffect(() => {
    setPlayers(data);
    console.log(players, "uuuuuuuuuuuuuuuuuuuuu");
  }, [state]);
  return (
    <div >
      <ModalFootball
        modalName={"Add Player"}
        color="success"
        index={index}
        type={ADD_PLAYER}
      />
      <div className="players_page">
        {players.map((item, i) => {
        return  <TeamCard
            data={item}
            indexOfPlayer={i}
            index={index}
            modalName="Edit Player Info"
            type={CHANGE_INFO}
            handleRemove={handleRemove}
          />;
        })}
      </div> 
    </div>
  );
};
export default TeamPage;
//index={index} type={type}     data, handleRemove, index, modalName, type
