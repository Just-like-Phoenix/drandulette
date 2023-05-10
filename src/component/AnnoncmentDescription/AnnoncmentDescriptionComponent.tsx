import React from "react";

import "./AnnoncmentDescription.scss";
import Card from "react-bootstrap/esm/Card";
import Stack from "react-bootstrap/esm/Stack";

export interface IAnnoncmentDescriptionProps {
  text: string;
}
const AnnoncmentDescriptionComponent: React.FunctionComponent<
  IAnnoncmentDescriptionProps
> = (props) => {
  return (
    <Stack style={{ width: "50%" }} className="annoncmentDescription">
      <Card.Title
        style={{
          alignItems: "center",
          textAlign: "center",
          margin: 10,
        }}
      >
        Комментарий продавца
      </Card.Title>
      <hr className="horizontalDivLine" />
      <Card.Text>{props.text}</Card.Text>
    </Stack>
  );
};

export default AnnoncmentDescriptionComponent;
