import React from "react";

import "./SpecificTopicComment.scss";
import Card from "react-bootstrap/esm/Card";
import Stack from "react-bootstrap/esm/Stack";

export interface ISpecificTopicCommentProps {
  name: string;
  message: string;
  time: string;
  img: string;
}
const SpecificTopicCommentComponent: React.FunctionComponent<
  ISpecificTopicCommentProps
> = (props) => {
  return (
    <Card className="commentCard">
      <Stack className="commentProfile" gap={0} direction="horizontal">
        <Card.Img className="commentProfilePic" src={props.img}></Card.Img>
        <Stack gap={0} direction="vertical">
          <Card.Text className="commentProfileName">{props.name}</Card.Text>
          <Card.Text className="specTopicProfileTimeStamp">
            {props.time}
          </Card.Text>
        </Stack>
      </Stack>
      <Card.Text className="commentText">{props.message}</Card.Text>
    </Card>
  );
};

export default SpecificTopicCommentComponent;
