import React from "react";
import { CardBody, CardTitle } from "reactstrap";

import "./style.css";

const TeamCardBody = ({ data, titels }) => {
  return (
    <CardBody className="card_body">
      {titels.map((item, i) => {
        return item !== "team" && item !== "id" ? (
          <CardTitle tag="h5" className="text" key={i}>
            {item}: {data[item]}
          </CardTitle>
        ) : (
          ""
        );
      })}
    </CardBody>
  );
};

export default TeamCardBody;
