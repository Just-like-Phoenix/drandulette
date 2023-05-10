import React from "react";

import "./AnnoncmentUser.scss";
import Stack from "react-bootstrap/esm/Stack";
import Card from "react-bootstrap/esm/Card";

export interface IAnnoncmentUserProps {
  pic: string | undefined;
  name: string;
}
const AnnoncmentUserComponent: React.FunctionComponent<IAnnoncmentUserProps> = (
  props
) => {
  const tmp: string = props.pic as string;
  return (
    <Stack className="annoncmentUserStack" direction="horizontal" gap={0}>
      <Stack
        gap={0}
        direction="horizontal"
        style={{ width: "140px", margin: "auto" }}
      >
        <Card.Img className="annoncmentUserPic" src={tmp}></Card.Img>
        <Card.Text className="annoncmentUserName">{props.name}</Card.Text>
      </Stack>
      <hr className="divLine" />
      <Card.Title
        className="annoncmentUserTitle"
        style={{ width: "23%", margin: "auto" }}
      >
        Позвонить
      </Card.Title>
      <hr className="divLine" />
      <Card.Title
        className="annoncmentUserTitle"
        style={{ width: "23%", margin: "auto" }}
      >
        Написать
      </Card.Title>
    </Stack>
  );
};

export default AnnoncmentUserComponent;
