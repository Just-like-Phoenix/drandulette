import React from "react";

import "./AnnoncmentUser.scss";
import Stack from "react-bootstrap/esm/Stack";
import Card from "react-bootstrap/esm/Card";
import { Dropdown, DropdownButton } from "react-bootstrap";
import verificated from "../assets/img/done.svg";

export interface IAnnoncmentUserProps {
  pic: string | undefined;
  name: string;
  phone: string;
  verificated: number;
}
const AnnoncmentUserComponent: React.FunctionComponent<IAnnoncmentUserProps> = (
  props
) => {
  const tmp: string = props.pic as string;
  return (
    <Stack className="annoncmentUserStack" direction="horizontal" gap={0}>
      <Stack gap={0} direction="horizontal" style={{ width: "70%", margin: 0 }}>
        <Card.Img className="annoncmentUserPic" src={tmp}></Card.Img>
        <Card.Text className="annoncmentUserName">{props.name}</Card.Text>
        {props.verificated === 1 ? (
          <Card.Img
            src={verificated}
            style={{
              width: 24,
              height: 24,
            }}
          />
        ) : (
          <></>
        )}
      </Stack>
      <hr className="divLine" />
      <DropdownButton
        className="annoncmentUserTitle"
        variant="black"
        title={"Позвонить"}
      >
        <Dropdown.Header>Номер телефона</Dropdown.Header>
        <Dropdown.ItemText>{props.phone}</Dropdown.ItemText>
      </DropdownButton>
    </Stack>
  );
};

export default AnnoncmentUserComponent;
