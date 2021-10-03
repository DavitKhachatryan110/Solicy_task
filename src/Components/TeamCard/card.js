import React from "react";
import { Card, Button } from "reactstrap";
import TeamCardBody from "../TeamCardBody";
import ModalFootball from "../Modal";

import "./style.css";

const TeamCard = ({ data, handleRemove, index }) => {

  const titels = ["country", "name", "liga", "age"];
  const addprop = () =>{
    data.arr = []
    console.log(data ,'33333333333333333333333333333333333')
  }
console.log(data,'llllllllllllllllllll')
  return (
    <div className="card">
      <Card className='card_style'>
        <Button outline color="danger" onClick={() => handleRemove(index)} className='remove'>
          Remove
        </Button>
        <ModalFootball
          color="warning"
          className="editButton"
          modalName="Edit"
          data={data}
          index={index}
        />
        <TeamCardBody data={data} titels={titels} />
        <Button outline color="success" onClick={addprop}>
          Go Team
        </Button>
      </Card>
    </div>
  );
};
export default TeamCard;
