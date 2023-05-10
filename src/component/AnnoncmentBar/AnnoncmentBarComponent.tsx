import React from "react";

import "./AnnoncmentBar.scss";
import Card from "react-bootstrap/esm/Card";
import Stack from "react-bootstrap/esm/Stack";
import Button from "react-bootstrap/esm/Button";

export interface IAnnoncmentBarProps {
  brand: string;
  model: string;
  year: string;
  price: string;
}
const AnnoncmentBarComponent: React.FunctionComponent<IAnnoncmentBarProps> = (
  props
) => {
  return (
    <Stack direction="horizontal" className="annoncmentBar">
      <Card.Title style={{ width: "62.5%" }} className="annoncmentTitle">
        {props.brand + " " + props.model + ", " + props.year}
      </Card.Title>
      <hr className="divLine" />
      <Button style={{ width: "18.75%" }}>{"Добавить в избронное"}</Button>
      <hr className="divLine" />
      <Card.Title style={{ width: "18.75%" }} className="annoncmentTitle">
        {props.price + " BYN"}
      </Card.Title>
    </Stack>
  );
};

export default AnnoncmentBarComponent;
