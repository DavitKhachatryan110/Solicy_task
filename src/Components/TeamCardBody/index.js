import React from "react";
import { CardBody, CardTitle } from "reactstrap";

import './style.css'

const TeamCardBody = ({ data, titels }) => {
  console.log(data ,'tttttttttteeeeeeeeeeeeeeeeaaaaam')
  return (
    <CardBody className='card_body'>
      {titels.map((item ,i) => {
        console.log(item, ';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;')
        return (
          <CardTitle tag="h5" key={i}>
            {item}---{data[item]}
          </CardTitle>
        );
      })}
    </CardBody>
  );
};

export default TeamCardBody;
