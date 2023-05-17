import React from "react";

import "./AnnoncmentBar.scss";
import Card from "react-bootstrap/esm/Card";
import Stack from "react-bootstrap/esm/Stack";
import { DropdownAnnoncmentAction } from "../ButtonComponent";

export interface IAnnoncmentBarProps {
  brand: string;
  model: string;
  year: string;
  price: string;
  annoncmentID: string;
  mailLogin: string;
}
const AnnoncmentBarComponent: React.FunctionComponent<IAnnoncmentBarProps> = (
  props
) => {
  const DropdownSelector = () => {
    if (localStorage.getItem("user_moderator") === "0") {
      if (localStorage.getItem("user_mailLogin") === props.mailLogin) {
        return (
          <DropdownAnnoncmentAction
            moderator={"0"}
            login={props.mailLogin}
            annoncmentID={props.annoncmentID}
          />
        );
      }
    } else {
      return (
        <DropdownAnnoncmentAction
          moderator={"1"}
          login={props.mailLogin}
          annoncmentID={props.annoncmentID}
        />
      );
    }
    return <></>;
  };

  return (
    <Stack direction="horizontal" className="annoncmentBar">
      <Card.Title
        style={{
          width: "70%",
          display: "flex",
          justifyContent: "start",
          margin: 0,
        }}
        className="annoncmentTitle"
      >
        {props.brand + " " + props.model + ", " + props.year}
      </Card.Title>
      <hr className="divLine" />
      <Card.Title
        style={{
          width: "30%",
          display: "flex",
          justifyContent: "end",
          margin: 0,
        }}
        className="annoncmentTitle"
      >
        {props.price + " BYN"}
        <DropdownSelector />
      </Card.Title>
    </Stack>
  );
};

export default AnnoncmentBarComponent;
