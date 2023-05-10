//Header for specific topic page

import React from "react";

import "./SpecificTopicHeader.scss";
import Card from "react-bootstrap/esm/Card";
import Stack from "react-bootstrap/esm/Stack";

export interface ISpecificTopicHeaderProps {
  img: string;
  topicName: string;
  topicTheme: string;
  topicText: string;
  topicTime: string;
}
const SpecificTopicHeaderHeaderComponent: React.FunctionComponent<
  ISpecificTopicHeaderProps
> = (props) => {
  return (
    <Card className="specTopicHeader">
      <Card.Title className="topicHeaderTitle">{props.topicTheme}</Card.Title>
      <Stack gap={0} direction="horizontal" className="topicProfile">
        <Card.Img className="topicProfilePic" src={props.img}></Card.Img>
        <Stack gap={0} direction="vertical">
          <Card.Text className="topicProfileName">{props.topicName}</Card.Text>
          <Card.Text className="topicProfileTimeStamp">
            {props.topicTime}
          </Card.Text>
        </Stack>
      </Stack>
      <Card.Text className="topicHeaderText">{props.topicText}</Card.Text>
    </Card>
  );
};

export default SpecificTopicHeaderHeaderComponent;
