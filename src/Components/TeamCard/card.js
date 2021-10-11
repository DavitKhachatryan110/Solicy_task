import React from "react";
import { Card, Button } from "reactstrap";
import TeamCardBody from "../TeamCardBody";
import ModalFootball from "../Modal";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

import "./style.css";

const TeamCard = ({
  handleRemove,
  modalName,
  type,
  data,
  classRemove,
  classEdit,
  teampage
}) => {
  const titels = Object.keys(data);
  const { teamID} = useParams();

  return (
    <div className="card">
      <Card className="card_style">
        <Button
          outline
          color="danger"
          onClick={() => handleRemove(data.id)}
          className={classRemove}
        >
          Remove
        </Button>
        <ModalFootball
        
          color="warning"
          className={classEdit}
          modalName={modalName}
          data={data}
          type={type}
        />
        <TeamCardBody data={data} titels={titels} />
        {modalName == "Edit" ? (
          <Link
            to={`/teams/${data.id}`}
          >
            <Button outline color="success">
              Go Team
            </Button>
          </Link>
        ) : (
          ""
        )}
        {modalName == "Edit Player Info" ? (
          <Link to={`/teams/${teamID}/player/${data.id}`}>
            <Button outline color="success">
              Player Info
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
