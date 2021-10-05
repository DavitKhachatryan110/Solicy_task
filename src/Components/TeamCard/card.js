import React from "react";
import { Card, Button } from "reactstrap";
import TeamCardBody from "../TeamCardBody";
import ModalFootball from "../Modal";
import { Link } from "react-router-dom";

import "./style.css";

const TeamCard = ({
  data,
  handleRemove,
  index,
  modalName,
  type,
  indexOfPlayer,
}) => {
  const titels = Object.keys(data);
// let rr = indexOfPlayer ? indexOfPlayer : index ;

if(indexOfPlayer == undefined){
  indexOfPlayer = index
}
  return (
    <div className="card">
      <Card className="card_style">
        <Button
          outline
          color="danger"
          
          onClick={() => handleRemove(indexOfPlayer)}
          className="remove"
        >
          Remove
        </Button>
        <ModalFootball
          color="warning"
          className="editButton"
          modalName={modalName}
          data={data}
          index={index}
          type={type}
          indexOfPlayer={indexOfPlayer}
        />
        <TeamCardBody data={data} titels={titels} />
        {modalName == "Edit" ? (
          <Link
            to={{
              pathname: "/players",
              state: data,
              index: index,
              type: "ADDPLAYER",
            }}
          >
            <Button outline color="success">
              Go Team
            </Button>
          </Link>
        ) : (
          ""
        )}
      </Card>
    </div>
  );
};

export default TeamCard;
